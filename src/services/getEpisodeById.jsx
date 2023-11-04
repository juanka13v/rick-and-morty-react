const getEpisodeById = async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);

  if (response.status === 404) {
    return { error: true, message: `No found episode with Id: ${id}` };
  }

  if (response.status === 500) {
    return { error: true, message: `Server error, try again later` };
  }

  const data = await response.json();

  return data;
};

export default getEpisodeById;
