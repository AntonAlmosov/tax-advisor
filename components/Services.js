import React from 'react';
import css from './../css/services.scss'

export default () => {
    return (
        <div className={css.servicesWrapper} id="services">
            <h1>Как мы Вам поможем?</h1>
            <img src='static/starter.svg' />
            <div className={css.servicesLinksWrappers}>
                <div></div>
            </div>
        </div>
    )
}