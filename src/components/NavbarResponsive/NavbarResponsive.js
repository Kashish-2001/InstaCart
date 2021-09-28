import * as styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";

const NavbarResponsive = ({ hamActive }) => {
  if (hamActive)
    return (
      <div className={`${styles.navResWrapper}`}>
        <ul className={`${styles.navResLinks}`}>
          <li>
            <Link to="/" className={`${styles.navR} center`}>
              Departments
            </Link>
          </li>
          <li>
            <Link to="/" className={`${styles.navR} center`}>
              More ways to shop
            </Link>
          </li>
          <li>
            <Link to="/" className={`${styles.navR} center`}>
              Help
            </Link>
          </li>
        </ul>

        {/*<div>*/}
        {/*    <span className={styles.hrNav}></span>*/}
        {/*</div>*/}

        <select className={styles.navRdropDown} name="" id="">
          <span className="flag-icon flag-icon-us"></span>{" "}
          <option value="US">United States</option>
          <span className="flag-icon flag-icon-in"></span>{" "}
          <option value="IN">India </option>
        </select>
      </div>
    );
  return null;
};

export default NavbarResponsive;
