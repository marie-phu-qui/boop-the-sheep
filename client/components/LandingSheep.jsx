import React from 'react'

import Game from './Game'

class LandingSheep extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleHoverOff = this.handleHoverOff.bind(this)
  }
  handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    return(
      this.setState({
        click: true
      })
    )
  }

  handleHover(e) {
    return(
      this.setState({
        hover: true
      })
    )
  }

  handleHoverOff(e) {
    return(
      this.setState({
        hover: false
      })
    )
  }

  renderSheep() {
    return (
      <div id="sheep">
        <img src='https://ubisafe.org/images/sheep-vector-1.png' style={{display:'block', margin: 'auto'}} onMouseOver={()=>console.log('electric sheep yourself !')} />
      </div>
    )
  }

  renderElectricSheep() {
    return (
      <div id="electric-sheep">
        <img src='https://vectr.com/tmp/b1eGRGJSwg/aOhKrhb2.svg?width=640&height=640&select=aOhKrhb2page0' style={{display:'block', margin: 'auto'}} onMouseOver={()=>console.log('biiiiz')}/>
      </div>
    )
  }

  render() {
    return (
    <div style={{alignItems: 'center'}}>
    <div onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff} onClick={this.handleClick}>{this.state.click == true && <Game /> } || {this.state.hover == true ? this.renderElectricSheep() : this.renderSheep() }</div>
    </div>
    )
    }
}

export default LandingSheep