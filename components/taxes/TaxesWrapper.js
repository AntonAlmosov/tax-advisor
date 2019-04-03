import React from 'react';
import Link from 'next/link'

import TaxesCard from './TaxesCard'
import css from './../../css/taxes/taxesWrapper.scss'

export default ({services}) => {
   return(
       <div className={css.taxesWrapper}>
            <h1><img src='/static/taxes.svg' /></h1>
            <div className={css.taxesCardsWrapper}>
                {services.map(elem => <TaxesCard data={elem} />)}
            </div>
       </div>
   ) 
}