import React, { useState, useRef, useEffect } from "react";

function Botones() {
  const [resultado, setResultado] = useState("");
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus());

  const eventClick = (e) => {
    setResultado(resultado.concat(e.target.name));
    console.log(e);
  };

  const borrar = () => {
    setResultado(resultado.slice(0, resultado.length - 1));
  };

  const reset = () => {
    setResultado("");
  };

  const result = () => {
    try {
      setResultado(eval(resultado).toString());
    } catch (error) {
      setResultado("Error");
    }
  };
  return (
    <div className="Contenedor">
      <div className="Calculadora">
        <table>
          <div className="Resultado">
            <tr>
              <input type="text" value={resultado} ref={inputRef} />
            </tr>
          </div>
          <tr>
            <td>
              <button onClick={reset}>C</button>
            </td>
            <td>
              <button onClick={eventClick} name="/" id="division">
                /
              </button>
            </td>
            <td>
              <button name="*" onClick={eventClick}>
                *
              </button>
            </td>
            <td>
              <button onClick={borrar}>x</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={eventClick} name="7">
                7
              </button>
            </td>
            <td>
              <button name="8" onClick={eventClick}>
                8
              </button>
            </td>
            <td>
              <button name="9" onClick={eventClick}>
                9
              </button>
            </td>
            <td>
              <button name="-" onClick={eventClick}>
                -
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button name="4" onClick={eventClick}>
                4
              </button>
            </td>
            <td>
              <button name="5" onClick={eventClick}>
                5
              </button>
            </td>
            <td>
              <button name="6" onClick={eventClick}>
                6
              </button>
            </td>
            <td>
              <button name="+" onClick={eventClick}>
                +
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button name="1" onClick={eventClick}>
                1
              </button>
            </td>
            <td>
              <button name="2" onClick={eventClick}>
                2
              </button>
            </td>
            <td>
              <button name="3" onClick={eventClick}>
                3
              </button>
            </td>
            <td>
              <button name="=" onClick={result}>
                =
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button name="%" onClick={eventClick}>
                %
              </button>
            </td>
            <td>
              <button name="=" onClick={eventClick}>
                0
              </button>
            </td>
            <td>
              <button name="." onClick={eventClick}>
                .
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Botones;
