import React from "react";
import PropTypes from 'prop-types';
import './style.css'

const Controls = props => (
    <div className="ControlItem">
        <p className="Items">{props.label}</p>
        <button
            onClick={props.less}
            className="Less"
            disabled={props.disable}
        >Less</button>
        <button
            onClick={props.more}
            className="More"
        >More</button>
    </div>
)

Controls.propTypes = {
    label: PropTypes.string.isRequired,
     less: PropTypes.func.isRequired,
     more: PropTypes.func.isRequired,
    disable: PropTypes.bool.isRequired
}


export default Controls;