import React from "react";
import headerLogo from "../assets/img/logo-premio.PNG";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav className="header-nav">
          <img src={headerLogo} alt="Logo do Cabeçalho" className="logo" />
          <ul>
            <li>
              <a href="/">Sobre o Premio</a>
            </li>
            <li>
              <a href="/">Consulte o Regulamento</a>
            </li>
            <li>
              <a href="/"> Contato</a>
            </li>
            <li>
              <a className="active" href="/">
                Inscreva-se
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
