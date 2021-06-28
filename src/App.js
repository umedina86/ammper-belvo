import React from 'react'
import Header from './components/Header'
import Info from './components/Info'
import Accounts from './components/Accounts'
import LastMovements from './components/LastMovements'
import Footer from './components/Footer'

const App = () => {
  //const client_id = process.env.REACT_APP_SECRET_PASSWORD;
  return (
    <div className="container-fluid">
      <div className="row m-2 pb-1">
        <Header/>
      </div>
      <div className="row m-2 pb-1">
        <Info/>
      </div>
      <div className="row m-2 pb-1">
        <Accounts/>
      </div>
      <div className="row m-2 pb-1">
        <LastMovements/>
      </div>
      <div className="row m-2 pb-1">
        <Footer/>
      </div>
    </div>
  )
}

export default App;
