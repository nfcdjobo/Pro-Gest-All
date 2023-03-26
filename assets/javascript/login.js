if (sessionStorage.getItem("ADMIN")) {
    window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
}

if (JSON.parse(localStorage.getItem("ADMINISTRATEURS"))){
    document.getElementById("creer-compte").remove();
}

document.getElementById("submit-login").addEventListener("click", connexion);
function connexion(event){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const dataSession = {
        email: email.value,
        password: password.value,
    }    
    if (localStorage.getItem("ADMINISTRATEURS")){
        sessionStorage.setItem("ADMIN", JSON.stringify(dataSession));
        const dataLocal = JSON.parse(localStorage.getItem("ADMINISTRATEURS")).find(cle => cle.email == dataSession.email && cle.password == dataSession.password);
        if (dataLocal) {
            window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
        }else{
            sessionStorage.clear();
            document.getElementById("error-password").textContent = "Email ou mot de passe incorrecte."
        }
    }else{
        alert("Ce utilisateur n'est pas reconnu. Veuillez donc créer un compte.");
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/sinscrire.html";
    }
}