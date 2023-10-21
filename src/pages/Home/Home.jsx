import styles from "./Home.module.css";
import SearchInput from "../../Components/SearchInput/SearchInput";

const Home = () => {
  return (
    <main className={styles.home}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Rick and Morty: The Universe of Characters
        </h2>
        <p className={styles.subtitle}>
          Explore the Multiverse of Characters from the Animated Series
        </p>
      </div>
  
        <SearchInput size="big" />
      
    </main>
  );
};

export default Home;
