if (sessionStorage.getItem("SUPER_ADMINISTRATEUR")) {
    window.location.href = './../corporates/dashboard.html';
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

    sessionStorage.setItem("SUPER_ADMINISTRATEUR", JSON.stringify(dataSession));
    const dataLocal = JSON.parse(localStorage.getItem("ADMINISTRATEURS")).find(cle => cle.email ==dataSession.email && cle.password == dataSession.password);
    if (dataLocal){
        window.location.href = './../corporates/dashboard.html';
    }else{
        sessionStorage.clear();
        document.getElementById("error-password").textContent = "Email ou mot de passe incorrecte."
        
    }
    
}