import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

import Anim from "../Anim/Anim";

import style from "./Cell.module.css";
// import { calcDate } from "../../utils/utils";

const Cell = () => {
  const { id } = useParams();
  const { list, loading } = useAppSelector((state) => state.news);
  const i = Number(id);
  const data = list[i];

  console.log(data);

  return (
    <section className={style.section}>
      <div className={style.post}>
        {loading ? (
          <div>
            <Anim />
          </div>
        ) : (
          <>
            <h2 className={style.header}>{data?.title}</h2>
            <Link to={data?.url}>link to the website</Link>
            {/* {data.time>0 && <div>{calcDate( data.time, true)}</div>} */}
          </>
        )}
      </div>
    </section>
  );
};

export default Cell;
