import React from 'react'

import style from './Anim.module.css'

const Animation = () => {
    return (
        <div className={style['sk-chase']}>
            <div className={style['sk-chase-dot']}></div>
            <div className={style['sk-chase-dot']}></div>
            <div className={style['sk-chase-dot']}></div>
            <div className={style['sk-chase-dot']}></div>
            <div className={style['sk-chase-dot']}></div>
            <div className={style['sk-chase-dot']}></div>
        </div>
    )
}

export default Animation
