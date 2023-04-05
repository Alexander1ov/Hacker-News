import React, { FC } from "react";

import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

import style from "./HomePage.module.css";

const HomePage: FC = () => {
  return (
    <section className={style.home}>
      <h3> Welcome to my website.</h3>
      <p>
        This service works using the Hacker News API. <br />
        The technology stack is React.js, Redux, Redux-Toolkit, TypeScript.
      </p>
      <Link className={style.link} to={ROUTES.NEWS}>
        News page
      </Link>
    </section>
  );
};

export default HomePage;
