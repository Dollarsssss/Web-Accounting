import Item from './Item'
import React from "react";
import './Transection.css'

const Transection = ({ items }) => {


    return (
      <>
      <ul className="text-item">
        {items.map(items =>{
          return <Item key={items.id}{...items}/>
        })}
      </ul>
      </>
    );
  }

  export default Transection