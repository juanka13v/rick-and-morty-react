import styles from "./SliderCard.module.css";

const SliderCard = ({ character }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={`${styles[character.status.toLowerCase()]}`}>
          {character.status}
        </span>
      </div>
      <div className={styles.body}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.footer}>
        <div className={styles.data}>
          <span>Name:</span>
          <span>{character.name} </span>
        </div>
        <div className={styles.data}>
          <span>Gender:</span>
          <span>{character.gender}</span>
        </div>
        <div className={styles.data}>
          <span>Species:</span>
          <span>{character.species}</span>
        </div>
        <div className={styles.data}>
          <span>Origin:</span>
          <span>{character.origin.name}</span>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
