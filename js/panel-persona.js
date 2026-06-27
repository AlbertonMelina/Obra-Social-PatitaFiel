// MODAL HISTORIAL MÉDICO

const modalHistorial = document.getElementById("modalHistorial");

const botonesHistorial = document.querySelectorAll(".abrirHistorial");

const cerrarHistorial = document.getElementById("cerrarHistorial");

const nombreMascota = document.getElementById("nombreMascota");
const edadMascota = document.getElementById("edadMascota");
const pesoMascota = document.getElementById("pesoMascota");
const fotoMascota = document.getElementById("fotoMascota");
const historialMascota = document.getElementById("historialMascota");

botonesHistorial.forEach((boton) => {

    boton.addEventListener("click", () => {

        nombreMascota.textContent = boton.dataset.nombre;
        edadMascota.textContent = "Edad: " + boton.dataset.edad;
        pesoMascota.textContent = "Peso: " + boton.dataset.peso;
        fotoMascota.src = boton.dataset.foto;

        historialMascota.innerHTML = boton.dataset.historial;

        modalHistorial.classList.add("activo");

    });

});

cerrarHistorial.addEventListener("click", () => {

    modalHistorial.classList.remove("activo");

});

modalHistorial.addEventListener("click", (e) => {

    if (e.target === modalHistorial) {

        modalHistorial.classList.remove("activo");

    }

});

// MODAL DONACIONES

const modalDonaciones = document.getElementById("modalDonaciones");

const abrirDonaciones = document.getElementById("abrirModal");

const cerrarDonaciones = document.getElementById("cerrarDonaciones");

abrirDonaciones.addEventListener("click", (e) => {

    e.preventDefault();

    modalDonaciones.classList.add("activo");

});

cerrarDonaciones.addEventListener("click", () => {

    modalDonaciones.classList.remove("activo");

});

modalDonaciones.addEventListener("click", (e) => {

    if (e.target === modalDonaciones) {

        modalDonaciones.classList.remove("activo");

    }

});

//=====================================
// MODAL AGREGAR / EDITAR MASCOTA
//=====================================

const modalMascota = document.getElementById("modalMascota");

const abrirAgregarMascota = document.getElementById("abrirAgregarMascota");

const cerrarMascota = document.querySelector(".cerrarMascota");

const tituloFormulario = document.getElementById("tituloFormulario");

const nombreInput = document.getElementById("nombreInput");
const tipoInput = document.getElementById("tipoInput");
const fechaInput = document.getElementById("fechaInput");
const razaInput = document.getElementById("razaInput");

abrirAgregarMascota.addEventListener("click", () => {

    tituloFormulario.textContent = "Añadir mascota";

    nombreInput.value = "";
    tipoInput.selectedIndex = 0;
    fechaInput.value = "";
    razaInput.value = "";

    modalMascota.classList.add("activo");

});

document.querySelectorAll(".editarMascota").forEach((boton) => {

    boton.addEventListener("click", () => {

        tituloFormulario.textContent = "Editar mascota";

        nombreInput.value = "";
        tipoInput.value = "";
        fechaInput.value = "";
        razaInput.value = "";

        modalMascota.classList.add("activo");

    });

});

cerrarMascota.addEventListener("click", () => {

    modalMascota.classList.remove("activo");

});

modalMascota.addEventListener("click", (e) => {

    if (e.target === modalMascota) {

        modalMascota.classList.remove("activo");

    }

});

//=====================================
// MODAL ELIMINAR
//=====================================

const modalEliminar = document.getElementById("modalEliminar");

const botonesEliminar = document.querySelectorAll(".eliminarMascota");

const cerrarEliminar = document.getElementById("cerrarEliminar");

const cancelarEliminar = document.querySelector(".cancelar");

const confirmarEliminar = document.querySelector(".confirmarEliminar");

let mascotaSeleccionada = null;


// Abrir modal

botonesEliminar.forEach((boton) => {

    boton.addEventListener("click", () => {

        mascotaSeleccionada = boton.closest(".mascota");

        modalEliminar.classList.add("activo");

    });

});

// Cancelar

cancelarEliminar.addEventListener("click", () => {

    modalEliminar.classList.remove("activo");

});


// Confirmar eliminación

confirmarEliminar.addEventListener("click", () => {

    if (mascotaSeleccionada) {

        mascotaSeleccionada.remove();

    }

    modalEliminar.classList.remove("activo");

});


// Cerrar haciendo click fuera

modalEliminar.addEventListener("click", (e) => {

    if (e.target === modalEliminar) {

        modalEliminar.classList.remove("activo");

    }

});