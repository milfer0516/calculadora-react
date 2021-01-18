import React, { Component } from "react";

class Calculadora extends Component {
   render() {
      return (
         <div className="Contenedor App">
            <h1>Calculadora</h1>
            <table className="Calculadora">
               <div className="Resultado">
                  <tr>
                     <td class="display" colspan="4">
                        <span id="resultado"></span>
                     </td>
                  </tr>
               </div>
               <tr>
                  <td>
                     <button id="reset">C</button>
                  </td>
                  <td>
                     <button id="division">/</button>
                  </td>
                  <td>
                     <button id="multiplicacion">*</button>
                  </td>
                  <td>
                     <button id="reset2">x</button>
                  </td>
               </tr>
               <tr>
                  <td>
                     <button id="siete">7</button>
                  </td>
                  <td>
                     <button id="ocho">8</button>
                  </td>
                  <td>
                     <button id="nueve">9</button>
                  </td>
                  <td>
                     <button id="resta">-</button>
                  </td>
               </tr>
               <tr>
                  <td>
                     <button id="cuatro">4</button>
                  </td>
                  <td>
                     <button id="cinco">5</button>
                  </td>
                  <td>
                     <button id="seis">6</button>
                  </td>
                  <td>
                     <button id="suma">+</button>
                  </td>
               </tr>
               <tr>
                  <td>
                     <button id="uno">1</button>
                  </td>
                  <td>
                     <button id="dos">2</button>
                  </td>
                  <td>
                     <button id="tres">3</button>
                  </td>
                  <td>
                     <button class="igual" id="igual">
                        =
                     </button>
                  </td>
               </tr>
               <tr>
                  <td>
                     <button id="modulo">%</button>
                  </td>
                  <td>
                     <button id="cero">0</button>
                  </td>
                  <td>
                     <button id="coma">,</button>
                  </td>
               </tr>
            </table>
         </div>
      );
   }
}

export default Calculadora;
