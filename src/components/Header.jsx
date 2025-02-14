import React from "react";
import headerLogo from "../assets/img/logo-premio.PNG";

const Header = () => {
  return (
    <>
      <div className="header">
        <img src={headerLogo} alt="Logo do Cabeçalho" className="logo" />
        <nav className="header-nav">
          <a href="/">Sobre o Premio</a>
          <a href="/">Consulte o Regulamento</a>
          <a href="/"> Contato</a>
          <a className="active" href="/">
            Inscreva-se
          </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
