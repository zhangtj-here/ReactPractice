import React from 'react';

class TextForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
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
          文本：
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

export default TextForm;