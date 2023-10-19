import styles from "./Logo.module.css";
import RickAndMorty from "../../assets/RickAndMorty-Logo.svg";
import { Link } from "react-router-dom";

const Logo = ({size}) => {
  return (
    <span className={`${styles.logo} ${styles[size]}`}>
      <Link to="/">
        <img src={RickAndMorty} alt="rick and morty logo" className={styles.img}  />
      </Link>
    </span>
  );
};

export default Logo;
