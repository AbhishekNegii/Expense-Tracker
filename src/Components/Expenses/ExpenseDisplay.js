import React from 'react'

const ExpenseDisplay = (props) => {
    console.log(props)
    const display = props.data.map((item)=>(
        <div>
        <li>{item.amount} {item.description} {item.category}</li>
        </div>
        ))
  return (
    <div>
       {display} 
    </div>
  )
}

export default ExpenseDisplay