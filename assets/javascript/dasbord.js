
if (JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All"))) {
    const nombreadministrateurs = JSON.parse(localStorage.getItem("ADMINISTRATEURS_Pro_Gest_All")).filter(key => key.statut != 0 && key.id != "ADMIN").length;
    document.getElementById("index-administrateurs-number").textContent = nombreadministrateurs;
}

if (JSON.parse(localStorage.getItem("ROLES_Pro_Gest_All"))){
    const nombrerole = JSON.parse(localStorage.getItem("ROLES_Pro_Gest_All")).filter(key => key.statut != 0).length;
    document.getElementById("index-roles-number").textContent = nombrerole;
}

if (JSON.parse(localStorage.getItem("CATEGORIES_Pro_Gest_All"))) {
    const nombrecategories = JSON.parse(localStorage.getItem("CATEGORIES_Pro_Gest_All")).filter(key => key.statut != 0).length;
    document.getElementById("index-categories-number").textContent = nombrecategories;
}

if (JSON.parse(localStorage.getItem("TACHES_Pro_Gest_All"))) {
    const nombretache = JSON.parse(localStorage.getItem("TACHES_Pro_Gest_All")).filter(key => key.statut != 0).length;
    document.getElementById("index-taches-number").textContent = nombretache;
}

if (JSON.parse(localStorage.getItem("EMPLOYES_Pro_Gest_All"))) {
    const nombreemployes = JSON.parse(localStorage.getItem("EMPLOYES_Pro_Gest_All")).filter(key => key.statut != 0).length;
    document.getElementById("index-employes-number").textContent = nombreemployes;
}

if (JSON.parse(localStorage.getItem("MASSE_SALARIALES_Pro_Gest_All"))) {
    const messeSalariale = JSON.parse(localStorage.getItem("MASSE_SALARIALES_Pro_Gest_All"));
    document.getElementById("index-salaire").textContent = ` [ ${messeSalariale.min_salaire} - ${messeSalariale.max_salaire} ]`;
    document.getElementById("index-salaire-non").textContent = ` [ ${messeSalariale.min_tache_no_end} - ${messeSalariale.max_tache_no_end} ]`;
}


if (JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES_Pro_Gest_All"))) {
    const ouvrable = JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES_Pro_Gest_All"));
    document.getElementById("index-horaire").textContent = ` ${ouvrable.ouvertureService} - ${ouvrable.arretService}`;
    document.getElementById("index-pose").textContent = ` ${ouvrable.debutPoseService} - ${ouvrable.finPoseService}`
}


if (JSON.parse(localStorage.getItem("PARAM_WEEK_END_Pro_Gest_All"))) {
    const week = JSON.parse(localStorage.getItem("PARAM_WEEK_END_Pro_Gest_All"));
    document.getElementById("index-roles-w").textContent = ` ${week.ouvertureService} - ${week.arretService}`
}

if (JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES_Pro_Gest_All"))) {
    const pose = JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES_Pro_Gest_All"));
}


const ma_date = new Date();
document.getElementById("resume-bord").textContent = ma_date.toLocaleString('en-GB', { timeZone: 'UTC' });


