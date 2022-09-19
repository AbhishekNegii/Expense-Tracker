import React, { useContext, useEffect, useState } from "react";
import ExpenseContext from "../../Store/Expense-Context";
import ExpenseDisplay from "./ExpenseDisplay";

const ExpenseList = () => {
  const [expense, setExpense] = useState([]);

  const cntxt = useContext(ExpenseContext);

  useEffect(()=>{
    display()
  },[])



  const display= async () => {
    const data = await fetch(
      "https://expense-tracker-ec029-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json "
    );
    const value = await data.json();
    console.log(value);
    cntxt.addExpense(value);
    const array=[]
    for(const key in value)
    {
        array.push({
            amount:value[key].amount,
            description:value[key].description,
            category:value[key].category
        })
    }
    setExpense(array);

   
  }
  console.log(expense)
  return (
    <div>
      <div>Expense List</div>
      {/* <ul> */}
      <div>
        {/* {expense.map((item) => (
          <ExpenseDisplay
            amount={item.amount}
            description={item.description}
            category={item.category}
          />
        ))} */}
        <ExpenseDisplay data={expense}/>
        </div>
      {/* </ul> */}
    </div>
  );
};

export default ExpenseList;
