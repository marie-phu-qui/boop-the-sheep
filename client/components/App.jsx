import React from 'react'

import Header from "./Header";
import Footer from "./Footer";

const App = () => {
    return (
      <React.Fragment>
        <main role="main" className="container">
            <Header />
            <div style={{alignItems: 'center'}}>
                <img src='https://ubisafe.org/images/sheep-vector-1.png' style={{display:'block', margin: 'auto'}}/>
            </div>
        </main>
        <Footer />
      </React.Fragment>
    )
  }

export default App