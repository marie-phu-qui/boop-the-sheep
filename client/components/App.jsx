import React from 'react'

import Header from "./Header";
import Footer from "./Footer";
import LandingSheep from "./LandingSheep";
import LandingButton from './LandingButton';


const App = () => {
    return (
      <React.Fragment>
        <main role="main" className="container">
            <Header />
            <LandingButton />
            <LandingSheep />
        </main>
        <Footer />
      </React.Fragment>
    )
  }

export default App