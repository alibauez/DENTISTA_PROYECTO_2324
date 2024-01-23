//Importaciones y exportaciones
export { cargaDatosDentistas };
export{cargaDatosTratamientos};

//Cargo los datos de los dentistas
const dentistas = ["dentista01", "dentista02", "dentista03", "dentista04"];

const dentista01 = {
  name: [{ text: "Alberto"}],
  surname: [{ text: "Garcia"}],
  dni: "77867091Q",
  active: true,
  cuantity: 52,             //cantidad de consultas realizadas
  gender: "male",
  birthdate: "1969-04-23", //yyyy-mm-dd
  //age
  consulta: "presencial",   //radioButton
  address: "Calle Asuncion, 13, 41011, Sevilla, España", 
  phone: "+34654632176",
  mail: "alberto@us.es"
};

const dentista02 = {
  name: [{ text: "Alfonso"}],
  surname: [{text: "Ibañez"}],
  dni: "77867091Q",
  active: true,
  cuantity: 24,             //cantidad de consultas realizadas
  gender: "male",
  birthdate: "1974-05-18", //yyyy-mm-dd
  //age
  consulta: "ambos",   //radioButton
  address: "Calle Virgen de la Cinta, 3, 41022, Sevilla, España",
  phone: "+34654632176",
  mail: "alfonso@us.es"
};

const dentista03 = {
  name: [{ text: "Rafael"}],
  surname: [{ text: "Prieto"}],
  dni: "77867091Q",
  active: true,
  cuantity: 15,             //cantidad de consultas realizadas
  gender: "male",
  birthdate: "1974-05-18", //yyyy-mm-dd
  //age
  consulta: "virtual",   //radioButton
  address: "Calle Virgen de Lujan, 52, 41010, Sevilla, España",
  phone: "+34758632176",
  mail: "rafael@us.es"

};

const dentista04 = {
  name: [{ text: "Valle" }],
  surname: [{ text: "Alonso de Caso"}],
  dni: "77867091Q",   
  active: true,
  cuantity: 37,             //cantidad de consultas realizadas
  gender: "female",
  birthdate: "1974-05-18",  //yyyy-mm-dd
  //age
  consulta: "presencial",   //radioButton
  address: "Avenida de la República Argentina, 3, 41011, Sevilla, España",
  phone: "+34654632176",
  mail: "valle@us.es"

};

//
const tratamientos =  ["tratamiento01", "tratamiento02", "tratamiento03"];

const tratamiento01 = {
  nombre: [{text: "Limpieza"}],
  descripcion: [{text: "Nuestro tratamiento de limpieza dental es un paso fundamental para mantener una sonrisa radiante y saludable. Nuestro equipo de profesionales altamente capacitados se dedica a brindarte una experiencia cómoda y personalizada. La limpieza dental es mucho más que un simple procedimiento estético; es una parte esencial de la prevención y el cuidado dental. Durante la sesión, nuestro higienista dental eliminará cuidadosamente la placa y el sarro acumulados, que no pueden ser eliminados con la rutina diaria de cepillado y uso de hilo dental. Este proceso no solo ayuda a prevenir enfermedades de las encías y caries, sino que también contribuye a mantener un aliento fresco y una sonrisa resplandeciente. Nos enorgullece utilizar tecnología de vanguardia y técnicas actualizadas para garantizar la efectividad y comodidad del tratamiento."}],
  disponible: true,
  precio: 15, 
  moneda: "euro"
};

const tratamiento02 = {
  nombre: [{text: "Blanqueamiento"}],
  descripcion: [{text: "Descubre la luminosidad oculta de tu sonrisa con nuestro avanzado tratamiento de blanqueamiento dental. En nuestra clínica dental, entendemos la importancia de una sonrisa radiante y estamos comprometidos a brindarte resultados excepcionales de manera segura y efectiva. Nuestro procedimiento de blanqueamiento dental utiliza tecnología de punta y productos de alta calidad para eliminar las manchas y decoloraciones que pueden acumularse con el tiempo. Trabajamos estrechamente contigo para personalizar el tratamiento, asegurándonos de que se adapte a tus necesidades y expectativas individuales. El blanqueamiento dental no solo mejora la estética de tu sonrisa, sino que también puede aumentar tu confianza y dejar una impresión duradera. Ya sea que estés preparándote para un evento especial o simplemente desees revitalizar tu sonrisa, nuestro tratamiento de blanqueamiento dental es una opción segura y efectiva."}],
  disponible: true,
  precio: 50,
  moneda: "euro"
};

const tratamiento03 = {
  nombre: [{text: "Ortodoncia"}],
  descripcion: [{text: "En nuestra clínica dental, entendemos que cada sonrisa es única, y si estás considerando mejorar la alineación de tus dientes, nuestro tratamiento de ortodoncia puede ser la solución perfecta. La ortodoncia no solo transforma la apariencia de tu sonrisa, sino que también puede contribuir significativamente a la salud bucal a largo plazo. Nuestro equipo de ortodoncistas altamente calificados utiliza tecnología avanzada y enfoques personalizados para crear un plan de tratamiento adaptado a tus necesidades específicas. Ya sea que optes por brackets tradicionales, alineadores transparentes u otras opciones, trabajaremos contigo para garantizar la comodidad y eficacia de tu tratamiento. La ortodoncia no solo se trata de lograr una sonrisa estéticamente agradable, sino también de corregir problemas de mordida y alinear correctamente los dientes para mejorar la función oral. Durante todo el proceso, nuestro equipo estará a tu disposición para responder a tus preguntas, brindarte apoyo y asegurarse de que te sientas cómodo en cada etapa."}],
  disponible: true,
  precio: 1000,
  moneda: "euro"
}

//Función para cargar los datos de los dentistas
function cargaDatosDentistas() {
  localStorage.clear();
  localStorage.setItem("dentistas", JSON.stringify(dentistas));
  dentistas.forEach((p) => {
    localStorage.setItem(p, JSON.stringify(eval(p)));
  });
}


//
function cargaDatosTratamientos() {
  //localStorage.clear();
  localStorage.setItem("tratamientos", JSON.stringify(tratamientos));
  tratamientos.forEach((p) => {
    localStorage.setItem(p, JSON.stringify(eval(p)));
  });
} 