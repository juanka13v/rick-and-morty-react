import styles from "./SingleCharacterPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getCharacterById from "../../services/getCharacterById.jsx";
import extractEpisodeNumbers from "../../helpers/extractEpisodeNumbers.jsx";
import Loader from "../../Components/Loader/Loader.jsx";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage.jsx";
import scrollToTop from "../../helpers/scrollToTop.jsx";
import MetaTags from "../../Components/MetaTags/MetaTags.jsx";

const SingleCharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacter = async (id) => {
    setCharacter({});
    setIsLoading(true);
    const character = await getCharacterById(id);

    if (character.error) {
      setError(character);
      setIsLoading(false);
      return;
    }

    setCharacter(character);
    setIsLoading(false);
    setError(null);
  };

  useEffect(() => {
    scrollToTop();
    fetchCharacter(id);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <main className={styles.container}>
      <MetaTags
        title={`${character?.name || "Character"} | Rick and Morty`}
        description={
          "Dive into the detailed profiles of each character from the Rick and Morty universe. Discover unique insights about your favorite characters, their origins, and appearances in various episodes and locations."
        }
      />
      <figure className={styles.image}>
        <img src={character?.image} alt={character?.name} />
      </figure>

      <div className={styles.content}>
        <h4>Description:</h4>
        <div className={styles.rows}>
          <div>
            <span>Name:</span>
            <span>{character?.name}</span>
          </div>
          <div>
            <span>Gender:</span>
            <span>{character?.gender}</span>
          </div>
          <div>
            <span>Location:</span>
            <span>{character?.location?.name}</span>
          </div>
          <div>
            <span>Species:</span>
            <span>{character?.species}</span>
          </div>
          <div>
            <span>Status:</span>
            <span>{character?.status}</span>
          </div>
        </div>

        <div className={styles.episodes}>
          <h4>Appearances in Episodes:</h4>
          {character?.episode?.length < 1 ? (
            <span>There are not episodes with {character?.name}</span>
          ) : (
            <div className={styles.list}>
              {extractEpisodeNumbers(character?.episode || []).map(
                (episode) => (
                  <span className={styles.item} key={`episode_${episode}`}>
                    {episode}
                  </span>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SingleCharacterPage;
