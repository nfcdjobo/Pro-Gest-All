// Je récupère l'url de ma page courante
const dataUrl = window.location.href.split("#");
const requette = JSON.parse(localStorage.getItem("EMPLOYES")).find(cle =>cle.id == dataUrl[dataUrl.length-1]);
document.getElementById("photo").src = requette.photo;
document.getElementById("photo").style.borderRadius = "100%";
document.getElementById("nomEmploye").textContent = requette.nom;
document.getElementById("emailEmploye").textContent = requette.email;
document.getElementById("payementEmploye").textContent = requette.modePayement;
document.getElementById("telephoneEmploye").textContent = requette.telephone;
document.getElementById("CategorieEmploye").textContent = requette.specialite;

document.getElementById("emailEmploye").textContent = requette.email;
document.getElementById("emailEmploye").textContent = requette.email;
document.getElementById("emailEmploye").textContent = requette.email;
document.getElementById("emailEmploye").textContent = requette.email;

// const tab = ["001-1", "001-2", "003-1", "005-1", "001-3", "001-4", "005-3", "002-1", "001-6", "002-5", "002-4"];
// const id = "001";
// console.log(tab.filter(cle => cle.includes(id)));
