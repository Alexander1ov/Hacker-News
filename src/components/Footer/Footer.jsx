import React from 'react'
import { Link } from 'react-router-dom'

import { ROUTES } from '../../constants/routes'

import style from './Footer.module.css'
import LOGO from '../../images/logo.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="" />
        </Link>
      </div>
      <div>
        The original website:{" "}
        <Link
          to='https://news.ycombinator.com/'
        >
          Hacker News
        </Link>
      </div>
      <div className={style.rights}>
        Developed by{" "}
        <a href='https://vk.com/alexander_1ov'
          target='_blank'
          rel='noreferrer'
        >
          Alexander_1ov
        </a>
      </div>
    </footer>
  )
}

export default Footer
