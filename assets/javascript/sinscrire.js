if (sessionStorage.getItem("SUPER_ADMINISTRATEUR")){
    window.location.href = './../corporates/dashboard.html';
}
document.getElementById("creerCompte").addEventListener("click", creerCompte);
function creerCompte(event){
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const confirmeEmail = document.getElementById("confirme-email");
    const password = document.getElementById("password");
    const confirmePassword = document.getElementById("confirm-password");

    const errorNom = document.getElementById("error-nom");
    const errorEmail = document.getElementById("error-email");
    const errorConfirmEmail = document.getElementById("error-email-confirm");
    const errorPassword = document.getElementById("error-password");
    const errorConfirmPassword = document.getElementById("error-confirm-password");

    if(nom.value.replaceAll(" ", "") != ""){
        errorNom.value = "";
        if (email.value.replaceAll(" ", "") != "") {
            errorEmail.value = "";
            if (confirmeEmail.value.replaceAll(" ", "") != "") {
                errorEmail.value = "";
                if (confirmeEmail.value == email.value){
                    errorConfirmEmail.value = "";
                    if (password.value.replaceAll(" ", "") != "") {
                        errorPassword.value = "";
                        if (confirmePassword.value.replaceAll(" ", "") != "") {
                            errorConfirmPassword.value = "";
                            if (confirmePassword.value == password.value) {
                                errorConfirmPassword.value = "";
                                const data = [];
                                const requette = JSON.parse(localStorage.getItem("ADMINISTRATEURS"));
                                const admin = {
                                    id:"ADMIN",
                                    nom : nom.value,
                                    email: email.value,
                                    password: password.value,
                                    naissance: "",
                                    photo: "",
                                    roles:"SUPER-ADMIN",
                                    telephone:"",
                                    statut: "ADMIN",
                                    
                                    create_at: "",
                                    update_at: "",
                                }
                                if(requette){
                                    const request = requette.filter(cle => cle.id == "ADMIN" && cle.roles == "SUPER-ADMIN" && cle.statut == "ADMIN");
                                    if(request.length != 0){
                                        const indice = requette.indexOf(request[0]);
                                        requette[indice]= admin;
                                        localStorage.setItem("ADMINISTRATEURS", JSON.stringify(requette));
                                    }else{
                                        requette.push(admin);
                                        localStorage.setItem("ADMINISTRATEURS", JSON.stringify(requette));
                                    }
                                    localStorage.setItem("SUPER_ADMINISTRATEUR", JSON.stringify(admin));
                                }else{
                                    data.push(admin);
                                    localStorage.setItem("ADMINISTRATEURS", JSON.stringify(data));
                                    localStorage.setItem("SUPER_ADMINISTRATEUR", JSON.stringify(admin));
                                }

                                nom.value = "";
                                email.value = "";
                                confirmeEmail.value = "";
                                password.value = "";
                                confirmePassword.value = "";
                                errorNom.textContent = "";
                                errorEmail.textContent = "";
                                errorConfirmEmail.textContent = "";
                                errorPassword.textContent = "";
                                errorConfirmPassword.textContent = "";
                                alert("Votre compte a été créé avac succès. Cliquez sur OK pour vous connecter.");
                                window.location.href = './../corporates/login.html';
                            } else {
                                confirmePassword.focus();
                                errorConfirmPassword.textContent = "Le mot de passe de confirmation n'est pas correcte";
                            }
                        } else {
                            confirmePassword.focus();
                            errorConfirmPassword.textContent = "Champs obligatoire";
                        }
                    } else {
                        confirmePassword.focus();
                        confirmePassword.value = "";
                        errorPassword.textContent = "Champs obligatoire";
                    }
                }else{
                    confirmeEmail.focus();
                    errorConfirmEmail.textContent = "L'email de confirmation n'est pas conforme";
                }
            }else{
                confirmeEmail.focus();
                confirmeEmail.value = "";
                errorConfirmEmail.textContent = "Champs obligatoire";
            }
        }else{
            email.focus();
            email.value = "";
            errorEmail.textContent = "Champs obligatoire";
        }
    }else{
        nom.focus();
        nom.value = "";
        errorNom.textContent = "Champs obligatoire";
    }
}