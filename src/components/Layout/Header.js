import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from './Header.module.css';
const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button> Cart </button>
      </header>
      <div>
        <img src={mealsImage} alt="Table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
