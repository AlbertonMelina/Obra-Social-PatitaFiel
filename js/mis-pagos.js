/*detalle factura*/

/*consutlar acerca del js*/

const abrirDetalle = document.getElementById("abrirDetalle");
const cerrarDetalle = document.getElementById("cerrarDetalle");
const modalDetalle = document.getElementById("modalDetalle");

if (abrirDetalle) {
    abrirDetalle.addEventListener("click", (e) => {
        e.preventDefault();
        modalDetalle.classList.add("activo");
    });
}

if (cerrarDetalle) {
    cerrarDetalle.addEventListener("click", () => {
        modalDetalle.classList.remove("activo");
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modalDetalle) {
        modalDetalle.classList.remove("activo");
    }
});


/*cambiar metodo pago*/

const abrirMetodo = document.getElementById("abrirMetodo");
const cerrarMetodo = document.getElementById("cerrarMetodo");
const modalMetodo = document.getElementById("modalMetodo");

if (abrirMetodo) {
    abrirMetodo.addEventListener("click", (e) => {
        e.preventDefault();
        modalMetodo.classList.add("activo");
    });
}

if (cerrarMetodo) {
    cerrarMetodo.addEventListener("click", () => {
        modalMetodo.classList.remove("activo");
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modalMetodo) {
        modalMetodo.classList.remove("activo");
    }
});


/*btn pagar ahora*/

const btnPagar = document.getElementById("btnPagar");

if (btnPagar) {
    btnPagar.addEventListener("click", () => {

        alert("¡Pago realizado con éxito!");

        // Si después tienen la pantalla de éxito:
        // window.location.href = "pagoDeFactura.html";
    });
}