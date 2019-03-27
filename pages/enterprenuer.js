import Head from 'next/head'

import Header from './../components/Header'
import data from './enterprenuer.json'

import './../style.scss'


class Index extends React.Component{
  constructor(){
    super()

    this.state = {curent: 'account', data}
  }

  render(){
    return(
        <div>
        <Head>
            <title>Налоговый советник | Индивидуальные предпрениматели</title>
        </Head>
        <Header />
        </div>
    )
  };
}

export default Index
