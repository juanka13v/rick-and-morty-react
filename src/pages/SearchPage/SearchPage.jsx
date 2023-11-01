import styles from "./SearchPage.module.css";
import SearchInput from "../../Components/SearchInput/SearchInput";
import Pagination from "../../Components/Pagination/Pagination";
import CharacterFilters from "../../Components/Filters/CharacterFilters/CharacterFilters";
import getCharacters from "../../services/getCharacters";
import { useEffect, useState } from "react";
import Grid from "../../Components/Grid/Grid";

const SearchPage = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

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
    try {
      const characters = await getCharacters(config);
      setCharacters(characters.results);
      setInfo(characters.info);
    } catch (error) {
      setCharacters([]);
    }
  };

  useEffect(() => {
    fetchCharacters(config);
  }, [config]);

  return (
    <main className={styles.container}>
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
          <Grid characters={characters} />
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
