
let contenurole = JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All"));
function afficheAdministrateurs(dataAdministrateur) {
    if (dataAdministrateur) {
        const consernes = dataAdministrateur.filter(cle => cle.statut != 0 && cle.id != "ADMIN" && cle.etat === "ADMINISTRATEUR");
        consernes.forEach(element => {
            const contenutableau = document.getElementById("contenutableau");

            const maligne = document.createElement("tr");
            maligne.id = `ligne-${element.id}`;
            const monid = document.createElement("td");
            monid.className = "cell";
            monid.id = `admin-${element.id}-id`;
            monid.textContent = element.id;
            maligne.append(monid);

            const colPhoto = document.createElement("td");
            colPhoto.className = "cell";
            colPhoto.id = `admin-${element.id}-photo`;
            const maPhoto = document.createElement("a");
            maPhoto.id = `admin-${element.id}-maPhoto`;
            maPhoto.href = `profil.html#${element.id}`;
            maPhoto.className = "item-data";
            colPhoto.append(maPhoto);

            const image = document.createElement("img");
            image.id = `admin-${element.id}-image`;
            image.className = "";
            image.src = element.photo;
            image.style.width = "25px";
            image.style.height = "25px";
            image.style.borderRadius = "100%";
            image.style.backgroundSize = "cover";
            maPhoto.append(image);
            maligne.append(colPhoto);

            const monNom = document.createElement("td");
            monNom.className = "cell";
            monNom.id = `admin-${element.id}-nom`;
            monNom.textContent = element.nom;
            maligne.append(monNom);

            const maNaissance = document.createElement("td");
            maNaissance.className = "cell";
            maNaissance.id = `admin-${element.id}-naissance`;
            maNaissance.textContent = element.naissance;
            maligne.append(maNaissance);

            const monRole = document.createElement("td");
            monRole.className = "cell";
            monRole.id = `admin-${element.id}-role`;
            monRole.textContent = element.roles;
            maligne.append(monRole);

            const monEmail = document.createElement("td");
            monEmail.className = "cell";
            monEmail.id = `admin-${element.id}-email`;
            monEmail.textContent = element.email;
            maligne.append(monEmail);

            const monTelephone = document.createElement("td");
            monTelephone.className = "cell";
            monTelephone.id = `admin-${element.id}-phone`;
            monTelephone.textContent = element.telephone;
            maligne.append(monTelephone);

            const monPassword = document.createElement("td");
            monPassword.className = "cell";
            monPassword.id = `admin-${element.id}-password`;
            monPassword.textContent = element.password;
            maligne.append(monPassword);

            const monaction1 = document.createElement("td");
            monaction1.className = "cell";
            monaction1.id = `admin-${element.id}-action1`;
            const boutonmodifier = document.createElement("button");
            boutonmodifier.id = `admin-${element.id}-modifier`;
            boutonmodifier.className = "bouton bouton-all-info bi bi-pencil-square";
            boutonmodifier.style.color = "white";
            monaction1.append(boutonmodifier);
            maligne.append(monaction1);

            const monaction2 = document.createElement("td");
            monaction2.className = "cell";
            monaction2.id = `admin-${element.id}-action2`;

            const boutonsupprimer = document.createElement("button");
            boutonsupprimer.id = `admin-${element.id}-supprimer`;
            boutonsupprimer.className = "bouton bouton-danger bi bi-trash3";
            boutonsupprimer.style.color = "white";
            boutonsupprimer.addEventListener("click", supprimerAdministrateur);
            monaction2.append(boutonsupprimer);
            maligne.append(monaction2);
            contenutableau.append(maligne);
        })
    }
}

afficheAdministrateurs(contenurole)
document.querySelectorAll(".bi-pencil-square").forEach(key => key.addEventListener("click", formulaireModifier));

