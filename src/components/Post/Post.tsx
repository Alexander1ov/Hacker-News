import React, { FC } from "react";
import { Link } from "react-router-dom";

import style from "./Post.module.css";

export interface New {
  id: number;
  title: string;
  by: string;
  score: number;
  time: number;
}

const Post: FC<New> = ({ id, title, by, score, time }) => {
  return (
    <>
      <Link to={`/news/${id}`} className={style.news}>
        <div className={style.number}>{id + 1}</div>
        <div className={style["news-header"]}>{title}</div>
        <div className={style["news-info"]}>
          <div> by: {by}</div>
          <div>points: {score} </div>
          {/* <div>{calcDate(time, false)}</div> */}
        </div>
      </Link>
    </>
  );
};

export default Post;
