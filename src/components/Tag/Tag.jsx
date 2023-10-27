import { useState } from "react";
import styles from "./Tag.module.css";

const Tag = ({ text, active = false }) => {
  const [isActive, setIsActive] = useState(active);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <span className={`${styles.tag} ${isActive && styles.active}`} onClick={handleActive}>{text}</span>
  );
};

export default Tag;