function formulaireModifier(event){
    if (document.querySelector(".bi-send")) {
        const envo = document.querySelector(".bi-send");

        const encainInputPhoto = document.getElementById(`new-${envo.id.replace("envoyer", "photo")}`);
        const tdPhoto = document.getElementById(envo.id.replace("envoyer", "photo"));
        const lienDetail = document.createElement("a");
        lienDetail.className = "item-data";
        lienDetail.id = envo.id.replace("envoyer", "maPhoto");
        lienDetail.href = `profil.html#${envo.id.replace("-envoyer", "")}`;
        const monImage = document.createElement("img");
        monImage.id = envo.id.replace("envoyer", "image");
        const proofil = JSON.parse(localStorage.ADMINISTRATEURS_Pro_Gest_All).filter(cle => cle.id == envo.id.replace("admin-", "").replace("-envoyer", ""));
        monImage.src = proofil[0].photo;
        monImage.style.width = "25px";
        monImage.style.height = "25px";
        monImage.style.borderRadius = "100%";
        monImage.style.backgroundSize = "cover";
        lienDetail.append(monImage);
        tdPhoto.append(lienDetail);
        encainInputPhoto.remove();




        const encainInputNom = document.getElementById(`new-${envo.id.replace("envoyer", "nom")}`);
        const tdNom = document.getElementById(envo.id.replace("envoyer", "nom"));
        tdNom.textContent = encainInputNom.value;
        encainInputNom.remove();

        const encainInputNaissance = document.getElementById(`new-${envo.id.replace("envoyer", "naissance")}`);
        const tdNaissance = document.getElementById(envo.id.replace("envoyer", "naissance"));
        tdNaissance.textContent = encainInputNaissance.value;
        encainInputNaissance.remove();

        const encainSelectRole = document.getElementById(`new-${envo.id.replace("envoyer", "role")}`);
        const tdRole = document.getElementById(envo.id.replace("envoyer", "role"));
        tdRole.textContent = encainSelectRole.value;
        encainSelectRole.remove();

        const encainInputEmail = document.getElementById(`new-${envo.id.replace("envoyer", "email")}`);
        const tdEmail = document.getElementById(envo.id.replace("envoyer", "email"));
        tdEmail.textContent = encainInputEmail.value;
        encainInputEmail.remove();

        const encainInputPhone = document.getElementById(`new-${envo.id.replace("envoyer", "phone")}`);
        const tdPhone = document.getElementById(envo.id.replace("envoyer", "phone"));
        tdPhone.textContent = encainInputPhone.value;
        encainInputPhone.remove();

        const encainInputPassword = document.getElementById(`new-${envo.id.replace("envoyer", "password")}`);
        const tdPassword = document.getElementById(envo.id.replace("envoyer", "password"));
        tdPassword.textContent = encainInputPassword.value;
        encainInputPassword.remove();

        const tdaction1 = document.getElementById(envo.id.replace("envoyer", "action1"));
        const inaction1 = document.createElement("button");
        inaction1.id = envo.id.replace("envoyer", "modifier");
        inaction1.className = "bouton bouton-all-info bi bi-pencil-square";
        inaction1.style.color = "white";
        inaction1.addEventListener("click", formulaireModifier);
        tdaction1.append(inaction1);

        const tdaction2 = document.getElementById(envo.id.replace("envoyer", "action2"));
        const inaction2 = document.createElement("button");
        inaction2.id = envo.id.replace("envoyer", "supprimer");
        inaction2.className = "bouton bouton-danger bi bi-trash3";
        inaction2.addEventListener("click", supprimerAdministrateur);
        inaction2.style.color = "white";
        tdaction2.append(inaction2);

        document.getElementById(envo.id.replace("envoyer", "annuler")).remove();
        document.getElementById(envo.id).remove();
    }

    const colPhoto = document.getElementById(event.target.id.replace("modifier", "photo"));
    const newInputPhoto = document.createElement("input");
    newInputPhoto.type = "file";
    newInputPhoto.id = `new-${event.target.id.replace("modifier", "photo")}`;
    newInputPhoto.className = "form-control";
    colPhoto.innerHTML = "";
    colPhoto.append(newInputPhoto);



    const adminNom = document.getElementById(event.target.id.replace("modifier", "nom"));
    const inputNom = document.createElement("input");
    inputNom.id = `new-${event.target.id.replace("modifier", "nom")}`;
    inputNom.className = "form-control";
    inputNom.type = "text";
    inputNom.value = adminNom.textContent;
    adminNom.textContent = "";
    adminNom.append(inputNom);

    const adminNaissance = document.getElementById(event.target.id.replace("modifier", "naissance"));
    const inputNaissance = document.createElement("input");
    inputNaissance.id = `new-${event.target.id.replace("modifier", "naissance")}`;
    inputNaissance.className = "form-control";
    inputNaissance.type = "date";
    inputNaissance.value = adminNaissance.textContent;
    adminNaissance.textContent = "";
    adminNaissance.append(inputNaissance);

    const adminRoles = document.getElementById(event.target.id.replace("modifier", "role"));
    const selectRoles = document.createElement("select");
    selectRoles.id = `new-${event.target.id.replace("modifier", "role")}`;
    selectRoles.className = "form-select";
    const mesRoles = JSON.parse(localStorage.getItem("ROLES_Pro_Gest_All")).filter(cle => cle.type == "Administrateurs" && cle.statut == 1);
    mesRoles.forEach(key => {
        const optionAdmin = document.createElement("option");
        optionAdmin.textContent = key.libelle
        if (adminRoles.textContent == key.libelle){
            optionAdmin.selected = true
        }
        selectRoles.append(optionAdmin);
    });
    adminRoles.textContent = "";
    adminRoles.append(selectRoles);

    const adminEmail = document.getElementById(event.target.id.replace("modifier", "email"));
    const inputEmail = document.createElement("input");
    inputEmail.id = `new-${event.target.id.replace("modifier", "email")}`;
    inputEmail.className = "form-control";
    inputEmail.type = "email";
    inputEmail.value = adminEmail.textContent;
    adminEmail.textContent = "";
    adminEmail.append(inputEmail);

    const adminPhone = document.getElementById(event.target.id.replace("modifier", "phone"));
    const inputPhone = document.createElement("input");
    inputPhone.id = `new-${event.target.id.replace("modifier", "phone")}`;
    inputPhone.className = "form-control";
    inputPhone.type = "tel";
    inputPhone.value = adminPhone.textContent;
    adminPhone.textContent = "";
    adminPhone.append(inputPhone);

    const adminPassword = document.getElementById(event.target.id.replace("modifier", "password"));
    const inputPassword = document.createElement("input");
    inputPassword.id = `new-${event.target.id.replace("modifier", "password")}`;
    inputPassword.className = "form-control";
    inputPassword.type = "text";
    inputPassword.value = adminPassword.textContent;
    adminPassword.textContent = "";
    adminPassword.append(inputPassword);

    const action2element = document.getElementById(event.target.id.replace("modifier", "action2"));
    const annuleelement = document.createElement("button")
    annuleelement.id = event.target.id.replace("modifier", "annuler");
    annuleelement.className = "bouton bouton-secondary bi bi-x-circle";
    annuleelement.style.color = "white";
    annuleelement.addEventListener("click", annuler)
    action2element.innerHTML = "";
    action2element.append(annuleelement);

    const action1element = document.getElementById(event.target.id.replace("modifier", "action1"));
    const envoieement = document.createElement("button");
    envoieement.id = event.target.id.replace("modifier", "envoyer");
    envoieement.className = "bouton bouton-success bi bi-send";
    envoieement.style.color = "white";
    envoieement.addEventListener("click", modifierAdmininstrateur);
    action1element.innerHTML = "";
    action1element.append(envoieement);
}


