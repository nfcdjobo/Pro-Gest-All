
if (JSON.parse(localStorage.getItem("ADMINISTRATEURS"))) {
    const nombreadministrateurs = JSON.parse(localStorage.getItem("ADMINISTRATEURS")).filter(key => key.statut != 0).length;
    document.getElementById("index-administrateurs-number").textContent = nombreadministrateurs;
}

if (JSON.parse(localStorage.getItem("ROLES"))){
    const nombrerole = JSON.parse(localStorage.getItem("ROLES")).filter(key => key.statut != 0).length;
    document.getElementById("index-roles-number").textContent = nombrerole;
}

if (JSON.parse(localStorage.getItem("CATEGORIES"))) {
    const nombrecategories = JSON.parse(localStorage.getItem("CATEGORIES")).filter(key => key.statut != 0).length;
    document.getElementById("index-categories-number").textContent = nombrecategories;
}

if (JSON.parse(localStorage.getItem("TACHES"))) {
    const nombretache = JSON.parse(localStorage.getItem("TACHES")).filter(key => key.statut != 0).length;
    document.getElementById("index-taches-number").textContent = nombretache;
}

if (JSON.parse(localStorage.getItem("EMPLOYES"))) {
    const nombreemployes = JSON.parse(localStorage.getItem("EMPLOYES")).filter(key => key.statut != 0).length;
    document.getElementById("index-employes-number").textContent = nombreemployes;
}

if (JSON.parse(localStorage.getItem("MASSE_SALARIALES"))) {
    const messeSalariale = JSON.parse(localStorage.getItem("MASSE_SALARIALES"));
    document.getElementById("index-salaire").textContent = ` [ ${messeSalariale.min_salaire} - ${messeSalariale.max_salaire} ]`;
    document.getElementById("index-salaire-non").textContent = ` [ ${messeSalariale.min_tache_no_end} - ${messeSalariale.max_tache_no_end} ]`;
}


if (JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES"))) {
    const ouvrable = JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES"));
    document.getElementById("index-horaire").textContent = ` ${ouvrable.ouvertureService} - ${ouvrable.arretService}`;
    document.getElementById("index-pose").textContent = ` ${ouvrable.debutPoseService} - ${ouvrable.finPoseService}`
}


if (JSON.parse(localStorage.getItem("PARAM_WEEK_END"))) {
    const week = JSON.parse(localStorage.getItem("PARAM_WEEK_END"));
    document.getElementById("index-roles-w").textContent = ` ${week.ouvertureService} - ${week.arretService}`
}

if (JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES"))) {
    const pose = JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES"));
}


const ma_date = new Date();
document.getElementById("resume-bord").textContent = ma_date.toLocaleString('en-GB', { timeZone: 'UTC' });


