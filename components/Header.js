import React from 'react'
import Link from 'next/link'
import css from './../css/header.scss'

 let Header = () => {
   return (
     <div className={css.headerWrapper}>
      <a href='/'><img src='/static/logo.svg' alt='logo' /></a>
      <div className={css.headerMenu}>
        <a href='#about' className={css.headerLinkActive}>О НАС</a>
        <a href='#services'>УСЛУГИ</a>
        <a href='#contacts'>КОНТАКТЫ</a>
      </div>
     </div>
   )
}
export default Header
