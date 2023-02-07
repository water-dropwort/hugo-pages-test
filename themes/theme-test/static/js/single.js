function get_columncontainers() {
    const sidebar = document.getElementById("book-sidebar");
    const bkmain = document.getElementById("book-main");
    const elems = [sidebar, bkmain];
    return elems;
}

function init_single() {
    get_columncontainers().forEach(function (elem) {
        if (matchMedia("(max-width: 520px)").matches) {
            elem.setAttribute("layout-status", "main-only");
        }
        else {
            elem.setAttribute("layout-status", "two-column");
        }});
}

function toggle_sidebar_visibility() {
    console.log("called toggle_sidebar");
    get_columncontainers().forEach(function (elem) {
        if(elem.getAttribute("layout-status") == "main-only") {
            elem.setAttribute("layout-status", "two-column");
        }
        else{
            elem.setAttribute("layout-status", "main-only");
        }});
}
