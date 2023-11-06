import styles from "./LocationsPage.module.css";
import { useEffect, useState } from "react";

import {
  LocationFilter,
  Grid,
  ErrorMessage,
  Loader,
  MetaTags,
} from "@components";

import { getCharactersByUrls, getLocationById } from "@services";

import { scrollToTop } from "@helpers";

const LocationsPage = () => {
  const [locationId, setLocationId] = useState(1);
  const [location, setLocation] = useState({});
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLocationId = (newLocation) => {
    setLocationId(newLocation);
  };

  const fetchLocation = async (id) => {
    setLocation({});
    setCharacters([]);
    setIsLoading(true);
    setError(null);

    const data = await getLocationById(id);

    if (data.error) {
      setError(data);
      setIsLoading(false);
      return;
    }

    const dataCharacters = await getCharactersByUrls(data.residents);
    setLocation(data);
    setCharacters(dataCharacters);
    setIsLoading(false);
    setError(null);
  };

  useEffect(() => {
    scrollToTop();
    fetchLocation(locationId);
  }, [locationId]);

  return (
    <main className={styles.container}>
      <MetaTags
        title={`${location?.name || "Location"} | Rick and Morty`}
        description={
          "Explore the diverse inhabitants of every location in the Rick and Morty universe. Discover unique insights about the characters who call these places home, and delve deeper into the multiverse"
        }
      />
      <div className={styles.content}>
        <h2 className={styles.location}>
          Location: <span>{location?.name || "unknown"}</span>
        </h2>
        <p className={styles.dimension}>
          Dimension: <span>{location?.dimension || "unknown"}</span>
        </p>
        <p className={styles.type}>
          Type: <span>{location?.type || "unknown"}</span>
        </p>
      </div>

      <LocationFilter
        handleLocationId={handleLocationId}
        locationId={locationId}
      />

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

export default LocationsPage;
