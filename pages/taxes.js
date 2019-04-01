import React from 'react';
import Head from 'next/head'

import data from './taxes.json'
import Header from './../components/Header'
import './../style.scss'

class Taxes extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data
        }
    }
    render(){
        return(
            <div>
                <Head>
                    <title>Налоговый советник | 3-НДФЛ</title>
                </Head>
                <Header />
                {data.services}
            </div>
        )
    }
    
}

export default Taxes