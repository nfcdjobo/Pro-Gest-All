

const role = document.getElementById("role-admin");
if (JSON.parse(localStorage.getItem("ROLES_Pro_Gest_All"))){
    const requetteselect = JSON.parse(localStorage.getItem("ROLES_Pro_Gest_All")).filter(key => key.statut != 0 && key.type == "Administrateurs");
    requetteselect.forEach(cle => {
        let optionselec = document.createElement("option");
        optionselec.textContent = cle.libelle;
        role.append(optionselec);
    })
}

document.getElementById("saveadmin").addEventListener("click", saveadministrateur);

function saveadministrateur(event){
    if (document.getElementById("getBarre")){
        document.getElementById("getBarre").remove();
        document.getElementById("getMessage").textContent = "";
    }
    const nom = document.getElementById("nom-admin");
    const naissance = document.getElementById("naissance-admin");
    const roles = document.getElementById("role-admin");
    const email = document.getElementById("email-admin");
    email.addEventListener("blur", validateurEmail);
    const confirme_email = document.getElementById("confirme-email-admin");
    confirme_email.addEventListener("blur", validateurEmail);
    const telephone = document.getElementById("telephone-admin");
    const password = document.getElementById("password-admin");
    const confirme_password = document.getElementById("confirme-password-admin");
    const photo = document.getElementById("photo-admin");
    const fichier = new FileReader();
    if(nom.value.replaceAll(" ", "") != ""){
        document.getElementById("error-nom").textContent = "";
        if (naissance.value.replaceAll(" ", "") != ""){
            document.getElementById("error-naissance").textContent = "";
            if (roles.value.replaceAll(" ", "") != ""){
                document.getElementById("error-roles").textContent = "";
                if (email.value.replaceAll(" ", "") != ""){
                    document.getElementById("error-email").textContent = "";
                    if (confirme_email.value.replaceAll(" ", "") != "" && email.value == confirme_email.value){
                        document.getElementById("error-email-confirm").textContent = "";
                        if (telephone.value.replaceAll(" ", "") != ""){
                            document.getElementById("error-telephone").textContent = "";
                            const madate = new Date();
                            if (password.value.replaceAll(" ", "") != ""){
                                if (confirme_password.value.replaceAll(" ", "") != "" && password.value == confirme_password.value){
                                    document.getElementById("error-password-confirm").textContent = "";
                                    const objData = {
                                        nom: nom.value,
                                        naissance: naissance.value,
                                        roles: roles.value,
                                        email: email.value,
                                        telephone: telephone.value,
                                        password: password.value,
                                        photo: "",
                                        statut: 1,
                                        create_at: madate.toLocaleString('en-GB', { timeZone: 'UTC' }),
                                        update_at: madate.toLocaleString('en-GB', { timeZone: 'UTC' }),
                                    }
                                    let dataTable = [];
                                    let localData = JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All"));
                                    if(localData){
                                        if (!localData.find(key => key.email == objData.email)){
                                            if (photo.value != "") {
                                                fichier.readAsDataURL(photo.files[0]);
                                                fichier.addEventListener("load", () => {
                                                    objData.photo = fichier.result;
                                                    objData.id = "A00L" + (localData.length + 1);
                                                    localData.push(objData);
                                                    localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(localData));
                                                });
                                            }else{
                                                objData.id = "A00L" + (localData.length + 1);
                                                localData.push(objData);
                                                localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(localData));
                                            }
                                            nom.value = "";
                                            naissance.value = "";
                                            roles.value = "";
                                            email.value = "";
                                            confirme_email.value = "";
                                            telephone.value = "";
                                            password.value = "";
                                            confirme_password.value = "";
                                            photo.value = "";

                                            const messagerie = document.getElementById("messagerie");
                                            const getMessage = document.getElementById("getMessage");
                                            getMessage.textContent = "Administrateur enrégistré avec succès."
                                            getMessage.style.color = "rgb(74, 226, 28)";
                                            const getBarre = document.createElement("hr");
                                            getBarre.id = "getBarre";
                                            getBarre.className = "mb-4";
                                            messagerie.append(getBarre);
                                               
                                        }else{
                                            objData.id = "A00L1";
                                            dataTable.push(objData);
                                            localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(dataTable));
                                            const messagerie = document.getElementById("messagerie");
                                            const getMessage = document.getElementById("getMessage");
                                            getMessage.textContent = "Ce compte est déjà utilisé. Veuillez donc utiliser un autre adresse email."
                                            getMessage.style.color = "rgb(255, 0, 0)";
                                            const getBarre = document.createElement("hr");
                                            getBarre.id = "getBarre";
                                            getBarre.className = "mb-4";
                                            messagerie.append(getBarre);
                                        }

                                    }else{
                                        if (photo.value != "") {
                                            fichier.readAsDataURL(photo.files[0]);
                                            fichier.addEventListener("load", () => {
                                                objData.photo = fichier.result;
                                                objData.id = "A00L1";
                                                dataTable.push(objData);
                                                localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(dataTable));
                                            });
                                        } else {
                                            objData.id = "A00L1";
                                            dataTable.push(objData);
                                            localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(dataTable));
                                        }
                                        nom.value = "";
                                        naissance.value = "";
                                        roles.value = "";
                                        email.value = "";
                                        confirme_email.value = "";
                                        telephone.value = "";
                                        password.value = "";
                                        confirme_password.value = "";
                                        photo.value = "";

                                        const messagerie = document.getElementById("messagerie");
                                        const getMessage = document.getElementById("getMessage");
                                        getMessage.textContent = "Administrateur enrégistré avec succès."
                                        getMessage.style.color = "rgb(74, 226, 28)";
                                        const getBarre = document.createElement("hr");
                                        getBarre.id = "getBarre";
                                        getBarre.className = "mb-4";
                                        messagerie.append(getBarre);
                                    }
                                }else{
                                    document.getElementById("error-password-confirm").textContent = "Mot de passe incorrecte !";
                                    roles.style.border = "1.5px solid red";
                                    roles.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                                    confirme_password.focus();
                                }
                            }else{
                                document.getElementById("error-password").textContent = "Champs obligatoire";
                                password.style.border = "1.5px solid red";
                                password.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                                password.focus();
                            }
                        }else{
                            document.getElementById("error-telephone").textContent = "Champs obligatoire";
                            telephone.style.border = "1.5px solid red";
                            telephone.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                            telephone.focus();
                        }
                    }else{
                        document.getElementById("error-email-confirm").textContent = "Les deux emails ne sont pas forment !";
                        document.getElementById("error-email-confirm").style.color = "red";
                        document.getElementById("error-email-confirm").style.fontWeight = "600";
                        confirme_email.style.border = "1.5px solid red"; 
                        confirme_email.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                        confirme_email.focus();
                    }
                }else{
                    document.getElementById("error-email").textContent = "Champs obligatoire";
                    document.getElementById("error-email").style.color = "red";
                    document.getElementById("error-email").style.fontWeight = "600";
                    email.style.border = "1.5px solid red";
                    email.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                    email.focus();
                }
            }else{
                document.getElementById("error-roles").textContent = "Champs obligatoire";
                roles.style.border = "1.5px solid red";
                roles.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                roles.focus();
            }
        }else{
            document.getElementById("error-naissance").textContent = "Champs obligatoire";
            naissance.style.border = "1.5px solid red";
            naissance.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
            naissance.focus();
        }
    }else{
        document.getElementById("error-nom").textContent = "Champs obligatoire";
        nom.style.border ="1.5px solid red";
        nom.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
        nom.focus();
    }
}

