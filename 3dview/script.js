function interiorView() {
    var int = document.getElementById("iview");
    var ext = document.getElementById("eview");
    var interior = document.getElementById("interior");
    var exterior = document.getElementById("exterior");

    ext.classList.remove("active");
    int.classList.add("active");

    exterior.style.display = "none";
    interior.style.display = "block";
}

function exteriorView() {
    var ext = document.getElementById("eview");
    var int = document.getElementById("iview");
    var interior = document.getElementById("interior");
    var exterior = document.getElementById("exterior");

    int.classList.remove("active");
    ext.classList.add("active");

    interior.style.display = "none";
    exterior.style.display = "block";
}