
// let contenuEmploye = JSON.parse(localStorage.getItem("EMPLOYES"));

let chemin = window.location.pathname;
let url = window.location.href;

function afficherEmployes(donneEmploye) {
    if (donneEmploye != null) {
        const consernes = donneEmploye.filter(cle => cle.statut != 0);
        consernes.forEach(element => {
            const contenutableau = document.getElementById("contenutableau");
            const maligne = document.createElement("tr");

            maligne.id = `ligne-${element.id}`
            const monid = document.createElement("td");
            monid.className = "cell";
            monid.id = `employe-${element.id}-id`;
            monid.textContent = element.id;
            maligne.append(monid);

            const colPhoto = document.createElement("td");
            colPhoto.className = "cell";
            colPhoto.id = `employe-${element.id}-photo`;
            const maPhoto = document.createElement("a");
            maPhoto.id = `employe-${element.id}-maPhoto`;
            maPhoto.href = `detailsemploye.html#${element.id}`;
            maPhoto.className = "item-data";
            colPhoto.append(maPhoto);

            const image = document.createElement("img");
            image.id = `employe-${element.id}-image`;
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
            monNom.id = `employe-${element.id}-nom`;
            monNom.textContent = element.nom;
            maligne.append(monNom);

            const maSpecialite = document.createElement("td");
            maSpecialite.className = "cell";
            maSpecialite.id = `employe-${element.id}-specialite`;
            maSpecialite.textContent = element.specialite;
            maligne.append(maSpecialite);

            const monEmail = document.createElement("td");
            monEmail.className = "cell";
            monEmail.id = `employe-${element.id}-email`;
            monEmail.textContent = element.email;
            maligne.append(monEmail);

            const monPayement = document.createElement("td");
            monPayement.className = "cell";
            monPayement.id = `employe-${element.id}-payement`;
            monPayement.textContent = element.modePayement;
            maligne.append(monPayement);

            const monTelephone = document.createElement("td");
            monTelephone.className = "cell";
            monTelephone.id = `employe-${element.id}-telephone`;
            monTelephone.textContent = element.telephone;
            maligne.append(monTelephone);

            const monNaissance = document.createElement("td");
            monNaissance.className = "cell";
            monNaissance.id = `employe-${element.id}-naissance`;
            monNaissance.textContent = element.dateNaissance;
            maligne.append(monNaissance);


            const monaction1 = document.createElement("td");
            monaction1.className = "cell";
            monaction1.id = `employe-${element.id}-action1`;
            const boutonmodifier = document.createElement("button");
            boutonmodifier.id = `employe-${element.id}-modifier`;
            boutonmodifier.className = "bouton bouton-all-info bi bi-pencil-square";
            boutonmodifier.style.color = "white";
            boutonmodifier.addEventListener("click", creerFormulaireModifier)
            monaction1.append(boutonmodifier);
            maligne.append(monaction1);

            const monaction2 = document.createElement("td");
            monaction2.className = "cell";
            monaction2.id = `employe-${element.id}-action2`;

            const boutonsupprimer = document.createElement("button");
            boutonsupprimer.id = `employe-${element.id}-supprimer`;
            boutonsupprimer.className = "bouton bouton-danger bi bi-trash3";
            boutonsupprimer.style.color = "white";
            boutonsupprimer.addEventListener("click", supprimerEmploye)
            monaction2.append(boutonsupprimer);
            maligne.append(monaction2);
            contenutableau.append(maligne);
        })
    }

}



afficherEmployes(JSON.parse(localStorage.getItem("EMPLOYES")));
let bouton_modifier = document.querySelectorAll(".bi-pencil-square");
bouton_modifier.forEach(bouton => {
    bouton.addEventListener("click", creerFormulaireModifier);
});

