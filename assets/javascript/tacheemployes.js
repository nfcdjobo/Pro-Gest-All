
const dataEmployes = JSON.parse(localStorage.getItem("EMPLOYES")).filter(cle => cle.statut != 0 && cle.programmer == false);
function dresserEmployesTaches(baseEmployes) {
  if (Array.isArray(baseEmployes) && baseEmployes.length != 0) {
    const contenuTach = document.getElementById("contenu-tach");
    baseEmployes.forEach(employe => {
      const ligne = document.createElement("tr");
      ligne.id = `ligne-${employe.id}`;
      contenuTach.append(ligne);

      const identifiant = document.createElement("td");
      identifiant.id = employe.id;
      identifiant.className = "cell";
      identifiant.textContent = employe.id;
      ligne.append(identifiant);

      const photo = document.createElement("td");
      photo.id = `photo-${employe.id}`;
      photo.className = "cell";
      ligne.append(photo);

      const image = document.createElement("img");
      image.id = `image-${employe.id}`;
      image.src = employe.photo;
      image.alt = `profile-${employe.id}`;
      image.style.width = "40px";
      image.style.height = "40px";
      photo.append(image);

      const nomEmploye = document.createElement("td");
      nomEmploye.id = `nomEmploye-${employe.id}`;
      nomEmploye.className = "cell";
      nomEmploye.textContent = employe.nom;
      ligne.append(nomEmploye);

      const categorieEmpoye = document.createElement("td");
      categorieEmpoye.id = `categorieEmpoye-${employe.id}`;
      categorieEmpoye.className = "cell";
      categorieEmpoye.textContent = employe.specialite;
      ligne.append(categorieEmpoye);
      

      const col_tache = document.createElement("td");
      col_tache.id = `col-tache-${employe.id}`;
      ligne.append(col_tache);

      const selectTache = document.createElement("select");
      selectTache.className = "form-select";
      selectTache.id = `tache-${employe.id}`;
      selectTache.setAttribute("ref", "select");
      selectTache.style.minWidth = "85px";
      col_tache.append(selectTache);

      const presselectionner = document.createElement("option");
      presselectionner.textContent = "Tâche";
      presselectionner.value = "";
      selectTache.append(presselectionner);

      if (JSON.parse(localStorage.getItem("TACHES"))) {
        const dataTache = JSON.parse(localStorage.getItem("TACHES")).filter(tache => tache.destinataire == employe.specialite);
        
        if (dataTache.length != 0) {
          dataTache.forEach(key => {
            const optionSelect = document.createElement("option");
            optionSelect.value = key.libelle;
            optionSelect.textContent = key.libelle;
            selectTache.append(optionSelect);
          })
        }
      }

      const col_debut = document.createElement("td");
      col_debut.className = "cell";
      col_debut.id = `col-debut-${employe.id}`;
      ligne.append(col_debut);

      const debut = document.createElement("input");
      debut.type = "datetime-local";
      debut.className = "form-control";
      debut.id = `debut-${employe.id}`;
      debut.style.maxWidth = "170px";
      col_debut.append(debut);

      const col_fin = document.createElement("td");
      col_fin.className = "cell";
      col_fin.id = `col-fin-${employe.id}`;
      ligne.append(col_fin);

      const fin = document.createElement("input");
      fin.type = "datetime-local";
      fin.className = "form-control";
      fin.id = `fin-${employe.id}`;
      fin.style.maxWidth = "170px";
      col_fin.append(fin);

      const duree = document.createElement("td");
      duree.id = `duree-${employe.id}`;
      duree.textContent = "03 jour(s)";
      ligne.append(duree);

      const col_validation = document.createElement("td");
      col_validation.id = `col-validation-${employe.id}`;
      col_validation.className = "cell";
      ligne.append(col_validation);

      const attribuer = document.createElement("select");
      attribuer.className = "form-select";
      attribuer.id = `attribuer-${employe.id}`;
      attribuer.style.fontSize = "14px";
      attribuer.disabled = true;
      col_validation.append(attribuer);

      const optionValidation0 = document.createElement("option");
      optionValidation0.value = false;
      optionValidation0.textContent = "Non";
      optionValidation0.selected = true;
      attribuer.append(optionValidation0);

      const optionValidation1 = document.createElement("option");
      optionValidation1.value = true;
      optionValidation1.textContent = "Oui";
      attribuer.append(optionValidation1);

      const col_confirmer = document.createElement("td");
      col_confirmer.className = "cell";
      col_confirmer.id = `val-${employe.id}`;
      ligne.append(col_confirmer);

      const confirmer = document.createElement("button");
      confirmer.className = "bouton modifier";
      confirmer.id = `Valider-${employe.id}`;
      confirmer.textContent = "Valider";
      confirmer.setAttribute("ref", "valider");
      confirmer.style.color = "white";
      confirmer.style.fontWeight = "blod";
      confirmer.style.fontSize = "14px";
      confirmer.disabled = true;
      col_confirmer.append(confirmer);
    })
  }
}

