document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 768) {
        const element = document.getElementById("respon");
        if (element) {
            element.remove();
        }
    }
    if (window.innerWidth <= 768) {
        const element = document.getElementById("default");
        if (element) {
            element.remove();
        }
    }
});
