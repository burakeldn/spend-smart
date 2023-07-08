import React from "react";

function Product({ product, basket, setBasket, total, money }) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }else{
            setBasket([...basket,{
                id: product.id,
                amount: 1}
            ])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
            currentBasket.amount -= 1
        if(currentBasket.amount === 0){
            setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }

    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <h5 className="product-title">{product.title}</h5>
            <div className="product-price">{product.price}</div>
            <div className="product-actions">
                <button disabled={!basketItem} className="sell-button" onClick={removeBasket}>Sell</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button disabled={total + product.price > money} className="buy-button" onClick={addBasket}>Buy</button>
            </div>
            <style >
                {`   
                    .product img {
                        width: 100%;
                        max-height: 200px;
                        object-fit: cover;
                        margin-bottom: 10px;
                      }
                      
                      .product .product-title {
                        font-weight: bold;
                        margin-bottom: 10px;
                        font-size:1.5rem;
                      }
                      
                      .product .product-price {
                        margin-bottom: 10px;
                        font-size:1.5rem;
                      }
                      
                      .product .product-actions {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-top: 10px;
                      }

                      .product .product-actions .amount {
                        border: 1px solid #ccc;
                        padding: 15px;
                        border-radius: 4px;
                        width: 20px;
                      }
                      
                      .product .product-actions .sell-button {
                        background-color: #f44336;
                        color: #fff;
                        padding: 15px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        width: 70px;
                        font-size:1.5rem;
                      }
                      
                      .product .product-actions .buy-button {
                        background-color: #4caf50;
                        color: #fff;
                        padding: 15px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        width: 70px;
                        font-size:1.5rem;
                      }

                      .product .product-actions .buy-button:hover {
                        background-color: #4caf90;
                      }

                      .product .product-actions .sell-button:hover {
                        background-color: #f44208;
                      }
                `}
            </style>
        </div>
    )
}

export default Product