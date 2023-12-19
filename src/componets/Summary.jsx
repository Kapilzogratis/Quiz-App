import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswers }) {
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer,index) => answer === QUESTIONS[index].answers[0]);
    const skippedAnswersshare = Math.round(skippedAnswers.length / userAnswers.length*100);
    const corretAnswersshare = Math.round(correctAnswers.length / userAnswers.length*100);
    const wrongAnswersshare = 100 - skippedAnswersshare - corretAnswersshare;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2> Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersshare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{corretAnswersshare}%</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{wrongAnswersshare}%</span>
          <span className="text">wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
            let cssClass= 'user-answer';
            if(answer===null){
                cssClass += ' skipped';
            }
            else if(answer === QUESTIONS[index].answers[0]){
                cssClass += ' correct'
            }
            else{
                cssClass += ' wrongs'
            }
          return(
            <li>
              <h3>{index + 1}</h3>
              <p className="question"> {QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ? answer : 'skppied'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
