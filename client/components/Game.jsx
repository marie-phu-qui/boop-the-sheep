import React from 'react'

const KEY = {
  LEFT:  37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32
};

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
      context: null,
      keys : {
        left  : 0,
        right : 0,
        up    : 0,
        down  : 0,
        space : 0,
      },
    }
  }
  render(){ 
    return (
      <div>
        <div id='game' className='title'style={{display:'block', margin: '5em auto 5em auto', backgroundColor: 'grey', height:'70vh', width:'80vw'}}>
        </div>
         <canvas ref="canvas"
         width={this.state.screen.width * this.state.screen.ratio}
         height={this.state.screen.height * this.state.screen.ratio}/>
      </div>
    )
  }
}

export default Game