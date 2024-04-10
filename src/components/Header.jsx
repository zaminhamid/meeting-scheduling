import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
 
    <header className="head">
      <div className="nav">
        <h2>Fibery</h2>
        <h6> ☀️Ai Now</h6>
        <h3>Solutions</h3> 
        <h3>Products</h3> 
        <h3>Pricing </h3>
        
      </div>
      <div>
        
        <button className="button1">Sign Up</button>
        <button className="button2">Get a Demo</button>
      </div>
    </header>
    
   
  );
};

export default Header;

