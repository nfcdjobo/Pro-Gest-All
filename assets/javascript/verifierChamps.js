let mesPhone = document.querySelectorAll("input[type='tel']");
let mesEmail= document.querySelectorAll("input[type='email']");
let allElement = [];
if (mesPhone.length != 0){
    mesPhone.forEach(key => allElement.push(key));
}
if(mesEmail.length != 0){
    mesEmail.forEach(key=>allElement.push(key));
}
if(allElement.length != 0){
    allElement.forEach(key => key.addEventListener("blur", validateur));
}

function validateur(event) {
    const expressionReguliereEmail = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1, 3}.[0-9]{1, 3}.[0-9]{1, 3}.[0-9]{1, 3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    const expressionReguliereNumber = /^([0-9]){10}$/;
    if(event.target.type == "tel"){
        if (expressionReguliereNumber.test(event.target.value)){
            document.getElementById("error-telephone").textContent = "Format accepté.";
            document.getElementById("error-telephone").style.color = "green";
            document.getElementById("error-telephone").style.fontWeight = "600";
        }else{
            document.getElementById(event.target.id).focus();
            document.getElementById("error-telephone").textContent = "Format incorrecte !";
            document.getElementById("error-telephone").style.color = "red";
            document.getElementById("error-telephone").style.fontWeight = "600";
        }
    } else {
        if (!event.target.id.includes("confirm")){
            if (expressionReguliereEmail.test(event.target.value)) {
                document.getElementById("error-email").textContent = "Ce format est accepté.";
                document.getElementById("error-email").style.color = "green";
                document.getElementById("error-email").style.fontWeight = "600";
            }else{
                event.target.focus();
                document.getElementById("error-email").textContent = "Adresse email invalide !";
                document.getElementById("error-email").style.color = "red";
                document.getElementById("error-email").style.fontWeight = "600";
            }
        }else {
            if (expressionReguliereEmail.test(event.target.value)) {
                document.getElementById("error-email-confirm").textContent = "Ce format est accepté.";
                document.getElementById("error-email-confirm").style.color = "green";
                document.getElementById("error-email-confirm").style.fontWeight = "600";
            } else {
                event.target.focus();
                document.getElementById("error-email-confirm").textContent = "Adresse email invalide !";
                document.getElementById("error-email-confirm").style.color = "red";
                document.getElementById("error-email-confirm").style.fontWeight = "600";
            }
        }
    }
    return false;
}


