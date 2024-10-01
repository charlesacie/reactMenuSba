import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Home from './components/Home'; 
import About from './components/About'; 
import Services from './components/Services'; 
import Contact from './components/Contact'; 
import Navbar from './components/Navbar'; 
import Cocktails from './components/Cocktails'
import './App.css'; 

function App() {
  const [user, setUser] = useState({
    name: "charlesacieia@gmail.com",
    isLoggedIn: true,
  });

  const [menu, setMenu] = useState("Breakfast");

  const breakfastMenu = {
    food: [
      { name: "Pancakes", image: "https://photos.bigoven.com/recipe/hero/fluffypancakes.jpg?h=300&w=300" }, 
      { name: "Waffles", image: "https://images.stockcake.com/public/7/b/7/7b7338d4-6c98-4412-8682-f695e8ba1e16_medium/delicious-stacked-waffles-stockcake.jpg" },  
      { name: "Eggs", image: "https://www.carriesexperimentalkitchen.com/wp-content/uploads/2013/03/Wasabi.-Egg-Salad2-256x256.jpg" },        
    ],
    drinks: [
      { name: "Coffee", image: "https://cdn.openart.ai/published/jwbGpjAh8wSCRYB4knXT/EHlyd8h-_XXnU_256.webp" },     
      { name: "Orange Juice", image: "https://images.stockcake.com/public/5/4/a/54a70ffd-4bee-4fed-a7e0-f16ce7c31244_medium/fresh-orange-juice-stockcake.jpg" }  
    ],
  };

  const lunchMenu = {
    food: [
      { name: "Burger", image: "https://ip.prod.freshop.retail.ncrcloud.com/resize?url=https://images.freshop.ncrcloud.com/2764972175801717007/de7ffe73779ecd024fb48515a528b76b_large.png&width=256&type=webp&quality=80" },    
      { name: "Salad", image: "https://images.stockcake.com/public/3/1/a/31abf345-740e-4d99-8fe6-75cd7fecbb55_medium/colorful-vegetable-salad-stockcake.jpg" },      
      { name: "Sandwich", image: "https://images.stockcake.com/public/d/7/c/d7cf60f3-7f81-4b71-912e-716c5b883354_medium/gigantic-deli-sandwich-stockcake.jpg" },  
    ],
    drinks: [
      { name: "Soda", image: "https://images.stockcake.com/public/6/6/4/664071d5-6b93-4754-ab8e-225e9054f53e_medium/refreshing-grapefruit-soda-stockcake.jpg" },       
      { name: "Water", image: "https://images.stockcake.com/public/1/4/5/14529f86-916a-4bda-b361-61fd5e149927_medium/chilled-sparkling-water-stockcake.jpg" }      
    ],
  };

  const dinnerMenu = {
    food: [
      { name: "Steak", image: "https://images.stockcake.com/public/6/b/3/6b3843ea-5101-4925-84f5-d565358dbb03_medium/juicy-grilled-steaks-stockcake.jpg" },     
      { name: "Pasta", image: "https://images.stockcake.com/public/0/9/3/093ddcc9-9903-44f6-91a6-e7e028fb1643_medium/delicious-pasta-dish-stockcake.jpg" },     
      { name: "Pizza", image: "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/1564405684711740311/8ded9809185b7b5f95f0fd4ab55bec4d_large.png&width=256&type=webp&quality=80" },     
    ],
    drinks: [
      { name: "Wine", image: "https://ristorantemassimo.com/wp-content/uploads/2019/03/wine-glass.jpg" },        
      { name: "Beer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCQX0ePQ9yKu02BQMlnzV_MDdamkkCQJufg&s" }        
    ],
  };

  const handleMenuChange = (selectedMenu) => {
    setMenu(selectedMenu);
  };

  const renderMenu = () => {
    let currentMenu;
    switch (menu) {
      case "Breakfast":
        currentMenu = breakfastMenu;
        break;
      case "Lunch":
        currentMenu = lunchMenu;
        break;
      case "Dinner":
        currentMenu = dinnerMenu;
        break;
      default:
        currentMenu = breakfastMenu;
    }

    return (
      <div>
        <h3>{menu} Menu</h3>
      
        <ul>
          {currentMenu.food.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
        
        <ul>
          {currentMenu.drinks.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px' }} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar currentUser={user.name} /> 

        <div className="menu-container">
          <button onClick={() => handleMenuChange('Breakfast')}>Breakfast</button>
          <button onClick={() => handleMenuChange('Lunch')}>Lunch</button>
          <button onClick={() => handleMenuChange('Dinner')}>Dinner</button>
        </div>

        
        {renderMenu()}

        
        <div className="user-info">
          <p>Currently Logged In: {user.name}</p>
          <button onClick={() => setUser({ ...user, isLoggedIn: false })}>Log Out</button>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/Cocktails" element={<Cocktails />} /> 
          <Route path="/about" element={<About />} />  
          <Route path="/services" element={<Services />} />  
          <Route path="/contact" element={<Contact />} /> 
        </Routes>

        <footer>
          <nav>
            <ul className="nav-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cocktails">Cocktails</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </footer>
      </div>
    </Router>
  );
}

export default App;
