const nombreDeGrupoNode = document.getElementById("nombreDeGrupo");
nombreDeGrupoNode.innerText = "Milán";

import { cargaDatosDentistas, cargaDatosTratamientos } from "./js/datos/datosInsertados.js";
import { insertaEnDOMOpcionesMenu } from "./js/menuOpciones.js";
import { insertaEnDOMContenidoInicial } from "./js/contenidoPaginaInicial.js";
import { insertaEnDOMContenidoPaginaComponentes } from "./js/contenidoPaginaComponentes.js";


//////////////////////////////////////////////////////////////////////////////////////////////////////

// Función de comienzo

function comienzo() {
  cargaDatosDentistas();
  cargaDatosTratamientos();
  insertaEnDOMOpcionesMenu();
  insertaEnDOMContenidoPaginaComponentes();
  insertaEnDOMContenidoInicial();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Programa principal

comienzo();