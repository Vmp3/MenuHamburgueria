import React, { useState } from 'react';
import "./Menu.css";

function Menu() {
  const [aberto, setAberto] = useState(false);

  const toggleMenu = () => {
    setAberto(!aberto);
  };

  return (
    <div className="dropdown">
      <button className="botao" onClick={toggleMenu}>
        <a>Menu</a>
      </button>
      {aberto && (
        <div className="dropdown-content">
          <a href="#">Inicio</a>
          <a href="#">Sobre nós</a>
          <a href="#">Cardápio</a>
          <a href="#">Eventos</a>
          <a href="#">Delivery</a>
          <a href="#">Ajuda</a>
        </div>
      )}
    </div>
  );
}

export default Menu;