document.querySelectorAll("input[type='email']").forEach(key => key.addEventListener("blur", validateurEmail))

function validateurEmail(event) {
    const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1, 3}.[0-9]{1, 3}.[0-9]{1, 3}.[0-9]{1, 3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    if(!event.target.id.includes("confirm")){
        if (expressionReguliere.test(event.target.value)) {
            document.getElementById("error-email").textContent = "Ce format est accepté.";
            document.getElementById("error-email").style.color = "green";
            document.getElementById("error-email").style.fontWeight = "600";
        } else {
            event.target.focus();
            document.getElementById("error-email").textContent = "Adresse email invalide !";
            document.getElementById("error-email").style.color = "red";
            document.getElementById("error-email").style.fontWeight = "600";
        }
    }else{
        if (expressionReguliere.test(event.target.value)) {
            document.getElementById("error-email-confirm").textContent = "Ce format est accepté.";
            document.getElementById("error-email-confirm").style.color = "green";
            document.getElementById("error-email-confirm").style.fontWeight = "600";
        } else {
            event.target.focus();
            document.getElementById("error-email-confirm").textContent = "Adresse email invalide !";
            document.getElementById("error-email-confirm").style.color = "red";
            document.getElementById("error-email-confirm").style.fontWeight = "600";
        }
    }
    return false;
}


const champsTelephone = document.querySelectorAll("input[type='tel']");
champsTelephone.forEach(key => key.addEventListener("blur", validateurTelephone));
function validateurTelephone(event) {
    const expressionReguliere = /^([0-9]){10}$/;
    if (expressionReguliere.test(event.target.value)) {
        document.getElementById("error-telephone").textContent = "Format accepté.";
        document.getElementById("error-telephone").style.color = "green";
        document.getElementById("error-telephone").style.fontWeight = "600";
    } else {
        document.getElementById(event.target.id).focus();
        document.getElementById("error-telephone").textContent = "Format incorrecte !";
        document.getElementById("error-telephone").style.color = "red";
        document.getElementById("error-telephone").style.fontWeight = "600";
    }
    return false;
}
