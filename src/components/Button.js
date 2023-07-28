import React from "react";
import "../styles/Button.css";

export const Button = (props) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <div
      onClick={() => props.onClick(props.children)}
      className={`button-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
};
