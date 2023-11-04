const getCharacterById = async (id) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (response.status === 404) {
    return {
      error: true,
      message: `No character found with id: ${id}`,
    };
  }

  if (response.status === 500) {
    return {
      error: true,
      message: "Server error, please try again later",
    };
  }

  const data = await response.json();

  return data;
};

export default getCharacterById;
