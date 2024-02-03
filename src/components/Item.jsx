import React from "react";
import PropTypes from "prop-types";


const Item = ({title , amout}) => {

    const symbols = (amout < 0) ? '-':'+'

   return (
        <li style={{borderRightStyle:(amout < 0) ? 'solid' : 'solid',borderColor:(amout < 0) ? 'red' : 'blue' ,borderWidth:'5px'}}>
        {title}<span>{symbols}{Math.abs(amout)}</span></li>
    )
}


Item.propTypes = {
    title : PropTypes.string.isRequired,
    amout : PropTypes.number.isRequired
}
export default Item;