function creerFormulaireModifier(event) {
    if (document.querySelector(".bi-send")) {
        const envo = document.querySelector(".bi-send");

        const encainInputPhoto = document.getElementById(`new-${envo.id.replace("envoyer", "photo")}`);
        const tdPhoto = document.getElementById(envo.id.replace("envoyer", "photo"));
        const lienDetail = document.createElement("a");
        lienDetail.className = "item-data";
        lienDetail.id = envo.id.replace("envoyer", "maPhoto");
        lienDetail.href = `detailEmploye.html#${envo.id.replace("-envoyer", "")}`;
        const monImage = document.createElement("img");
        monImage.id = envo.id.replace("envoyer", "image");
        const proofil = JSON.parse(localStorage.EMPLOYES).filter(cle => cle.id == envo.id.replace("employe-", "").replace("-envoyer", ""));
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

        const encainInputSpecialite = document.getElementById(`new-${envo.id.replace("envoyer", "specialite")}`);
        const tdSpecialite = document.getElementById(envo.id.replace("envoyer", "specialite"));
        tdSpecialite.textContent = encainInputSpecialite.value;
        encainInputSpecialite.remove();

        const encainInputEmail = document.getElementById(`new-${envo.id.replace("envoyer", "email")}`);
        const tdEmail = document.getElementById(envo.id.replace("envoyer", "email"));
        tdEmail.textContent = encainInputEmail.value;
        encainInputEmail.remove();

        const encainPayement = document.getElementById(`new-${envo.id.replace("envoyer", "payement")}`);
        const tdPayement = document.getElementById(envo.id.replace("envoyer", "payement"));
        tdPayement.textContent = encainPayement.value;
        encainPayement.remove();

        const encainTelephone = document.getElementById(`new-${envo.id.replace("envoyer", "telephone")}`);
        const tdTelephone = document.getElementById(envo.id.replace("envoyer", "telephone"));
        tdTelephone.textContent = encainTelephone.value;
        encainTelephone.remove();

        const encainNaissance = document.getElementById(`new-${envo.id.replace("envoyer", "naissance")}`);
        const tdNaissance = document.getElementById(envo.id.replace("envoyer", "naissance"));
        tdNaissance.textContent = encainNaissance.value;
        encainNaissance.remove();

        const tdaction1 = document.getElementById(envo.id.replace("envoyer", "action1"));
        const inaction1 = document.createElement("button");
        inaction1.id = envo.id.replace("envoyer", "modifier");
        inaction1.className = "bouton bouton-all-info bi bi-pencil-square";
        inaction1.style.color = "white";
        inaction1.addEventListener("click", creerFormulaireModifier);
        tdaction1.append(inaction1);

        const tdaction2 = document.getElementById(envo.id.replace("envoyer", "action2"));
        const inaction2 = document.createElement("button");
        inaction2.id = envo.id.replace("envoyer", "supprimer");
        inaction2.className = "bouton bouton-danger bi bi-trash3";
        inaction2.addEventListener("click", supprimerEmploye)
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

    const tbPhoto = document.getElementById(event.target.id.replace("modifier", "nom"));
    const newInputName = document.createElement("input");
    newInputName.type = "text";
    newInputName.id = `new-${event.target.id.replace("modifier", "nom")}`;
    newInputName.value = tbPhoto.textContent;
    newInputName.className = "form-control";
    tbPhoto.innerHTML = "";
    tbPhoto.append(newInputName);

    const tbSpecialite = document.getElementById(event.target.id.replace("modifier", "specialite"));
    const newSelectSpecialite = document.createElement("select");
    newSelectSpecialite.id = `new-${event.target.id.replace("modifier", "specialite")}`;
    newSelectSpecialite.className = "form-select";
    const requette = JSON.parse(localStorage.getItem("CATEGORIES")).filter(cle => cle.statut != 0);
    const reserve = tbSpecialite.textContent;
    tbSpecialite.innerHTML = "";
    requette.forEach(key => {
        const optionSelect = document.createElement("option");
        optionSelect.value = key.libelle;
        optionSelect.textContent = key.libelle;
        if (reserve == key.libelle) {
            optionSelect.selected = true;
        }
        newSelectSpecialite.append(optionSelect);
    });
    tbSpecialite.append(newSelectSpecialite);


    const tbEmail = document.getElementById(event.target.id.replace("modifier", "email"));
    const newInputEmail = document.createElement("input");
    newInputEmail.type = "email";
    newInputEmail.id = `new-${event.target.id.replace("modifier", "email")}`;
    newInputEmail.value = tbEmail.textContent;
    newInputEmail.className = "form-control";
    tbEmail.innerHTML = "";
    tbEmail.append(newInputEmail);


    const tbPayement = document.getElementById(event.target.id.replace("modifier", "payement"));
    const newSelectPayement = document.createElement("select");
    newSelectPayement.id = `new-${event.target.id.replace("modifier", "payement")}`;
    newSelectPayement.className = "form-select";
    const reserven = tbPayement.textContent;
    tbPayement.innerHTML = "";
    const table = ["Moov", "MTN", "Orange", "Wave"];
    table.forEach(key => {
        const optionSelect = document.createElement("option");
        optionSelect.value = key;
        optionSelect.textContent = key;
        if (reserven == key) {
            optionSelect.selected = true;
        }
        newSelectPayement.append(optionSelect);
    });
    tbPayement.append(newSelectPayement);


    const tbTelephone = document.getElementById(event.target.id.replace("modifier", "telephone"));
    const newInputTelephone = document.createElement("input");
    newInputTelephone.type = "tel";
    newInputTelephone.id = `new-${event.target.id.replace("modifier", "telephone")}`;
    newInputTelephone.value = tbTelephone.textContent;
    newInputTelephone.className = "form-control";
    tbTelephone.innerHTML = "";
    tbTelephone.append(newInputTelephone);

    const tbNaissance = document.getElementById(event.target.id.replace("modifier", "naissance"));
    const newInputNaissance = document.createElement("input");
    newInputNaissance.type = "date";
    newInputNaissance.id = `new-${event.target.id.replace("modifier", "naissance")}`;
    newInputNaissance.value = tbNaissance.textContent;
    newInputNaissance.className = "form-control";
    tbNaissance.innerHTML = "";
    tbNaissance.append(newInputNaissance);

    const action2element = document.getElementById(event.target.id.replace("modifier", "action2"));
    const annuleelement = document.createElement("button")
    annuleelement.id = event.target.id.replace("modifier", "annuler");
    annuleelement.className = "bouton bouton-secondary bi bi-x-circle";
    annuleelement.style.color = "white";
    annuleelement.addEventListener("click", annulerAction)
    action2element.innerHTML = "";
    action2element.append(annuleelement);

    const action1element = document.getElementById(event.target.id.replace("modifier", "action1"));
    const envoieement = document.createElement("button");
    envoieement.id = event.target.id.replace("modifier", "envoyer");
    envoieement.className = "bouton bouton-success bi bi-send";
    envoieement.style.color = "white";
    envoieement.addEventListener("click", modifierEmploye);
    action1element.innerHTML = "";
    action1element.append(envoieement);
}


function modifierEmploye(evenement) {
    const idenel = document.getElementById(evenement.target.id.replace("envoyer", "id"));

    const monProfil = document.getElementById("new-" + evenement.target.id.replace("envoyer", "photo"));
    const monNom = document.getElementById("new-" + evenement.target.id.replace("envoyer", "nom"));
    const maSpecialite = document.getElementById("new-" + evenement.target.id.replace("envoyer", "specialite"));
    const monEmail = document.getElementById("new-" + evenement.target.id.replace("envoyer", "email"));
    const monPayement = document.getElementById("new-" + evenement.target.id.replace("envoyer", "payement"));
    const monTelephone = document.getElementById("new-" + evenement.target.id.replace("envoyer", "telephone"));
    const maNaissance = document.getElementById("new-" + evenement.target.id.replace("envoyer", "naissance"));

    const local = JSON.parse(localStorage.getItem("EMPLOYES"));
    const cible = local.find(key => key.id == idenel.textContent);
    const indece = local.indexOf(cible);
    if (cible) {
        const madate = new Date();
        if (monProfil.value != "" || (monNom.value != cible.nom && monNom.value.replaceAll(" ", "") != "") ||
            (maSpecialite.value != cible.specialite && maSpecialite.value.replaceAll(" ", "") != "") ||
            (monEmail.value != cible.email && monEmail.value.replaceAll(" ", "") != "") ||
            (monPayement.value != cible.modePayement && monPayement.value.replaceAll(" ", "") != "") ||
            (monTelephone.value != cible.telephone && monTelephone.value.replaceAll(" ", "") != "") ||
            (maNaissance.value != cible.dateNaissance && maNaissance.value.replaceAll(" ", "") != "")) {
            if (monNom.value != cible.nom && monNom.value.replaceAll(" ", "") != "") {
                cible.nom = monNom.value;
            }
            if (maSpecialite.value != cible.specialite && maSpecialite.value.replaceAll(" ", "") != "") {
                cible.specialite = maSpecialite.value;
            }
            if (monEmail.value != cible.email && monEmail.value.replaceAll(" ", "") != "") {
                cible.email = monEmail.value;
            }
            if (monPayement.value != cible.modePayement && monPayement.value.replaceAll(" ", "") != "") {
                cible.modePayement = monPayement.value;
            }
            if (monTelephone.value != cible.telephone && monTelephone.value.replaceAll(" ", "") != "") {
                cible.telephone = monTelephone.value;
            }
            if (maNaissance.value != cible.dateNaissance && maNaissance.value.replaceAll(" ", "") != "") {
                cible.dateNaissance = maNaissance.value;
            }
            const envo = document.querySelector(".bi-send");
            const encainInputPhoto = document.getElementById(`new-${envo.id.replace("envoyer", "photo")}`);
            const tdPhoto = document.getElementById(envo.id.replace("envoyer", "photo"));
            const lienDetail = document.createElement("a");
            lienDetail.className = "item-data";
            lienDetail.id = envo.id.replace("envoyer", "maPhoto");
            lienDetail.href = `detailEmploye.html#${envo.id.replace("-envoyer", "")}`;
            const monImage = document.createElement("img");
            monImage.id = envo.id.replace("envoyer", "image");
            const proofil = JSON.parse(localStorage.EMPLOYES).filter(cle => cle.id == envo.id.replace("employe-", "").replace("-envoyer", ""));
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
                    localStorage.setItem("EMPLOYES", JSON.stringify(local));
                    monImage.src = fichierModif.result;
                });
            }
            cible.update_at = madate.toLocaleString('en-GB', { timeZone: 'UTC' });
            local[indece] = cible;
            localStorage.setItem("EMPLOYES", JSON.stringify(local));

            const encainInputNom = document.getElementById(`new-${envo.id.replace("envoyer", "nom")}`);
            const tdNom = document.getElementById(envo.id.replace("envoyer", "nom"));
            tdNom.textContent = encainInputNom.value;
            encainInputNom.remove();

            const encainInputSpecialite = document.getElementById(`new-${envo.id.replace("envoyer", "specialite")}`);
            const tdSpecialite = document.getElementById(envo.id.replace("envoyer", "specialite"));
            tdSpecialite.textContent = encainInputSpecialite.value;
            encainInputSpecialite.remove();

            const encainInputEmail = document.getElementById(`new-${envo.id.replace("envoyer", "email")}`);
            const tdEmail = document.getElementById(envo.id.replace("envoyer", "email"));
            tdEmail.textContent = encainInputEmail.value;
            encainInputEmail.remove();

            const encainPayement = document.getElementById(`new-${envo.id.replace("envoyer", "payement")}`);
            const tdPayement = document.getElementById(envo.id.replace("envoyer", "payement"));
            tdPayement.textContent = encainPayement.value;
            encainPayement.remove();

            const encainTelephone = document.getElementById(`new-${envo.id.replace("envoyer", "telephone")}`);
            const tdTelephone = document.getElementById(envo.id.replace("envoyer", "telephone"));
            tdTelephone.textContent = encainTelephone.value;
            encainTelephone.remove();

            const encainNaissance = document.getElementById(`new-${envo.id.replace("envoyer", "naissance")}`);
            const tdNaissance = document.getElementById(envo.id.replace("envoyer", "naissance"));
            tdNaissance.textContent = encainNaissance.value;
            encainNaissance.remove();

            const tdaction1 = document.getElementById(envo.id.replace("envoyer", "action1"));
            const inaction1 = document.createElement("button");
            inaction1.id = envo.id.replace("envoyer", "modifier");
            inaction1.className = "bouton bouton-all-info bi bi-pencil-square";
            inaction1.style.color = "white";
            inaction1.addEventListener("click", creerFormulaireModifier);
            tdaction1.append(inaction1);

            const tdaction2 = document.getElementById(envo.id.replace("envoyer", "action2"));
            const inaction2 = document.createElement("button");
            inaction2.id = envo.id.replace("envoyer", "supprimer");
            inaction2.className = "bouton bouton-danger bi bi-trash3";
            inaction2.addEventListener("click", supprimerEmploye)
            inaction2.style.color = "white";
            tdaction2.append(inaction2);

            document.getElementById(envo.id.replace("envoyer", "annuler")).remove();
            document.getElementById(envo.id).remove();

            alert("Mise à jours effectuée avec succès !!!")

        } else {
            alert("Aucune action n'a été faite !")
        }
    }
}


