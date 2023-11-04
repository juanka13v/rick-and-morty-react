import { useEffect, useState } from "react";
import styles from "./LocationFilter.module.css";
import { DataLocations } from "../../../constants";
import Accordion from "../../Accordion/Accordion";
import Tag from "../../Tag/Tag";

const LocationFilter = ({ handleLocationId, locationId }) => {
  const [activeLocation, setActiveLocation] = useState(locationId);

  const handleClick = (newLocation) => {
    handleLocationId(newLocation);
    setActiveLocation(newLocation);
  };

  useEffect(() => {
    setActiveLocation(locationId);
  }, [locationId]);

  return (
    <section className={styles.container}>
      <Accordion title="Locations">
        <div className={styles.accordion}>
          {DataLocations.map((item) => (
            <Tag
              text={item.name}
              key={`location_${item.id}`}
              active={activeLocation === item.id}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </Accordion>
    </section>
  );
};

export default LocationFilter;
