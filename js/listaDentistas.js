//Importaciones y exportaciones
export { insertaEnDOMListaDentistas, suprimeDelDOMListaDentistas };

import { recuperaTodosLosDentistas, recuperaNombreDentista, recuperaAtributoDentista, borraDentista } from "./datos/modeloDentistas.js";
import { actualizaVistaActual } from "./menuOpciones.js";
import { insertaEnDOMDatosDentista } from "./datosDentista.js";

// Funciones para la gestión del DOM (Dentistas)

function insertaEnDOMListaDentistas() {
  insertaContenedorListaDentistas();
  insertaDentistasEnContenedor();
  insertarBotonNuevoDentista();

  const listaDentistasNode = document.getElementById("listaDentistas");
  listaDentistasNode.addEventListener("click", (e) => respuestaPulsarEnDentista(e));

  const botonNuevoDentistaNode = document.getElementById("botonNuevoDentista");
  botonNuevoDentistaNode.addEventListener("click", (e) => respuestaPulsarBotonNuevoDentista(e));
}

function suprimeDelDOMListaDentistas() {
  const listaDentistasNode = document.getElementById("listaDentistas");
  listaDentistasNode.removeEventListener("click", (e) => respuestaPulsarEnDentista(e));

  const botonNuevoDentistaNode = document.getElementById("botonNuevoDentista");
  botonNuevoDentistaNode.removeEventListener("click", (e) => respuestaPulsarBotonNuevoDentista(e));

  // Elimina el nodo del DOM
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}

// Funciones auxiliares para la gestión del DOM (Pacientes)

function insertaContenedorListaDentistas() {
  const node = document.createElement("ul");
  node.id = "listaDentistas";
  node.classList = "listaDentistas";
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.appendChild(node);
}

function insertaDentistasEnContenedor() {
  const listaDentistasNode = document.getElementById("listaDentistas");

  const dentistas = recuperaTodosLosDentistas();
  dentistas.forEach((p) => {
    const dentistaNode = creaDentistaNode(p);
    listaDentistasNode.appendChild(dentistaNode);
  });
}

function insertarBotonNuevoDentista() {
  const cuerpoNode = document.getElementById("cuerpo");
  const node = document.createElement("button");
  node.innerText = "Nuevo Dentista";
  node.id = "botonNuevoDentista";
  node.classList = "botonNuevoDentista";
  cuerpoNode.appendChild(node);
}

// Funciones auxiliares para la gestión del DOM
function creaDentistaNode(p) {
  const node = document.createElement("li");
  node.id = p;
  node.dataset.item = "dentista";
  node.classList = "itemDentista";

  const nombreDentista = recuperaNombreDentista(p) + " " + recuperaAtributoDentista(p, "surname");
  const nombreCompleto = `<span data-tipo="nombreDentista" class="nombreDentista"> ${nombreDentista} </span>`;
  const botonBajaHTML = `<span data-tipo="controlBajaDentista" class="controlBajaDentista"> X </span>`;
  const contenidoHTML = botonBajaHTML + nombreCompleto;
  node.innerHTML = contenidoHTML;
  return node;
}

///   Funciones gestoras de eventos

function respuestaPulsarEnDentista(e) {
  

  const elementoPulsado = e.target.dataset.tipo;
  const idDentista = e.target.parentNode.id ?? "";

  switch (elementoPulsado) {
    case "nombreDentista":
      suprimeDelDOMListaDentistas();
      actualizaVistaActual("datosDentista");
      insertaEnDOMDatosDentista(idDentista, "consulta");
      break;
    case "controlBajaDentista":
      const dentistaNode = document.getElementById(idDentista);
      const listaDentistasNode = document.getElementById("listaDentistas");
      listaDentistasNode.removeChild(dentistaNode);
      borraDentista(idDentista);
      break;
  }
}

function respuestaPulsarBotonNuevoDentista() {
  suprimeDelDOMListaDentistas();
  actualizaVistaActual("datosDentista");
  insertaEnDOMDatosDentista("", "alta");
}