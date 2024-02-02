import Item from './Item'
import React from "react";
import { v4 as uuidv4 } from 'uuid';

import './Transection.css'

const Transection = () => {

  const data = [
    {title :"ค่ารักษา",amout:10000 ,isLogic:false},
    {title :"ค่าของใช้",amout:500 ,isLogic:true},
    {title :"ค่าเกม",amout:8000,isLogic:false}
  ]

  const listitem = data.map(listitem=>
    <Item key={uuidv4()}{...listitem}/>
    );

    return (
      <ul className="text-item">
      {listitem}
      </ul>
    );
  }

  export default Transection