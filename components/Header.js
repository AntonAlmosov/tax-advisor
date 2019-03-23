import React from 'react'
import Link from 'next/link'
import css from './../css/header.scss'

 let Header = () => {
   return (
     <div className={css.headerWrapper}>
      <img src='/static/logo.svg' alt='logo' />
      <div className={css.headerMenu}>
        <a href='' className={css.headerLinkActive}>О НАС</a>
        <a href=''>УСЛУГИ</a>
        <a href=''>КОНТАКТЫ</a>
      </div>
     </div>
   )
}
export default Header
