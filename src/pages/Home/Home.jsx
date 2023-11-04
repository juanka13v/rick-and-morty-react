import styles from "./Home.module.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import getCharacters from "../../services/getCharacters";
import { useEffect, useState } from "react";
import CustomSlider from "../../Components/CustomSlider/CustomSlider";
import Loader from "../../Components/Loader/Loader";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import MetaTags from "../../Components/MetaTags/MetaTags";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCharacters = async () => {
    setCharacters([]);

    const characters = await getCharacters();

    if (characters.error) {
      setError(characters);
      setIsLoading(false);
      return;
    }

    setCharacters(characters.results.slice(0, 10));
    setIsLoading(false);
    setError(null);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className={styles.container}>
      <MetaTags
        title={"Home | Rick and Morty"}
        description={
          "Explore the multiverse with our comprehensive directory of Rick and Morty characters, locations, and episodes. Discover fascinating insights about your favorite characters and the world they inhabit."
        }
      />
      <main className={styles.home}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Rick and Morty: The Universe of Characters
          </h2>
          <p className={styles.subtitle}>
            Explore the Multiverse of Characters from the Animated Series
          </p>
        </div>

        <SearchInput size="big" />
      </main>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage message={error.message} />
      ) : (
        <CustomSlider
          characters={characters}
          title="By Characters"
          link="/search"
        />
      )}
    </div>
  );
};

export default Home;
