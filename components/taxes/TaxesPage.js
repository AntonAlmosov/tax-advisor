import React from 'react'

import TaxesPageCard from './TaxesPageCard'
import css from './../../css/taxes/taxesPage.scss'

export default ({data}) => (
            <div className={css.taxesPage}>
                <h1><img src='/static/taxes.svg' /></h1>
                <TaxesPageCard data={data} />
            </div>)