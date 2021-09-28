import React from "react";
import {Link} from "react-router-dom";
import * as styles from "./Navbar.module.css";

const Navbar = () => {
    const logo =
        "https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg";
    return (
        <nav className={`${styles.navbarWrapper} center`}>
            <div className={`${styles.navbarInner} center`}>
                <div className={`${styles.navLeft}`}>
                    <img src={logo} alt="logo" className={styles.imageWrapper}/>
                </div>
                <div className={`${styles.navRight} center`}>
                    <div className={styles.navLinksWrapper}>
                        <div className={styles.verticalLine}> </div>
                        <Link to="/" className={`${styles.nav} center`}>
                            Departments
                        </Link>
                        <Link to="/" className={`${styles.nav} center`}>
                            More ways to shop
                        </Link>
                        <Link to="/" className={`${styles.nav} center`}>
                            Help
                        </Link>
                    </div>

                    <div>
                        <Link className={styles.login}>Log in</Link>
                        <button className={styles.signup}>Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
