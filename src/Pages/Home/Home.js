import React, { useState } from 'react';
import classes from './Home.module.css';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import data from '../../Data/data';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const Home = ({ name, setName, fetchQuestions }) => {
  const navigate = useNavigate();

  const [category, setCategory] = useState('');
  const [error, setError] = useState(false);
  const [diff, setDiff] = useState('');

  const handleClick = () => {
    if (!category || !diff || !name) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, diff);
      navigate('/quiz');
    }
  };

  return (
    <div className={classes.container}>
      <img className={classes.image} src="../quiz.jpg" alt="quiz" />
      <div className={classes.inputs}>
        {error && (
          <ErrorMessage>Please fill all the required fields</ErrorMessage>
        )}
        <TextField
          className={classes.textfields}
          variant="outlined"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          select
          className={classes.textfields}
          variant="outlined"
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          {data.map((item) => (
            <MenuItem key={item.category} value={item.value}>
              {item.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select Difficulty"
          variant="outlined"
          style={{ marginBottom: '1.875rem' }}
          onChange={(e) => setDiff(e.target.value)}
          value={diff}
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
            Hard
          </MenuItem>
        </TextField>
        <Button
          onClick={handleClick}
          className={classes.btn}
          variant="outlined"
          size="large"
        >
          Begin
        </Button>
      </div>
    </div>
  );
};

export default Home;
