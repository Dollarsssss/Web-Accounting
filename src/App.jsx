import { useState,useEffect } from 'react'
import './App.css'
import Transection from './components/Transection';
import FormComponents from './components/FormComponents';
import DataContext from './data/DataContext';
import Report from './components/Report';


function App() {
  

  const [items, setItems] = useState([])
  const [reportIncome ,setReportIncome] = useState(0)
  const [reportExpense ,setReportExpense] = useState(0)

  console.log(items);
  function onAddNewItem(newItem) {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    });
    console.log('Info form Components ', newItem);
  }

 useEffect(()=>{
    const amouts = items.map(items=>items.amout)
    console.log(amouts);
    const income = amouts.filter(element=> element > 0).reduce((total,incomes)=> total += incomes,0)
    const expense = (amouts.filter(element=> element < 0).reduce((total,expenses)=> total += expenses,0))*-1
    setReportIncome(income)
    setReportExpense(expense)
 },[items])

  return (
    <DataContext.Provider value={
      {
        income:reportIncome,
        expense:reportExpense
      }
    }>
      <div className="container">
        <h1 style={{ color: 'red', textAlign: 'center' }}>แอพรายรับ - รายจ่าย</h1>
        <Report/>
        <FormComponents onAddItem={onAddNewItem} />
        <Transection items={items} />
      </div>
    </DataContext.Provider>

  );
}

export default App;
