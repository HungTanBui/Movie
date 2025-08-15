import React from 'react'
import "./style.scss";

function Header() {
  return (
    <div className="header">
      {/*Bem
        B: Block
        E: Elemnt
        M: Modifier
      */}
      <div className="header__logo">
        <img src="https://movie-eta-sage.vercel.app/assets/movix-logo-d720c325.svg" alt="" />
      </div>
      <div className="header__link">
        <a href="">Movies</a>
        <a href="">TV Shows</a>
      </div>
    </div>
  )
}

export default Header
