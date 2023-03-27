

const contenuTableau = document.getElementById("contenu-tach");
function afficherAttribution(dataValidation){
    if(Array.isArray(dataValidation) && dataValidation.length != 0){
        dataValidation.forEach(cle=>{
            const ligne = document.createElement("tr");
            ligne.id = `ligne-${cle.idEmploye}-${cle.idTache}`;
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
            photo.src = JSON.parse(localStorage.getItem("EMPLOYES")).filter(element => element.id == cle.idEmploye)[0].photo;
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
            debutTache.id = `${cle.idEmploye}-${cle.iddebutTache}-debutTache`;
            debutTache.textContent = cle.debutTache;
            ligne.append(debutTache);

            const dureTache = document.createElement("td");
            dureTache.className = "cell";
            dureTache.id = `${cle.idEmploye}-${cle.iddureTache}-dureTache`;
            
            dureTache.textContent = cle.dureTache;
            ligne.append(dureTache);

            const aujourdui = [new Date().getDay(), new Date().getMonth() + 1, new Date().getFullYear()];
            const au2 = cle.debutTache.split('-')[2];
            const au1 = cle.debutTache.split('-')[1];
            const au0 = cle.debutTache.split('-')[0];
            const pourTache = [au0, au1, au2];
            let ii = "";
            pourTache.forEach(le =>ii += le + " ");
            const jour = new Date(`${ii} 07:00:00`);
            const all = [jour.getDay(), jour.getMonth() + 1, jour.getFullYear()];

            const encours = document.createElement("td");
            encours.className = "cell";
            encours.id = `${cle.idEmploye}-${cle.idTache}-encours`;
            if ((jour.getMilliseconds() + (parseInt(cle.dureTache) - 1) * 86400000) < new Date().getMilliseconds() && (jour.getMilliseconds() <= new Date().getMilliseconds())) {
                encours.textContent = "Fermer !!";
                encours.style.color = "red";
                encours.style.fontWeight = "500";
            } else if (((jour.getMilliseconds() + (parseInt(cle.dureTache) - 1) * 86400000) < new Date().getMilliseconds()) && (jour.getMilliseconds() < new Date().getMilliseconds())){
                encours.style.color = "green";
                encours.style.fontWeight = "500";
                encours.textContent = "En attent...";
                encours.style.cursor = "pointer"
                
            }else{
                encours.style.color = "blue";
                encours.style.fontWeight = "500";
                encours.textContent = "En cours...";
                encours.style.cursor = "wait"
            }
            
            encours.style.width = "70px";
            ligne.append(encours);
            // const tdDecision = document.createElement("td");
            // tdDecision.className = "cell";
            // tdDecision.id = `${cle.idEmploye}-${cle.idtdDecision}-decision`;
            // ligne.append(tdDecision);


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

if (localStorage.getItem("TACHES_ATTRIBUEES")) {
    const dataTacheAttribuees = JSON.parse(localStorage.getItem("TACHES_ATTRIBUEES")).filter(cle => cle.statut == 1);
    afficherAttribution(dataTacheAttribuees);
}


// POUR CONFIRMER LE TRAVAIL EFFECTUE
function approuver(event){
    if (event.target.id.includes("accomplir")){
        alert("accomplir");
    } else if (event.target.id.includes("nonTerminer")){
        alert("nonTerminer")
    }else{
        alert("rienAccomplir")
    }
}


