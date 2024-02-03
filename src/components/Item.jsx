import React from "react";
import PropTypes from "prop-types";


const Item = ({title , amout}) => {

    return (
        <li>{title}<span>{amout}</span></li>
    )
}


Item.propTypes = {
    title : PropTypes.string.isRequired,
    amout : PropTypes.number.isRequired
}
export default Item;