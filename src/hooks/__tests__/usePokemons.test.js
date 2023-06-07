import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import usePokemons from '../usePokemons';

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
    <QueryClientProvider client={ queryClient }>
        { children }
    </QueryClientProvider>
);

describe('usePokemons', () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetch.resetMocks();
    });

    it('should return all pokemons', async () => {
        // Arrange
        const pokemonListMock = {
            pokemon: [
                {
                    pokemon: {
                        name: 'test-name-1',
                        url: 'example.com'
                    }
                },
                {
                    pokemon: {
                        name: 'test-name-2',
                        url: 'example.com'
                    }
                }
            ]
        };

        const promisesValuesMock = [
            {
                id: 1,
                name: 'test-name-1',
                url: 'test-url-1',
                sprites: {
                    other: {
                        dream_world: { front_default: 'image-url-1.svg' },
                        'official-artwork': { front_default: 'image-url-1.png' }
                    }
                },
                weight: 1,
                height: 1,
                types: [{ type: { name: 'example' } }]
            },
            {
                id: 2,
                name: 'test-name-2',
                url: 'test-url-2',
                sprites: {
                    other: {
                        dream_world: { front_default: 'test-url-2.svg' }, 
                        'official-artwork': { front_default: 'test-url-2.png' }
                    }
                },
                weight: 2,
                height: 2,
                types: [{ type: { name: 'example' } }]
            }
        ];

        fetch
            .once(JSON.stringify(pokemonListMock))
            .mockResponses(...promisesValuesMock.map(promiseValue => JSON.stringify(promiseValue)))

        // Act
        const { result } = renderHook(() => usePokemons(), { wrapper });
        
        // Assert
        await waitFor(() => expect(result.current).toStrictEqual([
            {
                id: 1,
                name: 'test name 1',
                url: 'test-url-1',
                sprites: {
                    other: {
                        dream_world: { front_default: 'image-url-1.svg' },
                        'official-artwork': { front_default: 'image-url-1.png' }
                    }
                },
                weight: '0.1kg',
                height: '0.1m',
                types: [{ name: 'example' }],
                paddedId: '001',
                imgSrc: 'image-url-1.svg'
            },
            {
                id: 2,
                name: 'test name 2',
                url: 'test-url-2',
                sprites: {
                    other: {
                        dream_world: { front_default: 'test-url-2.svg' },
                        'official-artwork': { front_default: 'test-url-2.png' }
                    }
                },
                weight: '0.2kg',
                height: '0.2m',
                types: [{ name: 'example' }],
                paddedId: '002',
                imgSrc: 'test-url-2.svg'
            }
        ]));
    });
});
