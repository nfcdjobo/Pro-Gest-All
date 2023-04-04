if (JSON.parse(localStorage.getItem("CATEGORIES"))) {
    const categorieEmploye = JSON.parse(localStorage.getItem("CATEGORIES")).filter(key => key.statut != 0);
    const selectChamps = document.getElementById("categorie-employes");
    categorieEmploye.forEach(cle => {
        const selectOption = document.createElement("option");
        selectOption.value = cle.libelle;
        selectOption.textContent = cle.libelle;
        selectChamps.append(selectOption);
    })
}

function reafraichirPage(){
    let compte = 0
    let ell = setInterval(() => {
        location.reload();
        compte + 5;
        if (compte === 5) {
            clearInterval(ell)
        }
    }, 500);
}



document.getElementById("saveTache").addEventListener("click", saveTaches);
const HID = document.getElementById("hidden");
HID.style.visibility = "hidden";
function saveTaches(event) {
    const errorlibelle = document.getElementById("errorlibelle");
    const errorCategorie = document.getElementById("errorCategorie");
    const errorprix = document.getElementById("errorprix");
    const errorprixau = document.getElementById("errorprixau");

    const libelleTache = document.getElementById("libelleTache");
    const prixTache = document.getElementById("prixTache");
    const prixTacheAutre = document.getElementById("prixTacheAutre");
    const categorieEmployes = document.getElementById("categorie-employes");

    let datecreer = new Date();
    let datemodifier = new Date();
    if (libelleTache.value.replaceAll(" ", "") != "") {
        errorlibelle.textContent = "";
        if (prixTache.value != "") {
            errorprix.textContent = "";
            if (prixTacheAutre.value != "") {
                errorprixau.textContent = "";
                if (parseInt(prixTache.value) > parseInt(prixTacheAutre.value)){
                    if (categorieEmployes.value.replaceAll(" ", "") != "") {
                        errorCategorie.textContent = "";

                        let dataAll = [];
                        const NewTache = {
                            id: "",
                            libelle: libelleTache.value,
                            destinataire: categorieEmployes.value,
                            prixTache: parseInt(prixTache.value),
                            prixTacheAutre: parseInt(prixTacheAutre.value),
                            effectue: false,
                            statut: 1,
                            creerle: datecreer.toLocaleString('en-GB', { timeZone: 'UTC' }),
                            modifierle: datemodifier.toLocaleString('en-GB', { timeZone: 'UTC' }),
                        };

                        if (localStorage.getItem("TACHES") == null) {
                            NewTache.id = "T00L1";
                            dataAll.push(NewTache);
                            localStorage.setItem("TACHES", JSON.stringify(dataAll));
                            libelleTache.style.border = "1px solid rgb(206, 212, 218)";
                            libelleTache.value = "";
                            categorieEmployes.value = "";
                            categorieEmployes.value = "";
                            prixTache.value = "";
                            prixTacheAutre.value = "";
                            categorieEmployes.value = "";
                            reafraichirPage();
                        } else {
                            const conversion = JSON.parse(localStorage.getItem("TACHES"))
                            conversion.forEach(objetCategorie => {
                                dataAll.push(objetCategorie)
                            });
                            NewTache.id = "T00L" + (dataAll.length + 1);
                            dataAll.push(NewTache);
                            localStorage.setItem("TACHES", JSON.stringify(dataAll));
                            libelleTache.style.border = "1px solid rgb(206, 212, 218)";
                            libelleTache.value = "";
                            prixTache.value = "";
                            prixTacheAutre.value = "";
                            categorieEmployes.value = "";
                            reafraichirPage();
                        }
                    } else {
                        categorieEmployes.focus()
                        categorieEmployes.style.border = "1.2px solid red";
                        errorCategorie.textContent = "Ce champ est obligatoire";
                        errorCategorie.style.color = "red";
                    }
                }else{
                    prixTacheAutre.focus()
                    prixTacheAutre.style.border = "1.2px solid red";
                    errorprixau.textContent = "Le prix de la tache non terminée est supperieure à celle qui est terminée";
                    errorprixau.style.color = "red";
                }


                
            }else{
                prixTacheAutre.focus()
                prixTacheAutre.style.border = "1.2px solid red";
                errorprixau.textContent = "Ce champ est obligatoire";
                errorprixau.style.color = "red";
            }
        }else {
            prixTache.focus()
            prixTache.style.border = "1.2px solid red";
            errorprix.textContent = "Ce champ est obligatoire";
            errorprix.style.color = "red";
        }
    } else {
        libelleTache.focus();
        libelleTache.style.border = "1.2px solid red";
        errorlibelle.textContent = "Ce champ est obligatoire";
        errorlibelle.style.color = "red";
    }
    
}


