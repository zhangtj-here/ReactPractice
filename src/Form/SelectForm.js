import React from 'react';

class SelectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ['grapefruit', 'coconut']
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
      value: event.target.value
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
          select your like smell：
          <select multiple={true} value={this.state.value} onChange={this.handleChange} >
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

export default SelectForm;