dresserEmployesTaches(dataEmployes);

let select = document.querySelectorAll("select[ref='select']");
select.forEach(element => {
  element.addEventListener("change", activer);
})

function activer(e) {
  if (e.target.value != "") {
    document.getElementById(e.target.id.replace("tache", "attribuer")).disabled = false;
    document.getElementById(e.target.id.replace("tache", "attribuer")).addEventListener("change", (event) => {
      if (event.target.value != "false") {
        document.getElementById(event.target.id.replace("attribuer", "Valider")).disabled = false;
      } else {
        document.getElementById(event.target.id.replace("attribuer", "Valider")).disabled = true;
      }
    })
  } else {
    document.getElementById(e.target.id.replace("tache", "attribuer")).value = "false";
    document.getElementById(e.target.id.replace("tache", "attribuer")).disabled = true;
    document.getElementById(e.target.id.replace("tache", "Valider")).disabled = true;
  }
}

document.querySelectorAll("td").forEach(key =>{ key.style.fontSize = "13px";  key.style.fontWeight = "500"});
document.querySelectorAll("select").forEach(key => {key.style.fontSize = "13px"; key.style.fontWeight = "500"});
document.querySelectorAll("option").forEach(key =>{ key.style.fontSize = "13px";  key.style.fontWeight = "500"});

document.querySelectorAll("button[ref='valider']").forEach(cle=>cle.addEventListener("click", validerTache));
function validerTache(event){
  const employe = JSON.parse(localStorage.getItem("EMPLOYES")).filter(cle => cle.id == event.target.id.replace("Valider-", ""))[0];
  const tache = document.getElementById(event.target.id.replace("Valider", "tache"));
  const debutTache = document.getElementById(event.target.id.replace("Valider", "debut"));
  const finTache = document.getElementById(event.target.id.replace("Valider", "fin"));
  const dureTache = document.getElementById(event.target.id.replace("Valider", "duree"));
  alert(new Date(finTache.value) - new Date(debutTache.value))
  const tacheAttribuees = [];
  const attribution = {
    id: `${employe.id}-${new Date().toLocaleString('en-GB', { timeZone: 'UTC' })}`,
    idEmploye: employe.id,
    employe: employe.nom,
    categorie: employe.specialite,
    tache: tache.value,
    debutTache: debutTache.value,
    finTache: finTache.value,
    valider_le: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
    statut: 1,

  }

  // const dataTacheAttribue = [];
  // if(JSON.parse(localStorage.getItem("TACHES_ATTRIBUEES"))){
  //   const tacheAttribues = JSON.parse(localStorage.getItem("TACHES_ATTRIBUEES"));
  //   tacheAttribues.push(attribution);
  //   localStorage.setItem("TACHES_ATTRIBUEES", JSON.stringify(tacheAttribues));
  // }else{
  //   dataTacheAttribue.push(attribution);
  //   localStorage.setItem("TACHES_ATTRIBUEES", JSON.stringify(dataTacheAttribue));
  // }
  // const employJson = JSON.parse(localStorage.getItem("EMPLOYES"));
  // const cible = employJson.filter(cle => cle.id == attribution.idEmploye && cle.nom == attribution.employe)[0];
  // const indiceCible = employJson.indexOf(cible);
  // cible.programmer = true;
  // employJson[indiceCible] = cible;
  // localStorage.setItem("EMPLOYES", JSON.stringify(employJson));
  // document.getElementById(event.target.id.replace("Valider", "ligne")).remove();

}