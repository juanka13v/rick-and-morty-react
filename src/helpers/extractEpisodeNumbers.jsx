function extractEpisodeNumbers(urls) {
  return urls.map((url) => {
    const match = url.match(/\/api\/episode\/(\d+)/);
    return match ? Number(match[1]) : null;
  });
}


export default extractEpisodeNumbers;
