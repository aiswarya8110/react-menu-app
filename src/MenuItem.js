import React from 'react';

export default function MenuItem(props){
    const { title, price, img, desc } = props;
    return (
        <article className="menu-item">
            <img src={img} alt={title} className="img"/>
            <div className="item-info">
                <header>
                    <h5>{title}</h5>
                    <span className="item-price">${price}</span>
                </header>
                <p>{desc}</p>
            </div>
        </article>
    )
}