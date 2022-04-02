import styles from "../styles/NavMenu.module.css";

const navLinks = [
  {
    id: "home",
    name: "Home",
    path: "/",
  },
  {
    id: "menu",
    name: "Menu",
    path: "/menu",
  },
  {
    id: "events",
    name: "Events",
    path: "/events",
  },
  {
    id: "offer",
    name: "Offer",
    path: "/offer",
  },
];

const NavMenu = ({ active, setActive }) => {
  return (
    <header
      className={active ? `${styles.header} ${styles.active}` : styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.nav_links}>
          {navLinks.map((navItem) => (
            <li
              className={styles.nav_link}
              key={navItem.id}
              onClick={() => setActive(!active)}>
              {navItem.name}
            </li>
          ))}
        <button className={styles.button}>LOGIN</button>
        </ul>
      </nav>
    </header>
  );
};

export default NavMenu;
