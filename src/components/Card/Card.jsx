import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ character }) => {
  return (
    <article className={styles.card}>
      <Link to={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <div className={styles.content}>
          <h2 className={styles.title}>{character.name}</h2>
        </div>
      </Link>
    </article>
  );
};

export default Card;
