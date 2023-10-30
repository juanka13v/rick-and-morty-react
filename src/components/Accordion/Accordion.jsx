import { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = ({ children, title, open = false, bodyStyles }) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <span onClick={handleOpen}>
          <i className={`bx bx-chevron-down ${isOpen && styles.icon}`}></i>
        </span>
      </div>
      <div className={`${styles.body} ${isOpen ? styles.open : ""}`}>
        <div className={styles.innerBody} style={bodyStyles}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
