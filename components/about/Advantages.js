import React from 'react';
import css from './../../css/about/advantages.scss'

export default () => {
    return(
        <div className={css.advatagesWrapper}>
            <h1>Что Вы получите,<br/>обратившись в нашу компанию:</h1>
            <div className={css.advatagesItemsWrapper}>
                <div className={css.advatagesItem}>
                    <img src='static/nums/1.svg'/>
                    <p>Снижение НДС, налога на прибыль, на имущество и страховых взносов в среднем на 40%</p>
                </div>
                <div className={css.advatagesItem}>
                    <img src='static/nums/2.svg'/>
                    <p>Обеспечение безопасности активов организации и учредителей</p>
                </div>
                <div className={css.advatagesItem}>
                    <img src='static/nums/3.svg'/>
                    <p>Повышение квалификации и обучение всем тонкостям и законным методам<br/>снижения налогов</p>
                </div>
            </div>
            <div className={css.chevronWrapper}>
                <p>Узнайте подробнее про услуги, которые вам помогут</p>
                <img src='static/chevron.svg'/>
            </div>
        </div>
    )
}