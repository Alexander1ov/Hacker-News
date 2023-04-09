import React, { FC } from "react";

import { useAppSelector } from "../../hooks/hooks";
import { calcDate } from "../../utils/utils";

import style from "./Answer.module.css";

interface TypeAnswer {
  id: number;
}

const Answer: FC<TypeAnswer> = ({ id }) => {
  const { answer } = useAppSelector((state) => state.comments);

  return (
    <div className={style.reply}>
      {answer.map((comment, i) => {
        if (comment.parent === id) {
          return (
            <div className={style.comment} key={i}>
              <div className={style.text}>{comment.text}</div>
              <div className={style.title}>
                <div className={style.by}>by: {comment.by}</div>
                <div>{calcDate(comment.time, false)}</div>
              </div>
            </div>
          );
        }
        return <div key={i}></div>;
      })}
    </div>
  );
};

export default Answer;
