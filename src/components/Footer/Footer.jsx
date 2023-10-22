import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.social}>
          <span className={styles.title}>Social</span>
          <ul>
            <li>
              <a href="www.x.com" target="_blank">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com" target="_blank">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <i className="bx bxl-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>

        <ul className={styles.links}>
          <li>Links</li>
          <li>
            <Link to="/search">Characters</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
        </ul>

        <div className={styles.github}>
          <p>You can see the code of this page in Github</p>
          <Button type="secondary">
            <a href="https://www.github.com" target="_blank">
              Github
            </a>
          </Button>
        </div>
      </div>

      <div className={styles.logo}>
        <Logo size="small" />
        <p>&copy; 2023 Rick and Morty. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
