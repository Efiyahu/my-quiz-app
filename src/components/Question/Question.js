import React from 'react';
import './Question.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
const Question = ({
  currQuestion,
  setCurrQuestion,
  options,
  totalScore,
  setTotalScore,
  correct,
  questions,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  const handleCheck = (option) => {
    setSelected(option);
    if (option === correct) setTotalScore((prevScore) => prevScore + 1);
  };

  const handleNextQuestion = () => {
    if (currQuestion > 8) {
      navigate('/result');
    } else if (selected) {
      setCurrQuestion((prevQuestion) => prevQuestion + 1);
      setSelected();
      setErr(false);
    } else {
      setErr(true);
    }
  };

  const handleQuit = () => {
    navigate('/');
    setTotalScore(() => 0);
  };

  const handleSelect = (option) => {
    if (selected === option && selected === correct) {
      return 'select';
    } else if (selected === option && selected !== correct) {
      return 'wrong';
    } else if (option === correct) {
      return 'select';
    }
  };

  return (
    <div className="container">
      <h3 className="question">Question: {currQuestion + 1}</h3>
      <span>{totalScore}</span>
      {err && <ErrorMessage>Please choose an option</ErrorMessage>}
      <h4 className="current">{questions[currQuestion]?.question}</h4>
      <div className="options">
        {options &&
          options.map((option) => (
            <button
              className={`btn ${selected && handleSelect(option)}  `}
              disabled={selected}
              key={option}
              onClick={() => handleCheck(option)}
            >
              {option}
            </button>
          ))}
      </div>
      <div className="bottom-btn">
        <Button
          onClick={handleNextQuestion}
          className="btn-next"
          variant="outlined"
          size="large"
        >
          Next Question
        </Button>
        <Button
          onClick={handleQuit}
          className="btn-quit"
          variant="outlined"
          size="large"
          color="secondary"
        >
          Quit
        </Button>
      </div>
    </div>
  );
};

export default Question;
