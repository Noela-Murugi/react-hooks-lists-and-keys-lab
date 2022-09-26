import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const unqprop = links.map(unqprop =>
    <a key={unqprop} href = {`#${unqprop}`}>{unqprop}</a>)
  return <nav>{
    /* display an <a> tag for each link here */
    unqprop
    }</nav>;
}

export default NavBar;
