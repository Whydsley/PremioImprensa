import React, { useEffect } from "react";
import patrocinadores from "../assets/img/patrocinadores.png";
import telegram from "../assets/img/social-media-icons/telegram.png";
import instagram from "../assets/img/social-media-icons/instagram.png";
import facebook from "../assets/img/social-media-icons/facebook.png";
import linkedin from "../assets/img/social-media-icons/linkedin.png";
import whatsapp from "../assets/img/social-media-icons/whatsapp.png";
import youtube from "../assets/img/social-media-icons/youtube.png";
import logoDio from "../assets/img/logodio.PNG";
import logoPremio from "../assets/img/logopremio.PNG";

const Footer = () => {
  useEffect(() => {
    const sponsors = document.querySelector(".sponsors");

    const handlerScroll = () => {
      if (window.scrollY > 1900) {
        sponsors.classList.add("show");
      } else {
        sponsors.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handlerScroll);

    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  });

  return (
    <>
      <div className="footer">
        <img src={patrocinadores} alt="sponsors" className="sponsors" />
        <div className="final-banner">
          <div className="contact">
            <h3>Contato</h3>
            <span>premiodio.es.gov.br</span>
            <small>
              Departamento de Imprensa Oficial do Espírito Santo <br />
              Av. Nossa Sra. da Penha, 714 <br />
              Ed. RS TRADE TOWER, 4º andar <br />
              Praia do Canto, Vitória <br />
              Tel.: 27 3636-6929 <br />
            </small>
          </div>
          <div className="social-media">
            <h3>Nossas redes</h3>
            <ul className="social-media-ul">
              <li>
                <a target="_blank" href="https://t.me/Diario_oficial_ES">
                  <img src={telegram} alt="telegram-icon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/diariooficiales/"
                >
                  <img src={instagram} alt="instagram-icon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/1GtZRxVQP1/?mibextid=wwXIfr"
                >
                  <img src={facebook} alt="facebook-icon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://whatsapp.com/channel/0029VaFktcD6hENv2n1WoE28"
                >
                  <img src={whatsapp} alt="whatsapp-icon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/dioes/"
                >
                  <img src={linkedin} alt="linkedin-icon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@ImprensaOficialES"
                >
                  <img src={youtube} alt="youtube-icon" />
                </a>
              </li>
            </ul>
            <p>Fique por dentro!</p>
          </div>
          <div className="premier">
            <a href="#">
              <img src={logoPremio} alt="logo-premio" />
            </a>
          </div>
          <div className="logo-dio">
            <a href="#">
              <img src={logoDio} alt="logo-dio" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
