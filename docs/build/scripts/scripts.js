/* Desarrollador: Brandon Leonardo Adata Barrera */
document.addEventListener("DOMContentLoaded", function() {
    var principalPDF = "../media/PDF/menu_lemon.pdf";
    var respaldoPDF = "../media/respaldoPDF/menu_lemon.pdf";

    function downloadFile(url) {
        var link = document.createElement("a");
        link.href = url;
        link.download = "menu_lemon.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    fetch(principalPDF, { method: 'HEAD' })
        .then(function(response) {
            if (response.ok) {
                downloadFile(principalPDF);
            } else {
                downloadFile(respaldoPDF);
            }
        })
        .catch(function(error) {
            console.error("Error al intentar descargar el archivo PDF:", error);
            alert("No se pudo descargar el archivo PDF. Por favor, inténtelo más tarde.");
        });
});
/* Desarrollador: Brandon Leonardo Adata Barrera */