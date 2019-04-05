import React from 'react';
import Head from 'next/head'
import { withRouter } from 'next/router'

import data from './taxes.json'
import Header from './../components/Header'
import TaxesPage from './../components/taxes/TaxesPage'
import './../style.scss'


const Tax = withRouter(props => {
    let e = {}
    data.services.map(elem => {
        if(elem.id == props.router.query.id)
            e = elem
    })
    return (
        <div>
            <Head>
                    <title>Налоговый советник | {e.name}</title>
            </Head>
            <Header />
            <TaxesPage data={e} />
        </div>
    )
})



export default Tax