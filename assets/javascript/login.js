if (sessionStorage.getItem("ADMIN")) {
    // window.location.href = "dashboard.html";
    window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
}


document.getElementById("submit-login").addEventListener("click", connexion);
function connexion(event) {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (email.value.replaceAll(" ", "") != ""){
        if (password.value.replaceAll(" ", "") != "") {
            const dataSession = {
                email: email.value,
                password: password.value,
            }
            const newAdmin = {
                id: "ADMIN",
                email: "admin",
                password: "root",
                nom: "",
                roles: "SUPER-ADMIN",
                statut: "ADMIN",
                categorie: "SUPER-ADMIN",
                telephone: "",
                photo: "",
                naissance: "",
                create_at: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
                update_at: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
            }

            const sperAdmin = {
                login: "admin",
                password: "root",
            }

            if()



            

            const data = [];
            if (localStorage.getItem("ADMINISTRATEURS")) {
                sessionStorage.setItem("SESSION_ADMIN", JSON.stringify(sperAdmin));
                const dataLocal = JSON.parse(localStorage.getItem("ADMINISTRATEURS")).find(cle => cle.email == dataSession.email && cle.password == dataSession.password);
                if (dataLocal) {
                    // window.location.href = "./dashboard.html";
                    window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
                } else {
                    document.getElementById("error-password").textContent = "Email ou mot de passe incorrecte.";
                    // window.location.href = "/login.html";
                    window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
                }
            }else{
                localStorage.setItem("SUPER_ADMINISTRATEUR", JSON.stringify(sperAdmin));
                localStorage.setItem("ADMINISTRATEURS", JSON.stringify(data));
                sessionStorage.setItem("SESSION_ADMIN", JSON.stringify(sperAdmin));
                if (dataSession.email === sperAdmin.login && dataSession.password === sperAdmin.password) {
                    data.push(newAdmin)
                    window.location.href = "dashboard.html";
                } else {
                    document.getElementById("error-password").textContent = "Votre compte n'est pas valable";
                    window.location.href = "login.html";
                }
            }
            
        }else{
            password.value = "";
            password.focus();
            document.getElementById("error-password").textContent = "Ce champ est obligatoire";
        }
    }else{
        email.value = "";
        email.focus();
        document.getElementById("error-email").textContent = "Ce champ est obligatoire";
    }
    
 }
