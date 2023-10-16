import styles from "./Button.module.css";

const Button = ({ children, onClick, type, size }) => {
  return (
    <button className={`${styles.button} ${styles[type]} ${styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
