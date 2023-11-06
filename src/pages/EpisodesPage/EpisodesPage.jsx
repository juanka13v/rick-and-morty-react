import styles from "./EpisodesPage.module.css";
import { useState, useEffect } from "react";

import {
  Grid,
  EpisodeFilter,
  MetaTags,
  Loader,
  ErrorMessage,
} from "@components";

import { getCharactersByUrls, getEpisodeById } from "@services";

import { scrollToTop } from "@helpers";

const EpisodesPage = () => {
  const [episodeId, setEpisodeId] = useState(1);
  const [episode, setEpisode] = useState({});
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleEpisode = (newEpisode) => {
    setEpisodeId(newEpisode);
  };

  const fetchEpisode = async (id) => {
    setCharacters([]);
    setEpisode({});
    setIsLoading(true);

    const data = await getEpisodeById(id);

    if (data.error) {
      setError(data);
      setIsLoading(false);
      return;
    }

    const charactersData = await getCharactersByUrls(data.characters);
    setEpisode(data);
    setCharacters(charactersData);
    setIsLoading(false);
    setError(null);
  };

  useEffect(() => {
    scrollToTop();
    fetchEpisode(episodeId);
  }, [episodeId]);

  return (
    <main className={styles.container}>
      <MetaTags
        title={`${episode?.name || "Episode"} | Rick and Morty`}
        description={
          "Dive into the exciting lineup of characters who appear in each episode of the Rick and Morty series. Find out which favorite characters are making an appearance and get a deeper understanding of the multiverse"
        }
      />
      <div className={styles.content}>
        <h2 className={styles.name}>
          Episode: <span>{episode?.name || "unknown"}</span>
        </h2>
        <p className={styles.episode}>{episode?.episode || "unknown"}</p>
        <p className={styles.date}>
          date air: <span>{episode?.air_date || "unknown"}</span>
        </p>
      </div>

      <EpisodeFilter episode={episodeId} handleEpisode={handleEpisode} />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <Grid characters={characters} />
      )}
    </main>
  );
};

export default EpisodesPage;
