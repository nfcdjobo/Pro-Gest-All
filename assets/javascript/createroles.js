document.getElementById("saverole").addEventListener("click", saverole);
function saverole(event){
    let errorlibelle = document.getElementById("errorlibelle");
    let libellerole = document.getElementById("libellerole");
    if(libellerole.value.replaceAll(" ", "") != ""){
        errorlibelle.textContent = "";
        let datecreer = new Date();
        let datemodifier = new Date();
            const libelle = libellerole.value;
            let dataAll = [];
            const Newrole = {
                id: "",
                libelle: libellerole.value,
                statut: 1,
                creerle: datecreer.toLocaleString('en-GB', { timeZone: 'UTC' }),
                modifierle: datemodifier.toLocaleString('en-GB', { timeZone: 'UTC' })
            }
            if (localStorage.getItem("ROLES") == null){
                Newrole.id = "R00L1";
                dataAll.push(Newrole);
                localStorage.setItem("ROLES",JSON.stringify(dataAll));
                libellerole.style.border = "1px solid rgb(206, 212, 218)";
                libellerole.value = "";
                location.reload();
            }else{
                if(JSON.parse(localStorage.getItem("ROLES")).find(cle=>cle.libelle.toLowerCase() == libellerole.value.toLowerCase())){
                    alert("Ce rôle a été déjà créé")
                }else{
                    const conversion = JSON.parse(localStorage.getItem("ROLES"))
                    conversion.forEach(objetrole => {
                        dataAll.push(objetrole)
                    });
                    Newrole.id = "R00L" + (dataAll.length + 1);
                    dataAll.push(Newrole);
                    localStorage.setItem("ROLES", JSON.stringify(dataAll));
                    libellerole.style.border = "1px solid rgb(206, 212, 218)";
                    libellerole.value = "";
                    location.reload();
                }
            }
    }else{
        libellerole.focus();
        libellerole.style.border = "1.2px solid red";
        errorlibelle.textContent = "Ce champ est obligatoire";
        errorlibelle.style.color = "red";
    }
}


let contenurole =JSON.parse(localStorage.getItem("ROLES"));
function afficheroles(donnerole){
    if (donnerole != null){
        const consernes = donnerole.filter(cle => cle.statut != 0);
        consernes.forEach(element => {
            const contenutableau = document.getElementById("contenutableau");

            const maligne = document.createElement("tr");
            maligne.id = `ligne-${element.id}`
            const monid = document.createElement("td");
            monid.className = "cell";
            monid.id = `roles-${element.id}-id`;
            monid.textContent = element.id;
            maligne.append(monid);

            const monlibelle = document.createElement("td");
            monlibelle.className = "cell";
            monlibelle.id = `roles-${element.id}-libelle`;
            monlibelle.textContent = element.libelle;
            maligne.append(monlibelle);

            const mondatecreer = document.createElement("td");
            mondatecreer.className = "cell";
            mondatecreer.id = `roles-${element.id}-datecreer`;
            mondatecreer.textContent = element.creerle;
            maligne.append(mondatecreer);

            const mondatemodifier = document.createElement("td");
            mondatemodifier.className = "cell";
            mondatemodifier.id = `roles-${element.id}-datemodifier`;
            mondatemodifier.textContent = element.modifierle;
            maligne.append(mondatemodifier);

            const monaction1 = document.createElement("td");
            monaction1.className = "cell";
            monaction1.id = `roles-${element.id}-action1`;
            const boutonmodifier = document.createElement("button");
            boutonmodifier.id = `roles-${element.id}-modifier`;
            boutonmodifier.className = "bouton bouton-all-info bi bi-pencil-square";
            boutonmodifier.style.color = "white";
            monaction1.append(boutonmodifier);
            maligne.append(monaction1);

            const monaction2 = document.createElement("td");
            monaction2.className = "cell";
            monaction2.id = `roles-${element.id}-action2`;

            const boutonsupprimer = document.createElement("button");
            boutonsupprimer.id = `roles-${element.id}-supprimer`;
            boutonsupprimer.className = "bouton bouton-danger bi bi-trash3";
            boutonsupprimer.style.color = "white";
            boutonsupprimer.addEventListener("click", supprimerRoles)
            monaction2.append(boutonsupprimer);
            maligne.append(monaction2);
            contenutableau.append(maligne);
        })
    }
    
}

afficheroles(JSON.parse(localStorage.getItem("ROLES")));

let bouton_modifier = document.querySelectorAll(".bi-pencil-square");
bouton_modifier.forEach(bouton => {
    bouton.addEventListener("click", creerFormulaireModifier);
});

