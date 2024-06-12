document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 500) {
        const elements = document.querySelectorAll(".clear");
        elements.forEach(function(element) {
            element.remove();
        });
    }
});