let contenuTaches = JSON.parse(localStorage.getItem("TACHES"));
function afficheTaches(donneCategorie) {
    if (donneCategorie != null) {
        const consernes = donneCategorie.filter(cle => cle.statut != 0 && cle.effectue == false);
        consernes.forEach(element => {
            const contenutableau = document.getElementById("contenutableau");

            const maligne = document.createElement("tr");
            maligne.id = `ligne-${element.id}`
            const monid = document.createElement("td");
            monid.className = "cell";
            monid.id = `taches-${element.id}-id`;
            monid.textContent = element.id;
            maligne.append(monid);

            const monlibelle = document.createElement("td");
            monlibelle.className = "cell";
            monlibelle.id = `taches-${element.id}-libelle`;
            monlibelle.textContent = element.libelle;
            maligne.append(monlibelle);

            const monDestinataire = document.createElement("td");
            monDestinataire.className = "cell";
            monDestinataire.id = `taches-${element.id}-categorie`;
            monDestinataire.textContent = element.destinataire;
            maligne.append(monDestinataire);

            const monPrixNormal = document.createElement("td");
            monPrixNormal.className = "cell";
            monPrixNormal.id = `taches-${element.id}-prixnormal`;
            monPrixNormal.textContent = element.prixTache;
            maligne.append(monPrixNormal);

            const monPrixAnormal = document.createElement("td");
            monPrixAnormal.className = "cell";
            monPrixAnormal.id = `taches-${element.id}-prixanormal`;
            monPrixAnormal.textContent = element.prixTacheAutre;
            maligne.append(monPrixAnormal);

            const monaction1 = document.createElement("td");
            monaction1.className = "cell";
            monaction1.id = `taches-${element.id}-action1`;
            const boutonmodifier = document.createElement("button");
            boutonmodifier.id = `taches-${element.id}-modifier`;
            boutonmodifier.className = "bouton bouton-all-info bi bi-pencil-square";
            boutonmodifier.style.color = "white";
            monaction1.append(boutonmodifier);
            maligne.append(monaction1);

            const monaction2 = document.createElement("td");
            monaction2.className = "cell";
            monaction2.id = `taches-${element.id}-action2`;

            const boutonsupprimer = document.createElement("button");
            boutonsupprimer.id = `taches-${element.id}-supprimer`;
            boutonsupprimer.className = "bouton bouton-danger bi bi-trash3";
            boutonsupprimer.style.color = "white";
            boutonsupprimer.addEventListener("click", supprimerTaches)
            monaction2.append(boutonsupprimer);
            maligne.append(monaction2);
            contenutableau.append(maligne);
        })
    }

}

afficheTaches(JSON.parse(localStorage.getItem("TACHES")));
let bouton_modifier = document.querySelectorAll(".bi-pencil-square");
bouton_modifier.forEach(bouton => {
    bouton.addEventListener("click", creerFormulaireModifier);
});

