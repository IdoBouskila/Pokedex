import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import useTypes from '../useTypes';

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
    <QueryClientProvider client={ queryClient }>
        { children }
    </QueryClientProvider>
);

describe('useType', () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should return relevance pokemon types', async () => {
        // Arrange
        const mockTypes = {
            results: [
                {
                    name: 'normal',
                    url: 'test-url-1'
                },
                {
                    name: 'fighting',
                    url: 'test-url-2'
                },
                {
                    name: 'unknown',
                    url: 'test-url-3'
                },
                {
                    name: 'shadow',
                    url: 'test-url-4'
                }
            ]
        };

        fetch.mockResponse(async (req) => {
            if(req.url === 'https://pokeapi.co/api/v2/type') {
                return JSON.stringify(mockTypes);
            }

            Promise.reject({
                status: 404,
                message: 'not found'
            });
        });

        // Act
        const { result } = renderHook(() => useTypes(), { wrapper });
        
        // Assert
        await waitFor(() => expect(result.current).toStrictEqual([
            {
                name: 'normal',
                url: 'test-url-1'
            },
            {
                name: 'fighting',
                url: 'test-url-2'
            }
        ]));
    });
});
