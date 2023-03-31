
// window.addEventListener("DOMContentLoaded", (event)=>{
    if (sessionStorage.getItem("SUPER_ADMIN")) {
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
        window.location.href = "dashboard.html";
    }

    document.getElementById("submit-login").addEventListener("click", connexion);
    
    // Fonction de CallBack du bouton de conenexion
    function connexion(event) {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if (email.value.replaceAll(" ", "") != "") {
            if (password.value.replaceAll(" ", "") != "") {
                
                const dataSession = {
                    login: email.value,
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
                const data = [];
                sessionStorage.setItem("SESSION_ADMIN", JSON.stringify(dataSession));
                if (localStorage.getItem("ADMINISTRATEURS")){
                    const infosAdmin = JSON.parse(localStorage.getItem("ADMINISTRATEURS")).filter(cle => { cle.email == dataSession.login && cle.password == dataSession.password});
                    if(infosAdmin){
                        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
                    }else{
                        sessionStorage.clear();
                        document.getElementById("error-password").textContent = "Accèss incorrecte !";
                    }
                }else{
                    if(newAdmin.email === dataSession.login && newAdmin.password === dataSession.password){
                        data.push(newAdmin);
                       
                        localStorage.setItem("ADMINISTRATEURS", JSON.stringify(data));
                        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
                    }else{
                       
                        sessionStorage.clear();
                        document.getElementById("error-password").textContent = "Accèss incorrecte !";
                        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
                    }
                }

            } else {
                password.value = "";
                password.focus();
                document.getElementById("error-password").textContent = "Ce champ est obligatoire";
                window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
            }
        } else {
            email.value = "";
            email.focus();
            document.getElementById("error-email").textContent = "Ce champ est obligatoire";
            window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/login.html";
        }
    }
// })


