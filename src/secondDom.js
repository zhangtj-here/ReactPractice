import React from 'react';

// function SecondDom(props) {
//   return (
//     <div> Now time is { props.date.toLocaleDateString() + " " + props.date.toTimeString()  } </div>
//   )
// }

// function Second(props) {
//   return (
//     <div>
//       <SecondDom date={props.date} />
//     </div>
//   )
// }

class Second extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
    this.count = 0;
  }

  componentDidMount(){
    this.timerId = setInterval(
      () => {
        this.tick();
        ++this.count;
        console.log(this.count)
      },
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
      this.setState({
        date: new Date()
      })
  }

  showMessage() {
    console.log('message');
  }

  render() {
    return (
      <div onClick={this.showMessage}> 
        It is {this.state.date.toLocaleTimeString()}
      </div>
    )
  }

}

export default Second;