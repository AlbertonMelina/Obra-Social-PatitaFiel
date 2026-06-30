const paginaActual = window.parent.location.pathname.split("/").pop();

const paginas = {
    "panel-personal.html": "menu-panel",
    "cartilla.html": "menu-cartilla",
    "refugios.html": "menu-refugios",
    "pagos.html": "menu-pagos",
    "perfil.html": "menu-perfil"
};

const id = paginas[paginaActual];

if (id) {
    document.getElementById(id).classList.add("activo");
}