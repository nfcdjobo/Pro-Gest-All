if(document.querySelector(".bouton-primondial")){
    const primondial = document.querySelectorAll(".bouton-primondial");
    primondial.forEach(cle =>{ cle.style.color = "white"; cle.style.fontWeight = "700" })
}

if (sessionStorage.SESSION_ADMIN_Pro_Gest_All){
    if (localStorage.ADMINISTRATEURS_Pro_Gest_All){
        const session = JSON.parse(sessionStorage.SESSION_ADMIN_Pro_Gest_All);
        const element = JSON.parse(localStorage.ADMINISTRATEURS_Pro_Gest_All);
        const personne = element.find(cle => cle.email === session.login && cle.password === session.password && cle.etat == "ADMINISTRATEUR");
        
        if(personne){
            if (document.getElementById("admin-html")) {
                document.getElementById("admin-html").remove();
            }
            if (document.getElementById("admin-create-html")) {
                document.getElementById("admin-create-html").remove();
            }
            if (document.getElementById("admin-nombre-html")) {
                document.getElementById("admin-nombre-html").remove();
            }
            if (window.location.href.includes("admin.html") || window.location.href.includes("addadmin.html")) {
                window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
                // window.location.href = "login.html";
            }
            if (document.getElementById("user-profile")){
                document.getElementById("user-profile").src = personne.photo;
                document.getElementById("user-profile").style.backgroundSize = "cove";
                document.getElementById("user-profile").style.borderRadius = "100%";
                document.getElementById("user-profile").style.width = "1.8rem";
                document.getElementById("user-profile").style.height = "1.8rem";
            }
            document.getElementById("satut-admin").textContent =  personne.etat;
            document.getElementById("satut-admin").style.backgroundColor = "green";
            document.getElementById("satut-admin").style.color = "white";
            if (document.getElementById("error-password")) {
                document.getElementById("error-password").textContent = "Accèss incorrecte !";
            }
            if (document.getElementById("statut-admin")){
                document.getElementById("statut-admin").textContent = personne.roles;
            }
        }else if(element.find(cle => cle.email == session.login && cle.password == session.password && cle.etat == "SUPER ADMINISTRATEUR")){
            let myAdn = element.find(cle => cle.email == session.login && cle.password == session.password && cle.etat == "SUPER ADMINISTRATEUR");
            document.getElementById("satut-admin").textContent = myAdn.etat;
            document.getElementById("satut-admin").style.backgroundColor = "green";
            document.getElementById("satut-admin").style.color = "white";
            if (document.getElementById("user-profile")){
                if(myAdn.photo != ""){
                     document.getElementById("user-profile").src = myAdn.photo;
                }else{
                    document.getElementById("user-profile").src = "./../icons/avatar.svg";
                }
                
                document.getElementById("user-profile").style.backgroundSize = "cove";
                document.getElementById("user-profile").style.borderRadius = "100%";
                document.getElementById("user-profile").style.width = "1.8rem";
                document.getElementById("user-profile").style.height = "1.8rem";
            }
        }
    }else{
        if (document.getElementById("error-password")){
            document.getElementById("error-password").textContent = "Accèss incorrecte !";
        }
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
        // window.location.href = "/login.html";
    }
}else{
    window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
    // window.location.href = "login.html";
}

// Pour la déconnection
// POUR LA DECONNEXION
document.getElementById("deconnexion").style.cursor = "pointer";
document.getElementById("deconnexion").addEventListener("click", deconnection);
function deconnection() {
    if (window.confirm("Etes-vous vraiment sûre de vouloir vous déconnecter ?")) {
        sessionStorage.clear();
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
        // window.location.href = "login.html";
    }
}

