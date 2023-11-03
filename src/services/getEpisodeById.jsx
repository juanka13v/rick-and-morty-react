const getEpisodeById = async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const data = await response.json();

  return data;
};

export default getEpisodeById;
