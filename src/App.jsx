import { useState } from 'react'

import './App.css'
import Transection from './components/Transection';
import FormComponents from './components/formComponents';


function App() {
  const [count, setCount] = useState(0)
  const design = {color:'red' , textAlign:'center'}

  return (
    <div className="container">
      <h1 style={design}>แอพรายรับ - รายจ่าย</h1>
      <FormComponents/>
      <Transection />

    </div>

  );
}

export default App;
