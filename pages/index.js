import Head from 'next/head'

import Header from './../components/Header'
import About from './../components/About'
import Services from './../components/Services'
import Contacts from './../components/Contacts'
import './../style.scss'


class Index extends React.Component{
  render(){
    return(
      <div>
      <Head>
        <title>Налоговый советник</title>
      </Head>
      <Header />
      <About />
      <Services />
      <Contacts />
    </div>
    )
  };
}

export default Index
