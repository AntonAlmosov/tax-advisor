import React from 'react';

import TaxesCard from './TaxesCard'
import css from './../../css/taxes/taxesWrapper.scss'

export default ({services}) => {
   return(
       <div className={css.taxesWrapper}>
           <h1><img src='/static/taxes.svg' /></h1>
           {services.map(elem => <TaxesCard name={elem.name} />)}
       </div>
   ) 
}