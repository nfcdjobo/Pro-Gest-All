if (sessionStorage.SESSION_ADMIN){
    if (localStorage.ADMINISTRATEURS){
        const session = JSON.parse(sessionStorage.SESSION_ADMIN);
        const element = JSON.parse(localStorage.ADMINISTRATEURS);
        const personne = element.find(cle => cle.email === session.login && cle.password === session.password && cle.roles != "SUPER-ADMIN");
        if(personne){
            if (document.getElementById("admin-html")) {
                document.getElementByIdAll("admin-html").remove();
            }
            if (document.getElementById("admin-create-html")) {
                document.getElementById("admin-create-html").remove();
            }
            if (document.getElementById("admin-nombre-html")) {
                document.getElementById("admin-nombre-html").remove();
            }
            if (window.location.href.includes("admin.html") || window.location.href.includes("addadmin.html")) {
                window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
            }
        }else{
            document.getElementById("error-password").textContent = "Accèss incorrecte !";
            window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
        }

    }else{
        document.getElementById("error-password").textContent = "Accèss incorrecte !";
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
    }
}else{
    window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
}


// Pour la déconnection
// POUR LA DECONNEXION
document.getElementById("deconnexion").style.cursor = "pointer";
document.getElementById("deconnexion").addEventListener("click", deconnection);
function deconnection() {
    if (window.confirm("Etes-vous vraiment sûre de vouloir vous déconnecter ?")) {
        sessionStorage.clear();
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
    }
}