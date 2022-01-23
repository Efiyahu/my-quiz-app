import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Result from './Pages/Result/Result';
import Quiz from './Pages/Quiz/Quiz';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [totalScore, setTotalScore] = useState(0);
  const [questions, setQuestions] = useState();

  const fetchQuestions = async (category = '', difficulty = '') => {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&type=multiple${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}`
    );

    const { results } = await response.json();

    setQuestions(results);
  };

  return (
    <div className="App">
      <Header setTotalScore={setTotalScore} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              name={name}
              totalScore={totalScore}
              setTotalScore={setTotalScore}
              questions={questions}
              setQuestions={setQuestions}
            />
          }
        />
        <Route
          path="/result"
          element={<Result totalScore={totalScore} name={name} />}
        />
      </Routes>
    </div>
  );
}

export default App;
