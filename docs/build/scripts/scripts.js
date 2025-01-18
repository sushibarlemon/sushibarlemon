document.addEventListener("DOMContentLoaded", function() {
    var link = document.createElement("a");
    link.href = "../media/PDF/menu_lemon.pdf"; 
    link.download = "menu_lemon.pdf"; // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});