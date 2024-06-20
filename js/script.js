document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".clear");
        elements.forEach(function(element) {
            element.remove();
        });
});
