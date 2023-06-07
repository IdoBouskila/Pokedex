import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import useEvolution from '../useEvolution';

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
    <QueryClientProvider client={ queryClient }>
        { children }
    </QueryClientProvider>
);

describe('useEvolution', () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetch.resetMocks();
    });

    it(`should return empty array if pokemon doesn't evolved`, async () => {
        // Arrange
        const pokemonSpeciesMock = {
            evolution_chain: {
                url: 'example.com'
            }
        };

        const evolutionChainMock = {
            chain: {
                evolves_to: [],
                species: {
                    name: 'example',
                    url: 'example.com'
                }
            },
        };

        fetch
        .once(JSON.stringify(pokemonSpeciesMock))
        .once(JSON.stringify(evolutionChainMock));

        // Act
        const { result } = renderHook(() => useEvolution(), { wrapper });
        
        // Assert
        await waitFor(() => expect(result.current).toHaveLength(0));
    });

    it('should return empty array if pokemon evolution fetch throw 404 error', async () => {
        // Arrange
        fetch.mockReject({ status: 404, statusText: 'Not Found' });

        // Act
        const { result } = renderHook(() => useEvolution(), { wrapper });

        // Assert
        await waitFor(() => expect(result.current).toHaveLength(0));
    });

    it('should return normalize evolution chain of pokemon', async () => {
        // Arrange
        const pokemonSpeciesMock = {
            evolution_chain: {
                url: 'example.com'
            }
        };

        
        const evolutionChainMock = {
            chain: {
                evolves_to: [
                    {
                        evolves_to: [
                            {
                                evolves_to: [],
                                species: {
                                    name: 'test-name-1',
                                    url: 'example.com/3/'
                                }
                            }
                        ],
                        species: {
                            name: 'test-name-2',
                            url: 'example.com/2/'
                        }
                    }
                ],
                species: {
                    name: 'test-name-3',
                    url: 'example.com/1/'
                }
            }
        };

        fetch
        .once(JSON.stringify(pokemonSpeciesMock))
        .once(JSON.stringify(evolutionChainMock));

        // Act
        const { result } = renderHook(() => useEvolution(), { wrapper });
        
        // Assert
        await waitFor(() => expect(result.current).toStrictEqual([
            {
                current: {
                    name: 'test-name-3',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
                },
                next: {
                    name: 'test-name-2',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'
                }
            },
            {
                current: {
                    name: 'test-name-2',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'
                },
                next: {
                    name: 'test-name-1',
                    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'
                }
            }
        ]));
    });
});
