import React from 'react';
import Head from 'next/head'
import { withRouter } from 'next/router'

import data from './taxes.json'
import Header from './../components/Header'
import './../style.scss'


const Tax = withRouter(props => {
    let e = {}
    data.services.map(elem => {
        console.log('elem id: ' + elem.id)
        console.log('query id: ' + props.router.query.id)
        if(elem.id == props.router.query.id)
            e = elem
    })
    return (<h1>{e.name}</h1>)
})



export default Tax