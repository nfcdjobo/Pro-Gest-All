if(sessionStorage.SESSION_ADMIN_Pro_Gest_All){
    const maSession = JSON.parse(sessionStorage.SESSION_ADMIN_Pro_Gest_All);
    const admins = JSON.parse(localStorage.ADMINISTRATEURS_Pro_Gest_All);
    const admin = admins.find(cle=>cle.email === maSession.login && cle.password === maSession.password);
    const indice = admins.indexOf(admin);

    const avatar = document.getElementById("Avatar");
    avatar.style.borderRadius = ".8rem";
    const nom = document.getElementById("Nom");
    const statut = document.getElementById("Statut");
    const role = document.getElementById("Role");
    const email = document.getElementById("Email");
    const telephone = document.getElementById("Telephone");
    const password = document.getElementById("Password");

    if(admin.photo != ""){
        avatar.src = admin.photo;
    }else{
       avatar.src = "./../icons/avatar.svg"; 
    }

    nom.textContent = admin.nom;
    statut.textContent = admin.etat;
    role.textContent = admin.roles;
    email.textContent = admin.email;
    telephone.textContent = admin.telephone;
    password.textContent = "*****************";
    document.getElementById("Voir").addEventListener("click", chowPassword);
    const vue = document.getElementById("vue");
    function chowPassword(event){
        vue.innerHTML =""
        password.textContent = admin.password;
        const bouton =  document.createElement("button");
        bouton.className ="bouton bouton-primondial bi bi-eye-slash";
        bouton.textContent = " Cacher";
        bouton.style.fontWeight = "700";
        bouton.style.color = "white";
        bouton.id = "Cacher"
        bouton.addEventListener("click", cacher)
        vue.appendChild(bouton);

        const boutonS =  document.createElement("button");
        boutonS.className ="bouton bouton-all-info bi bi-pencil-square";
        boutonS.textContent = " Modifier";
        boutonS.style.fontWeight = "blod";
        boutonS.style.color = "white";
        boutonS.style.marginLeft = "10px";
        boutonS.id = "ModifierP";
        boutonS.addEventListener("click", creerFormePasswor)
        vue.appendChild(boutonS);
    }

    function cacher(event){
        document.getElementById("ModifierP").remove();
        document.getElementById("Cacher").remove();
        const voir = document.createElement("button");
        voir.id = "Voir";
        voir.className = "bouton bouton-primondial bi bi-eye";
        voir.textContent = " Voir";
        voir.style.color = "white";
        voir.fontWeight = "700";
        voir.addEventListener("click", chowPassword);
        password.textContent = "*****************";
        vue.appendChild(voir);
    }

    function creerFormePasswor(event){
        document.getElementById("Cacher").remove();
        document.getElementById("ModifierP").remove();
        const input = document.createElement("input");
        input.className = "form-control";
        input.value = admin.password;
        input.id = "newPassword";
        password.textContent = "";
        password.append(input);

        const envoier = document.createElement("button");
        envoier.className = "bouton bouton-success bi bi-send";
        envoier.id = "EnvoierP";
        envoier.textContent = " Envoier";
        envoier.style.color = "white";
        envoier.fontWeight = "700";
        envoier.style.marginLeft = "10px";
        envoier.addEventListener("click", sauvegarder)
        vue.append(envoier)

        const annuler = document.createElement("button");
        annuler.className = "bouton bouton-secondary bi bi-x-circle";
        annuler.id = "AnnulerP";
        annuler.textContent = " Annuler";
        annuler.style.color = "white";
        annuler.fontWeight = "700";
        envoier.style.marginRight = "10px";
        annuler.addEventListener("click", (event)=>location.reload())
        vue.append(annuler);
    }


    function sauvegarder(event){
        const newPass = document.getElementById("newPassword");
        if(newPass.value != admin.password && newPass.value.replaceAll(" ", "") != ""){
            maSession.password =  newPass.value;
            sessionStorage.setItem("SESSION_ADMIN_Pro_Gest_All", JSON.stringify(maSession));
            admin.password = newPass.value;
            admins[indice] = admin;
            localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(admins));
            location.reload();
        }else{
            alert("Aucune action n'a été effectuée.")
        }
    }

    const ChangerImage = document.getElementById("ChangerImage");
    ChangerImage.style.color = "white";
    ChangerImage.style.fontWeight = "700";
    ChangerImage.addEventListener("click", creerFormImg);
    function creerFormImg(event){
        const AvatarImg = document.getElementById("AvatarImg");
        AvatarImg.innerHTML = "";

        const newInputImg = document.createElement("input");
        newInputImg.type = "file";
        newInputImg.accept = "image/*";
        newInputImg.className = "form-control";
        newInputImg.style.width = "145px";
        newInputImg.id = "image";
        AvatarImg.append(newInputImg);

        const ActionImg = document.getElementById("ActionImg");
        ActionImg.innerHTML = "";

        const boutonAction = document.createElement("button");
        boutonAction.id = "SaveAvatar";
        boutonAction.className = "bouton bouton-success bi bi-send";
        boutonAction.style.color = "white";
        boutonAction.style.fontWeight = "700";
        boutonAction.style.marginLeft = "-5px";
        boutonAction.addEventListener("click", sauveAvatar)
        ActionImg.append(boutonAction);

        const vide = document.createElement("span");
        vide.textContent = " ";
        ActionImg.append(vide);

        const annuler = document.createElement("button");
        annuler.className = "bouton bouton-secondary bi bi-x-circle";
        annuler.id = "AnnulerI";
        annuler.style.color = "white";
        annuler.fontWeight = "700";
        annuler.style.marginRight = "-5px";
        annuler.addEventListener("click", (event)=>location.reload())
        ActionImg.append(annuler);
    }

    function sauveAvatar(event){
        const image = document.getElementById("image");
        if(image.value != ""){
            const fichier = new FileReader();
            fichier.readAsDataURL(image.files[0]);
            fichier.addEventListener("load", ()=>{
                console.log(fichier.result)
                admin.photo = fichier.result;
                admins[indice] = admin;
                localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(admins));
                location.reload();
            })
        }else{
            alert("Aucune photo n'a été choisie.")
        }
    }

    const ChangerNom = document.getElementById("ChangerNom");
    ChangerNom.addEventListener("click", creerFormNom);
    function creerFormNom(event){
        const monNom = nom.textContent;
        nom.innerHTML = "";
        const inputNom = document.createElement("input");
        inputNom.type = "text";
        inputNom.id = "newNom";
        inputNom.value = monNom;
        inputNom.className = "form-control";
        nom.append(inputNom);
        
        const ActionNom = document.getElementById("ActionNom");
        ActionNom.innerHTML = "";

        const envoier = document.createElement("button");
        envoier.className = "bouton bouton-success bi bi-send";
        envoier.id = "EnvoierN";
        envoier.textContent = " Envoier";
        envoier.style.color = "white";
        envoier.fontWeight = "700";
        envoier.style.marginLeft = "10px";
        envoier.addEventListener("click", sauveNom)
        ActionNom.append(envoier)

        const annuler = document.createElement("button");
        annuler.className = "bouton bouton-secondary bi bi-x-circle";
        annuler.id = "AnnulerN";
        annuler.textContent = " Annuler";
        annuler.style.color = "white";
        annuler.fontWeight = "700";
        envoier.style.marginRight = "10px";
        annuler.addEventListener("click", (event)=>location.reload())
        ActionNom.append(annuler);
    }

    function sauveNom(){
        const newNom = document.getElementById("newNom");
        if(newNom.value.replaceAll(" ", "") != "" && newNom.value.toLowerCase() != admin.nom.toLowerCase()){
            admin.nom = newNom.value;
            admins[indice] = admin;
            localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(admins));
            location.reload();
            
        }else{
            alert("Aucune action n'a été effectuée.")
        }
    }



    const ChangerEmail = document.getElementById("ChangerEmail");
    ChangerEmail.addEventListener("click", creerForEmail);
    function creerForEmail(event){
        const monEmail = email.textContent;
        email.innerHTML = "";
        const inputEamil = document.createElement("input");
        inputEamil.type = "email";
        inputEamil.id = "newEmail";
        inputEamil.value = monEmail;
        inputEamil.className = "form-control";
        email.append(inputEamil);
        
        const ActionEmail = document.getElementById("ActionEmail");
        ActionEmail.innerHTML = "";

        const envoier = document.createElement("button");
        envoier.className = "bouton bouton-success bi bi-send";
        envoier.id = "EnvoierE";
        envoier.textContent = " Envoier";
        envoier.style.color = "white";
        envoier.fontWeight = "700";
        envoier.style.marginLeft = "10px";
        envoier.addEventListener("click", sauveEmail)
        ActionEmail.append(envoier)

        const annuler = document.createElement("button");
        annuler.className = "bouton bouton-secondary bi bi-x-circle";
        annuler.id = "AnnulerE";
        annuler.textContent = " Annuler";
        annuler.style.color = "white";
        annuler.fontWeight = "700";
        envoier.style.marginRight = "10px";
        annuler.addEventListener("click", (event)=>location.reload())
        ActionEmail.append(annuler);
    }

    function sauveEmail(){
        const newEmail = document.getElementById("newEmail");
        if(newEmail.value.replaceAll(" ", "") != "" && newEmail.value.toLowerCase() != admin.nom.toLowerCase()){
            admin.email = newEmail.value;
            admins[indice] = admin;
            localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(admins));
            maSession.login = newEmail.value;
            sessionStorage.setItem("SESSION_ADMIN_Pro_Gest_All", maSession)
            location.reload();
            
        }else{
            alert("Aucune action n'a été effectuée.")
        }
    }






    const ChangerTelephone = document.getElementById("ChangerTelephone");
    ChangerTelephone.addEventListener("click", creerForTelephone);
    function creerForTelephone(event){
        const monTelephone = telephone.textContent;
        telephone.innerHTML = "";
        const inputTelephone = document.createElement("input");
        inputTelephone.type = "tel";
        inputTelephone.id = "newTelephone";
        inputTelephone.value = monTelephone;
        inputTelephone.className = "form-control";
        telephone.append(inputTelephone);
        
        const ActionTelephone = document.getElementById("ActionTelephone");
        ActionTelephone.innerHTML = "";

        const envoier = document.createElement("button");
        envoier.className = "bouton bouton-success bi bi-send";
        envoier.id = "EnvoierT";
        envoier.textContent = " Envoier";
        envoier.style.color = "white";
        envoier.fontWeight = "700";
        envoier.style.marginLeft = "10px";
        envoier.addEventListener("click", sauveTelephone)
        ActionTelephone.append(envoier);

        const annuler = document.createElement("button");
        annuler.className = "bouton bouton-secondary bi bi-x-circle";
        annuler.id = "AnnulerT";
        annuler.textContent = " Annuler";
        annuler.style.color = "white";
        annuler.fontWeight = "700";
        envoier.style.marginRight = "10px";
        annuler.addEventListener("click", (event)=>location.reload())
        ActionTelephone.append(annuler);
    }

    function sauveTelephone(){
        const newTelephone = document.getElementById("newTelephone");
        if(newTelephone.value.replaceAll(" ", "") != ""){
            admin.telephone = newTelephone.value;
            admins[indice] = admin;
            localStorage.setItem("ADMINISTRATEURS_Pro_Gest_All", JSON.stringify(admins));
            location.reload();
            
        }else{
            alert("Aucune action n'a été effectuée.")
        }
    }













    document.querySelectorAll(".bi-pencil-square").forEach(cle=>{
        cle.style.color = "white";
    });

    

}

    