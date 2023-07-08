import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, products, total}) {

    return (
        <div className="receipt">
            <h2>Your Receipt</h2>
            {basket.map(item => <BasketItem item={item} product={products.find(p => p.id === item.id)} />)}
            <div className="total">
                Total: ${total}
            </div>
            <style>
                {`
                .total{
                margin-bottom: 10px;
                font-size: 2rem;
                border: 1px solid black;
                }
                `}
            </style>
        </div>
    )
}

export default Basket