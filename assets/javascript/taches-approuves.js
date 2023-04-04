function afficherValider(allValidate){
    const contenutableau = document.getElementById("contenutableau");
    if (Array.isArray(allValidate)){
        allValidate.forEach(cle => {
            const tr = document.createElement("tr");
            tr.id = `ligne-${cle.id}-${cle.idEmploye}-${cle.idTache}`;
            contenutableau.append(tr);

            const tdId = document.createElement("td");
            tdId.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-id`;
            tdId.className = "cell";
            tdId.textContent = cle.id;
            tr.append(tdId);

            const tdPhto = document.createElement("td");
            tdPhto.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-Phto`;
            tdPhto.className = "cell";
            tr.append(tdPhto);

            const links = document.createElement("a");
            links.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-links`;
            links.href = `detailsemploye.html#${cle.idEmploye}-${cle.idTache}`;
            links.className = "item-data";
            tdPhto.append(links);

            const image = document.createElement("img");
            image.src = cle.photoEmploye;
            image.style.borderRadius = "100%";
            image.style.width = "35px";
            image.style.height = "35px";
            image.style.backgroundSize = "cover;"
            links.append(image)

            const tdNom = document.createElement("td");
            tdNom.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-nom`;
            tdNom.className = "cell";
            tdNom.textContent = cle.nomEmploye;
            tr.append(tdNom);

            const categorie = JSON.parse(localStorage.EMPLOYES_Pro_Gest_All).find(key => key.id === cle.idEmploye);
            const tdCategorie = document.createElement("td");
            tdCategorie.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-categorie`;
            tdCategorie.className = "cell";
            tdCategorie.textContent = categorie.specialite;
            tr.append(tdCategorie);

            const tdidEmploye = document.createElement("td");
            tdidEmploye.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-idEmploye`;
            tdidEmploye.className = "cell";
            tdidEmploye.textContent = cle.idEmploye;
            tr.append(tdidEmploye);

            const tdLibelleTache = document.createElement("td");
            tdLibelleTache.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-tache`;
            tdLibelleTache.className = "cell";
            tdLibelleTache.textContent = cle.libelleTache;
            tr.append(tdLibelleTache);

            const tdmontant = document.createElement("td");
            tdmontant.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-montant`;
            tdmontant.className = "cell";
            tdmontant.textContent = cle.montant;
            tr.append(tdmontant);

            const tdNonRegle = document.createElement("td");
            tdNonRegle.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-regle`;
            tdNonRegle.className = "cell";
            tdNonRegle.textContent = "Non";
            tr.append(tdNonRegle);

            const tdModePayement = document.createElement("td");
            tdModePayement.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-modePayement`;
            tdModePayement.className = "cell";
            tdModePayement.textContent = cle.modePayement;
            tr.append(tdModePayement);

            const tdTelephone = document.createElement("td");
            tdTelephone.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-telephone`;
            tdTelephone.className = "cell";
            tdTelephone.textContent = cle.telephoneEmploye;
            tr.append(tdTelephone);

            const tdAction = document.createElement("td");
            tdAction.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-action`;
            tdAction.className = "cell";
            tr.append(tdAction);


            const tdLinks = document.createElement("a");
            tdLinks.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-links`;
            tdLinks.className = "item-data";
            tdLinks.href = `detailsemploye.html#${cle.idEmploye}-${cle.idTache}`;
            tdAction.append(tdLinks);




            const bouton = document.createElement("td");
            bouton.id = `${cle.id}-${cle.idEmploye}-${cle.idTache}-payer`;
            bouton.className = "bouton bouton-success  bi bi-cash-coin";
            bouton.style.color = "red";
            bouton.style.backgroundColor = "white"
            bouton.style.border = ".5px solid green"

            tdLinks.append(bouton);

        })
    }
}

if (localStorage.TACHES_VALIDEES_Pro_Gest_All){
    const TACHES_VALIDEES = JSON.parse(localStorage.TACHES_VALIDEES_Pro_Gest_All).filter(cle => !cle.regle && cle.montant !== 0)
    afficherValider(TACHES_VALIDEES)
}
