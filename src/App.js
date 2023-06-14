import './App.css';
import React, { useState } from 'react';
import Menu from './Menu';
import menu from './data';
import Buttons from './Buttons';

function App(){
  const [menuItems, setMenuItems] = useState(menu);

  function handleMenuItems(category){
    if(category === "all"){
      setMenuItems(menu);
      return;
    }
    const newMenuItems = menu.filter((menuItem)=> menuItem.category === category);
    setMenuItems(newMenuItems);
  }

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline" />
        </div>
        <Buttons handleMenuItems={handleMenuItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App;
