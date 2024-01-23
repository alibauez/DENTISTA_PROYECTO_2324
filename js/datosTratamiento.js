import { insertaEnDOMListaTratamientos } from "./listaTratamientos.js";
import { actualizaVistaActual } from "./menuOpciones.js";
import {
  recuperaNombreTratamiento,
  recuperaAtributoTratamiento,
  actualizaTratamiento,
  altaTratamiento,
} from "./datos/modeloTratamientos.js";

export { insertaEnDOMDatosTratamiento, suprimeDelDOMDatosTratamiento };

let tipoInteraccion = "";
let idTratamiento = "";

function insertaEnDOMDatosTratamiento(id, tipo) {
  tipoInteraccion = tipo;
  idTratamiento = id;
  actualizaVistaActual("datosTratamiento");
  insertaContenedorDatosTratamiento();

  insertaNombreTratamientoEnContenedor();
  insertaDescripcionTratamientoEnContenedor();
  muestraDescripcionTratamientoEnContenedor();
  insertaTratamientoDisponibleEnContenedor();
  insertaPrecioTratamientoEnContenedor();
  insertaMonedaTratamientoEnContenedor();

  insertaBotonesEnContenedor();

  if (tipoInteraccion == "consulta") {
    actualizaValoresContenedor();
  }

  //Gestión de los eventos pulsar en el boton Volver y Guardar
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.addEventListener("click", respuestaPulsarBotonVolver);

  const botonGuardarNode = document.getElementById("botonGuardar");
  botonGuardarNode.addEventListener("click", respuestaPulsarBotonGuardar);
}

function suprimeDelDOMDatosTratamiento() {
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.removeEventListener("click", respuestaPulsarBotonVolver);

  const botonGuardarNode = document.getElementById("botonGuardar");
  botonGuardarNode.addEventListener("click", respuestaPulsarBotonGuardar);

  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}

function insertaContenedorDatosTratamiento() {
  const datosTratamientoNode = document.createElement("div");
  datosTratamientoNode.id = "datosTratamiento";
  datosTratamientoNode.dataset.tratamiento = idTratamiento;
  datosTratamientoNode.classList = "datosTratamiento";
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.appendChild(datosTratamientoNode);
}

function insertaNombreTratamientoEnContenedor() {
  const nodeDiv = document.createElement("div");
  const datosTratamientoNode = document.getElementById("datosTratamiento");
  datosTratamientoNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("*Nombre: ", "nombre");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "nombre";
  inputNode.type = "text";
  inputNode.required = true;
  nodeDiv.appendChild(inputNode);

  inputNode.addEventListener("blur", function () {
    if (!inputNode.checkValidity()) {
      alert("Debe introducir un Nombre para el tratamiento actual");
      inputNode.classList.add('error');
    }else{
      inputNode.classList.remove('error');
    }
  });
  
}

function insertaDescripcionTratamientoEnContenedor() {
  const nodeDiv = document.createElement("div");
  const datosTratamientoNode = document.getElementById("datosTratamiento");
  datosTratamientoNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Descripcion: ", "descripcion");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "descripcion";
  inputNode.type = "text";
  //inputNode.required = true;
  nodeDiv.appendChild(inputNode);
}

function muestraDescripcionTratamientoEnContenedor() {
  
  const nodeDiv = document.createElement("div");
  const datosTratamientoNode = document.getElementById("datosTratamiento");
  datosTratamientoNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Vista previa: ", "muestra");
  nodeDiv.appendChild(labelNode);

  //
  const muestraNode = document.createElement("span");
  muestraNode.id = "muestra";
  muestraNode.textContent = "";
  nodeDiv.appendChild(muestraNode);

}

function insertaTratamientoDisponibleEnContenedor() {

  const nodeDiv = document.createElement("div");
  const datosTratamientoNode = document.getElementById("datosTratamiento");
  datosTratamientoNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Disponible: ", "disponible");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "disponible";
  inputNode.type = "checkbox";
  nodeDiv.appendChild(inputNode);
}

function insertaPrecioTratamientoEnContenedor() {
  const nodeDiv = document.createElement("div");
  const datosTratamientoNode = document.getElementById("datosTratamiento");
  datosTratamientoNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("*Precio: ", "precio");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "precio";
  inputNode.type = "number";
  inputNode.step = 5;
  inputNode.required = true;
  nodeDiv.appendChild(inputNode);

  inputNode.addEventListener("blur", function () {
    if (!inputNode.checkValidity()) {
      alert("Debe introducir un Precio para el tratamiento actual");
      inputNode.classList.add('error');
    }else{
      inputNode.classList.remove('error');
    }
  });


}

