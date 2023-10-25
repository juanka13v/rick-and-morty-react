import styles from "./NotFound.module.css";
import NotFoundSVG from "../../assets/not_found.svg";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
      <img src={NotFoundSVG} alt="Not Found logo" />
      <div className={styles.content}>
        <h2>404 Error: Page Not Found</h2>
        <p>
          Oops! The page you're looking for doesn't exist. Let's get you back on
          track
        </p>

        <div className={styles.btns}>
          <Button type="outline" onClick={() => navigate(-1)} size="large">
            <span>Go Back</span>
          </Button>
          <Button type="primary" size="large">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
