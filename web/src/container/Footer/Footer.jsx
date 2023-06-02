import React from "react";

import { AppWrap } from "../../wrapper";

import { SiGmail, SiWhatsapp } from "react-icons/si";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Sinta-se à vontade <br /> para entrar em <span>contato</span>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <SiGmail />
          <a href="mailto:selenepagan15@gmail.com" className="p-text">
            selenepagan15@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <SiWhatsapp />
          <a href="tel:+5519996770087" className="p-text">
            (19) 9 9677 0087
          </a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            type="text"
            className="p-text"
            placeholder="Seu nome"
            name="name"
            // value={name}
            // onChange={}
          />
        </div>
        <div className="app__flex">
          <input
            type="email"
            className="p-text"
            placeholder="Seu Email"
            name="email"
            // value={email}
            // onChange={handleChangeInput}
          />
        </div>
        <div
          onClick={() =>
            alert(
              `This service is currently unavailable, you can reach me using the social media buttons on the left bottom`
            )
          }
        >
          <textarea
            className="p-text"
            placeholder="Sua mensagem"
            name="message"
            //value={message}
            //onChange={handleChangeInput}
          ></textarea>
        </div>
        <button
          type="button"
          className="app__footer-button"
          onClick={() =>
            alert(
              `This service is currently unavailable, you can reach me using the social media buttons on the left bottom`
            )
          }
        >
          Enviar mensagem
        </button>
      </div>
    </>
  );
};

export default AppWrap(Footer, "footer");
