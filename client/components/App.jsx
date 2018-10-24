import React from 'react'

import Header from "./Header";
import Footer from "./Footer";
import LandingSheep from "./LandingSheep";
import LandingButton from './LandingButton';


const App = () => {
    return (
      <React.Fragment>
<<<<<<< HEAD
        <main role="main" className="container">
            <Header />
            <div style={{alignItems: 'center'}}>
                <img src='https://ubisafe.org/images/sheep-vector-1.png' style={{display:'block', margin: 'auto'}}/>
            </div>
        </main>
=======
        <div id='app-content' style={{flex: '1 0 auto',minHeight: '100%'}}>
            <Header />
            <LandingButton />
            <LandingSheep />
            
        </div>
>>>>>>> d1fb724f4e875cff6d2bcb216bc2b2fbd5002bc9
        <Footer />
      </React.Fragment>
    )
  }

export default App