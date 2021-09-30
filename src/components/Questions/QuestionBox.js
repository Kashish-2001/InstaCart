import { useState } from "react";
import * as styles from "./Questions.module.css";

const QuestionBox = ({ question, answer }) => {
  const [click, setClick] = useState(false);

  return (
    <div className={styles.QuestionBox}>
      <div
        onClick={() => setClick(!click)}
        className={`${styles.questionBoxInner} center`}
      >
        <div className={styles.question}>
          <p>{question}</p>
        </div>
        <div className={`${!click && styles.sign} ${click && styles.hide}`}>
          +
        </div>
        <div className={`${!click && styles.hide} ${click && styles.sign}`}>
          -
        </div>
      </div>
      <div className={`${styles.answers} ${click && styles.open}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default QuestionBox;
