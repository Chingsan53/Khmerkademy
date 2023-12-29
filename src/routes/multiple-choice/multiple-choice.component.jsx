import { useState } from "react";
import MultipleChoiceQuestion from "../../components/mutiple-choice-category/multiple-choice-category.component";
import Button from "../../components/button/button.component";
import { questions } from "../../contexts/multiple-choice.context";

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

    const handleAnswer = (selectedOption, isCorrect) => {
        setIsAnswerCorrect(isCorrect);
        console.log(`Selected option: ${selectedOption}`);
        console.log(`Is the selected option correct? ${isCorrect}`);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div>
            <MultipleChoiceQuestion
                key = {currentQuestion.id}
                question={currentQuestion.question}
                options={currentQuestion.options}
                correctAnswer={currentQuestion.correctAnswer}
                onAnswer={handleAnswer}
                />
                {isAnswerCorrect !== null && (
                    <div>
                        {isAnswerCorrect ? 'Correct answer!' : 'Wrong answer, try again!'}
                    </div>
                )}
                {currentQuestionIndex > 0 && (
        <Button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
          Previous Question
        </Button>
      )}
      {currentQuestionIndex < questions.length - 1 && (
        <Button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}>
          Next Question
        </Button>
      )}
        </div>
    )
}

export default Quiz;