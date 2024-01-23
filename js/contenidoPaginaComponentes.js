export { insertaEnDOMContenidoPaginaComponentes, suprimeDelDOMContenidoPaginaComponentes };

const contenidoHTML = `
<div class="contenidoInicial">
  <img class="imagenUS" src="./img/Universidad-de-Sevilla.webp" alt="Imagen US"/>
  <h2>Componentes del grupo</h2>
  <ul class="listaComponentes">
    <li class="itemComponente">
      <img src="./img/foto_valle.jpeg" alt="María del Valle Alonso de Caso Ortiz" /><br>María del Valle Alonso<br> de Caso Ortiz
    </li>
    <li class="itemComponente">
    <img src="./img/foto_rafa.jpeg" alt="Rafael Prieto" /><br> Rafael Prieto García
    </li>
    <li class="itemComponente">
      <img src="./img/foto_alfonso.jpeg" alt="Alfonso Ibáñez" /><br> Alfonso Ibáñez Rodríguez
    </li>
    <li class="itemComponente">
      <img src="./img/foto_alberto.jpeg" alt="Alberto García" /><br> Alberto García Mármol
    </li>
  </ul>
</div>
`;

function insertaEnDOMContenidoPaginaComponentes() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = contenidoHTML;
}

function suprimeDelDOMContenidoPaginaComponentes() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}