import React from 'react';

class Toggle extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      isToggleOn: true
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick(a,b,e) {
    // e.preventDefault();
    console.log(e)
    console.log(a)
    console.log(b)
    this.setState((state) => {
      return {
        isToggleOn: !state.isToggleOn
      }
    })
  }

  render() {
    return (
      <button onClick={/* e => this.handleClick(e,'123','321') */ this.handleClick.bind(this,'aaa','bbb')}>
          {this.state.isToggleOn ? "ON" : "OFF"}    
      </button>
    )
  }
}

export default Toggle;