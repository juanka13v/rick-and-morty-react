import styles from "./SliderCard.module.css";
import { Link } from "react-router-dom";

const SliderCard = ({ character }) => {
  return (
    <div className={styles.card}>
      <Link className={styles.link} to={`/character/${character.id}`}></Link>
      <span
        className={`${styles.status} ${styles[character.status.toLowerCase()]}`}
      >
        {character.status}
      </span>
      <div className={styles.body}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={styles.footer}>
        <h2>
          {character.name}
        </h2>
        <p>
          {character.gender}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
