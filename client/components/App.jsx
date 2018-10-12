import React from 'react'

import Header from "./Header";
import Footer from "./Footer";

const App = () => {
    return (
      <React.Fragment>
        <div className='app-content' style={{flex: '1 0 auto',minHeight: '100%'}}>
            <Header />
            <div style={{alignItems: 'center'}}>
                <img src='https://ubisafe.org/images/sheep-vector-1.png' style={{display:'block', margin: 'auto'}}/>
            </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }

export default App