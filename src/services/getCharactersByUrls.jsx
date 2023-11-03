const getCharactersByUrls = async (urls) => {
  try {
    const responses = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(
      responses.map((response) => response.json())
    );
    return data;
  } catch (error) {
    console.error(`Error fetching characters: `, error);
    return [];
  }
};

export default getCharactersByUrls;
