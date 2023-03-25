
document.getElementById("planification").addEventListener("click", pages);
function pages(event) {
    document.getElementById("planification").classList.toggle("collapse");
    document.getElementById("planification-1").classList.toggle("show");
    document.querySelector(".icone-menu").style.transform += "rotate(180deg)";
}