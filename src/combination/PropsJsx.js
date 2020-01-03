import React from 'react'

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      <div class="left">
        {props.left}
      </div>
      <div class="right">
        {props.right}
      </div>

    </div>
  );
}

function Left(){
  return <p>left</p>
}

function Right() {
  return <p>right</p>
}
function PropsJsx(props) {
  return (
    <FancyBorder 
      left={
        <Left />
      }
      right={
        <Right />
      }
    >

    </FancyBorder>
  )
}

export default PropsJsx