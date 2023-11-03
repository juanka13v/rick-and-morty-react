import styles from "./EpisodesPage.module.css";
import Grid from "../../Components/Grid/Grid";
import EpisodeFilter from "../../Components/Filters/EpisodeFilter//EpisodeFilter";
import { useState, useEffect } from "react";
import getEpisodeById from "../../services/getEpisodeById";
import getCharactersByUrls from "../../services/getCharactersByUrls";

const EpisodesPage = () => {
  const [episodeId, setEpisodeId] = useState(1);
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);

  const handleEpisode = (newEpisode) => {
    setEpisodeId(newEpisode);
  };

  const fetchEpisode = async (id) => {
    const data = await getEpisodeById(id);
    console.log(data);
    setEpisode(data);
    const charactersData = await getCharactersByUrls(data.characters);
    setCharacters(charactersData);
  };

  useEffect(() => {
    fetchEpisode(episodeId);
  }, [episodeId]);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.name}>
          Episode: <span>{episode?.name}</span>
        </h2>
        <p className={styles.episode}>{episode?.episode}</p>
        <p className={styles.date}>
          date air: <span>{episode?.air_date}</span>
        </p>
      </div>

      <EpisodeFilter episode={episodeId} handleEpisode={handleEpisode} />

      <Grid characters={characters} />
    </main>
  );
};

export default EpisodesPage;
