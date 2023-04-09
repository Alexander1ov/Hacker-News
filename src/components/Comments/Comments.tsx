import React, { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchAnswer } from "../../store/commentsSlice/commentsSlice";
import { calcDate } from "../../utils/utils";
import Answer from "../Answer/Answer";
import Anim from "../Anim/Anim";

import style from "./Comments.module.css";

const Comments: FC = () => {
  const { list, loading, error } = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  const handleReply = (index: Array<number>) => {
    dispatch(fetchAnswer(index));
  };

  return (
    <div className={style.list}>
      {error && <h2>{error}</h2>}

      {loading ? (
        <Anim />
      ) : (
        <>
          {!list.length ? (
            <h2>No comments</h2>
          ) : (
            <h2>Comments: {list.length}</h2>
          )}
        </>
      )}

      {!!list &&
        list.map((comment, i) => {
          return (
            <div className={style.comment} key={i}>
              <div className={style.text}>{comment.text}</div>
              <div className={style.title}>
                <div className={style.by}>by: {comment.by}</div>
                <div>{calcDate(comment.time, false)}</div>
              </div>
              <div className={style.kids}>
                {comment.kids ? (
                  <button
                    onClick={() => {
                      handleReply(comment.kids);
                    }}
                  >
                    reply {comment.kids?.length}
                  </button>
                ) : (
                  "no answer"
                )}
              </div>
              <Answer key={i} id={comment.id} />
            
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
