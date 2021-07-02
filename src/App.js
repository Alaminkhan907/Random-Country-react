import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import Cart from "./components/Country/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setCountries(data);
        // const names= data.map(country=>country.name);
        // console.log(names);
      })
      .catch((error) => console.log(error));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Country loaded : {countries.length}</h1>
        <h4>Country added now : {cart.length}</h4>
        <Cart cart={cart}></Cart>
        {countries.map((country) => (
          <Country
            country={country}
            handleAddCountry={handleAddCountry}
            key={country.alpha3Code}
          ></Country>
        ))}
      </header>
    </div>
  );
}

export default App;
