import { useState } from 'react'

import './App.css'
import Transection from './components/Transection';
import FormComponents from './components/formComponents';


function App() {
  
  const initData = [
    {id:1,title :"ค่ารักษา",amout:10000},
    {id:2,title :"ค่าของใช้",amout:500},
    {id:3,title :"ค่าเกม",amout:8000}
  ]

  const [items, setItems] = useState([])

  function onAddNewItem(newItem){
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    });
    console.log('Info form Components ', newItem);
  }


  return (
    <div className="container">
      <h1 style={{color:'red' , textAlign:'center'}}>แอพรายรับ - รายจ่าย</h1>
      <FormComponents onAddItem ={onAddNewItem}/>
      <Transection items ={items}/>

    </div>

  );
}

export default App;
