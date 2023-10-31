const getCharacters = async (filters = {}) => {
  const { name, gender, species, status, page } = filters;

  const url = new URL(`https://rickandmortyapi.com/api/character/`);

  if (name) url.searchParams.append("name", name);

  if (gender) url.searchParams.append("gender", gender);

  if (status) url.searchParams.append("status", status);

  if (species) url.searchParams.append("species", species);

  if (page) url.searchParams.append("page", page);

  const response = await fetch(url);

  if (!response.ok) {
    return [];
  }

  const data = await response.json();

  return data;
};

export default getCharacters;
