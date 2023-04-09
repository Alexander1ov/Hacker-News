import React, { FC } from "react";

import { useAppSelector } from "../../hooks/hooks";
import Post from "../Post/Post";
import Anim from "../Anim/Anim";

import style from "./News.module.css";

const NewsPosts: FC = () => {
  const { list, loading, error } = useAppSelector((state) => state.news);

  return (
    <section className={style.section}>
      <h2 className={style.header}>News page</h2>
      {error ? (
        <h2 className={style.error}>{error}</h2>
      ) : loading ? (
        <div className={style.loading}>
          <Anim />
        </div>
      ) : (
        <div className={style.wrapper}>
          <div className={style.posts}>
            {list.map((news, i) => {
              return (
                <Post
                  key={i}
                  number={i}
                  id={news.id}
                  title={news.title}
                  by={news.by}
                  score={news.score}
                  time={news.time}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsPosts;
