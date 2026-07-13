function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").setTitle(
    "Sistema de Control de Break",
  );
}

function buscarPromotor(cedula) {
  const hoja =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("BASE_DATOS");
  const datos = hoja.getDataRange().getValues();
  for (let i = 1; i < datos.length; i++) {
    if (String(datos[i][0]).trim() === String(cedula).trim()) {
      return {
        encontrado: true,
        nombre: datos[i][1],
        tienda: datos[i][2],
        marca: datos[i][4],
      };
    }
  }
  return {
    encontrado: false,
  };
}

function registrarInicioBreak(cedula) {
  const hojaPromotores =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("BASE_DATOS");
  const hojaLog =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG_BREAKS");
  const promotores = hojaPromotores.getDataRange().getValues();
  let nombre = "";
  let marca = "";
  let tienda = "";
  let encontrado = false;
  for (let i = 1; i < promotores.length; i++) {
    if (String(promotores[i][0]).trim() === String(cedula).trim()) {
      nombre = promotores[i][1];
      tienda = promotores[i][2];
      marca = promotores[i][4];
      encontrado = true;
      break;
    }
  }
  if (!encontrado) {
    return "❌ Cédula no válida";
  }
  const hoy = new Date();
  const fechaHoy = hoy.toDateString();
  const registros = hojaLog.getDataRange().getValues();
  for (let i = registros.length - 1; i >= 1; i--) {
    if (
      String(registros[i][2]).trim() === String(cedula).trim() &&
      registros[i][7] == ""
    ) {
      return "⚠️ Ya tiene un break activo. Debe registrar FIN BREAK primero.";
    }
  }
  for (let i = 1; i < registros.length; i++) {
    const fechaRegistro = new Date(registros[i][1]).toDateString();
    const cedulaRegistro = String(registros[i][2]).trim();
    if (
      cedulaRegistro === String(cedula).trim() &&
      fechaRegistro === fechaHoy
    ) {
      return "⚠️ Ya registró su break del día.";
    }
  }
  const fecha = new Date();
  const nuevoId = "BRK-" + String(hojaLog.getLastRow()).padStart(4, "0");
  hojaLog.appendRow([
    nuevoId,
    fecha,
    cedula,
    nombre,
    marca,
    tienda,
    fecha,
    "",
    "",
    "",
  ]);
  return (
    "☕ INICIO DE BREAK REGISTRADO\n\n" +
    "Promotor: " +
    nombre +
    "\n" +
    "Marca: " +
    marca +
    "\n" +
    "Tienda: " +
    tienda +
    "\n\n" +
    "Tiempo autorizado: 15 minutos\n\n" +
    "Disfruta tu descanso."
  );
}

function registrarFinBreak(cedula) {
  const hojaLog =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG_BREAKS");

  const datos = hojaLog.getDataRange().getValues();
  for (let i = datos.length - 1; i >= 1; i--) {
    if (
      String(datos[i][2]).trim() === String(cedula).trim() &&
      datos[i][7] == ""
    ) {
      const horaFin = new Date();
      const horaInicio = new Date(datos[i][6]);
      const minutos = Math.round((horaFin - horaInicio) / 60000);
      let estado = "";
      if (minutos <= 17) {
        estado = "CUMPLE";
      } else if (minutos <= 20) {
        estado = "TOLERANCIA";
      } else {
        estado = "EXCEDIDO";
      }
      hojaLog.getRange(i + 1, 8).setValue(horaFin);
      hojaLog.getRange(i + 1, 9).setValue(minutos);
      hojaLog.getRange(i + 1, 10).setValue(estado);
      actualizarRankingAsesores();
      return (
        "✅ FIN DE BREAK REGISTRADO\n\n" +
        "Duración: " +
        minutos +
        " minutos\n" +
        "Estado: " +
        estado +
        "\n\n" +
        "Gracias por registrar tu regreso."
      );
    }
  }
  return "No existe un Break activo para esta cédula.";
}

function irDashboard() {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("DASHBOARD").activate();
}

function irLogBreaks() {
  SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG_BREAKS").activate();
}

