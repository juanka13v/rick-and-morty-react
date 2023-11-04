import styles from "./LocationsPage.module.css";
import LocationFilter from "../../Components/Filters/LocationFilter/LocationFilter";
import Grid from "../../Components/Grid/Grid";
import getLocationById from "../../services/getLocationById";
import getCharactersByUrls from "../../services/getCharactersByUrls";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import Loader from "../../Components/Loader/Loader";
import { useEffect, useState } from "react";

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

    const data = await getLocationById(id);

    if (data.error) {
      setError(data);
      setIsLoading(false);
      return
    }

    const dataCharacters = await getCharactersByUrls(data.residents);
    setLocation(data);
    setCharacters(dataCharacters);
    setIsLoading(false);
    setError(null);
  };

  useEffect(() => {
    fetchLocation(locationId);
  }, [locationId]);

  return (
    <main className={styles.container}>
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
