const base = 'https://pokeapi.co/api/v2';

export const apiFetch = async (endpoint) => {
    const res = await fetch(base + endpoint);
    return res.json();
};