function irConfiguracion() {
  SpreadsheetApp.getActiveSpreadsheet()
    .getSheetByName("CONFIGURACION")
    .activate();
}
function obtenerEstadisticas() {
  const hoja =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG_BREAKS");
  const datos = hoja.getDataRange().getValues();
  let breaksHoy = 0;
  let cumple = 0;
  let tolerancia = 0;
  let excedido = 0;
  let activos = 0;
  let listaTolerancia = "";
  let listaExcedidos = "";
  let ultimoRegistro = "-";
  const hoy = new Date().toDateString();
  for (let i = 1; i < datos.length; i++) {
    const fecha = new Date(datos[i][1]).toDateString();
    if (fecha === hoy) {
      breaksHoy++;
      if (datos[i][7] == "") {
        activos++;
      }
      if (datos[i][9] === "CUMPLE") {
        cumple++;
      }
      if (String(datos[i][9]).trim() === "TOLERANCIA") {
        tolerancia++;
        listaTolerancia +=
          datos[i][3] +
          " - " +
          datos[i][4] +
          " (" +
          datos[i][8] +
          " min)<br><br>";
      }
      if (String(datos[i][9]).trim() === "EXCEDIDO") {
        excedido++;
        listaExcedidos +=
          datos[i][3] +
          " - " +
          datos[i][4] +
          " (" +
          datos[i][8] +
          " min)<br><br>";
      }
      ultimoRegistro = datos[i][3];
    }
  }
  let porcentaje = 0;
  if (breaksHoy > 0) {
    porcentaje = Math.round((cumple / breaksHoy) * 100);
  }
  return {
    breaksHoy: breaksHoy,
    activos: activos,
    cumple: cumple,
    tolerancia: tolerancia,
    excedido: excedido,
    ultimoRegistro: ultimoRegistro,
    porcentaje: porcentaje,
    listaTolerancia: listaTolerancia,
    listaExcedidos: listaExcedidos,
  };
}
function obtenerRankingAsesores() {
  const hoja =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("LOG_BREAKS");

  const datos = hoja.getDataRange().getValues();

  const asesores = {};

  const hoy = new Date().toDateString();

  Logger.log("HOY: " + hoy);

  for (let i = 1; i < datos.length; i++) {
    const fechaRegistro = new Date(datos[i][1]).toDateString();

    const nombre = datos[i][3];

    const estado = String(datos[i][9]).trim();

    Logger.log(
      "Nombre: " +
        nombre +
        " | Fecha Registro: " +
        fechaRegistro +
        " | Hoy: " +
        hoy,
    );

    if (fechaRegistro !== hoy) {
      Logger.log("DESCARTADO");
      continue;
    }

    Logger.log("TOMADO");

    if (!nombre) {
      continue;
    }

    if (!asesores[nombre]) {
      asesores[nombre] = {
        total: 0,
        cumple: 0,
        tolerancia: 0,
        excedido: 0,
      };
    }

    asesores[nombre].total++;

    if (estado === "CUMPLE") {
      asesores[nombre].cumple++;
    }

    if (estado === "TOLERANCIA") {
      asesores[nombre].tolerancia++;
    }

    if (estado === "EXCEDIDO") {
      asesores[nombre].excedido++;
    }
  }

  let ranking = [];

  for (let nombre in asesores) {
    const a = asesores[nombre];

    const porcentaje = a.total > 0 ? Math.round((a.cumple / a.total) * 100) : 0;

    ranking.push({
      nombre: nombre,
      total: a.total,
      cumple: a.cumple,
      tolerancia: a.tolerancia,
      excedido: a.excedido,
      porcentaje: porcentaje,
    });
  }

  ranking.sort(function (a, b) {
    return b.porcentaje - a.porcentaje;
  });

  Logger.log(JSON.stringify(ranking));

  return ranking;
}

function actualizarRankingAsesores() {
  Logger.log("===== INICIO ACTUALIZAR RANKING =====");

  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const hoja = ss.getSheetByName("RANKING_ASESORES");

  const ranking = obtenerRankingAsesores();

  Logger.log("REGISTROS ENCONTRADOS: " + ranking.length);

  Logger.log(JSON.stringify(ranking));

  hoja.clearContents();

  hoja
    .getRange(1, 1, 1, 7)
    .setValues([
      [
        "RANK",
        "ASESOR",
        "TOTAL BREAKS",
        "CUMPLE",
        "TOLERANCIA",
        "EXCEDIDO",
        "% CUMPLIMIENTO",
      ],
    ]);

  if (ranking.length === 0) {
    Logger.log("RANKING VACIO");
    return;
  }

  const filas = ranking.map((r, index) => {
    let rank = index + 1;

    if (rank === 1) {
      rank = "🥇";
    } else if (rank === 2) {
      rank = "🥈";
    } else if (rank === 3) {
      rank = "🥉";
    }

    return [
      rank,
      r.nombre,
      r.total,
      r.cumple,
      r.tolerancia,
      r.excedido,
      r.porcentaje,
    ];
  });

  Logger.log("FILAS A INSERTAR: " + filas.length);

  hoja.getRange(2, 1, filas.length, 7).setValues(filas);

  SpreadsheetApp.flush();

  Logger.log("===== FIN ACTUALIZAR RANKING =====");
}

function pruebaRanking() {
  const ranking = obtenerRankingAsesores();

  Logger.log(JSON.stringify(ranking, null, 2));
}

function probarFechaHoy() {
  Logger.log(new Date());

  Logger.log(Session.getScriptTimeZone());
}
