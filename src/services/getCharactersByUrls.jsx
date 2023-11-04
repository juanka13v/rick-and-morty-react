const getCharactersByUrls = async (urls) => {
  const responses = await Promise.all(urls.map((url) => fetch(url)));
  const data = await Promise.all(responses.map((response) => response.json()));
  return data;
};

export default getCharactersByUrls;
