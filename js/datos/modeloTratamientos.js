// Exportaciones
export {
  recuperaTodosLosTratamientos,
  recuperaTratamiento,
  recuperaNombreTratamiento,
  recuperaAtributoTratamiento,
  actualizaTratamiento,
  altaTratamiento,
  borraTratamiento
};

// Funciones de gestion de tratamientos
function recuperaTodosLosTratamientos() {
  const tratamientosItem = JSON.parse(localStorage.getItem("tratamientos"));
  const tratamientos = tratamientosItem ?? [];
  return tratamientos;
}

function recuperaTratamiento(id) {
  const tratamientoItem = JSON.parse(localStorage.getItem(id));
  return tratamientoItem ?? {};
}

function recuperaNombreTratamiento(id) {
  const tratamiento = recuperaTratamiento(id);
  return tratamiento.nombre[0].text ?? "Unknown";
}

function recuperaAtributoTratamiento(id, atributo) {
  let valor = "";
  const datosTratamiento = recuperaTratamiento(id);
  
  switch (atributo) {
    case "descripcion":
      valor = datosTratamiento.descripcion[0].text ?? "unknown";
      break;
    case "disponible":
      valor = datosTratamiento.disponible ?? false;
      break;
    case "precio":
      valor = datosTratamiento.precio ?? 0;
      break;
    case "moneda":
      valor = datosTratamiento.moneda ?? "euro";
  }
  return valor;

}

function actualizaTratamiento(id, datos) {
  localStorage.setItem(id, JSON.stringify(datos));
}

function borraTratamiento(id) {
  localStorage.removeItem(id);
  const tratamientosPrevio = recuperaTodosLosTratamientos();
  const tratamientosNuevo = tratamientosPrevio.filter((p) => {
    return p !== id;
  });
  localStorage.setItem("tratamientos", JSON.stringify(tratamientosNuevo));
}

function altaTratamiento(datos) {
  // Funcion auxiliar para generar un índice de la forma dentistaXX

  function nuevoIndiceTratamiento() {
    const prefijo = "tratamiento";
    const tratamientos = recuperaTodosLosTratamientos();

    if (tratamientos.length == 0) {
      return "tratamiento01";
    }

    const longitudPrefijo = prefijo.length;

    let indices = tratamientos.map((p) => {
      const sufijo = p.substring(longitudPrefijo, p.length);
      return parseInt(sufijo);
    });

    indices = indices.sort();
    const ultimoIndice = indices.length - 1;
    const valorNuevoIndice = indices[ultimoIndice] + 1;

    let sufijo = "";
    if (valorNuevoIndice < 10) {
      sufijo = "00" + valorNuevoIndice;
    } else {
      sufijo = "0" + valorNuevoIndice;
    }

    return prefijo + sufijo;
  }

  // Se genera un nuevo indice y se añade al item (array de dentistas)
  const id = nuevoIndiceTratamiento();
  let tratamientos = recuperaTodosLosTratamientos();
  tratamientos.push(id);
  localStorage.setItem("tratamientos", JSON.stringify(tratamientos));

  // Se añade un item para el nuevo dentista
  actualizaTratamiento(id, datos);
}