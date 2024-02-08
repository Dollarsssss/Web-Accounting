import { React , useContext }from "react";
import DataContext from "../data/DataContext";
import './Report.css'

function Report() {

     const {income,expense} = useContext(DataContext)

  return (
    <>
       <h4>ยอดคงเหลือ : {income-expense}</h4>
       <div className="report-container">
          <div>
            <h4>รายได้ทั้งหมด</h4>
            <p className="report-income">{income}</p>
          </div>
          <div>
          <h4>รายจ่ายทั้งหมด</h4>
            <p className="report-expense">{expense}</p>
          </div>
       </div>
    </>
  )
}

export default Report