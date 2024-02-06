import { React , useContext }from "react";
import DataContext from "../data/DataContext";

function Report() {

     const {income,expense} = useContext(DataContext)

  return (
    <div>
        <p>รายรับ :{income}</p>
        <p>รายจ่าย :{expense}</p>
    </div>
  )
}

export default Report