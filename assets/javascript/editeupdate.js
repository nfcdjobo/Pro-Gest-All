

let admin_edite = document.querySelectorAll(".bi-pencil-square");
admin_edite.forEach(function (cle) {
    cle.addEventListener("click", editeUpdate);
});

function editeUpdate(e) {
    let nouveau = document.querySelectorAll("input[ref='nouveau']");
    if (nouveau.length > 0) {
        nouveau.forEach(function (key) {
            let elementInput = key.id.replace("-input", "");
            let inputValeur = key.value;
            key.remove();
            document.getElementById(elementInput).textContent = inputValeur;
        })
    };
}




























//     let name = document.getElementById(e.target.getAttribute("ref").replace("edite", "name"));
//     let email = document.getElementById(e.target.getAttribute("ref").replace("edite", "email"));
//     let phone = document.getElementById(e.target.getAttribute("ref").replace("edite", "phone"));
//     let editer = document.querySelector(`i[ref=${e.target.getAttribute("ref")}]`);
//     let envoie = document.querySelector(".bi-send");
//     let avorter = document.querySelector(".bi-x-circle");
//     if(envoie != null){
//         document.querySelector(".bouton-all-info").setAttribute("class", "bouton modifier");
//         avorter.setAttribute("class", "bi bi-trash3");
//         envoie.setAttribute("class", "bi bi-pencil-square");
//     }

//     editer.setAttribute("class", "bi bi-send");
//     editer.setAttribute("id", e.target.getAttribute("ref").replace("edite", "send"));


//     let inputname = document.createElement("input");
//     inputname.className = "form-control";
//     inputname.setAttribute("id", e.target.getAttribute("ref").replace("edite", "name-input"));
//     let valeur = document.getElementById(e.target.getAttribute("ref").replace("edite", "name"))
//     inputname.setAttribute("value", valeur.textContent);
//     inputname.setAttribute("ref", "nouveau");
//     valeur.textContent = "";
//     valeur.append(inputname);

//     let inputemail = document.createElement("input");
//     inputemail.className = "form-control";
//     inputemail.setAttribute("id", e.target.getAttribute("ref").replace("edite", "email-input"));
//     valeur = document.getElementById(e.target.getAttribute("ref").replace("edite", "email"))
//     inputemail.setAttribute("value", valeur.textContent);
//     inputemail.setAttribute("ref", "nouveau");
//     valeur.textContent = "";
//     valeur.append(inputemail);

//     let update = document.querySelector(`i[ref='${e.target.getAttribute("ref").replace("edite", "update")}']`);
//     update.setAttribute("class", "bi bi-x-circle")
//     update.setAttribute("id", `${e.target.getAttribute("ref").replace("edite", "annuler")}`)

//     let inputphone = document.createElement("input");
//     inputphone.className = "form-control";
//     inputphone.setAttribute("id", e.target.getAttribute("ref").replace("edite", "phone-input"));
//     valeur = document.getElementById(e.target.getAttribute("ref").replace("edite", "phone"))
//     inputphone.setAttribute("value", valeur.textContent);
//     inputphone.setAttribute("ref", "nouveau");
//     valeur.textContent = "";
//     valeur.append(inputphone);
// }
