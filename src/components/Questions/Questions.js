import * as styles from "./Questions.module.css";
import { questions } from "../../constants/questions";
import QuestionBox from "./QuestionBox";

const Questions = () => {
  return (
    <div className={`${styles.QuestionWrapper} center`}>
      <div className={`${styles.QuestionsWrapperInner} center`}>
        <div className={styles.QuestionsHeading}>
          <p>Common questions</p>
        </div>
        <div className={`${styles.QuestionsList} center`}>
          {questions.map(({ question, answer }) => {
            return <QuestionBox question={question} answer={answer} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Questions;
