import styles from "./Loader.module.css";

const Loader = ({ size="100px", padding="100px" }) => {
  return (
    <div className={styles.container} style={{ padding: padding }}>
      <i className="bx bx-loader bx-spin" style={{ fontSize: size }}></i>
    </div>
  );
};

export default Loader;
