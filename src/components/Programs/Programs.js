import { Fragment } from "react";
import * as styles from "./Programs.module.css";

const iosLogo =
  "https://d2guulkeunn7d8.cloudfront.net/assets/footer/iOS-9e2130394aab134afa35db75591ebc77b932b77950bae0c2f5407dc0ca0553bd.svg";
const playstoreLogo =
  "https://d2guulkeunn7d8.cloudfront.net/assets/footer/play-store-7c8b5dbea57e5d80b812b1ef33eb4beeaf94f01cd3bbe30e74523b4df74fcee1.svg";

const Programs = ({ programs }) => {
  return (
    <div className={`${styles.programsWrapper} center`}>
      <div className={`${styles.programsWrapperInner} center`}>
        <div className={`${styles.programsLeft} center`}>
          <div className={`${styles.programsLeftInner} center`}>
            <div>
              <img src={programs.logo} alt="logo" />
            </div>
            <div>{programs.slogan}</div>
          </div>
          <div className={`${styles.programsLeftInner} center`}>
            <div>
              <img src={iosLogo} alt="iosLogo" />
            </div>
            <div className={styles.os}>IOS</div>
            <div>
              <img src={playstoreLogo} alt="playstoreLogo" />
            </div>
            <div className={styles.os}>Android</div>
          </div>
        </div>
        <div className={`${styles.programsRight} center`}>
          {programs.arr.map(({ title, body }) => {
            return (
              <div className={`${styles.programsBox} center`}>
                <p className={styles.programsBoxTitle}>{title}</p>
                {body.map((item) => {
                  return (
                    <Fragment>
                      <a href="/" className={styles.programsBoxLink}>{item}</a>
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Programs;
