// Importaciones y exportaciones
export { insertaEnDOMListaTratamientos, suprimeDelDOMListaTratamientos };

import { recuperaTodosLosTratamientos,recuperaNombreTratamiento, borraTratamiento } from "./datos/modeloTratamientos.js";
import { actualizaVistaActual } from "./menuOpciones.js";
import { insertaEnDOMDatosTratamiento } from "./datosTratamiento.js";


function insertaEnDOMListaTratamientos() {
  insertaContenedorListaTratamientos();
  insertaTratamientosEnContenedor();
  insertarBotonNuevoTratamiento();

  const listaTratamientosNode = document.getElementById("listaTratamientos");
  listaTratamientosNode.addEventListener("click", (e) => respuestaPulsarEnTratamiento(e));

  const botonNuevoTratamientoNode = document.getElementById("botonNuevoTratamiento");
  botonNuevoTratamientoNode.addEventListener("click", (e) => respuestaPulsarBotonNuevoTratamiento(e));
}

function suprimeDelDOMListaTratamientos() {
  const listaTratamientosNode = document.getElementById("listaTratamientos");
  listaTratamientosNode.removeEventListener("click", (e) => respuestaPulsarEnTratamiento(e));

  const botonNuevoTratamientoNode = document.getElementById("botonNuevoTratamiento");
  botonNuevoTratamientoNode.removeEventListener("click", (e) => respuestaPulsarBotonNuevoTratamiento(e));
  
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}

// Funciones auxiliares para la gestión del DOM

function insertaContenedorListaTratamientos() {
  const node = document.createElement("ul");
  node.id = "listaTratamientos";
  node.classList = "listaTratamientos";
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.appendChild(node);

  //node.innerHTML = "Listado de Tratamientos";
}

function insertaTratamientosEnContenedor() {
  const listaTratamientosNode = document.getElementById("listaTratamientos");

  const tratamientos = recuperaTodosLosTratamientos();
  tratamientos.forEach((p) => {
    const tratamientoNode = creaTratamientoNode(p);
    listaTratamientosNode.appendChild(tratamientoNode);
  });
}

function insertarBotonNuevoTratamiento() {
  const cuerpoNode = document.getElementById("cuerpo");
  const node = document.createElement("button");
  node.innerText = "Nuevo Tratamiento";
  node.id = "botonNuevoTratamiento";
  node.classList = "botonNuevoTratamiento";
  cuerpoNode.appendChild(node);
}

// Funciones auxiliares para la gestión del DOM
function creaTratamientoNode(p) {
  const node = document.createElement("li");
  node.id = p;
  node.dataset.item = "tratamiento";
  node.classList = "itemTratamiento";

  const nombreTratamiento = recuperaNombreTratamiento(p);
  const nombreCompleto = `<span data-tipo="nombreTratamiento" class="nombreTratamiento"> ${nombreTratamiento} </span>`;
  const botonBajaHTML = `<span data-tipo="controlBajaTratamiento" class="controlBajaTratamiento"> X </span>`;
  const contenidoHTML = botonBajaHTML + nombreCompleto;
  node.innerHTML = contenidoHTML;
  return node;
}

///   Funciones gestoras de eventos

function respuestaPulsarEnTratamiento(e) {

  const elementoPulsado = e.target.dataset.tipo;
  const idTratamiento = e.target.parentNode.id ?? "";

  switch (elementoPulsado) {
    case "nombreTratamiento":
      suprimeDelDOMListaTratamientos();
      actualizaVistaActual("datosTratamiento");
      insertaEnDOMDatosTratamiento(idTratamiento, "consulta");
      break;
    case "controlBajaTratamiento":
      const tratamientoNode = document.getElementById(idTratamiento);
      const listaTratamientosNode = document.getElementById("listaTratamientos");
      listaTratamientosNode.removeChild(tratamientoNode);
      borraTratamiento(idTratamiento);
      break;
  }
}

function respuestaPulsarBotonNuevoTratamiento() {
  suprimeDelDOMListaTratamientos();
  actualizaVistaActual("datosTratamiento");
  insertaEnDOMDatosTratamiento("", "alta");
}