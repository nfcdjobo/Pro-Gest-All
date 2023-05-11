const contenuTableau = document.getElementById("contenu-tach");
function afficherAttribution(dataValidation){
    if(Array.isArray(dataValidation) && dataValidation.length != 0){
        dataValidation.forEach(cle=>{
            let ref = cle.id.split("-");
            const ligne = document.createElement("tr");
            ligne.id = `ligne-${ref[0]}-${cle.idEmploye}-${cle.idTache}`;
            contenuTableau.append(ligne);

            const tdId = document.createElement("td");
            tdId.className = "cell";
            tdId.id = `${cle.idEmploye}-${cle.idTache}`;
            tdId.textContent = `${cle.idEmploye}-${cle.idTache}`;
            ligne.append(tdId);

            const tdPhoto = document.createElement("td");
            tdPhoto.className = "cell";
            tdPhoto.id = `${cle.idEmploye}-${cle.idTache}-photo`;
            ligne.append(tdPhoto);

            const photo = document.createElement("img");
            photo.id = `${cle.idEmploye}-${cle.idTache}-image`;
            photo.src = JSON.parse(localStorage.getItem("EMPLOYES_Pro_Gest_All")).filter(element => element.id == cle.idEmploye)[0].photo;
            photo.style.width = "30px";
            photo.style.height = "30px";
            photo.style.borderRadius = "100%";
            tdPhoto.append(photo);
            const nomEmploye = document.createElement("td");
            nomEmploye.className = "cell";
            nomEmploye.id = `${cle.idEmploye}-${cle.idTache}-employe`;
            nomEmploye.textContent = cle.employe;
            ligne.append(nomEmploye);

            const categorie = document.createElement("td");
            categorie.className = "cell";
            categorie.id = `${cle.idEmploye}-${cle.idTache}-categorie`;
            categorie.textContent = cle.categorie;
            ligne.append(categorie);

            const tache = document.createElement("td");
            tache.className = "cell";
            tache.id = `${cle.idEmploye}-${cle.idTache}-tache`;
            tache.textContent = cle.tache;
            ligne.append(tache);

            const debutTache = document.createElement("td");
            debutTache.className = "cell";
            debutTache.id = `${cle.idEmploye}-${cle.idTache}-debutTache`;
            debutTache.textContent = cle.debutTache;
            ligne.append(debutTache);

            const dureTache = document.createElement("td");
            dureTache.className = "cell";
            dureTache.id = `${cle.idEmploye}-${cle.iddureTache}-dureTache`;
            
            dureTache.textContent = cle.dureTache;
            ligne.append(dureTache);

            const aujourdui = new Date();
            const debut = new Date(cle.debutTache);
            const duree = cle.dureTache;
            const fin = duree * 24 * 60 * 60 * 1000 + debut.getTime()+10*60*60*1000;

            const encours = document.createElement("td");
            encours.className = "cell";
            encours.id = `${cle.idEmploye}-${cle.idTache}-encours`;
            if (debut.getTime() < aujourdui.getTime() && aujourdui.getTime()<fin) {
                encours.style.color = "green";
                encours.style.fontWeight = "500";
                encours.textContent = "En cours...";
                encours.style.cursor = "wait";
            } else if (debut.getTime() > aujourdui.getTime() && aujourdui.getTime() < fin){
                encours.style.color = "green";
                encours.style.fontWeight = "500";
                encours.textContent = " En attente...";
                encours.style.cursor = "pointer";
            }else if(debut.getTime()< aujourdui.getTime() && fin < aujourdui.getTime()){
                encours.style.color = "blue";
                encours.style.fontWeight = "500";
                encours.textContent = "Fermer";
            }
            
            encours.style.width = "70px";
            ligne.append(encours);

            const tdAccompli = document.createElement("td");
            tdAccompli.className = "cell";
            tdAccompli.id = `${cle.idEmploye}-${cle.idTache}-tdAccompli`;
            ligne.append(tdAccompli);

            const accomplir = document.createElement("button");
            accomplir.className = "bouton bouton-primondial";
            accomplir.id = `${cle.idEmploye}-${cle.idTache}-accomplir`;
            accomplir.textContent = "100%";
            accomplir.style.color = "white";
            accomplir.style.fontWeight = "500";
            accomplir.addEventListener("click", approuver);
            tdAccompli.append(accomplir);

            const tdNonTerminer = document.createElement("td");
            tdNonTerminer.className = "cell";
            tdNonTerminer.id = `${cle.idEmploye}-${cle.idTache}-tdNonTerminer`;
            ligne.append(tdNonTerminer);

            const nonTerminer = document.createElement("button");
            nonTerminer.className = "bouton bouton-danger";
            nonTerminer.id = `${cle.idEmploye}-${cle.idTache}-nonTerminer`;
            nonTerminer.textContent = "25%";
            nonTerminer.style.color = "white";
            nonTerminer.style.fontWeight = "500";
            nonTerminer.style.cursor = "help";
            nonTerminer.addEventListener("click", approuver);
            tdNonTerminer.append(nonTerminer);

            const tdRienAccomplir = document.createElement("td");
            tdRienAccomplir.className = "cell";
            tdRienAccomplir.id = `${cle.idEmploye}-${cle.idTache}-tdRienAccomplir`;
            ligne.append(tdRienAccomplir);

            const rienAccomplir = document.createElement("button");
            rienAccomplir.className = "bouton bouton-secondary";
            rienAccomplir.id = `${cle.idEmploye}-${cle.idTache}-rienAccomplir`;
            rienAccomplir.textContent = "0%";
            rienAccomplir.style.color = "white";
            rienAccomplir.style.fontWeight = "500";
            rienAccomplir.style.cursor = "no-drop";
            rienAccomplir.addEventListener("click", approuver);
            tdRienAccomplir.append(rienAccomplir);
        });
    }
}

