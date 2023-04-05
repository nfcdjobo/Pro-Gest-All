document.getElementById("reset-password").addEventListener("click", reinitialiser);
function reinitialiser(){
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password_confirm = document.getElementById("password-confirm");
    if(email.value.replaceAll(" ", "") != ""){
        if(password.value.replaceAll(" ", "") !=""){
            if(password_confirm.value.replaceAll(" ", "") != ""){
                if(password.value === password_confirm.value){
                    const bigData = JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All"));
                    const user = bigData.find(cle=>cle.email === email.value);
                    if(user){
                        const indece = bigData.indexOf(user);
                        user.password = password.value;
                        bigData[indece] = user;
                        localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(bigData));
                        document.getElementById("message").textContent = "Mot de passe réinitialisé avec succès !!";
                        document.getElementById("message").style.color = "green";
                        window.location.href = "./../corporates/login.html";
                    }else{
                        error_email.textContent = "Ce compte n'existe pas.";
                    }
                }else{
                    
                }
            }
        }
    }
    const error_email = document.getElementById("error-email");
    
}