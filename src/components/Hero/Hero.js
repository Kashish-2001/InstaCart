import * as styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <select className={styles.dropDown}>
        {/*<span className="flag-icon flag-icon-us">US</span>*/}
        <option data-icon="fa fa-facebook">US</option>
        <option data-icon="fa fa-facebook">IN</option>
      </select>
      <div className={`${styles.heroInner}`}>
        <div className={styles.headerText}>
          Order groceries for delivery or pickup today
        </div>
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
