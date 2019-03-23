import React from 'react';
import css from './../css/services.scss'
import Link from 'next/link'

import ServiceRow from './services/ServiceRow'

export default () => {
    return (
        <div className={css.servicesWrapper} id="services">
            <h1>Как мы Вам поможем?</h1>
            <img src='static/starter.svg' />
            <div className={css.servicesLinksWrappers}>
                <Link href="/enterprenuer"><a><ServiceRow type='link' link='/' text='Индивидуальные предприниматели'/></a></Link>
                <Link href="/organizations"><a><ServiceRow type='link' link='/' text='Юридические лица'/></a></Link>
                <Link href="/taxes"><a><ServiceRow type='link' link='/' text='Декларации 3-НДФЛ'/></a></Link>
            </div>
            <img className={css.chevron} src='static/chevron.svg'/>
        </div>
    )
}