import React from 'react';
import css from './../../css/about/starter.scss'

export default () => {
    return(
        <div className={css.starterWrapper} id='#about'>
            <img src='/static/starter.svg' alt='stater illustration' />
            <h1>Мы за безопасный<br/>и прибыльный бизнес</h1>
            <p>Мы находимся на рынке более 10 лет и имеем огромный опыт работы с налоговыми органами и судебными инстанциями. Все наши сотрудники — это высококвалифицированные специалисты, а в прошлом — налоговые инспектора.  Мы оказываем все виды бухгалтерских и юридических услуг, чтобы сделать ваш бизнес честным, безопасным и максимально прибыльным</p>
            <img src='/static/chevron.svg' className={css.starterChevron} />
        </div>
    )
}