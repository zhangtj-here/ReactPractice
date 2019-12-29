import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   /*  this.setState((state) => ({
      value:  state.value
    })) */
    // console.log(event.target.value)
    this.setState({
      value: event.target.value.toUpperCase()
    })
  }

  handleSubmit(event) {
    alert('提交的名字是：' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

export default NameForm;