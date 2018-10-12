import React from 'react'



class LandingSheep extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }
  handleMouseOver() {
    console.log('electric sheep yourself !')
  }
  render() {
    return (
    <div style={{alignItems: 'center'}}>
        <img src='https://ubisafe.org/images/sheep-vector-1.png' style={{display:'block', margin: 'auto'}} onMouseOver={this.handleMouseOver}/>
        <img src='https://vectr.com/tmp/b1eGRGJSwg/aOhKrhb2.svg?width=640&height=640&select=aOhKrhb2page0' style={{display:'block', margin: 'auto'}}/>
    </div>
    )
    }
}

export default LandingSheep