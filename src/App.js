import React from 'react'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import Others from './components/Others'
import WhoWeAre from './components/WhoWeAre'
import CleanConnection from './components/CleanConnection'
import Looking from './components/Looking'
import Footer from './components/Footer'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='bg-white flex flex-col'>
      <Nav />
      <Header />
      <HowItWorks />
      <Others />
      <WhoWeAre />
      <CleanConnection />
      <Looking />
      <Footer />
    </div>
  );
}

export default App;
