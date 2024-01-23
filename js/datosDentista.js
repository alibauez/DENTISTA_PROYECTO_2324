//Importaciones y exportaciones
import { insertaEnDOMListaDentistas } from "./listaDentistas.js";
import { actualizaVistaActual } from "./menuOpciones.js";
import {
  recuperaNombreDentista,
  recuperaAtributoDentista,
  actualizaDentista,
  altaDentista,
} from "./datos/modeloDentistas.js";

export { insertaEnDOMDatosDentista, suprimeDelDOMDatosDentista };

let tipoInteraccion = "";
let idDentista = "";


// Funciones para la gestión del DOM (datos del Dentista)
function insertaEnDOMDatosDentista(id, tipo) {
  tipoInteraccion = tipo;
  idDentista = id;
  actualizaVistaActual("datosDentista");
  insertaContenedorDatosDentista();

  insertaNombreDentistaEnContenedor();
  insertaApellidoDentistaEnContenedor();
  insertaDNIDentistaEnContenedor();
  insertaDentistaActivoEnContenedor();
  insertaCantidadDentistaEnContenedor();
  insertaGeneroDentistaEnContenedor();
  insertaFNacimientoDentistaEnContenedor();
  insertaEdadDentistaEnContenedor();
  insertaConsultaDentistaEnContenedor();
  insertaDireccionDentistaEnContenedor();
  insertaTelefonoDentistaEnContenedor();
  insertaCorreoDentistaEnContenedor();

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

function suprimeDelDOMDatosDentista() {
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.removeEventListener("click", respuestaPulsarBotonVolver);

  const botonGuardarNode = document.getElementById("botonGuardar");
  botonGuardarNode.removeEventListener("click", respuestaPulsarBotonGuardar);

  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}


// Funciones auxiliares para la gestión del DOM (Dentistas)
//Inserta atributos en contenedor

function insertaContenedorDatosDentista() {
  const datosDentistaNode = document.createElement("div");
  datosDentistaNode.id = "datosDentista";
  datosDentistaNode.dataset.dentista = idDentista;
  datosDentistaNode.classList = "datosDentista";
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.appendChild(datosDentistaNode);
}

function insertaNombreDentistaEnContenedor() {

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("*Nombre: ", "name");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "name";
  inputNode.type = "text";
  inputNode.required = true;
  nodeDiv.appendChild(inputNode);

  inputNode.addEventListener('blur', function() {
    if (!inputNode.checkValidity()) {
      alert("Debe introducir un Nombre");
      inputNode.classList.add('error');
    }else{
      inputNode.classList.remove('error');
    }
  });
  
}

function insertaApellidoDentistaEnContenedor() {

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Apellido: ", "surname");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "surname";
  inputNode.type = "text";
  nodeDiv.appendChild(inputNode);
}

function insertaDNIDentistaEnContenedor(){

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("*DNI: ", "dni");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "dni";
  inputNode.type = "text";
  inputNode.pattern = "[0-9]{8}[A-Z]";
  inputNode.required = true;
  nodeDiv.appendChild(inputNode);

  inputNode.addEventListener('blur', function() {
    if (!inputNode.checkValidity()) {
      alert("El formato del DNI no es válido.\nDebe registrar un DNI español, siguiendo el siguiente formato 99999999X");
      inputNode.classList.add('error');
    }else{
      inputNode.classList.remove('error');
    }
  });


 
}

function insertaDentistaActivoEnContenedor() {

  // El estado activo del registro del dentista se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input
  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Activo: ", "active");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "active";
  inputNode.type = "checkbox";
  nodeDiv.appendChild(inputNode);

}

function insertaCantidadDentistaEnContenedor(){
  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Número de Consultas Realizadas: ", "cuantity");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "cuantity";
  inputNode.type = "number";
  nodeDiv.appendChild(inputNode);
}

function insertaGeneroDentistaEnContenedor() {

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Género: ", "gender");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo select al nodo DIV
  const selectNode = document.createElement("select");
  selectNode.id = "gender";
  nodeDiv.appendChild(selectNode);

  const optionsHTML = `
     <option id="maleGender"    value="male">Hombre</option>
     <option id="femaleGender"  value="female">Mujer</option>
     <option id="otherGender"   value="other">Otro</option>
     <option id="unknownGender" value="unknown" selected>NS/NC</option>
  `;
  selectNode.innerHTML = optionsHTML;
}

function insertaFNacimientoDentistaEnContenedor() {
  // La fecha de nacimiento del dentista se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Fecha de Nacimiento: ", "birthdate");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "birthdate";
  inputNode.type = "date";
  nodeDiv.appendChild(inputNode);
   
}

function insertaEdadDentistaEnContenedor() {
  // La edad del dentista se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input
  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Edad: ", "age");
  nodeDiv.appendChild(labelNode);

  //
  const edadNode = document.createElement("span");
  edadNode.id = "age";
  edadNode.textContent = "";
  nodeDiv.appendChild(edadNode);

}

function insertaConsultaDentistaEnContenedor() {

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);
    
  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Tipo de consulta: ", "consulta");
  nodeDiv.appendChild(labelNode);

  //crea radiobutton de opcion presencial
  const inputNodePresencial = document.createElement("input");
  inputNodePresencial.id = "presencial";
  inputNodePresencial.type = "radio";
  inputNodePresencial.name = "consulta";
  inputNodePresencial.value = "presencial";
  nodeDiv.appendChild(inputNodePresencial);
  //añade la etiqueta al radiobutton
  const labelNodePresencial = creaLabelNode("Presencial", "presencial");
  nodeDiv.appendChild(labelNodePresencial);


  //crea radiobutton de opcion virtual
  const inputNodeVirtual = document.createElement("input");
  inputNodeVirtual.id = "virtual";
  inputNodeVirtual.name = "consulta";
  inputNodeVirtual.value = "virtual";
  inputNodeVirtual.type = "radio";
  nodeDiv.appendChild(inputNodeVirtual);
  //inserta la etiqueta al radio button
  const labelNodeVirtual = creaLabelNode("Virtual", "virtual");
  nodeDiv.appendChild(labelNodeVirtual);
  
  //
  const inputNodeAmbos = document.createElement("input");
  inputNodeAmbos.id = "ambos";
  inputNodeAmbos.name = "consulta";
  inputNodeAmbos.value = "ambos";
  inputNodeAmbos.type = "radio";
  nodeDiv.appendChild(inputNodeAmbos);
  //
  const labelNodeAmbos = creaLabelNode("Ambos", "ambos");
  nodeDiv.appendChild(labelNodeAmbos);

}

