import styles from "./EpisodeFilter.module.css";
import Accordion from "../../Accordion/Accordion";
import { DataEpisodes } from "../../../constants";
import Tag from "../../Tag/Tag";
import { useEffect, useState } from "react";

const EpisodeFilter = ({ episode, handleEpisode }) => {
  const [activeEpisode, setActiveEpisode] = useState(episode);

  const handleClick = (newEpisode) => {
    handleEpisode(newEpisode);
    setActiveEpisode(newEpisode);
  };

  useEffect(() => {
    setActiveEpisode(episode);
  }, [episode]);

  return (
    <section className={styles.container}>
      <Accordion title="Episodes" open={true}>
        <div className={styles.accordion}>
          {DataEpisodes.map((item) => (
            <div className={styles.season} key={`season_${item.season}`}>
              <h2>Season {item.season}</h2>
              <div className={styles.tags}>
                {item.episodes.map((i) => (
                  <Tag
                    text={i}
                    key={`episode_${i}`}
                    active={activeEpisode === i}
                    onClick={() => handleClick(i)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Accordion>
    </section>
  );
};

export default EpisodeFilter;
