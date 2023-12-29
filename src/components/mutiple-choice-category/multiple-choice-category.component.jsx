import { useState } from "react";

const MultipleChoiceQuestion = ({question, options, correctAnswer, onAnswer}) => {
const [selectedOption, setSelectedOption] = useState(null);

const handleOptionChange = (option) => {
    setSelectedOption(option);
    const isCorrect = option === correctAnswer;
    if (onAnswer) {
        onAnswer(option, isCorrect);
    }
};
return (
    <div>
        <div className="question">{question}</div>
        <div className="options">
            {options.map((option, index) => (
                <label key={index}>
                    <input type="radio" name="option" value={option} checked={selectedOption === option} onChange={() => handleOptionChange(option)} />
                    {option}
                </label>
            ))}
        </div>
    </div>
);
};

export default MultipleChoiceQuestion;