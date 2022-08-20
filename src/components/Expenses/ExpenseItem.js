import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler =() => {
    setTitle('Updated!');
    console.log(title);
  };


  const [amount, setAmount] = useState(props.amount);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandle =() => {
    setAmount('100');
    console.log(amount);
  };
  

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <button onClick={clickHandle}>Change amount</button>
        <div className='expense-item__location'>
        <h3>{props.location}</h3></div>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      
    </Card>
  );
}

export default ExpenseItem;