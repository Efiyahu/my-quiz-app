import React from 'react';
import classes from './Quiz.module.css';
import { useEffect, useState } from 'react';
import Question from '../../components/Question/Question';
const Quiz = ({ name, totalScore, setTotalScore, questions, setQuestions }) => {
  const [options, setOptions] = useState('');
  const [currQuestion, setCurrQuestion] = useState(0);

  const shuffleOptions = (options) => options.sort(() => Math.random() - 0.5); // randomize options

  useEffect(() => {
    setOptions(
      questions &&
        shuffleOptions([
          questions[currQuestion]?.correct_answer,
          ...questions[currQuestion]?.incorrect_answers,
        ])
    );
  }, [currQuestion, questions]);

  return (
    <div className={classes.container}>
      <p className={classes.text}>Welcome, {name} Let us begin the test! </p>

      {questions ? (
        <div className={classes.questions}>
          <Question
            currQuestion={currQuestion}
            setCurrQuestion={setCurrQuestion}
            options={options}
            setOptions={setOptions}
            totalScore={totalScore}
            setTotalScore={setTotalScore}
            correct={questions[currQuestion]?.correct_answer}
            questions={questions}
            setQuestions={setQuestions}
          />
        </div>
      ) : (
        'loading...'
      )}
    </div>
  );
};

export default Quiz;
