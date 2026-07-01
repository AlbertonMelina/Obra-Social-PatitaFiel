const paginaActual = window.parent.location.pathname.split("/").pop();

const paginas = {
    "panel-personal.html": "menu-panel",
    "cartilla.html": "menu-cartilla",
    "refugios.html": "menu-refugios",
    "mis-pagos.html": "menu-pagos",
    "mi-perfil.html": "menu-perfil"
};

const id = paginas[paginaActual];

if (id) {
    document.getElementById(id).classList.add("activo");
}