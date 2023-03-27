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

