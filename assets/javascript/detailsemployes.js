// Je récupère l'url de ma page courante
const dataUrl = window.location.href.split("#");
const requette = JSON.parse(localStorage.getItem("EMPLOYES")).find(cle => cle.id == dataUrl[1].split("-")[0]);
document.getElementById("photo").src = requette.photo;
document.getElementById("photo").style.borderRadius = "100%";
document.getElementById("nomEmploye").textContent = requette.nom;
document.getElementById("emailEmploye").textContent = requette.email;
document.getElementById("payementEmploye").textContent = requette.modePayement;
document.getElementById("telephoneEmploye").textContent = requette.telephone;
document.getElementById("CategorieEmploye").textContent = requette.specialite;
const bigDataVilide = JSON.parse(localStorage.getItem("TACHES_VALIDEES")).filter(cle => cle.idEmploye == dataUrl[1].split("-")[0] && cle.montant != 0);
console.log(bigDataVilide)
function afficherTacheNonPayee(dataTacheValide){
    
    
    if (Array.isArray(dataTacheValide) && dataTacheValide.length > 0){
        
        const contenutableau = document.getElementById("contenutableau");

        const reseauxPayement = document.getElementById("toutTache");
        const select = document.createElement("select");
        select.id = `select-${requette.id}`;
        select.className = "form-select";
        reseauxPayement.append(select);
        let sommeTotal = 0
        dataTacheValide.forEach(cle=>{
            sommeTotal += cle.montant;
            const tr = document.createElement("tr");
            tr.id = `ligne-${cle.id}-${cle.idEmploye}-${cle.idTache}`;
            tr.className = "cell";
            contenutableau.append(tr);
            
            const tdiD = document.createElement("td");
            // tdiD.className = "cell";
            tdiD.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-id`;
            tdiD.textContent = cle.idTache;
            contenutableau.append(tdiD);

            const tdTache = document.createElement("td");
            // tdTache.className = "cell";
            tdTache.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-tache`;
            tdTache.textContent = cle.libelleTache;
            contenutableau.append(tdTache);

            const tdMontant = document.createElement("td");
            // tdMontant.className = "cell";
            tdMontant.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-montant`;
            tdMontant.textContent = cle.montant+" FCFA";
            contenutableau.append(tdMontant);

            const tdModePayement = document.createElement("td");
            tdModePayement.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-modePayement`;
            tdModePayement.textContent = cle.modePayement;
            contenutableau.append(tdModePayement);

            const tdTelephoneEmploye = document.createElement("td");
            tdTelephoneEmploye.textContent = `${cle.id}-${cle.idEmploye}-${cle.idTache}-telephoneEmploye`;
            tdTelephoneEmploye.textContent = `${cle.telephoneEmploye}`;
            contenutableau.append(tdTelephoneEmploye);

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
        document.getElementById("reseauxPayement").textContent = requette.modePayement+ " Money";
        document.getElementById("somme").value = sommeTotal;



        
    }
}

afficherTacheNonPayee(bigDataVilide)