if (localStorage.getItem("TACHES_ATTRIBUEES_Pro_Gest_All")) {
    const dataTacheAttribuees = JSON.parse(localStorage.getItem("TACHES_ATTRIBUEES_Pro_Gest_All")).filter(cle => cle.statut == 1);
    afficherAttribution(dataTacheAttribuees);
}

// POUR CONFIRMER LE TRAVAIL EFFECTUE
function approuver(event){
    if(confirm(`Pour approuver cliquez sur "OK"`)){
        let data = event.target.id.split("-");
        let idEmploye = data[0];
        let idTache = data[1];
        let bigTache = JSON.parse(localStorage.getItem("TACHES_Pro_Gest_All"));
        let tache = bigTache.find(cle => cle.id == idTache);

        let bigRequette = JSON.parse(localStorage.getItem("EMPLOYES_Pro_Gest_All"));
        let employe = bigRequette.find(cle => cle.id == idEmploye);
        let indice = bigRequette.indexOf(employe);

        let rapport = {
            id:"",
            idEmploye: employe.id,
            nomEmploye: employe.nom,
            emailEmploye: employe.email,
            modePayement: employe.modePayement,
            telephoneEmploye: employe.telephone,
            photoEmploye: employe.photo,
            specialiteEmploy: employe.specialite,
            ageEmploye: employe.age,

            idTache: tache.id,
            libelleTache: tache.libelle,
            prixTacheTache: tache.prixTache,
            prixTacheAutreTache: tache.prixTacheAutre,
            regle: false,
            creer_le: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
            modifier_le: new Date().toLocaleString('en-GB', { timeZone: 'UTC' })
        }
        let bigData = [];
        if (event.target.id.includes("accomplir")) {
            rapport.montant = tache.prixTache;
        } else if (event.target.id.includes("nonTerminer")) {
            rapport.montant = tache.prixTacheAutre;
        } else {
            rapport.montant = tache.prixTacheAutre * 0;
        }

        if (localStorage.getItem("TACHES_VALIDEES_Pro_Gest_All")) {
            const allValidation = JSON.parse(localStorage.getItem("TACHES_VALIDEES_Pro_Gest_All"));
            rapport.id = "V00L" + (allValidation.length + 1);
            allValidation.push(rapport);
            localStorage.setItem("TACHES_VALIDEES_Pro_Gest_All", JSON.stringify(allValidation));
        } else {
            rapport.id = "V00L1";
            bigData.push(rapport);
            localStorage.setItem("TACHES_VALIDEES_Pro_Gest_All", JSON.stringify(bigData));
        }

        employe.programmer = false;
        bigRequette[indice] = employe;
        localStorage.setItem("EMPLOYES_Pro_Gest_All", JSON.stringify(bigRequette));

        let parent = event.target.closest("tr");
        const idParent = parent.id.replace("ligne-", "").split("-");
        let allTacheValidee = JSON.parse(localStorage.getItem("TACHES_ATTRIBUEES_Pro_Gest_All"));
        const requetteTacheAttribue = allTacheValidee.find(cle => { return cle.id.includes(idParent[0]) });
        const indeceTacheAttribue = allTacheValidee.indexOf(requetteTacheAttribue);
        requetteTacheAttribue.statut = 0;
        allTacheValidee[indeceTacheAttribue] = requetteTacheAttribue;
        localStorage.setItem("TACHES_ATTRIBUEES_Pro_Gest_All", JSON.stringify(allTacheValidee));
        parent.remove();
    }
}


