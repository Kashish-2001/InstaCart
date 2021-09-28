import * as styles from './Hero.module.css'

const Hero = () => {
    return (
        <div className={`${styles.heroWrapper} center`}>
            <div>
            <select className={styles.dropDown}>
                {/*<span className="flag-icon flag-icon-us">US</span>*/}
                <option data-icon="fa fa-facebook">USA</option>
                <option data-icon="fa fa-facebook">UK</option>
                <option data-icon="fa fa-facebook">India</option>
            </select>
            <div className={`${styles.heroInner}`}>

                <div className={styles.header}>
                    Order groceries for delivery or pickup today
                </div>
                <div>
                    Whatever you want from local stores, brought right to your door.
                </div>
                <div className={styles.inputLocation}>
                    <i className="fa fa-map-marker" aria-hidden="true"> </i>
                    <input type="text" placeholder="Enter your address"/>
                </div>
                </div>
                <div className={styles.heroImage}>

                </div>
            </div>
        </div>
    );
};
export default Hero
