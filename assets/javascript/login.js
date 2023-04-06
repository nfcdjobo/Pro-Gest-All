
window.addEventListener("DOMContentLoaded", (event)=>{
    if (sessionStorage.getItem("SESSION_ADMIN_Pro_Gest_All")) {
        window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
        // window.location.href = "dashboard.html";
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
                    nom: "",
                    naissance: "",
                    roles: "TOUT RÔLES",
                    email: "admin",
                    telephone: "",
                    password: "root",
                    photo: "",
                    etat: "SUPER ADMINISTRATEUR",
                    statut: "1",
                    create_at: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
                    update_at: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
                };
                
                const data = [];
                if (localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All")){
                    const jsonParse = JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All"));
                    if(jsonParse.find(cle=>cle.email === dataSession.login && cle.password === dataSession.password)){
                        sessionStorage.setItem("SESSION_ADMIN_Pro_Gest_All", JSON.stringify(dataSession));
                         document.getElementById("messageLogin").textContent = "Connexion établie avec succès";
                        let recharger = setInterval(() => {
                            compteur = 1;
                            if(compteur == 1){
                                clearInterval(recharger);
                                window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
                                // window.location.href = "dashboard.html";
                            }
                        }, 1500);
                    }else{
                        sessionStorage.clear();
                        document.getElementById("error-password").textContent = "Accèss incorrecte !";
                    }
                }else{
                    sessionStorage.setItem("SESSION_ADMIN_Pro_Gest_All", JSON.stringify(dataSession));
                    if(newAdmin.email === dataSession.login && newAdmin.password === dataSession.password){
                        data.push(newAdmin);
                        localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(data));
                         let recharger = setInterval(() => {
                            compteur = 1;
                            if(compteur == 1){
                                clearInterval(recharger);
                                window.location.href = "https://nfcdjobo.github.io/Pro-Gest-All/corporates/dashboard.html";
                                // window.location.href = "dashboard.html";
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


