import { React , useContext }from "react";
import DataContext from "../data/DataContext";

function Report() {

    const report = useContext(DataContext)

  return (
    <div>{report}</div>
  )
}

export default Report