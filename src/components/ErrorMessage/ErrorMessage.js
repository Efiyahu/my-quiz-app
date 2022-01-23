import classes from './ErrorMessage.module.css';

const ErrorMessage = ({ children }) => {
  return <div className={classes.message}>{children}</div>;
};

export default ErrorMessage;
