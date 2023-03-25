let user = document.getElementById("logo-user");
let menu = document.getElementById("dropdown-menu");
function variante(e) {
    let use = user.classList;
    let classe = menu.classList;
    menu.style.position = "absolute";
    menu.style.inset = "0px 0px auto auto";
    menu.style.margin = "0px";
    menu.style.transform = "translate(-12px, 50px)";
    use.toggle("show");
    classe.toggle("show");
}
user.addEventListener("click", variante);