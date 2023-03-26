let selectCategorie = document.getElementById("specialiteEmploye");
if(JSON.parse(localStorage.CATEGORIES).filter(cle => cle.statut != 0).length != 0){
    const allCategorie = [];
    JSON.parse(localStorage.CATEGORIES).filter(cle => cle.statut != 0).sort().forEach(element => {
        const optionsCategorie = document.createElement("option");
        optionsCategorie.value  = element.libelle;
        optionsCategorie.textContent = element.libelle;
        selectCategorie.append(optionsCategorie);
    });
}

document.getElementById("saveEmploye").addEventListener("click", saveEmployes);
function saveEmployes(event) {
    const nomEmploye = document.getElementById("nomEmplye");
    const naissanceEmploye = document.getElementById("naissanceEmploye");
    const emailEmploye = document.getElementById("emailEmploye");
    const specialiteEmploye = document.getElementById("specialiteEmploye");
    const payementEmploye = document.getElementById("payementEmploye");
    const telephoneEmploye = document.getElementById("telephoneEmploye");
    const photoEmploye = document.getElementById("photoEmploye");

    const errorNom = document.getElementById("error-nom");
    const errorNaissance = document.getElementById("error-naissance");
    const errorEmail = document.getElementById("error-email");
    const errorSpecialite = document.getElementById("error-specialite");
    const errorModePayement = document.getElementById("error-modePayement");
    const errorTelephone = document.getElementById("error-telephone");
    const errorPhoto = document.getElementById("error-photo");
    if (nomEmploye.value.replaceAll(" ", "") != "") {
        errorNom.textContent = "";
        if (naissanceEmploye.value.replaceAll(" ", "") != ""){
            errorNaissance.textContent = "";
            if (emailEmploye.value.replaceAll(" ", "") != ""){
                errorEmail.textContent = "";
                if (specialiteEmploye.value.replaceAll(" ", "") != ""){
                    errorSpecialite.textContent = "";
                    if (payementEmploye.value.replaceAll(" ", "") != ""){
                        errorModePayement.textContent = "";
                        if (telephoneEmploye.value.replaceAll(" ", "") != ""){
                            errorTelephone.textContent = "";
                            if (photoEmploye.value.replaceAll(" ", "") != ""){
                                errorPhoto.textContent = "";
                                const madate = new Date();
                                const NewObjData = {
                                    id: "",
                                    nom: nomEmploye.value,
                                    dateNaissance: naissanceEmploye.value,
                                    email: emailEmploye.value,
                                    specialite: specialiteEmploye.value,
                                    modePayement: payementEmploye.value,
                                    telephone: telephoneEmploye.value,
                                    photo: photoEmploye.value,
                                    age: (new Date()).getFullYear() - (new Date(naissanceEmploye.value).getFullYear()),
                                    statut: 1,
                                    programmer: false,
                                    create_at: madate.toLocaleString('en-GB', { timeZone: 'UTC' }),
                                    update_at: madate.toLocaleString('en-GB', { timeZone: 'UTC' }),
                                };
                                if(NewObjData.age >= 18){
                                    const globalDataEmploye = [];
                                    const fichier = new FileReader();
                                    if(JSON.parse(localStorage.getItem("EMPLOYES"))){
                                        const data = JSON.parse(localStorage.getItem("EMPLOYES"));
                                        if (!data.find(cle => cle.email == NewObjData.email)){
                                            fichier.readAsDataURL(photoEmploye.files[0]);
                                            fichier.addEventListener("load", () => {
                                                NewObjData.id = "E00L" + (JSON.parse(localStorage.getItem("EMPLOYES")).length + 1);
                                                NewObjData.photo = fichier.result;
                                                data.push(NewObjData);
                                                localStorage.setItem("EMPLOYES", JSON.stringify(data));
                                                nomEmploye.value = "";
                                                naissanceEmploye.value = "";
                                                emailEmploye.value = "";
                                                specialiteEmploye.value = "";
                                                payementEmploye.value = "";
                                                telephoneEmploye.value = "";
                                                photoEmploye.value = "";
                                                alert("Employé enregistré avec succès.");
                                            });
                                        }else{
                                            alert("Cet employé existe déjà dans notre structure.");
                                        }
                                    }else{
                                        NewObjData.id = "E00L1";
                                        fichier.readAsDataURL(photoEmploye.files[0]);
                                        fichier.addEventListener("load", () => {
                                            NewObjData.id = "E00L1";
                                            NewObjData.photo = fichier.result;
                                            globalDataEmploye.push(NewObjData);
                                            localStorage.setItem("EMPLOYES", JSON.stringify(globalDataEmploye));
                                        });
                                        alert("Employé enregistré avec succès.");
                                        nomEmploye.value = "";
                                        naissanceEmploye.value = "";
                                        emailEmploye.value = "";
                                        specialiteEmploye.value = "";
                                        payementEmploye.value = "";
                                        telephoneEmploye.value = "";
                                        photoEmploye.value = "";
                                    }
                                }else{
                                    alert("Cet employé n'est pas autorisé à travail, car il a moins de 18 ans.")
                                }
                            }else{
                                photoEmploye.style.border = "1.5px solid red";
                                photoEmploye.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                                photoEmploye.focus()
                                errorPhoto.textContent = "Champs obligatoire";
                                errorPhoto.style.color = "red";
                                errorPhoto.style.fontWeight = "blod";
                            }
                        }else{
                            telephoneEmploye.style.border = "1.5px solid red";
                            telephoneEmploye.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                            telephoneEmploye.focus()
                            errorTelephone.textContent = "Champs obligatoire";
                            errorTelephone.style.color = "red";
                            errorTelephone.style.fontWeight = "blod";
                        }
                    }else{
                        payementEmploye.style.border = "1.5px solid red";
                        payementEmploye.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                        payementEmploye.focus()
                        errorModePayement.textContent = "Champs obligatoire";
                        errorModePayement.style.color = "red";
                        errorModePayement.style.fontWeight = "blod";
                    }
                }else{
                    specialiteEmploye.style.border = "1.5px solid red";
                    specialiteEmploye.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                    specialiteEmploye.focus()
                    errorSpecialite.textContent = "Champs obligatoire";
                    errorSpecialite.style.color = "red";
                    errorSpecialite.style.fontWeight = "blod";
                }
            }else{
                emailEmploye.style.border = "1.5px solid red";
                emailEmploye.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
                emailEmploye.focus()
                errorEmail.textContent = "Champs obligatoire";
                errorEmail.style.color = "red";
                errorEmail.style.fontWeight = "blod";
            }
        }else{
            naissanceEmploye.style.border = "1.5px solid red";
            naissanceEmploye.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
            naissanceEmploye.focus()
            errorNaissance.textContent = "Champs obligatoire";
            errorNaissance.style.color = "red";
            errorNaissance.style.fontWeight = "blod";
        }
    } else {
        nomEmploye.style.border = "1.5px solid red";
        nomEmploye.style.boxShadow = "0.1px -0.1px red, -0.1px 0.1px 0.1px red";
        nomEmploye.focus()
        errorNom.textContent = "Champs obligatoire";
        errorNom.style.color = "red";
        errorNom.style.fontWeight = "blod";
    }
}

// const tab = [1, 2, 3, 4, 5, 6];
// function solution(ma_table, po){
//     if (tama_tableb.indexOf(po) != -1) {
//         const newtab = ma_table.filter(cle => { ma_table.indexOf(po) != -1 });
//         return newtab;
//     }
// }
// 
// console.log(solution([1, 2, 3, 4, 5, 6], 5))
