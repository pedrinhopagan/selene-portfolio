import { easeInOut } from "framer-motion";
import React from "react";

const SkillDescription = (props) => {
  switch (props.skill) {
    case "division": {
      return (
        <p 
          className="description-text"
        >
          {" "}
          Divisão longa com lápis e papel, utilizar jogos e exercícios
          interativos online. Entender asrelações entre números.{" "}
        </p>
      );
    }
    case "sum": {
      return (
        <>
          <p className="description-text">
            {" "}
            Soma de números de 3 ou mais dígitos por valores de 2 digitos{" "}
          </p>
        </>
      );
    }
    case "khan": {
      return (
        <>
          <p className="description-text">
            {" "}
            Com videoaulas e exercícios interativos, ensino o
            aluno a descobrir a melhor forma de estudo que condiz com sua
            personalidade{" "}
          </p>
        </>
      );
    }
  }
};

export default SkillDescription;
