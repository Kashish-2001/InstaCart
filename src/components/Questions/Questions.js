import { useState, Fragment } from "react";
import * as styles from "./Questions.module.css";
import { questions } from "../../constants/questions";

const Questions = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className={`${styles.QuestionWrapper} center`}>
      <div className={styles.QuestionsHeading}>
        <p>Common questions</p>
      </div>
      <div className={`${styles.QuestionsList} center`}>
        {questions.map(({ question, answer }) => {
          return (
            <div className={styles.QuestionBox}>
              <Fragment>
                <div
                  onClick={handleClick}
                  className={`${styles.questionBoxInner} center`}
                >
                  <div className={styles.question}>
                    <p>{question}</p>
                  </div>
                  <div
                    className={`${!click && styles.sign} ${
                      click && styles.hide
                    }`}
                  >
                    +
                  </div>
                  <div
                    className={`${!click && styles.hide} ${
                      click && styles.sign
                    }`}
                  >
                    -
                  </div>
                </div>
                <div className={`${styles.answers} ${click && styles.open}`}>
                  <p>{answer}</p>
                </div>
              </Fragment>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Questions;