function insertaDireccionDentistaEnContenedor() {
  
  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Direccion: ", "address");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "address"; 
  inputNode.type = "text";
  nodeDiv.appendChild(inputNode);
}

function insertaTelefonoDentistaEnContenedor() {
 
  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Número de Teléfono: ", "phone");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo select al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "phone";
  inputNode.type = "tel";
  inputNode.pattern = "\\+34[6-7]{1}[0-9]{8}";
  inputNode.required = true;
  nodeDiv.appendChild(inputNode);
  
  inputNode.addEventListener('blur', function() {
    if (!inputNode.checkValidity()) {
      alert("El formato del número de teléfono no es válido.\nDebe registrarse con un número de teléfono español, siguiendo el siguiente formato +34XXXXXXXX ");
      inputNode.classList.add('error');
    }else{
      inputNode.classList.remove('error');
    }
  });
}

function insertaCorreoDentistaEnContenedor() {
  // El correo electrónico del dentista se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input

  const nodeDiv = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Correo Electronico: ", "mail");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "mail";
  inputNode.type = "mail";  
  inputNode.pattern = "[a-z]+@[a-z]+\.(com|es)";
  nodeDiv.appendChild(inputNode);

  inputNode.addEventListener('blur', function() {
    if (!inputNode.checkValidity()) {
      alert("El formato del correo electrónico no es válido.\n");
      inputNode.classList.add('error');
    }else{
      inputNode.classList.remove('error');
    }
  })
}

