import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>
        <i className="bx bx-error-circle"></i>
      </div>
      <h2 className={styles.message}>
        {message || "There is a problem. Try Later."}
      </h2>
    </section>
  );
};

export default ErrorMessage;
