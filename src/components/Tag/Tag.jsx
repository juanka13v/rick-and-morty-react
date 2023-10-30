import styles from "./Tag.module.css";

const Tag = ({ text, active = false, onClick }) => {
  return (
    <span
      className={`${styles.tag} ${active && styles.active}`}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

export default Tag;