function insertaMonedaTratamientoEnContenedor(){

  const nodeDiv = document.createElement("div");
  const datosTratamientoNode = document.getElementById("datosTratamiento");
  datosTratamientoNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Moneda: ", "moneda");
  nodeDiv.appendChild(labelNode);

  const selectNode = document.createElement("select");
  selectNode.id = "moneda";
  nodeDiv.appendChild(selectNode);

  const optionsHTML = `
  <option id="euroMoneda"    value="euro" selected>€</option>
  <option id="dollarMoneda"  value="dollar">$</option>
`;

  selectNode.innerHTML = optionsHTML;

}

function insertaBotonesEnContenedor() {
    // Se crea un contenedor donde se incluyen todos los botones
    const divNode = document.createElement("div");
    const datosTratamientoNode = document.getElementById("datosTratamiento");
    datosTratamientoNode.appendChild(divNode);
    // Añade atributos id y class para el acceso y los estilos
    divNode.id = "botones";
    divNode.classList = "botones";
  
    const botonVolverNode = creaBotonNode("Volver", "botonVolver");
    divNode.appendChild(botonVolverNode);
  
    const botonGuardarNode = creaBotonNode("Guardar", "botonGuardar");
    divNode.appendChild(botonGuardarNode);
  }

function creaBotonNode(texto, valorId) {
  const botonNode = document.createElement("button");
  botonNode.innerText = texto;
  botonNode.id = valorId;
  botonNode.classList = "boton";
  return botonNode;
}

function creaLabelNode(texto, valueFor) {
  const labelNode = document.createElement("label");
  labelNode.innerText = texto;
  labelNode.setAttribute("for", valueFor);

  return labelNode;
}

function actualizaValoresContenedor() {
  const nombreNode = document.getElementById("nombre");
  nombreNode.value = recuperaNombreTratamiento(idTratamiento);

  const descripcionNode = document.getElementById("descripcion");
  descripcionNode.value = recuperaAtributoTratamiento(idTratamiento, "descripcion");

  const muestraNode = document.getElementById("muestra");
  muestraNode.textContent =  descripcionNode.value;

  const disponibleNode = document.getElementById("disponible");
  disponibleNode.checked = recuperaAtributoTratamiento(idTratamiento, "disponible");

  const precioNode =  document.getElementById("precio");
  precioNode.value = recuperaAtributoTratamiento(idTratamiento, "precio");

  const monedaTratamiento =  recuperaAtributoTratamiento(idTratamiento, "moneda");
  const selector = monedaTratamiento + "Moneda";
  const monedaNode = document.getElementById(selector);

  monedaNode.selected = "true";

}

function respuestaPulsarBotonVolver() {
  suprimeDelDOMDatosTratamiento();
  actualizaVistaActual("listaTratamientos");
  insertaEnDOMListaTratamientos();
}

function respuestaPulsarBotonGuardar() {
  const datosTratamiento = recolectaDatosTratamiento();

  switch (tipoInteraccion) {
    case "consulta":
      const datosTratamientoNode = document.getElementById("datosTratamiento");
      const idTratamiento = datosTratamientoNode.dataset.tratamiento;

      actualizaTratamiento(idTratamiento, datosTratamiento);
      break;
    case "alta":
      altaTratamiento(datosTratamiento);
      break;
  }

  respuestaPulsarBotonVolver();
}

function recolectaDatosTratamiento() {
  const datosTratamiento = {};

  const nameNode = document.getElementById("nombre");
  datosTratamiento.nombre = [{ text: nameNode.value }];
  //console.log("c=", nameNode.value ); //el nombre se recupera correctamente

  const descripcionNode = document.getElementById("descripcion"); 
  datosTratamiento.descripcion = [{ text: descripcionNode.value }] ;
  //console.log("d=", descripcionNode.value ); //la descripcion se recuepra correctamente

  const disponibleNode = document.getElementById("disponible");
  datosTratamiento.disponible = disponibleNode.checked;

  const precioNode = document.getElementById("precio");
  datosTratamiento.precio = precioNode.value;

  const monedaNode = document.getElementById("moneda");
  datosTratamiento.moneda = monedaNode.value;

  return datosTratamiento;
}