import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ setTotalScore }) => {
  return (
    <div className={classes.header}>
      <Link to="/">
        {/* reseting the score after you click the logo */}
        <h1 className={classes.title} onClick={() => setTotalScore(() => 0)}>
          Quizilian
        </h1>
      </Link>
    </div>
  );
};

export default Header;
