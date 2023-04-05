import React from "react";
import { Link, NavLink } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import LOGO from "../../images/logo.png";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="" />
        </Link>
      </div>
      <nav className={style.nav}>
        <div className={style["nav-link"]}>
          <NavLink
            className={({ isActive }) =>
              `${style.link} ${isActive ? style.active : ""}`
            }
            to={ROUTES.HOME}
          >
            Home
          </NavLink>
        </div>

        <div className={style["nav-link"]}>
          <NavLink
            className={({ isActive }) =>
              `${style.link} ${isActive ? style.active : ""}`
            }
            to={ROUTES.NEWS}
          >
            News
          </NavLink>
        </div>

        <div className={style["nav-link"]}>
          <NavLink
            className={({ isActive }) =>
              `${style.link} ${isActive ? style.active : ""}`
            }
            to="https://news.ycombinator.com/"
          >
            Original website
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
