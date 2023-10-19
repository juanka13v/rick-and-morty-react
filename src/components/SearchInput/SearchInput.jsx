import styles from "./SearchInput.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const SearchInput = ({ size }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={`${styles.input} ${styles[size]}`}
        placeholder="Search Character"
      />
      <Button type="primary" size={size === "big" && "large"}>
        <Link to="/search">Search</Link>
      </Button>
    </div>
  );
};

export default SearchInput;
