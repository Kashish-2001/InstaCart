import { Fragment } from "react";
import * as styles from "./Growth.module.css";
import { growth } from "../../constants/growth";

const Growth = () => {
  const imgURL =
    "https://d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage_stats-538f51946acc9e8a72b982654287ee0ad8d7a848df2cd860935bbc3c2a97e84a.jpg";

  return (
    <div className={`${styles.growthWrapper} center`}>
      <div className={styles.growthHeading}>
        <p>The world's largest online grocery service</p>
      </div>

      <div className={styles.growthImg}>
        <img src={imgURL} alt="" />
      </div>
      <div className={`${styles.growthList} center`}>
        {growth.map(({ field, description }) => {
          return (
            <div className={styles.growthDiv}>
              <Fragment>
                <div className={styles.growthField}>{field}</div>
                <div className={styles.growthDes}>{description}</div>
              </Fragment>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Growth;
