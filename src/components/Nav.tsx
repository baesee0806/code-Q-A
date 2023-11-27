import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Main</Link>
      <Link to="/question">Question</Link>
      <Link to="/question/create">QuestionCreate</Link>
      <Link to="/my">My</Link>
    </nav>
  );
};

export default Nav;
