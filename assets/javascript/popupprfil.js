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
function closePopup(){
    let classe = menu.classList;
    classe.toggle("show");
}

// POUR LA DECONNEXION
document.getElementById("deconnexion").style.cursor = "pointer";
document.getElementById("deconnexion").addEventListener("click", deconnection);
function deconnection() {
    if (window.confirm("Etes-vous vraiment sûre de vouloir vous déconnecter ?")) {
        sessionStorage.clear();
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
    }
}
if (sessionStorage.getItem("ADMIN") && localStorage.getItem("ADMINISTRATEURS")){
    
    const SUPER_ADMINISTRATEUR = JSON.parse(localStorage.getItem("SUPER_ADMINISTRATEUR"));
    const SESSION = JSON.parse(sessionStorage.getItem("ADMIN"));
    const ADMINISTRATEURS = JSON.parse(localStorage.getItem("ADMINISTRATEURS")).filter(cle => cle.statut == 1 || cle.statut == "ADMIN");
    console.log(ADMINISTRATEURS)
    console.log( "SUPER_ADMINISTRATEUR", SUPER_ADMINISTRATEUR.email,SUPER_ADMINISTRATEUR.password )
    console.log("SESSION", SESSION.email, SESSION.password)
    console.log(ADMINISTRATEURS.find(cle => cle.email == SESSION.email && cle.password == SESSION.password));

    // if (ADMINISTRATEURS.find(cle => cle.email == SESSION.email && cle.password == SESSION.password) && (SESSION.email == SUPER_ADMINISTRATEUR.email && SESSION.password == SUPER_ADMINISTRATEUR.password)) {
    //      
    // } 

    if (ADMINISTRATEURS.find(cle => cle.email == SESSION.email && cle.password == SESSION.password) && (SESSION.email != SUPER_ADMINISTRATEUR.email && SESSION.password != SUPER_ADMINISTRATEUR.password)){
        if (document.querySelector("a[href='./addadmin.html']")){
            document.querySelectorAll("a[href='./addadmin.html']").forEach(cle => cle.remove());
        }
        if (document.querySelector("a[href='./admin.html']")){
            document.querySelectorAll("a[href='./admin.html']").forEach(cle => cle.remove());
        }
        if (window.location.href.includes("admin.html") || window.location.href.includes("addadmin.html")){
            window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
        }
    }
}

