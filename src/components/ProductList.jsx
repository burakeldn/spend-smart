import React, { useState } from "react";
import Product from "./Product";

function ProductList({ products, basket, setBasket, total, money }) {

  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <div className="container">
        <nav className="filter-buttons">
          <button className="filter-button" onClick={() => handleCategoryChange('foods')}>Foods</button>
          <button className="filter-button" onClick={() => handleCategoryChange('electronic devices')}>Electronic Devices</button>
          <button className="filter-button" onClick={() => handleCategoryChange('cars')}>Cars</button>
          <button className="filter-button" onClick={() => handleCategoryChange('')}>All</button>

        </nav>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product-item" key={product.id}>
              <Product
                key={product.id}
                product={product}
                basket={basket}
                setBasket={setBasket}
                total={total}
                money={money}

              />
            </div>
          ))}
        </div>
        <style scoped>
          {`
                        .product-list {
                          display: grid;
                          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                          grid-gap: 20px;
                        }
                        
                        @media (max-width: 768px) {
                          .product-list {
                            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                          }
                        }
                        
                          
                          .product-item {
                            display: flex;
                            align-items: center;
                            width: 320px;
                            border-radius: 10px;
                            margin: 20px;
                            padding: 10px;
                            font-size: 1rem;
                            justify-content: center;
                            border: 1px solid #ccc;
                            font-size: 1.2rem;
                          }

                          .filter-buttons {
                            display: flex;
                            justify-content: center;
                            
                          }
                          
                          .filter-button {
                            padding: 10px 20px;
                            margin-right: 10px;
                            background-color: #ccc;
                            border: none;
                            cursor: pointer;
                            font-size:1.5rem;
                          }

                          .filter-button:hover {
                            background-color: #333;
                            color: #fff;
                          }
                `}
        </style>
      </div>


    </div>
  )
}

export default ProductList