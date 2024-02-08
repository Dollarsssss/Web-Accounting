import React from "react";
import PropTypes from "prop-types";

const Item = ({title , amout}) => {

    const symbols = (amout < 0) ? '-':'+'
    const formatNumber =(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
       }

   return (
        <li style={{borderRightStyle:(amout < 0) ? 'solid' : 'solid',borderColor:(amout < 0) ? 'red' : 'blue' ,borderWidth:'5px'}}>
        {title}<span>{symbols}{formatNumber(Math.abs(amout))}</span></li>
    )
}


Item.propTypes = {
    title : PropTypes.string.isRequired,
    amout : PropTypes.number.isRequired
}
export default Item;