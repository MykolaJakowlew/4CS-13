import React from "react";
import './style.css';
import MenuItem from "./menu-item";

const menuData = [
 { title: 'homepage' },
 {
  title: 'pages',
  items: [
   { title: 'page 1' },
   { title: 'page 2' },
   { title: 'page 3' },
   { title: 'page 4' },
  ]
 },
 {
  title: "elements",
  items: [
   { title: 'page A' },
   { title: 'page B' },
   { title: 'page C' },
   { title: 'page D' },
  ]
 },
 { title: 'elemnets 2' },
 {
  title: 'ABCD',
  items: [
   { title: 'ABCD 1' },
   { title: 'ABCD 2' },
  ]
 }
];

function Menu () {

 return (
  <header>
   {
    menuData.map(item => <MenuItem title={item.title} items={item.items} />)
   }
  </header>
 );
}

export default Menu;