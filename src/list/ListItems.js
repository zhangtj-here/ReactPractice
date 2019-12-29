import React from 'react';

const numbers = [1, 2, 3, 4, 5];
const ListItemes = numbers.map( (number,index) => {
  return <li name={index} key={ index }>{number}</li>
})

const ListItems = () => <ul>{ListItemes}</ul>;


export default ListItems;