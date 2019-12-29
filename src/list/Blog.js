import React from 'react'

class Blog extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  render() {
    const sidebar = (
      <ul>
        {
          this.props.posts.map((post) => {
            return (<li key={post.id}>
              {post.title}
            </li>)
          })
        }
      </ul>
    )

    const content = this.props.posts.map((post) => {
      return (<div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>)
    })

    return (
      <div>
         {sidebar}
         <hr />
         {content}
      </div>
    )
  }
}

export default Blog