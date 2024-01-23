//Contenido pagina inicial

//Importaciones y exportaciones
export { insertaEnDOMContenidoInicial, suprimeDelDOMContenidoInicial };

const contenidoHTML = `
<h1>Clínica Dental Milán</h1>
<div class="parrafo1">
  <h2>¿Quiénes somos?</h2>
  <p>La reconocida Clínica Dental Milán en Sevilla lleva más de dos décadas siendo un punto de referencia en el ámbito odontológico.
    Nuestro enfoque se orienta hacia la promoción de la salud bucodental, abarcando la prevención, diagnóstico y rehabilitación de diversas afecciones dentales.<br>
    Con el respaldo de más de 14,000 pacientes, nuestra experiencia y excelencia profesional son respaldadas por la confianza depositada en nosotros. Sin embargo, lo más apreciado por nuestros pacientes no son solamente la tecnología o los costos, sino el ambiente familiar y acogedor que ofrecemos en un entorno de lujo y comodidad. 
    Nuestro objetivo es redefinir la experiencia de ir al dentista en Sevilla, proporcionando un entorno distinto y reconfortante.
  </p>
  <img src="./img/clinica.webp" alt="Imagen 1">
</div>

<div class="parrafo2">
  <h2>¿Por qué debes ir al dentista?</h2>
  <p>Hay múltiples razones para mantener una visita regular al dentista, siendo la prevención una de las más importantes.
    En Clínica Dental Milán, entendemos que la prevención en la salud bucal es esencial para evitar problemas futuros y detectar afecciones a tiempo. Recomendamos acudir al dentista al menos dos veces al año.<br>
    La detección temprana de caries, incluso aquellas que no son visibles a simple vista o pueden parecer solo manchas, es fundamental. Nuestro equipo de odontólogos realiza exhaustivas exploraciones para identificar estas caries. Cuanto antes se detecten, más sencillo y económico será el tratamiento necesario.
    Asimismo, detectar el cáncer oral en sus primeras etapas es crucial y puede ser realizado durante revisiones de rutina con el dentista. Realizar estos controles con regularidad es vital para la detección temprana.
    El seguimiento cercano de la evolución del paciente durante los tratamientos garantiza los mejores resultados en su salud dental.<br>
    Si estás interesado, puedes comunicarte con nuestra clínica dental llamando al 954163348 para solicitar tu primera visita gratuita.
  </p>
  <img src="./img/dentista.jpeg" alt="Imagen 2">
</div>

<div class="parrafo3">
  <h2>Tu dentista de confianza</h2> 
  <p>En nuestra Clínica Dental disponemos de un destacado equipo humano, altamente cualificado y de renombre. Nuestro enfoque en el cuidado del paciente y la búsqueda constante de las soluciones más óptimas nos permite garantizar resultados excelentes en cada caso.
    Nuestros profesionales dentales acumulan más de dos décadas de experiencia, lo que nos habilita para ofrecer un servicio odontológico integral de la más alta calidad.
  </p>
  <img src="./img/vistaAnguloBajoDentistas.webp" alt="Imagen 3">
</div>

  <div class="contacto-horario-ubicacion">
    <div class="contacto">
     <h3>Contacto</h3>
     <p>Teléfono: 954163348</p>
      <p>Email: info@clinicamilan.com</p>
      <img src="./img/phoneIcon.png" alt="contacto">
    </div>
    <div class="horario">
      <h3>Horario</h3>
      <p>Lunes a Viernes: 9:00  - 20:00 </p>
      <p>Sábados: 9:00  - 13:00 </p>
      <img src="./img/timeIcon.png" alt="Horario">
    </div>
    <div class="ubicacion">
      <h3>Ubicación</h3>
      <p>C/ Asunción nº42, Sevilla.</p>
      <img src="./img/locationIcon.png" alt="Icono de Ubicación">
    </div>
  </div>
<iframe class="mapa-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.580111245429!2d-6.000283324470584!3d37.3761110720885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c3c6a90fd23%3A0xacd5b309474668e7!2sC%2F%20Asunci%C3%B3n%2C%2042%2C%2041011%20Sevilla!5e0!3m2!1ses!2ses!4v1701607652591!5m2!1ses!2ses" 
width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`;
function insertaEnDOMContenidoInicial() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = contenidoHTML;
}

function suprimeDelDOMContenidoInicial() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}