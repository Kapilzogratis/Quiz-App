import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import Question from "./Question";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  // will suffle the answers as it might return postive or negative value
  // We can use useRef instead of const for storing the valuw of the shuffledAnswers as it wont cahnge even after reloading

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (quizIsComplete) {
    return (
    <Summary userAnswers={userAnswers} />
    );
  }

  // just checking if the shuffledAnswers is not defined that is intially afet that it wont shuffle again
  // key is the built in prop so whenevr key changes react will unmount and remount the component basically
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
// cant use a single key to two different components