function annulerAction(even) {
    const envo = document.querySelector(".bi-x-circle");
    const encainInputPhoto = document.getElementById(`new-${envo.id.replace("annuler", "photo")}`);
    const tdPhoto = document.getElementById(envo.id.replace("annuler", "photo"));
    const lienDetail = document.createElement("a");
    lienDetail.className = "item-data";
    lienDetail.id = envo.id.replace("annuler", "maPhoto");
    lienDetail.href = `detailEmploye.html#${envo.id.replace("-annuler", "")}`;
    const monImage = document.createElement("img");
    monImage.id = envo.id.replace("annuler", "image");
    const proofil = JSON.parse(localStorage.EMPLOYES).filter(cle => cle.id == envo.id.replace("employe-", "").replace("-annuler", ""));
    monImage.src = proofil[0].photo;
    monImage.style.width = "25px";
    monImage.style.height = "25px";
    monImage.style.borderRadius = "100%";
    monImage.style.backgroundSize = "cover";
    lienDetail.append(monImage);
    tdPhoto.append(lienDetail);
    encainInputPhoto.remove();

    const encainInputNom = document.getElementById(`new-${envo.id.replace("annuler", "nom")}`);
    const tdNom = document.getElementById(envo.id.replace("annuler", "nom"));
    tdNom.textContent = encainInputNom.value;
    encainInputNom.remove();

    const encainInputSpecialite = document.getElementById(`new-${envo.id.replace("annuler", "specialite")}`);
    const tdSpecialite = document.getElementById(envo.id.replace("annuler", "specialite"));
    tdSpecialite.textContent = encainInputSpecialite.value;
    encainInputSpecialite.remove();

    const encainInputEmail = document.getElementById(`new-${envo.id.replace("annuler", "email")}`);
    const tdEmail = document.getElementById(envo.id.replace("annuler", "email"));
    tdEmail.textContent = encainInputEmail.value;
    encainInputEmail.remove();

    const encainPayement = document.getElementById(`new-${envo.id.replace("annuler", "payement")}`);
    const tdPayement = document.getElementById(envo.id.replace("annuler", "payement"));
    tdPayement.textContent = encainPayement.value;
    encainPayement.remove();

    const encainTelephone = document.getElementById(`new-${envo.id.replace("annuler", "telephone")}`);
    const tdTelephone = document.getElementById(envo.id.replace("annuler", "telephone"));
    tdTelephone.textContent = encainTelephone.value;
    encainTelephone.remove();

    const encainNaissance = document.getElementById(`new-${envo.id.replace("annuler", "naissance")}`);
    const tdNaissance = document.getElementById(envo.id.replace("annuler", "naissance"));
    tdNaissance.textContent = encainNaissance.value;
    encainNaissance.remove();

    const tdaction1 = document.getElementById(envo.id.replace("annuler", "action1"));
    const inaction1 = document.createElement("button");
    inaction1.id = envo.id.replace("annuler", "modifier");
    inaction1.className = "bouton bouton-all-info bi bi-pencil-square";
    inaction1.style.color = "white";
    inaction1.addEventListener("click", creerFormulaireModifier);
    tdaction1.append(inaction1);

    const tdaction2 = document.getElementById(envo.id.replace("annuler", "action2"));
    const inaction2 = document.createElement("button");
    inaction2.id = envo.id.replace("annuler", "supprimer");
    inaction2.className = "bouton bouton-danger bi bi-trash3";
    inaction2.addEventListener("click", supprimerEmploye)
    inaction2.style.color = "white";
    tdaction2.append(inaction2);

    document.getElementById(envo.id.replace("annuler", "envoyer")).remove();
    document.getElementById(envo.id).remove();
}

function supprimerEmploye(event) {
    const decision = window.confirm("Êtes-vous vraiment sûre de vouloir supprimer ?");
    if (decision) {
        const reference = event.target.id.replace("employe-", "").replace("-supprimer", "");
        const toutdonne = JSON.parse(localStorage.getItem("EMPLOYES"));
        const requette = toutdonne.find(key => key.id == reference);
        const position = toutdonne.indexOf(requette);
        toutdonne[position].statut = 0;
        localStorage.setItem("EMPLOYES", JSON.stringify(toutdonne));
        location.reload();
    }
}


