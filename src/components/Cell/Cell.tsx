import React, { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchComments } from "../../store/commentsSlice/commentsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { calcDate } from "../../utils/utils";
import Comments from "../Comments/Comments";
import Anim from "../Anim/Anim";

import style from "./Cell.module.css";

const Cell: FC = () => {
  const { id } = useParams();
  const { list, loading } = useAppSelector((state) => state.news);
  const post = list.find((elem) => elem.id === Number(id));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!!post?.kids) {
      dispatch(fetchComments(post.kids));
    }
  });

  return (
    <section className={style.section}>
      <div className={style.post}>
        {loading ? (
          <div>
            <Anim />
          </div>
        ) : (
          <>
            {!!post && (
              <>
                <h2 className={style.header}>{post.title}</h2>
                <div className={style.info}>
                  <Link to={post.url}>link to the website</Link>
                  <div>
                    {" "}
                    Author: {post.by[0].toUpperCase()}
                    {post.by.slice(1)}{" "}
                  </div>
                  <div>Date of publication {calcDate(post.time, true)}</div>
                </div>
                <Comments />
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Cell;
