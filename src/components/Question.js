import { useQuizContext } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions, index } = useQuizContext();
  // const question = questions[index];
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

export default Question;
