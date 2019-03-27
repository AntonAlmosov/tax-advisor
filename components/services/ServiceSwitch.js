import React from 'react';

export default ({onClick}) => {
    return(
        <div>
            <div onClick={onClick.bind(null, true)}>Бухгалтерия</div>
            <div onClick={onClick.bind(null, false)}>Юридические услуги</div>
        </div>
    )
}