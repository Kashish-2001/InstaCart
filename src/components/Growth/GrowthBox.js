import { Fragment, useState } from "react";
import * as styles from "./Growth.module.css";

const GrowthBox = ({ field, description }) => {
  const [click, setClick] = useState(false);

  return (
    <div className={styles.growthDiv}>
      <Fragment>
        <div onClick={() => setClick(!click)} className={styles.growthField}>
          {field}
        </div>
        <div className={`${styles.growthDes} ${click && styles.open}`}>
          {description}
        </div>
      </Fragment>
    </div>
  );
};

export default GrowthBox;
