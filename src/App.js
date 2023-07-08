import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import products from './products.json'
import Basket from './components/Basket';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

function App() {

  const [money, setMoney] = useState(100000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = (searchTerm) => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount * (products.find(product => product.id === item.id).price))
      }, 0),
    )
  }, [basket])

  return (
    <div className="App">
      <Header money={money} total={total} />
      <div className="search-bar-container">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="product-list-container">
        <ProductList
          products={searchResults.length > 0 ? searchResults : products}
          basket={basket}
          setBasket={setBasket}
          total={total}
          money={money}
        />
      </div>


      <Basket basket={basket} products={products} total={total} setBasket={setBasket} />
    </div>
  );
}

export default App;
