
window.addEventListener("DOMContentLoaded", (event)=>{
    if (sessionStorage.getItem("SESSION_ADMIN")) {
        // window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
        window.location.href = "dashboard.html";
    }

    document.getElementById("submit-login").addEventListener("click", connexion);
    // Fonction de CallBack du bouton de conenexion
    let compteur = 0;
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
                    const jsonParse = JSON.parse(localStorage.getItem("ADMINISTRATEURS"));
                    console.log(jsonParse)
                    const infosAdmin = jsonParse.find(cle =>cle.email == dataSession.login && cle.password == dataSession.password);
                    console.log(infosAdmin)
                    if(infosAdmin){
                        document.getElementById("messageLogin").textContent = "Connexion établie avec succès";
                        let recharger = setInterval(() => {
                            compteur = 1;
                            if(compteur == 1){
                                clearInterval(recharger);
                                // window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
                                window.location.href = "dashboard.html";
                            }
                        }, 1500);
                       
                    }else{
                        sessionStorage.clear();
                        document.getElementById("error-password").textContent = "Accèss incorrecte !";
                    }
                }else{
                     
                    if(newAdmin.email === dataSession.login && newAdmin.password === dataSession.password){
                        data.push(newAdmin);
                        localStorage.setItem("ADMINISTRATEURS", JSON.stringify(data));
                         let recharger = setInterval(() => {
                            compteur = 1;
                            if(compteur == 1){
                                clearInterval(recharger);
                                // window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
                                window.location.href = "dashboard.html";
                            }
                        }, 1500);
                    }else{
                        sessionStorage.clear();
                        document.getElementById("error-password").textContent = "Accèss incorrecte !";
                    }
                }
            } else {
                password.value = "";
                password.focus();
                document.getElementById("error-password").textContent = "Ce champ est obligatoire";
            }
        } else {
            email.value = "";
            email.focus();
            document.getElementById("error-email").textContent = "Ce champ est obligatoire";
        }
    }
})


