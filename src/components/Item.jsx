import React from "react";
import PropTypes from "prop-types";


const Item = ({title ,isLogic , amout}) => {

    return (
        <li style={{color: isLogic ? "magenta" : "darkgreen"}}>{title}<span>{amout}</span></li>
    )
}


Item.propTypes = {
    title : PropTypes.string.isRequired,
    isLogic : PropTypes.bool.isRequired,
    amout : PropTypes.number.isRequired
}
export default Item;