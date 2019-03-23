import React from 'react';
import css from './../../css/about/advantages.scss'

export default ({img, text}) => {
    return(
        <div className={css.advatagesItem}>
            <img src={img}/>
            <p>{text}</p>
        </div>
    )
}