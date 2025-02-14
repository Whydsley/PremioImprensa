import React, { useEffect } from "react";
import info from "../assets/img/info.PNG";
import baner from "../assets/img/baneranimado.png";

const Content = () => {
  useEffect(() => {
    const banner = document.querySelector(".banner");

    const handlerScroll = () => {
      const banner = document.querySelector(".banner");
      if (!banner) return; // Evita erro caso o elemento não exista

      const scrollThreshold = window.innerWidth <= 768 ? 25 : 50; // Menor valor para mobile

      if (window.scrollY > scrollThreshold) {
        banner.classList.add("active");
      } else {
        banner.classList.remove("active");
      }
    };

    // Adiciona o evento de scroll
    window.addEventListener("scroll", handlerScroll);
    handlerScroll(); // Chamada inicial para verificar estado correto

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <>
      <div className="content-container">
        <img
          src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Main Background"
          className="content-background"
        />
        <img src={info} alt="Logo Info" className="info" />
      </div>

      <div className="content-down">
        <p>
          Chegou o <b>1º prêmio</b> de boas práticas de
          <br />
          comunicação da
          <b> imprensa oficial do espírito santo</b>
        </p>
      </div>

      <div className="blank">
        <a
          target="_blank"
          href="https://dio.es.gov.br/Not%C3%ADcia/imprensa-oficial-do-espirito-santo-lanca-premio-para-fortalecer-comunicacao-publica-capixaba"
          className="directions"
        >
          Sobre o<br />
          prêmio
        </a>
        <a
          target="_blank"
          href="https://dio.es.gov.br/Media/dio/Gest%C3%A3o%20de%20Documentos/INFORMATIVO_2024_DIO_1SEMESTRE%20(3).pdf"
          className="directions"
        >
          Consulte o<br />
          regulamento
        </a>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/1uwiYoMobWYjGR23dwx2L8_QN_IBwUkm6kjgYL7CAIPI/closedform"
          className="directions"
        >
          formulário
          <br />
          de inscrição
        </a>
      </div>

      <div className="animated-banner">
        <h5>cronologia</h5>
        <img className="banner" src={baner} alt="banner" />
      </div>
    </>
  );
};

export default Content;
