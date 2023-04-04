let heure = new Date();
// Je récupère l'url de ma page courante
const dataUrl = window.location.href.split("#");
const requette = JSON.parse(localStorage.getItem("EMPLOYES_Pro_Gest_All")).find(cle => cle.id == dataUrl[1].split("-")[0]);
document.getElementById("photo").src = requette.photo;
document.getElementById("photo").style.borderRadius = "100%";
document.getElementById("nomEmploye").textContent = requette.nom;
document.getElementById("emailEmploye").textContent = requette.email;
document.getElementById("payementEmploye").textContent = requette.modePayement;
document.getElementById("telephoneEmploye").textContent = requette.telephone;
document.getElementById("CategorieEmploye").textContent = requette.specialite;
const bigDataVilide = JSON.parse(localStorage.getItem("TACHES_VALIDEES_Pro_Gest_All")).filter(cle => cle.idEmploye == dataUrl[1].split("-")[0] && cle.montant != 0);

function configuration(event) {
    const somNom = document.getElementById("somNom");
    const sonArgent = document.getElementById("sonArgent");
    const saTache = document.getElementById("saTache");
    const sonReseau = document.getElementById("sonReseau");
    const sonCompte = document.getElementById("sonCompte");
    const saDate = document.getElementById("saDate");
    const saValidation = document.getElementById("saValidation");

    const infos = event.target.value.split("-");
    
    if (infos.includes("all")) {
        sonArgent.textContent = `${infos[2]} FCFA`;
        saTache.textContent = "Toutes ses tâches effectuées."
    } else {
        sonArgent.textContent = `${infos[3]} FCFA`;
        saValidation.setAttribute("refer", `${infos[0]}-${infos[1]}-${infos[2]}`);
        const tacheConcerne = JSON.parse(localStorage.TACHES_Pro_Gest_All).find(cle => cle.id === infos[2]);
        saTache.textContent = `${tacheConcerne.id}/${tacheConcerne.libelle}`;

    }

}

function afficherTacheNonPayee(dataTacheValide) {
    if (Array.isArray(dataTacheValide) && dataTacheValide.length > 0) {
        const contenutableau = document.getElementById("contenutableau");
        const reseauxPayement = document.getElementById("toutTache");
        const select = document.createElement("select");
        select.id = `select-${requette.id}`;
        select.className = "form-select";
        select.addEventListener("change", configuration)
        reseauxPayement.append(select);
        let sommeTotal = 0;
        let tout = 0
        dataTacheValide.forEach(cle => {
            tout += cle.montant;
        });
        const option1 = document.createElement("option");
        option1.value = `all-${requette.id}-${tout}`;
        option1.textContent = `La totalité: ${tout} FCFA`;
        select.append(option1)
        dataTacheValide.forEach(cle => {
            sommeTotal += cle.montant;
            const tr = document.createElement("tr");
            tr.id = `ligne-${cle.id}-${cle.idEmploye}-${cle.idTache}`;
            tr.className = "cell";
            contenutableau.append(tr);

            const tdiD = document.createElement("td");
            tdiD.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-id`;
            tdiD.textContent = cle.idTache;
            contenutableau.append(tdiD);

            const tdTache = document.createElement("td");
            tdTache.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-tache`;
            tdTache.textContent = cle.libelleTache;
            contenutableau.append(tdTache);

            const tdMontant = document.createElement("td");
            tdMontant.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-montant`;
            tdMontant.textContent = cle.montant + " FCFA";
            contenutableau.append(tdMontant);

            const option = document.createElement("option");
            option.value = `${cle.id}-${cle.idEmploye}-${cle.idTache}-${cle.montant}`;
            option.textContent = `${cle.montant} FCFA`;
            select.append(option);

            const tdRegle = document.createElement("td");
            tdRegle.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-regle`;
            tdRegle.textContent = "Non réglé";
            tdRegle.style.color = "red";
            tdRegle.style.fontWeight = "700";
            contenutableau.append(tdRegle);

            document.getElementById("tout-bouton-suivant").textContent = `${sommeTotal} FCFA`;
            document.getElementById("tout-bouton-suivant").style.border = "1px solid red";

            document.getElementById("sommeApaye").textContent = `La somme totale à payer compte Mme/M. ${cle.nomEmploye} est:`
            document.getElementById("sommeApaye").style.fontWeight = "700";
        });

        document.getElementById("numeroCompte").textContent = `+225 ${requette.telephone}`;
        document.getElementById("reseauxPayement").textContent = requette.modePayement + " Money";
        document.getElementById("sommeApaye").value = sommeTotal;

        document.getElementById("somNom").textContent = `${requette.nom}`;
        document.getElementById("sonArgent").textContent = `${sommeTotal} FCFA`;
        document.getElementById("saTache").textContent = `Toutes ses tâches effectuées`;
        document.getElementById("sonReseau").textContent = `${requette.modePayement} Money`;
        document.getElementById("sonCompte").textContent = `+225 ${requette.telephone}`;
        document.getElementById("saDate").textContent = heure.toLocaleString('en-GB', { timeZone: 'UTC' });;

    }
}
afficherTacheNonPayee(bigDataVilide);
const resumePayement = document.getElementById("resumePayement");
resumePayement.style.display = "none";

document.getElementById("passePayement").addEventListener("click", passePayement);
function passePayement(event) {
    resumePayement.style.display = "block";
    document.getElementById("payement-1").style.display = "none";

}

// function somme(a){
//     if(typeof a== "string"){
//         const t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//         let newT = [];
//         let som = 0;
//         for(let i=0; i<a.length; i++){
//             if(t.includes(a[i])){
//                 newT.push(a[i]);
//             }
//         }
// 
//         if(newT.length>0){
//             for(let y = 0; y<newT.length; y++){
//                 som += parseInt(newT[y]);
//             }
//             
//         }
//         console.log(som);
//     }
// }
// 
// somme("ayederdfhjf67hj7fghj")




