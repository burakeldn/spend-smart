import React from "react";

function BasketItem({ item, product }) {

    return (
        <div className="receipt">
            <div className="receipt-item ">
            {item.amount}  x {product.title} = ${(item.amount) * (product.price)}
            </div>
            <style>
                {`
                .receipt {
                    background-color: #f5f5f5;
                    padding: 2px;
                    margin-top: 10px;
                  }

                  .receipt-item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 7px;
                    font-size:1.5rem;
                  }
                `}
            </style>
        </div>
    )

}

export default BasketItem