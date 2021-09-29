import * as styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <select className={styles.dropDown}>
        {/*<span className="flag-icon flag-icon-us">US</span>*/}
        <option value="US">US</option>
        <option value="IN">IN</option>
      </select>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Order groceries for delivery
          <br />
          or pickup today
        </h2>
        <div>
          <p>Whatever you want from local stores, brought right to your door</p>
        </div>
        <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div>
      </div>

      <div className={styles.heroImage}></div>
    </div>
  );
};
export default Hero;
