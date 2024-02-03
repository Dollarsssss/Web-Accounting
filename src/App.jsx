import { useState } from 'react'

import './App.css'
import Transection from './components/Transection';
import FormComponents from './components/formComponents';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [count, setCount] = useState(0)
  const design = {color:'red' , textAlign:'center'}

  const data = [
    {id:1,title :"ค่ารักษา",amout:10000 ,isLogic:false},
    {id:2,title :"ค่าของใช้",amout:500 ,isLogic:true},
    {id:3,title :"ค่าเกม",amout:8000,isLogic:false}
  ]

  return (
    <div className="container">
      <h1 style={design}>แอพรายรับ - รายจ่าย</h1>
      <FormComponents/>
      <Transection/>

    </div>

  );
}

export default App;