function annuler(even) {
    const envo = document.querySelector(".bi-x-circle");

    const encainInputPhoto = document.getElementById(`new-${envo.id.replace("annuler", "photo")}`);
    const tdPhoto = document.getElementById(envo.id.replace("annuler", "photo"));
    const lienDetail = document.createElement("a");
    lienDetail.className = "item-data";
    lienDetail.id = envo.id.replace("annuler", "maPhoto");
    lienDetail.href = `profil.html#${envo.id.replace("-annuler", "")}`;
    const monImage = document.createElement("img");
    monImage.id = envo.id.replace("annuler", "image");
    const proofil = JSON.parse(localStorage.ADMINISTRATEURS_Pro_Gest_All).filter(cle => cle.id == envo.id.replace("admin-", "").replace("-annuler", ""));
    monImage.src = proofil[0].photo;
    monImage.style.width = "25px";
    monImage.style.height = "25px";
    monImage.style.borderRadius = "100%";
    monImage.style.backgroundSize = "cover";
    lienDetail.append(monImage);
    tdPhoto.append(lienDetail);
    encainInputPhoto.remove();

    const encaininputNom = document.getElementById(`new-${envo.id.replace("annuler", "nom")}`);
    const tdNom = document.getElementById(envo.id.replace("annuler", "nom"));
    tdNom.textContent = encaininputNom.value;
    encaininputNom.remove();

    const encainNaissance = document.getElementById(`new-${envo.id.replace("annuler", "naissance")}`);
    const tdNaissance = document.getElementById(envo.id.replace("annuler", "naissance"));
    tdNaissance.textContent = encainNaissance.value;
    encainNaissance.remove();
    
    const encainSelectRole = document.getElementById(`new-${envo.id.replace("annuler", "role")}`);
    const tdSelectRole = document.getElementById(envo.id.replace("annuler", "role"));
    tdSelectRole.textContent = encainSelectRole.value;
    encainSelectRole.remove();

    const encainInputEmail = document.getElementById(`new-${envo.id.replace("annuler", "email")}`);
    const tdInputEmail = document.getElementById(envo.id.replace("annuler", "email"));
    tdInputEmail.textContent = encainInputEmail.value;
    encainInputEmail.remove();

    const encainInputPhone = document.getElementById(`new-${envo.id.replace("annuler", "phone")}`);
    const tdInputPhone = document.getElementById(envo.id.replace("annuler", "phone"));
    tdInputPhone.textContent = encainInputPhone.value;
    encainInputPhone.remove();

    const encainInputPassword = document.getElementById(`new-${envo.id.replace("annuler", "password")}`);
    const tdInputPassword = document.getElementById(envo.id.replace("annuler", "password"));
    tdInputPassword.textContent = encainInputPassword.value;
    encainInputPassword.remove();

    const tdaction1 = document.getElementById(envo.id.replace("annuler", "action1"));
    const inaction1 = document.createElement("button");
    inaction1.id = envo.id.replace("annuler", "modifier");
    inaction1.className = "bouton bouton-all-info bi bi-pencil-square";
    inaction1.style.color = "white";
    inaction1.addEventListener("click", formulaireModifier);
    tdaction1.append(inaction1);

    const tdaction2 = document.getElementById(envo.id.replace("annuler", "action2"));
    const inaction2 = document.createElement("button");
    inaction2.id = envo.id.replace("annuler", "supprimer");
    inaction2.className = "bouton bouton-danger bi bi-trash3";
    inaction2.style.color = "white";
    inaction2.addEventListener("click", supprimerAdministrateur);
    tdaction2.append(inaction2);

    document.getElementById(envo.id.replace("annuler", "envoyer")).remove();
    document.getElementById(envo.id).remove();
}


