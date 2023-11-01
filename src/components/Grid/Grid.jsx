import Card from "../Card/Card";
import styles from "./Grid.module.css";

const Grid = ({ characters }) => {
  if (!characters || characters.length < 1) {
    return (
      <section className={styles.grid}>
        <h2 className={styles.error}>There are not characters.</h2>
      </section>
    );
  }

  return (
    <section className={styles.grid}>
      {characters.map((character) => (
        <Card character={character} key={character.id} />
      ))}
    </section>
  );
};

export default Grid;
