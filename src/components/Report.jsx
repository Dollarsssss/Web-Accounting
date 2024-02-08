import { React , useContext }from "react";
import DataContext from "../data/DataContext";
import './Report.css'

function Report() {

     const {income,expense} = useContext(DataContext)

     const formatNumber =(num)=>{
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     }
  return (
    <>
       <h4>ยอดคงเหลือ : {formatNumber((income-expense).toFixed(2))}</h4>
       <div className="report-container">
          <div>
            <h4>รายได้ทั้งหมด</h4>
            <p className="report-income">{formatNumber(income.toFixed(2))}</p>
          </div>
          <div>
          <h4>รายจ่ายทั้งหมด</h4>
            <p className="report-expense">{formatNumber(expense.toFixed(2))}</p>
          </div>
       </div>
    </>
  )
}

export default Report