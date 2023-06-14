import React from 'react';
import menuItems from './data';

const categories = ["all", ...new Set(menuItems.map((menuItem)=> menuItem.category))];

export default function Buttons(props){
    const { handleMenuItems } = props;
    return (
        <div className="btn-container">
            {categories.map((category)=>{
                return (
                    <button className="btn"
                    onClick={()=> handleMenuItems(category)} 
                    key={category}>
                        {category}
                    </button>
                )
            })}
        </div>
    )
}