function modifierAdmininstrateur(evenement) {
    const idenel = document.getElementById(evenement.target.id.replace("envoyer", "id"));

    const monProfil = document.getElementById("new-" + evenement.target.id.replace("envoyer", "photo"));
    const monInputNom = document.getElementById("new-" + evenement.target.id.replace("envoyer", "nom"));
    const monInputNaissance = document.getElementById("new-" + evenement.target.id.replace("envoyer", "naissance"));
    const monSelectRole = document.getElementById("new-" + evenement.target.id.replace("envoyer", "role"));
    const monInputEmail = document.getElementById("new-" + evenement.target.id.replace("envoyer", "email"));
    const monInputPhone = document.getElementById("new-" + evenement.target.id.replace("envoyer", "phone"));
    const monInputPassword = document.getElementById("new-" + evenement.target.id.replace("envoyer", "password"));

    const local = JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All"));
    const cible = local.find(key => key.id == idenel.textContent);
    const indece = local.indexOf(cible);
    if (cible) {
        const envo = document.querySelector(".bi-send");
        if ((monInputNom.value != cible.nom || monInputNaissance.value != cible.naissance || monSelectRole.value != cible.roles || monInputEmail.value != cible.email || monInputPhone.value != cible.telephone || monInputPassword.value != cible.password) && (monInputNom.value.replaceAll(" ", "") != "" && monInputNaissance.value.replaceAll(" ", "") != "" && monSelectRole.value.replaceAll(" ", "") != "" && monInputEmail.value.replaceAll(" ", "") != "" && monInputPhone.value.replaceAll(" ", "") != "" && monInputPassword.value.replaceAll(" ", "") != "")) {
            // if(JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All")).filter(cle=>cle.email.toLowerCase()==monInputEmail.value.toLowerCase()).length <= 1 && )
            let ladate = new Date();
            cible.nom = monInputNom.value;
            cible.naissance = monInputNaissance.value;
            cible.roles = monSelectRole.value;
            cible.email = monInputEmail.value;
            cible.telephone = monInputPhone.value;
            cible.password = monInputPassword.value;

            const encainInputPhoto = document.getElementById(`new-${envo.id.replace("envoyer", "photo")}`);
            const tdPhoto = document.getElementById(envo.id.replace("envoyer", "photo"));
            const lienDetail = document.createElement("a");
            lienDetail.className = "item-data";
            lienDetail.id = envo.id.replace("envoyer", "maPhoto");
            lienDetail.href = `profil.html#${envo.id.replace("-envoyer", "")}`;
            const monImage = document.createElement("img");
            monImage.id = envo.id.replace("envoyer", "image");
            const proofil = JSON.parse(localStorage.ADMINISTRATEURS_Pro_Gest_All).filter(cle => cle.id == envo.id.replace("admin-", "").replace("-envoyer", ""));
            monImage.src = proofil[0].photo;
            monImage.style.width = "25px";
            monImage.style.height = "25px";
            monImage.style.borderRadius = "100%";
            monImage.style.backgroundSize = "cover";
            lienDetail.append(monImage);
            tdPhoto.append(lienDetail);
            encainInputPhoto.remove();

            if (monProfil.value != "") {
                let fichierModif = new FileReader();
                fichierModif.readAsDataURL(monProfil.files[0]);
                fichierModif.addEventListener("load", () => {
                    cible.photo = fichierModif.result;
                    local[indece] = cible;
                    localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(local));
                    monImage.src = fichierModif.result;
                });
            }

            
            local[indece] = cible;
            localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(local));

            // const envo = document.querySelector(".bi-send");

            const encainInputNom = document.getElementById(`new-${envo.id.replace("envoyer", "nom")}`);
            const tdNom = document.getElementById(envo.id.replace("envoyer", "nom"));
            tdNom.textContent = encainInputNom.value;
            encainInputNom.remove();

            const encainInputNaissance = document.getElementById(`new-${envo.id.replace("envoyer", "naissance")}`);
            const tdNaissance = document.getElementById(envo.id.replace("envoyer", "naissance"));
            tdNaissance.textContent = encainInputNaissance.value;
            encainInputNaissance.remove();

            const encainSelectRole = document.getElementById(`new-${envo.id.replace("envoyer", "role")}`);
            const tdRole = document.getElementById(envo.id.replace("envoyer", "role"));
            tdRole.textContent = encainSelectRole.value;
            encainSelectRole.remove();

            const encainInputEmail = document.getElementById(`new-${envo.id.replace("envoyer", "email")}`);
            const tdEmail = document.getElementById(envo.id.replace("envoyer", "email"));
            tdEmail.textContent = encainInputEmail.value;
            encainInputEmail.remove();

            const encainInputPhone = document.getElementById(`new-${envo.id.replace("envoyer", "phone")}`);
            const tdPhone = document.getElementById(envo.id.replace("envoyer", "phone"));
            tdPhone.textContent = encainInputPhone.value;
            encainInputPhone.remove();

            const encainInputPassword = document.getElementById(`new-${envo.id.replace("envoyer", "password")}`);
            const tdPassword = document.getElementById(envo.id.replace("envoyer", "password"));
            tdPassword.textContent = encainInputPassword.value;
            encainInputPassword.remove();

            const tdaction1 = document.getElementById(envo.id.replace("envoyer", "action1"));
            const inaction1 = document.createElement("button");
            inaction1.id = envo.id.replace("envoyer", "modifier");
            inaction1.className = "bouton bouton-all-info bi bi-pencil-square";
            inaction1.style.color = "white";
            inaction1.addEventListener("click", modifierAdmininstrateur);
            tdaction1.append(inaction1);

            const tdaction2 = document.getElementById(envo.id.replace("envoyer", "action2"));
            const inaction2 = document.createElement("button");
            inaction2.id = envo.id.replace("envoyer", "supprimer");
            inaction2.className = "bouton bouton-danger bi bi-trash3";
            inaction2.addEventListener("click", supprimerAdministrateur);
            inaction2.style.color = "white";
            tdaction2.append(inaction2);

            document.getElementById(envo.id.replace("envoyer", "annuler")).remove();
            document.getElementById(envo.id).remove();
            alert("Modifiaction effectuée avec succès.");

        } else {
            alert("Aucune action n'a été faite !")
        }
    }
}

function supprimerAdministrateur(event) {
    const decision = window.confirm("Êtes-vous vraiment sûre de vouloir supprimer ?");
    if (decision) {
        const reference = event.target.id.replace("admin-", "").replace("-supprimer", "");
        const toutdonne = JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All"));
        const requette = toutdonne.find(key => key.id == reference);
        const position = toutdonne.indexOf(requette);
        toutdonne[position].statut = 0;
        localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(toutdonne));
        alert("Suppression effectuée avec succès !");
        document.getElementById(`ligne-${reference}`).remove();
    }
}


