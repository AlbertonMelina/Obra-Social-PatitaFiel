// ===============================
// MODAL EDITAR PERFIL
// ===============================

const abrirEditar = document.getElementById("abrirEditar");
const modalEditar = document.getElementById("modalEditarPerfil");
const cerrarEditar = document.getElementById("cerrarEditarPerfil");

abrirEditar.addEventListener("click", function (e) {
    e.preventDefault();
    modalEditar.classList.add("activo");
});

cerrarEditar.addEventListener("click", function () {
    modalEditar.classList.remove("activo");
});

modalEditar.addEventListener("click", function (e) {
    if (e.target === modalEditar) {
        modalEditar.classList.remove("activo");
    }
});


// ===============================
// MODAL CAMBIAR CONTRASEÑA
// ===============================

const abrirPassword = document.getElementById("abrirPassword");
const modalPassword = document.getElementById("modalPassword");
const cerrarPassword = document.getElementById("cerrarPassword");

abrirPassword.addEventListener("click", function () {
    modalPassword.classList.add("activo");
});

cerrarPassword.addEventListener("click", function () {
    modalPassword.classList.remove("activo");
});

modalPassword.addEventListener("click", function (e) {
    if (e.target === modalPassword) {
        modalPassword.classList.remove("activo");
    }
});


// ===============================
// CERRAR CON ESC
// ===============================

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        modalEditar.classList.remove("activo");
        modalPassword.classList.remove("activo");

    }

});