function creerFormulaireModifier(event){
    if (document.querySelector(".bi-send")){
        const envo = document.querySelector(".bi-send");
        const encaininput = document.getElementById(`new-${envo.id.replace("envoyer", "libelle")}`);
        const tdlibelle = document.getElementById(envo.id.replace("envoyer", "libelle"));
        tdlibelle.textContent = encaininput.value;
        encaininput.remove();

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
        inaction2.addEventListener("click", supprimerRoles);
        inaction2.style.color = "white";
        tdaction2.append(inaction2);

        document.getElementById(envo.id.replace("envoyer", "annuler")).remove();
        document.getElementById(envo.id).remove();
    }

    const libelleelement = document.getElementById(event.target.id.replace("modifier", "libelle"));
    const newlibelleinput = document.createElement("input");
    newlibelleinput.type = "text";
    newlibelleinput.value = libelleelement.textContent;
    newlibelleinput.id = `new-${event.target.id.replace("modifier", "libelle")}`;
    newlibelleinput.className = "form-control";
    libelleelement.innerHTML = "";
    libelleelement.append(newlibelleinput);

    const action2element = document.getElementById(event.target.id.replace("modifier", "action2"));
    const annuleelement = document.createElement("button");
    annuleelement.id = event.target.id.replace("modifier", "annuler");
    annuleelement.className = "bouton bouton-secondary bi bi-x-circle";
    annuleelement.style.color = "white";
    annuleelement.addEventListener("click", annulerAction);
    action2element.innerHTML = "";
    action2element.append(annuleelement);

    const action1element = document.getElementById(event.target.id.replace("modifier", "action1"));
    const envoieement = document.createElement("button");
    envoieement.id = event.target.id.replace("modifier", "envoyer");
    envoieement.className = "bouton bouton-success bi bi-send";
    envoieement.style.color = "white";
    envoieement.addEventListener("click", modifierRoles);
    action1element.innerHTML = "";
    action1element.append(envoieement);
}


function modifierRoles(evenement){
    const idenel = document.getElementById(evenement.target.id.replace("envoyer", "id"));
    const moninput = document.getElementById("new-" + evenement.target.id.replace("envoyer", "libelle"));
    
    const local = JSON.parse(localStorage.getItem("ROLES"));
    const cible = local.find(key => key.id == idenel.textContent);
    const indece = local.indexOf(cible);
    if (cible){
        if (moninput.value != cible.libelle){
            if(JSON.parse(localStorage.getItem("ROLES")).find(cle=>cle.libelle.toLowerCase() == moninput.value.toLowerCase())){
                alert("Ce rôle a été déjà ajouté.")
            }else{
                let ladate = new Date();
                cible.libelle = moninput.value;
                cible.modifierle = ladate.toLocaleString('en-GB', { timeZone: 'UTC' });
                local[indece] = cible;
                localStorage.setItem("ROLES", JSON.stringify(local));

                const envo = document.querySelector(".bi-send");
                const encaininput = document.getElementById(`new-${envo.id.replace("envoyer", "libelle")}`);
                const tdlibelle = document.getElementById(envo.id.replace("envoyer", "libelle"));
                tdlibelle.textContent = encaininput.value;
                encaininput.remove();

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
                inaction2.addEventListener("click", supprimerRoles)
                inaction2.style.color = "white";
                tdaction2.append(inaction2);

                document.getElementById(envo.id.replace("envoyer", "annuler")).remove();
                document.getElementById(envo.id).remove();
            }
        }else{
            alert("Aucune action n'a été faite !")
        }
    }
}


function annulerAction(even){
    const envo = document.querySelector(".bi-x-circle");
    const encaininput = document.getElementById(`new-${envo.id.replace("annuler", "libelle")}`);
    const tdlibelle = document.getElementById(envo.id.replace("annuler", "libelle"));
    tdlibelle.textContent = encaininput.value;
    encaininput.remove();

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
    inaction2.addEventListener("click", supprimerRoles);
    tdaction2.append(inaction2);

    document.getElementById(envo.id.replace("annuler", "envoyer")).remove();
    document.getElementById(envo.id).remove();
    location.reload();
}

function supprimerRoles(event){
    const decision = window.confirm("Êtes-vous vraiment sûre de vouloir supprimer ?");
    if(decision){
        const reference = event.target.id.replace("roles-", "").replace("-supprimer", "");
        const toutdonne = JSON.parse(localStorage.getItem("ROLES"));
        const requette = toutdonne.find(key => key.id == reference);
        const position = toutdonne.indexOf(requette);
        toutdonne[position].statut = 0;
        localStorage.setItem("ROLES", JSON.stringify(toutdonne));
        alert("Suppression effectuée avec succès !");
        document.getElementById(`ligne-${reference}`).remove();
    }
}
