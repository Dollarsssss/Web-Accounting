import { useState, useEffect, useReducer } from 'react'
import './App.css'
import Transection from './components/Transection';
import FormComponents from './components/FormComponents';
import DataContext from './data/DataContext';
import Report from './components/Report';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  const [items, setItems] = useState([])
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  function onAddNewItem(newItem) {
    setItems((prevItem) => {
      return [newItem, ...prevItem]
    });
    console.log('Info form Components ', newItem);
  }

  useEffect(() => {
    const amouts = items.map(items => items.amout)
    const income = amouts.filter(element => element > 0).reduce((total, incomes) => total += incomes, 0)
    const expense = (amouts.filter(element => element < 0).reduce((total, expenses) => total += expenses, 0)) * -1
    setReportIncome(income)
    setReportExpense(expense)
  }, [items])

//ตัวอย่างใช้ useReducer
  //reducer state
  //  const [showReport ,setShowReport] = useState(false)
  //  const redecer = (state,action)=>{
  //       switch(action.type){
  //         case'SHOW':
  //           return setShowReport(true)
  //         case'HIDE':
  //           return setShowReport(false)

  //       }
  //  }
  //  const [result,dispatch] = useReducer(redecer,showReport)

  //ส่วนที่ใสใน return 
 /* {showReport && <Report/>} */

  /* <div>
 <h1>{result}</h1>
<button onClick={()=>dispatch({type:'SHOW'})}>แสดง</button>
<button onClick={()=>dispatch({type:'HIDE'})}>ซ่อน</button>
</div> */

  return (
    <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
      <div className="container">
        <h1 style={{ color: 'red', textAlign: 'center' }}>แอพรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className='horizontal-menu'>
              <li><Link to="/">ข้อมูลบัญชี</Link></li>
              <li><Link to="/insert">บันทึกข้อมูล</Link></li>
            </ul>
            <Routes>
              <Route path="/" element={<Report/>}/>
              <Route path="/insert" element ={<> 
              <FormComponents onAddItem={onAddNewItem} />
              <Transection items={items} /></>}/>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