function creerFormulaireModifier(event) {
    if (document.querySelector(".bi-send")) {
        const envo = document.querySelector(".bi-send");

        const encainInputLibelle = document.getElementById(`new-${envo.id.replace("envoyer", "libelle")}`);
        const tdLibelle = document.getElementById(envo.id.replace("envoyer", "libelle"));
        tdLibelle.textContent = encainInputLibelle.value;
        encainInputLibelle.remove();

        const encainSelectDestinataire = document.getElementById(`new-${envo.id.replace("envoyer", "categorie")}`);
        const tdDestinataire = document.getElementById(envo.id.replace("envoyer", "categorie"));
        tdDestinataire.textContent = encainSelectDestinataire.value;
        encainSelectDestinataire.remove();

        const encainInputPrixnormal = document.getElementById(`new-${envo.id.replace("envoyer", "prixnormal")}`);
        const tdPrixnormal = document.getElementById(envo.id.replace("envoyer", "prixnormal"));
        tdPrixnormal.textContent = encainInputPrixnormal.value;
        encainInputPrixnormal.remove();

        const encainInputPrixanormal = document.getElementById(`new-${envo.id.replace("envoyer", "prixanormal")}`);
        const tdPrixanormal = document.getElementById(envo.id.replace("envoyer", "prixanormal"));
        tdPrixanormal.textContent = encainInputPrixanormal.value;
        encainInputPrixanormal.remove();

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
        inaction2.addEventListener("click", supprimerTaches);
        inaction2.style.color = "white";
        tdaction2.append(inaction2);

        document.getElementById(envo.id.replace("envoyer", "annuler")).remove();
        document.getElementById(envo.id).remove();
    }

    const libelleElement = document.getElementById(event.target.id.replace("modifier", "libelle"));
    const newlibelleinput = document.createElement("input");
    newlibelleinput.type = "text";
    newlibelleinput.value = libelleElement.textContent;
    newlibelleinput.id = `new-${event.target.id.replace("modifier", "libelle")}`;
    newlibelleinput.className = "form-control";
    libelleElement.textContent = "";
    libelleElement.append(newlibelleinput);

    const prixnormalElement = document.getElementById(event.target.id.replace("modifier", "prixnormal"));
    const newprixnormalinput = document.createElement("input");
    newprixnormalinput.type = "number";
    newprixnormalinput.value = prixnormalElement.textContent;
    newprixnormalinput.id = `new-${event.target.id.replace("modifier", "prixnormal")}`;
    newprixnormalinput.className = "form-control";
    prixnormalElement.textContent = "";
    prixnormalElement.append(newprixnormalinput);

    const prixanormalElement = document.getElementById(event.target.id.replace("modifier", "prixanormal"));
    const newprixanormalinput = document.createElement("input");
    newprixanormalinput.type = "number";
    newprixanormalinput.value = prixanormalElement.textContent;
    newprixanormalinput.id = `new-${event.target.id.replace("modifier", "prixanormal")}`;
    newprixanormalinput.className = "form-control";
    prixanormalElement.textContent = "";
    prixanormalElement.append(newprixanormalinput);



    const adminRoles = document.getElementById(event.target.id.replace("modifier", "categorie"));
    const selectDestinataire = document.createElement("select");
    selectDestinataire.id = `new-${event.target.id.replace("modifier", "categorie")}`;
    selectDestinataire.className = "form-select";
    const mesRoles = JSON.parse(localStorage.getItem("CATEGORIES")).filter(cle => cle.statut == 1);
    mesRoles.forEach(key => {
        const optionSelect = document.createElement("option");
        optionSelect.textContent = key.libelle
        if (adminRoles.textContent == key.libelle) {
            optionSelect.selected = true
        }
        selectDestinataire.append(optionSelect);
    });
    adminRoles.textContent = "";
    adminRoles.append(selectDestinataire);
    
    // newSelectDestinataire.value = libelleElement.textContent;
    // newSelectDestinataire.id = `new-${event.target.id.replace("modifier", "categorie")}`;
    
    libelleElement.innerHTML = "";
    libelleElement.append(newlibelleinput);

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
    envoieement.addEventListener("click", modifierTaches);
    action1element.innerHTML = "";
    action1element.append(envoieement);
    // document.querySelectorAll("input").forEach(cle => { cle.style.fontSize = "13px", cle.style.fontWeight = "500" });
    // document.querySelectorAll("option").forEach(cle => { cle.style.fontSize = "13px", cle.style.fontWeight = "500" });
    // document.querySelectorAll("select").forEach(cle => { cle.style.fontSize = "13px", cle.style.fontWeight = "500" });
}


