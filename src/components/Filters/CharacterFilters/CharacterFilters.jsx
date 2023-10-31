import { useEffect, useState } from "react";
import Accordion from "../../Accordion/Accordion";
import Tag from "../../Tag/Tag";
import styles from "./CharacterFilters.module.css";
import { DataStatus, DataSpecies, DataGender } from "../../../constants";

const CharacterFilters = ({
  handleStatus,
  handleSpecies,
  handleGender,
  status,
  species,
  gender,
}) => {
  const [activeStatus, setActiveStatus] = useState(status);
  const [activeGender, setActiveGender] = useState(gender);
  const [activeSpecies, setActiveSpecies] = useState(species);

  const handleStatusClick = (status) => {
    handleStatus(status);
    setActiveStatus(status);
  };

  const handleGenderClick = (gender) => {
    handleGender(gender);
    setActiveGender(gender);
  };

  const handleSpeciesClick = (species) => {
    handleSpecies(species);
    setActiveSpecies(species);
  };

  useEffect(() => {
    setActiveStatus(status);
    setActiveSpecies(species);
    setActiveGender(gender);
  }, [status, species, gender]);

  return (
    <section className={styles.filters}>
      <Accordion
        title="Status"
        open={true}
        bodyStyles={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
      >
        {DataStatus.map((status) => (
          <Tag
            text={status}
            key={status}
            active={activeStatus === status}
            onClick={() => handleStatusClick(status)}
          />
        ))}
      </Accordion>

      <Accordion
        title="Gender"
        bodyStyles={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
      >
        {DataGender.map((gender) => (
          <Tag
            text={gender}
            key={gender}
            active={activeGender === gender}
            onClick={() => handleGenderClick(gender)}
          />
        ))}
      </Accordion>

      <Accordion
        title="Species"
        bodyStyles={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
      >
        {DataSpecies.map((species) => (
          <Tag
            text={species}
            key={species}
            active={activeSpecies === species}
            onClick={() => handleSpeciesClick(species)}
          />
        ))}
      </Accordion>
    </section>
  );
};

export default CharacterFilters;
