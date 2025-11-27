
document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const proyecto = document.getElementById("proyecto").value;
  const plataforma = document.getElementById("plataforma").value;
  const presupuesto = document.getElementById("presupuesto").value;
  const descripcion = document.getElementById("descripcion").value;

  const mensaje = `Hola FZ.ADS, quiero una cotización:%0A%0A
Nombre: ${nombre}%0A
Correo: ${correo}%0A
Proyecto: ${proyecto}%0A
Plataforma: ${plataforma}%0A
Presupuesto: ${presupuesto}%0A
Descripción: ${descripcion}`;

  const numeroWhatsApp = "543794332820";
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  window.open(url, "_blank");
});
