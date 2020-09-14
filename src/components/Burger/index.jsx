import React from "react";
import './style.css'

const Burger = props => {
    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds Seeds1"></div>
                <div className="Seeds Seeds2"></div>
            </div>
            {
                props.ingredients.map((item,key) => {
                    let html = [];
                    for( let i = 0; i < item.value; i++ ) {
                        html.push(<div key={key+''+i} className={item.name}></div>)
                    }
                   return html;
                })
            }

            <div className="bread-bottom"></div>
        </div>
    )
}

export default Burger;