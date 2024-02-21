function interiorView() {
    let int = document.getElementById("iview");
    let ext = document.getElementById("eview");
    let interior = document.getElementById("interior");
    let exterior = document.getElementById("exterior");

    ext.classList.remove("active");
    int.classList.add("active");

    exterior.style.display = "none";
    interior.style.display = "block";
}

function exteriorView() {
    let ext = document.getElementById("eview");
    let int = document.getElementById("iview");
    let interior = document.getElementById("interior");
    let exterior = document.getElementById("exterior");

    int.classList.remove("active");
    ext.classList.add("active");

    interior.style.display = "none";
    exterior.style.display = "block";
}