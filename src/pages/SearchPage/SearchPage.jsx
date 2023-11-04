import styles from "./SearchPage.module.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import Pagination from "../../Components/Pagination/Pagination";
import CharacterFilters from "../../Components/Filters/CharacterFilters/CharacterFilters";
import getCharacters from "../../services/getCharacters";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Grid from "../../Components/Grid/Grid";
import MetaTags from "../../Components/MetaTags/MetaTags";

const SearchPage = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [config, setConfig] = useState({
    name: null,
    status: null,
    gender: null,
    species: null,
    page: 1,
  });

  const handleName = (event) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      page: 1,
      name: event.target.value,
    }));
  };

  const handleStatus = (newStatus) => {
    setConfig((prevConfig) => {
      if (newStatus === prevConfig.status) {
        return { ...prevConfig, page: 1, status: null };
      }
      return { ...prevConfig, page: 1, status: newStatus };
    });
  };

  const handleGender = (newGender) => {
    setConfig((prevConfig) => {
      if (newGender === prevConfig.gender) {
        return { ...prevConfig, page: 1, gender: null };
      }
      return { ...prevConfig, page: 1, gender: newGender };
    });
  };

  const handleSpecies = (newSpecie) => {
    setConfig((prevConfig) => {
      if (newSpecie === prevConfig.species) {
        return { ...prevConfig, page: 1, species: null };
      }
      return { ...prevConfig, page: 1, species: newSpecie };
    });
  };

  const handlePage = (page) => {
    setConfig({ ...config, page: page });
  };

  const handleReset = () => {
    setConfig({
      name: null,
      status: null,
      gender: null,
      species: null,
      page: 1,
    });
  };

  const fetchCharacters = async (config) => {
    setIsLoading(true);
    setCharacters([]);
    setInfo({});
    const data = await getCharacters(config);

    if (data.error) {
      setError(data);
      setIsLoading(false);
      return;
    }

    setCharacters(data.results);
    setInfo(data.info);
    setIsLoading(false);
    setError(null);
  };

  useEffect(() => {
    fetchCharacters(config);
  }, [config]);

  return (
    <main className={styles.container}>
      <MetaTags
        title={`${info.name || "Search Characters"} || Rick and morty`}
        description={
          "Search and filter through the vast array of characters from the Rick and Morty universe. Discover intriguing details about your favorite characters, locations, and episodes, and explore the multiverse like never before."
        }
      />
      <div className={styles.header}>
        <h2>Search Characters</h2>
        <SearchInput size="big" onChange={handleName} name={config.name} />
        <p className={styles.reset} onClick={handleReset}>
          reset filters
        </p>
        <CharacterFilters
          handleStatus={handleStatus}
          status={config.status}
          handleGender={handleGender}
          gender={config.gender}
          handleSpecies={handleSpecies}
          species={config.species}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.grid}>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error.message} />
          ) : (
            <Grid characters={characters} />
          )}
        </div>

        <Pagination
          info={info}
          currentPage={config.page}
          handlePage={handlePage}
        />
      </div>
    </main>
  );
};

export default SearchPage;
