import React from 'react'

import Header from "./Header";
import Footer from "./Footer";
import LandingSheep from "./LandingSheep";
import LandingButton from './LandingButton';


const App = () => {
    return (
      <React.Fragment>
        <div id='app-content' style={{flex: '1 0 auto',minHeight: '100%'}}>
            <Header />
            <LandingButton />
            <LandingSheep />
            
        </div>
        <Footer />
      </React.Fragment>
    )
  }

export default App