import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "@components";
import { useEffect, useState } from "react";

const navs = [
  {
    name: "Characters",
    path: "/search",
  },
  {
    name: "Episodes",
    path: "/episodes",
  },
  {
    name: "Locations",
    path: "/locations",
  },
];

const Header = () => {
  const location = useLocation();
  const path = location.pathname;

  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpiar el efecto cuando el componente se desmonta
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  return (
    <div className={styles.header}>
      <div className="logo" onClick={closeMenu}>
        <Logo size="small"  />
      </div>

      <div className={styles.menu} onClick={handleMenu}>
        <i className="bx bx-menu-alt-right"></i>
      </div>

      <nav className={`${styles.navbar} ${menu && styles.active}`}>
        <ul className={styles.list}>
          {navs.map((nav) => (
            <li
              className={`${styles.item} ${path === nav.path && styles.active}`}
              key={nav.name}
            >
              <Link to={nav.path} onClick={closeMenu}>
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
