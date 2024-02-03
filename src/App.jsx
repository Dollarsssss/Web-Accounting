import { useState } from 'react'

import './App.css'
import Transection from './components/Transection';
import FormComponents from './components/formComponents';


function App() {
  
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
