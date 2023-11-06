import styles from "./Home.module.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import getCharacters from "../../services/getCharacters";
import getCharactersByUrls from "../../services/getCharactersByUrls";
import getEpisodeById from "../../services/getEpisodeById";
import getLocationById from "../../services/getLocationById";
import { useEffect, useState } from "react";
import CustomSlider from "../../Components/CustomSlider/CustomSlider";
import Loader from "../../Components/Loader/Loader";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import MetaTags from "../../Components/MetaTags/MetaTags";
import scrollToTop from "../../helpers/scrollToTop";

const Home = () => {
  const [sliderCharacters, setSliderCharacters] = useState({
    characters: [],
    isLoading: true,
    error: null,
  });

  const [sliderByEpisode, setSliderByEpisode] = useState({
    episode: "",
    characters: [],
    isLoading: true,
    error: null,
  });

  const [sliderByLocation, setSliderByLocation] = useState({
    location: "",
    characters: [],
    isLoading: true,
    error: null,
  });

  const fetchCharacters = async () => {
    setSliderCharacters({
      characters: {},
      isLoading: true,
      error: null,
    });

    const data = await getCharacters();

    if (data.error) {
      setSliderCharacters({
        isLoading: false,
        error: data,
      });
      return;
    }

    setSliderCharacters({
      characters: data.results.slice(0, 9),
      isLoading: false,
    });
  };

  const fetchCharactersByEpisode = async () => {
    setSliderByEpisode({
      episode: "",
      characters: [],
      isLoading: true,
      error: null,
    });

    const data = await getEpisodeById(2);

    if (data.error) {
      setSliderByEpisode({ isLoading: false, error: data });
      return;
    }

    const characters = await getCharactersByUrls(data.characters.slice(0, 9));

    setSliderByEpisode({ episode: data.name, characters, isLoading: false });
  };

  const fetchCharactersByLocation = async () => {
    setSliderByLocation({
      episode: "",
      characters: [],
      isLoading: true,
      error: null,
    });

    const data = await getLocationById(1);

    if (data.error) {
      setSliderByLocation({
        error: data,
        isLoading: false,
      });
      return;
    }

    const characters = await getCharactersByUrls(data.residents.slice(0, 9));

    setSliderByLocation({
      location: data.name,
      characters: characters,
      isLoading: false,
    });
  };

  useEffect(() => {
    scrollToTop();
    fetchCharacters();
    fetchCharactersByEpisode();
    fetchCharactersByLocation();
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

      {sliderCharacters.isLoading ? (
        <Loader size="120px" padding="50px" />
      ) : sliderCharacters.error ? (
        <ErrorMessage message={sliderCharacters.error.message} />
      ) : (
        <CustomSlider
          characters={sliderCharacters.characters}
          title="By Characters"
          link="/search"
        />
      )}

      {sliderByEpisode.isLoading ? (
        <Loader size="120px" padding="50px" />
      ) : sliderByEpisode.error ? (
        <ErrorMessage message={sliderByEpisode.error.message} />
      ) : (
        <CustomSlider
          characters={sliderByEpisode.characters}
          title={`By Episode: ${sliderByEpisode.episode}`}
          link="/episodes"
        />
      )}

      {sliderByLocation.isLoading ? (
        <Loader size="120px" padding="50px" />
      ) : sliderByLocation.error ? (
        <ErrorMessage message={sliderByLocation.error.message} />
      ) : (
        <CustomSlider
          characters={sliderByLocation.characters}
          title={`By Locations: ${sliderByLocation.location}`}
          link="/locations"
        />
      )}
    </div>
  );
};

export default Home;
