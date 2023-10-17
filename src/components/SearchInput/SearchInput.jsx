import styles from "./SearchInput.module.css";
import Button from "../Button/Button";

const SearchInput = ({ size }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={`${styles.input} ${styles[size]}`}
        placeholder="Search Character"
      />
      <Button type="primary" size={size === "big" && "large"}>
        <a href="/search">Search</a>
      </Button>
    </div>
  );
};

export default SearchInput;