//Botones
function insertaBotonesEnContenedor() {
  // Se crea un contenedor donde se incluyen todos los botones
  const divNode = document.createElement("div");
  const datosDentistaNode = document.getElementById("datosDentista");
  datosDentistaNode.appendChild(divNode);
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
  const nombreNode = document.getElementById("name");
  nombreNode.value = recuperaNombreDentista(idDentista);

  const apellidoNode = document.getElementById("surname");
  apellidoNode.value = recuperaAtributoDentista(idDentista, "surname");

  const dniNode = document.getElementById("dni");
  dniNode.value = recuperaAtributoDentista(idDentista, "dni")

  const activeNode = document.getElementById("active");
  activeNode.checked = recuperaAtributoDentista(idDentista, "active");

  const cuantityNode = document.getElementById("cuantity");
  cuantityNode.value = recuperaAtributoDentista(idDentista, "cuantity");

  const generoDentista = recuperaAtributoDentista(idDentista, "gender");
  const selector = generoDentista + "Gender";
  const genderNode = document.getElementById(selector);

  genderNode.selected = "true";

  const fNacimientoNode = document.getElementById("birthdate");
  fNacimientoNode.value = recuperaAtributoDentista(idDentista, "birthdate");

  //atributo "consulta"
  const valorConsulta= recuperaAtributoDentista(idDentista, "consulta");
  if (valorConsulta=="presencial") {
    const node = document.getElementById("presencial");
    node.checked="true";

  }
  else if (valorConsulta=="virtual") {
    const node = document.getElementById("virtual");
    node.checked="true";
  }
  else if (valorConsulta=="ambos") {
    const node = document.getElementById("ambos");
    node.checked="true";
  }
  //

  const direccionNode = document.getElementById("address");
  direccionNode.value = recuperaAtributoDentista(idDentista, "address");

  const telefonoNode = document.getElementById("phone");
  telefonoNode.value = recuperaAtributoDentista(idDentista, "phone");

  const correoNode = document.getElementById("mail");
  correoNode.value = recuperaAtributoDentista(idDentista, "mail");
  
  //atributo "age"
  const birthdate = document.getElementById("birthdate");
  const fechaNacimiento = new Date(birthdate.value);
  const edadNode = document.getElementById("age");
  const fechaActual = new Date();
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  edadNode.textContent = edad;


}

// Funciones de respuesta a los eventos

function respuestaPulsarBotonVolver() {
  suprimeDelDOMDatosDentista();
  actualizaVistaActual("listaDentistas");
  insertaEnDOMListaDentistas();
}

function respuestaPulsarBotonGuardar() {
  const datosDentista = recolectaDatosDentista();

  switch (tipoInteraccion) {
    case "consulta":
      const datosDentistaNode = document.getElementById("datosDentista");
      const idDentista = datosDentistaNode.dataset.dentista;

      actualizaDentista(idDentista, datosDentista);
      break;
    case "alta":
      altaDentista(datosDentista);
      break;
  }

  respuestaPulsarBotonVolver();
}

function recolectaDatosDentista() {
  const datosDentista = {};

  const nameNode = document.getElementById("name");
  datosDentista.name = [{ text: nameNode.value }];

  const surnameNode = document.getElementById("surname");
  datosDentista.surname = [{ text: surnameNode.value }];

  const dniNode = document.getElementById("dni");
  datosDentista.dni = dniNode.value;

  const genderNode = document.getElementById("gender");
  datosDentista.gender = genderNode.value;

  const activeNode = document.getElementById("active");
  datosDentista.active = activeNode.checked;

  const cuantityNode = document.getElementById("cuantity");
  datosDentista.cuantity = cuantityNode.value;

  const fNacimientoNode = document.getElementById("birthdate");
  datosDentista.birthdate = fNacimientoNode.value;

  //

  if(document.getElementById("presencial").checked==true){
    //datosDentista.consulta = consultaNode.value;
    datosDentista.consulta = "presencial";
  }
  else if(document.getElementById("virtual").checked==true){
    datosDentista.consulta = "virtual";
  }
  else if(document.getElementById("ambos").checked==true){
    datosDentista.consulta = "ambos";
  }
  

  const direccionNode = document.getElementById("address");
  datosDentista.address = direccionNode.value;

  const telefonoNode = document.getElementById("phone");
  datosDentista.phone = telefonoNode.value;

  const correoNode = document.getElementById("mail");
  datosDentista.mail = correoNode.value;

  return datosDentista;
}