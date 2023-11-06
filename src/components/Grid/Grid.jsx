import styles from "./Grid.module.css";
import {Card, ErrorMessage} from "@components";

const Grid = ({ characters }) => {
  if (!characters || characters.length < 1) {
    return <ErrorMessage message="Not found characters." />;
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
