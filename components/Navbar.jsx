import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import callIcon from "../images/telephone.png";
import cartIcon from "../images/cart.png";

const Navbar = ({ active, setActive }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.call_container}>
            <a href="tel:0100000000">
              <div className={styles.call_icon_container}>
                <Image
                  src={callIcon}
                  width="34px"
                  height="34px"
                  objectFit="contain"
                  alt="phone"
                />
              </div>
            </a>
            <div className={styles.call_texts}>
              <p className={styles.call_text_1}>ORDER NOW !</p>
              <p className={styles.call_text_2}>0100 000 000</p>
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>Home</li>
            <li className={styles.nav_link}>Menus</li>
            <li className={styles.nav_link_logo}>Food Hunt</li>
            <li className={styles.nav_link}>Events</li>
            <li className={styles.nav_link}>Offer</li>
          </ul>
        </div>

        <div className={styles.right}>
          <div className={styles.cart}>
            <Image src={cartIcon} width="30px" height="30px" alt="cart" />
            <div className={styles.counter}>
              <span className={styles.count}>0</span>
            </div>
          </div>
          <div className="login">
            <button className={styles.button}>LOGIN</button>
          </div>
          <div className={active ? `${styles.hamburger_menu} ${styles.menu_active}` : styles.hamburger_menu } onClick={()=>setActive(!active)}>
            <span className={styles.span_1} />
            <span className={styles.span_2} />
            <span className={styles.span_3} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
