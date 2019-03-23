import React from 'react';
import css from './../../css/about/advantages.scss'

import AdvantageCard from './AdvantageCard'

export default () => {
    return(
        <div className={css.advatagesWrapper}>
            <h1>Что Вы получите,<br/>обратившись в нашу компанию:</h1>
            <div className={css.advatagesItemsWrapper}>
                <AdvantageCard img='static/nums/1.svg' 
                    text='Снижение НДС, налога на прибыль, на имущество и страховых взносов в среднем на 40%'/>
                <AdvantageCard img='static/nums/2.svg' 
                    text='Обеспечение безопасности активов организации и учредителей'/>
                <AdvantageCard img='static/nums/3.svg' 
                    text='Повышение квалификации и обучение всем тонкостям и законным методам снижения налогов'/>
            </div>
            <div className={css.chevronWrapper}>
                <p>Узнайте подробнее про услуги, которые вам помогут</p>
                <img src='static/chevron.svg'/>
            </div>
        </div>
    )
}