// window.addEventListener("DOMContentLoaded", (event) => {
    // POUR VERIFIER SI LA SESSION EXISTE
    if (!sessionStorage.getItem("SESSION_ADMIN")) {
        // window.location.href = "login.html";
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
        // window.location.href = "login.html";
    } else {
        // Pour balancer l'ouverture et la fermerture du menu dropdown
        let user = document.getElementById("logo-user");
        let menu = document.getElementById("dropdown-menu");
        function variante(e) {
            let use = user.classList;
            let classe = menu.classList;
            menu.style.position = "absolute";
            menu.style.inset = "0px 0px auto auto";
            menu.style.margin = "0px";
            menu.style.transform = "translate(-12px, 50px)";
            classe.toggle("show");
        }
        user.addEventListener("click", variante);

        // FPOUR FERMER LE MENU dropdown lorsqu'on clique sur un élément du menu
        document.querySelectorAll(".element-dropdown").forEach(cle => cle.addEventListener("click", closePopup))
        function closePopup() {
            let classe = menu.classList;
            classe.toggle("show");
        }        
    }
// })