import styles from "./Logo.module.css";
import RickAndMorty from "../../assets/RickAndMorty-Logo.svg";

const Logo = ({size}) => {
  return (
    <span className={`${styles.logo} ${styles[size]}`}>
      <a href="/">
        <img src={RickAndMorty} alt="rick and morty logo" className={styles.img}  />
      </a>
    </span>
  );
};

export default Logo;