function modifierTaches(evenement) {
    const idenel = document.getElementById(evenement.target.id.replace("envoyer", "id"));
    const moninput = document.getElementById("new-" + evenement.target.id.replace("envoyer", "libelle"));
    const prixnormal = document.getElementById("new-" + evenement.target.id.replace("envoyer", "prixnormal"));
    const prixanormal = document.getElementById("new-" + evenement.target.id.replace("envoyer", "prixanormal"));
    const monselect = document.getElementById("new-" + evenement.target.id.replace("envoyer", "categorie"));

    const local = JSON.parse(localStorage.getItem("TACHES"));
    const cible = local.find(key => key.id == idenel.textContent);
    const indece = local.indexOf(cible);
    if (cible) {
        if ((moninput.value != cible.libelle || monselect.value != cible.destinataire || parseInt(prixnormal.value) != cible.prixTache || parseInt(prixanormal.value) != cible.prixTacheAutre) && moninput.value.replaceAll(" ", "") != "" && prixnormal.value != "" && prixanormal.value != "") {
            let ladate = new Date();
            cible.libelle = moninput.value;
            cible.destinataire = monselect.value;
            cible.prixTache = parseInt(prixnormal.value);
            cible.prixTacheAutre = parseInt(prixanormal.value);
            cible.modifierle = ladate.toLocaleString('en-GB', { timeZone: 'UTC' });
            local[indece] = cible;
            localStorage.setItem("TACHES", JSON.stringify(local));

            const envo = document.querySelector(".bi-send");
            const encaininput = document.getElementById(`new-${envo.id.replace("envoyer", "libelle")}`);
            const tdlibelle = document.getElementById(envo.id.replace("envoyer", "libelle"));
            tdlibelle.textContent = encaininput.value;
            encaininput.remove();

            const encainSelectDestinataire = document.getElementById(`new-${envo.id.replace("envoyer", "categorie")}`);
            const tdDestinataire = document.getElementById(envo.id.replace("envoyer", "categorie"));
            tdDestinataire.textContent = encainSelectDestinataire.value;
            encainSelectDestinataire.remove();

            const prixnormalElement = document.getElementById("new-"+envo.id.replace("envoyer", "prixnormal"));
            const tdprixnormalinput = document.getElementById(envo.id.replace("envoyer", "prixnormal"));
            tdprixnormalinput.textContent = prixnormalElement.value;
            prixnormalElement.remove();

            const prixanormalElement = document.getElementById("new-"+envo.id.replace("envoyer", "prixanormal"));
            const newprixanormalinput = document.getElementById(envo.id.replace("envoyer", "prixanormal"));
            newprixanormalinput.textContent = prixanormalElement.value;
            prixanormalElement.remove();

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
            inaction2.addEventListener("click", supprimerTaches)
            inaction2.style.color = "white";
            tdaction2.append(inaction2);

            document.getElementById(envo.id.replace("envoyer", "annuler")).remove();
            document.getElementById(envo.id).remove();

            const ID = document.getElementById("ID");
            const LIB = document.getElementById("LIB");

            document.getElementById("ID").textContent = cible.id;
            document.getElementById("LIB").textContent = moninput.value;
            document.getElementById("DES").textContent = monselect.value;
            HID.style.visibility = "visible";
        } else {
            alert("Aucune action n'a été faite !")
        }
    }
}


function annulerAction(even) {
    const envo = document.querySelector(".bi-x-circle");
    const encaininput = document.getElementById(`new-${envo.id.replace("annuler", "libelle")}`);
    const tdlibelle = document.getElementById(envo.id.replace("annuler", "libelle"));
    tdlibelle.textContent = encaininput.value;
    encaininput.remove();

    const encainSelectDestinataire = document.getElementById(`new-${envo.id.replace("annuler", "categorie")}`);
    const tdSelectDestinataire = document.getElementById(envo.id.replace("annuler", "categorie"));
    tdSelectDestinataire.textContent = encainSelectDestinataire.value;
    encainSelectDestinataire.remove();

    const prixnormalElement = document.getElementById(`new-${envo.id.replace("annuler", "prixnormal")}`);
    const tdprixnormalinput = document.getElementById(envo.id.replace("annuler", "prixnormal"));
    tdprixnormalinput.textContent = prixnormalElement.value;
    prixnormalElement.remove();

    const prixanormalElement = document.getElementById(`new-${envo.id.replace("annuler", "prixanormal")}`);
    const tdprixanormalinput = document.getElementById(envo.id.replace("annuler", "prixanormal"));
    tdprixanormalinput.textContent = prixanormalElement.value;
    prixanormalElement.remove();

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
    inaction2.style.color = "white";
    inaction2.addEventListener("click", supprimerTaches);
    tdaction2.append(inaction2);

    document.getElementById(envo.id.replace("annuler", "envoyer")).remove();
    document.getElementById(envo.id).remove();
}

function supprimerTaches(event) {
    const decision = window.confirm("Êtes-vous vraiment sûre de vouloir supprimer ?");
    if (decision) {
        const reference = event.target.id.replace("taches-", "").replace("-supprimer", "");
        const toutdonne = JSON.parse(localStorage.getItem("TACHES"));
        const requette = toutdonne.find(key => key.id == reference);
        const position = toutdonne.indexOf(requette);
        toutdonne[position].statut = 0;
        localStorage.setItem("TACHES", JSON.stringify(toutdonne));
        document.getElementById(`ligne-${reference}`).remove();
    }
}
