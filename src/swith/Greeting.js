import React from 'react'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }
}

export default Greeting