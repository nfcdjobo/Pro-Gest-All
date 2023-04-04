const dataOuvrable = JSON.parse(localStorage.getItem("PARAM_JOURS_OUVRABLES"));
const jourOuvre = document.getElementById("jourOuvre");
const matin_1 = document.getElementById("matin-1");
const pose_1 = document.getElementById("pose-1");
const soir_1 = document.getElementById("soir-1");
document.getElementById("submitOuvrable").addEventListener("click", personnaliserOuvrable);

function personnaliserOuvrable() {

  const ElementOuvrable = document.querySelectorAll("input[refer='ouvrableJs']");
  const avantMidiOuvrable1 = document.getElementById("avantMidiOuvrable1");
  const avantMidiOuvrable2 = document.getElementById("avantMidiOuvrable2");
  const apresMidiPose1 = document.getElementById("apresMidiPose1");
  const apresMidiPose2 = document.getElementById("apresMidiPose2");
  const apresMidiOuvrable1 = document.getElementById("apresMidiOuvrable1");
  const apresMidiOuvrable2 = document.getElementById("apresMidiOuvrable2");

  const dataJours = [];
  ElementOuvrable.forEach(element => {
    if (element.checked) {
      dataJours.push(element.value);
    }
  });
  if (avantMidiOuvrable1.value != "") {
    if (avantMidiOuvrable2.value != "") {
      if (apresMidiPose1.value != "") {
        if (apresMidiPose2.value != "") {
          if (apresMidiOuvrable1.value != "") {
            if (apresMidiOuvrable2.value != "") {
              if (dataJours.length != 0) {
                
                const avant_H1 = new Date(`2023-03-15, ${avantMidiOuvrable1.value}:00`).getHours();
                const avant_M1 = new Date(`2023-03-15, ${avantMidiOuvrable1.value}:00`).getMinutes();
                const avant_H2 = new Date(`2023-03-15, ${avantMidiOuvrable2.value}:00`).getHours();
                const avant_M2 = new Date(`2023-03-15, ${avantMidiOuvrable2.value}:00`).getMinutes();

                const repos_H1 = new Date(`2023-03-15, ${apresMidiPose1.value}:00`).getHours();
                const repos_M1 = new Date(`2023-03-15, ${apresMidiPose1.value}:00`).getMinutes();
                const repos_H2 = new Date(`2023-03-15, ${apresMidiPose2.value}:00`).getHours();
                const repos_M2 = new Date(`2023-03-15, ${apresMidiPose2.value}:00`).getMinutes();

                const apres_H1 = new Date(`2023-03-15, ${apresMidiOuvrable1.value}:00`).getHours();
                const apres_M1 = new Date(`2023-03-15, ${apresMidiOuvrable1.value}:00`).getMinutes();
                const apres_H2 = new Date(`2023-03-15, ${apresMidiOuvrable2.value}:00`).getHours();
                const apres_M2 = new Date(`2023-03-15, ${apresMidiOuvrable2.value}:00`).getMinutes();

                if ((avant_H1 <= avant_H2) && (avant_H2 <= repos_H1) && (repos_H1 <= repos_H2) && (repos_H2 <= apres_H1) && (apres_H1 <= apres_H2)) {
                  const ObjeOuvrable = {
                    identite: "ouvrable",
                    jours: dataJours,
                    ouvertureService: avantMidiOuvrable1.value,
                    stopServicePose: avantMidiOuvrable2.value,
                    debutPoseService: apresMidiPose1.value,
                    finPoseService: apresMidiPose2.value,
                    repriseService: apresMidiOuvrable1.value,
                    arretService: apresMidiOuvrable2.value,
                  }
                  localStorage.setItem("PARAM_JOURS_OUVRABLES", JSON.stringify(ObjeOuvrable));
                  window.scroll(0, 140);
                  messageAlert.textContent = "Enregistrement effectué avec succès !!";
                  barre.hidden = false;

                  avantMidiOuvrable1.value = "";
                  avantMidiOuvrable2.value = "";
                  apresMidiPose1.value = "";
                  apresMidiPose2.value = "";
                  apresMidiOuvrable1.value = "";
                  apresMidiOuvrable2.value = "";
                  ElementOuvrable.forEach(key => key.checked = false);
                  
                    ObjeOuvrable.jours.forEach(key => {
                      const par = document.createElement("p");
                      const ii = document.createElement("i");
                      ii.className = "bi bi-check-circle-fill";
                      const strong = document.createElement("strong");
                      strong.textContent = ` ${key} `;
                      par.append(ii);
                      par.append(strong);
                      jourOuvre.append(par)
                    });
                  const ii_1_1 = document.createElement("i");
                  ii_1_1.className = "bi bi-align-start";
                  const strong_1 = document.createElement("strong");
                  strong_1.textContent = ` Ouvert de ${ObjeOuvrable.ouvertureService} à ${ObjeOuvrable.stopServicePose} `
                  const ii_1_2 = document.createElement("i");
                  ii_1_2.className = "bi bi-align-end";
                  matin_1.append(ii_1_1);
                  matin_1.append(strong_1);
                  matin_1.append(ii_1_2);

                  const ii_2_1 = document.createElement("i");
                  ii_2_1.className = "bi bi-align-start";
                  const strong_2 = document.createElement("strong");
                  strong_2.textContent = ` De ${ObjeOuvrable.debutPoseService} à ${ObjeOuvrable.finPoseService} `
                  const ii_2_2 = document.createElement("i");
                  ii_2_2.className = "bi bi-align-end";
                  pose_1.append(ii_2_1);
                  pose_1.append(strong_2);
                  pose_1.append(ii_2_2);

                  const ii_3_1 = document.createElement("i");
                  ii_3_1.className = "bi bi-align-start";
                  const strong_3 = document.createElement("strong");
                  strong_3.textContent = ` Ouvert de ${ObjeOuvrable.repriseService} à ${ObjeOuvrable.arretService} `;
                  const ii_3_2 = document.createElement("i");
                  ii_3_2.className = "bi bi-align-end";
                  soir_1.append(ii_3_1);
                  soir_1.append(strong_3);
                  soir_1.append(ii_3_2);
                  
                  location.reload();
                } else {
                  window.scroll(0, 140);
                  messageAlert.textContent = "Formulaire mal remplie !!";
                  barre.hidden = false;
                }
              } else {
                window.scroll(0, 140);
                messageAlert.textContent = "Aucun jour n'a été définit";
                barre.hidden = false;
              }
            } else {
              window.scroll(0, 140);
              messageAlert.textContent = "Formulaire mal remplie !!";
              barre.hidden = false;
            }
          } else {
            window.scroll(0, 140);
            messageAlert.textContent = "Formulaire mal remplie !!";
            barre.hidden = false;
          }
        } else {
          window.scroll(0, 140);
          messageAlert.textContent = "Formulaire mal remplie !!";
          barre.hidden = false;
        }
      } else {
        window.scroll(0, 140);
        messageAlert.textContent = "Formulaire mal remplie !!";
        barre.hidden = false;
      }
    } else {
      window.scroll(0, 140);
      messageAlert.textContent = "Formulaire mal remplie !!";
      barre.hidden = false;
    }
  } else {
    window.scroll(0, 140);
    messageAlert.textContent = "Formulaire mal remplie !!";
    barre.hidden = false;
  }
}


document.querySelectorAll("input").forEach(cle => cle.addEventListener("focus", () => {
  document.getElementById("messageAlert").textContent = "";
  document.getElementById("barre").hidden = true;
}));


function afficheParametre(donnee) {
  if (donnee) {
    donnee.jours.forEach(key => {
      const par = document.createElement("p");
      const ii = document.createElement("i");
      ii.className = "bi bi-check-circle-fill";
      const strong = document.createElement("strong");
      strong.textContent = ` ${key} `;
      par.append(ii);
      par.append(strong);
      jourOuvre.append(par);
      document.getElementById(key).checked = true;
    });

    const ii_1_1 = document.createElement("i");
    ii_1_1.className = "bi bi-align-start";
    const strong_1 = document.createElement("strong");
    strong_1.textContent = ` Ouvert de ${donnee.ouvertureService} à ${donnee.stopServicePose} `
    const ii_1_2 = document.createElement("i");
    ii_1_2.className = "bi bi-align-end";
    matin_1.append(ii_1_1);
    matin_1.append(strong_1);
    matin_1.append(ii_1_2);
    document.getElementById("avantMidiOuvrable1").value = donnee.ouvertureService;
    document.getElementById("avantMidiOuvrable2").value = donnee.stopServicePose;

    const ii_2_1 = document.createElement("i");
    ii_2_1.className = "bi bi-align-start";
    const strong_2 = document.createElement("strong");
    strong_2.textContent = ` De ${donnee.debutPoseService} à ${donnee.finPoseService} `
    const ii_2_2 = document.createElement("i");
    ii_2_2.className = "bi bi-align-end";
    pose_1.append(ii_2_1);
    pose_1.append(strong_2);
    pose_1.append(ii_2_2);
    document.getElementById("apresMidiPose1").value = donnee.debutPoseService;
    document.getElementById("apresMidiPose2").value = donnee.finPoseService;

    const ii_3_1 = document.createElement("i");
    ii_3_1.className = "bi bi-align-start";
    const strong_3 = document.createElement("strong");
    strong_3.textContent = ` Ouvert de ${donnee.repriseService} à ${donnee.arretService} `;
    const ii_3_2 = document.createElement("i");
    ii_3_2.className = "bi bi-align-end";
    soir_1.append(ii_3_1);
    soir_1.append(strong_3);
    soir_1.append(ii_3_2);
    document.getElementById("apresMidiOuvrable1").value = donnee.repriseService;
    document.getElementById("apresMidiOuvrable2").value = donnee.arretService;
  }
}

afficheParametre(dataOuvrable);


document.getElementById("submitWeek").addEventListener("click", personnaliserWeek);
messageWeekEnd = document.getElementById("message-week-end");

function personnaliserWeek() {
  const ElementWeek = document.querySelectorAll("input[refer='WeekJours']");
  const avantMidiWeek1 = document.getElementById("avantMidiWeek1");
  const avantMidiWeek2 = document.getElementById("avantMidiWeek2");
  const apresMidiPose3 = document.getElementById("apresMidiPose3");
  const apresMidiPose4 = document.getElementById("apresMidiPose4");
  const apresMidiWeek1 = document.getElementById("apresMidiWeek1");
  const apresMidiWeek2 = document.getElementById("apresMidiWeek2");

  const dataWeekEnd = [];
  ElementWeek.forEach(element => {
    if (element.checked) {
      dataWeekEnd.push(element.value);
    }
  });
  if (avantMidiWeek1.value != "") {
    if (avantMidiWeek2.value != "") {
      if (apresMidiPose3.value != "") {
        if (apresMidiPose4.value != "") {
          if (apresMidiWeek1.value != "") {
            if (apresMidiWeek2.value != "") {
              if (dataWeekEnd.length != 0) {
                const avant_H1 = new Date(`2023-03-15, ${avantMidiWeek1.value}:00`).getHours();
                const avant_M1 = new Date(`2023-03-15, ${avantMidiWeek1.value}:00`).getMinutes();
                const avant_H2 = new Date(`2023-03-15, ${avantMidiWeek2.value}:00`).getHours();
                const avant_M2 = new Date(`2023-03-15, ${avantMidiWeek2.value}:00`).getMinutes();

                const repos_H1 = new Date(`2023-03-15, ${apresMidiPose3.value}:00`).getHours();
                const repos_M1 = new Date(`2023-03-15, ${apresMidiPose3.value}:00`).getMinutes();
                const repos_H2 = new Date(`2023-03-15, ${apresMidiPose4.value}:00`).getHours();
                const repos_M2 = new Date(`2023-03-15, ${apresMidiPose4.value}:00`).getMinutes();

                const apres_H1 = new Date(`2023-03-15, ${apresMidiWeek1.value}:00`).getHours();
                const apres_M1 = new Date(`2023-03-15, ${apresMidiWeek1.value}:00`).getMinutes();
                const apres_H2 = new Date(`2023-03-15, ${apresMidiWeek2.value}:00`).getHours();
                const apres_M2 = new Date(`2023-03-15, ${apresMidiWeek2.value}:00`).getMinutes();

                if ((avant_H1 < avant_H2) && (avant_H2 <= repos_H1) && (repos_H1 < repos_H2) && (repos_H2 <= apres_H1) && (apres_H1 < apres_H2)) {
                  const ObjeWeek = {
                    identite: "week-end",
                    jours: dataWeekEnd,
                    ouvertureService: avantMidiWeek1.value,
                    stopServicePose: avantMidiWeek2.value,
                    debutPoseService: apresMidiPose3.value,
                    finPoseService: apresMidiPose4.value,
                    repriseService: apresMidiWeek1.value,
                    arretService: apresMidiWeek2.value,
                  }
                  localStorage.setItem("PARAM_WEEK_END", JSON.stringify(ObjeWeek));
                  window.scroll(0, 500);
                  messageWeekEnd.textContent = "Enregistrement effectué avec succès !!";
                  barre.hidden = false;

                  avantMidiWeek1.value = "";
                  avantMidiWeek2.value = "";
                  apresMidiPose3.value = "";
                  apresMidiPose4.value = "";
                  apresMidiWeek1.value = "";
                  apresMidiWeek2.value = "";
                  ElementWeek.forEach(key => key.checked = false);
                  location.reload();
                } else {
                  window.scroll(0, 730);
                  messageWeekEnd.textContent = "Formulaire mal remplie !!";
                  barre.hidden = false;
                }
              } else {
                window.scroll(0, 730);
                messageWeekEnd.textContent = "Aucun jour n'a été définit";
                barre.hidden = false;
              }
            } else {
              window.scroll(0, 730);
              messageWeekEnd.textContent = "Formulaire mal remplie !!";
              barre.hidden = false;
            }
          } else {
            window.scroll(0, 730);
            messageWeekEnd.textContent = "Formulaire mal remplie !!";
            barre.hidden = false;
          }
        } else {
          window.scroll(0, 730);
          messageWeekEnd.textContent = "Formulaire mal remplie !!";
          barre.hidden = false;
        }
      } else {
        window.scroll(0, 730);
        messageWeekEnd.textContent = "Formulaire mal remplie !!";
        barre.hidden = false;
      }
    } else {
      window.scroll(0, 730);
      messageWeekEnd.textContent = "Formulaire mal remplie !!";
      barre.hidden = false;
    }
  } else {
    window.scroll(0, 730);
    messageWeekEnd.textContent = "Formulaire mal remplie !!";
    barre.hidden = false;
  }
}

// Sauvegard des jours weeks-end
const dataWenk = JSON.parse(localStorage.getItem("PARAM_WEEK_END"));

function afficheParametreWeek(donneeWeek) {
  const weekEndJours = document.getElementById("week-end-jours");
  if (donneeWeek) {
    donneeWeek.jours.forEach(key => {
      const par = document.createElement("p");
      const ii = document.createElement("i");
      ii.className = "bi bi-check-circle-fill";
      const strong = document.createElement("strong");
      strong.textContent = ` ${key} `;
      par.append(ii);
      par.append(strong);
      weekEndJours.append(par);
      document.getElementById(key).checked = true;
    });
    
    const matin_2 = document.getElementById("matin-2");
    matin_2.innerHTML = "";
    const ii_1_1 = document.createElement("i");
    ii_1_1.className = "bi bi-align-start";
    const strong_1 = document.createElement("strong");
    strong_1.textContent = ` Ouvert de ${donneeWeek.ouvertureService} à ${donneeWeek.stopServicePose} `
    const ii_1_2 = document.createElement("i");
    ii_1_2.className = "bi bi-align-end";
    matin_2.append(ii_1_1);
    matin_2.append(strong_1);
    matin_2.append(ii_1_2);
    document.getElementById("avantMidiWeek1").value = donneeWeek.ouvertureService;
    document.getElementById("avantMidiWeek2").value = donneeWeek.stopServicePose;

    const pose_2 = document.getElementById("pose-2");
    pose_2.innerHTML = "";
    const ii_2_1 = document.createElement("i");
    ii_2_1.className = "bi bi-align-start";
    const strong_2 = document.createElement("strong");
    strong_2.textContent = ` De ${donneeWeek.debutPoseService} à ${donneeWeek.finPoseService} `
    const ii_2_2 = document.createElement("i");
    ii_2_2.className = "bi bi-align-end";
    pose_2.append(ii_2_1);
    pose_2.append(strong_2);
    pose_2.append(ii_2_2);
    document.getElementById("apresMidiPose3").value = donneeWeek.debutPoseService;
    document.getElementById("apresMidiPose4").value = donneeWeek.finPoseService;

    const soir_2 = document.getElementById("soir-2");
    soir_2.innerHTML = "";
    const ii_3_1 = document.createElement("i");
    ii_3_1.className = "bi bi-align-start";
    const strong_3 = document.createElement("strong");
    strong_3.textContent = ` Ouvert de ${donneeWeek.repriseService} à ${donneeWeek.arretService} `;
    const ii_3_2 = document.createElement("i");
    ii_3_2.className = "bi bi-align-end";
    soir_2.append(ii_3_1);
    soir_2.append(strong_3);
    soir_2.append(ii_3_2);
    document.getElementById("apresMidiWeek1").value = donneeWeek.repriseService;
    document.getElementById("apresMidiWeek2").value = donneeWeek.arretService;
  }

}

afficheParametreWeek(dataWenk);



document.querySelectorAll("input[type='number']").forEach(cle => {
  cle.addEventListener("focus", () => {
    document.getElementById("messageSalariale").textContent = "";
    document.getElementById("barre-salariale").hidden = true;
  })
})

document.getElementById("save-masse-salariale").addEventListener("click", savaMasseSalariale);
function savaMasseSalariale() {

  // On sélection les chams de saisies
  const min_salaire = document.getElementById("min-salaire");
  const max_salaire = document.getElementById("max-salaire");
  const min_tache_no_end = document.getElementById("min-tache-no-end");
  const max_tache_no_end = document.getElementById("max-tache-no-end");

  // Juste pour scroller
  window.scroll(0, 1280);

  if (min_salaire.value.replaceAll(" ", "") != ""){
    if (max_salaire.value.replaceAll(" ", "") != ""){
      if ((parseInt(min_salaire.value) < parseInt(max_salaire.value)) && (parseInt(min_tache_no_end.value) <= parseInt(max_tache_no_end.value))){
        const masseSalariale = {
          min_salaire: parseInt(min_salaire.value),
          max_salaire: parseInt(max_salaire.value),
          min_tache_no_end: parseInt(min_tache_no_end.value),
          max_tache_no_end: parseInt(max_tache_no_end.value)
        }

        localStorage.setItem("MASSE_SALARIALES", JSON.stringify(masseSalariale));
        
        const sall_1 = document.getElementById("sall-1");
        sall_1.innerHTML = "";
        const ii_1_1 = document.createElement("i");
        ii_1_1.className = "bi bi-align-start";
        const infos1 = document.createElement("strong");
        infos1.textContent = " Minimum :";
        const strong_1 = document.createElement("strong");
        strong_1.textContent = ` ${masseSalariale.min_salaire} FCFA `;
        const ii_1_2 = document.createElement("i");
        ii_1_2.className = "bi bi-align-end";
        sall_1.append(ii_1_1);
        sall_1.append(infos1);
        sall_1.append(strong_1);
        sall_1.append(ii_1_2);


        const sall_2 = document.getElementById("sall-2");
        sall_2.innerHTML = "";
        const ii_2_1 = document.createElement("i");
        ii_2_1.className = "bi bi-align-start";
        const infos2 = document.createElement("strong");
        infos2.textContent = " Maximum :";
        const strong_2 = document.createElement("strong");
        strong_2.textContent = ` ${masseSalariale.max_salaire} FCFA `;
        const ii_2_2 = document.createElement("i");
        ii_2_2.className = "bi bi-align-end";
        sall_2.append(ii_2_1);
        sall_2.append(infos2);
        sall_2.append(strong_2);
        sall_2.append(ii_2_2);

        const sall_3 = document.getElementById("sall-3");
        sall_3.innerHTML = "";
        const ii_3_1 = document.createElement("i");
        ii_3_1.className = "bi bi-align-start";
        const infos3 = document.createElement("strong");
        infos3.textContent = " Minimum :";
        const strong_3 = document.createElement("strong");
        strong_3.textContent = ` ${masseSalariale.min_tache_no_end} FCFA `;
        const ii_3_2 = document.createElement("i");
        ii_3_2.className = "bi bi-align-end";
        sall_3.append(ii_3_1);
        sall_3.append(infos3);
        sall_3.append(strong_3);
        sall_3.append(ii_3_2);

        const sall_4 = document.getElementById("sall-4");
        sall_4.innerHTML = "";
        const ii_4_1 = document.createElement("i");
        ii_4_1.className = "bi bi-align-start";
        const infos4 = document.createElement("strong");
        infos4.textContent = " Maximum :";
        const strong_4 = document.createElement("strong");
        strong_4.textContent = ` ${masseSalariale.max_tache_no_end} FCFA `;
        const ii_4_2 = document.createElement("i");
        ii_4_2.className = "bi bi-align-end";
        sall_4.append(ii_4_1);
        sall_4.append(infos4);
        sall_4.append(strong_4);
        sall_4.append(ii_4_2);

        location.reload();
      }
    }
  }
}


const dataSalariale = JSON.parse(localStorage.getItem("MASSE_SALARIALES"));

function afficherMasseSalariale(detailSalariale){
  if (!Array.isArray(detailSalariale) && (typeof detailSalariale) == "object"){
    const sall_1 = document.getElementById("sall-1");
    sall_1.innerHTML = "";
    const ii_1_1 = document.createElement("i");
    ii_1_1.className = "bi bi-align-start";
    const infos1 = document.createElement("strong");
    infos1.textContent = " Minimum :";
    const strong_1 = document.createElement("strong");
    strong_1.textContent = ` ${detailSalariale.min_salaire} FCFA `;
    const ii_1_2 = document.createElement("i");
    ii_1_2.className = "bi bi-align-end";
    sall_1.append(ii_1_1);
    sall_1.append(infos1);
    sall_1.append(strong_1);
    sall_1.append(ii_1_2);
    document.getElementById("min-salaire").value = detailSalariale.min_salaire;

    const sall_2 = document.getElementById("sall-2");
    sall_2.innerHTML = "";
    const ii_2_1 = document.createElement("i");
    ii_2_1.className = "bi bi-align-start";
    const infos2 = document.createElement("strong");
    infos2.textContent = " Maximum :";
    const strong_2 = document.createElement("strong");
    strong_2.textContent = ` ${detailSalariale.max_salaire} FCFA `;
    const ii_2_2 = document.createElement("i");
    ii_2_2.className = "bi bi-align-end";
    sall_2.append(ii_2_1);
    sall_2.append(infos2);
    sall_2.append(strong_2);
    sall_2.append(ii_2_2);
    document.getElementById("max-salaire").value = detailSalariale.max_salaire;

    const sall_3 = document.getElementById("sall-3");
    sall_3.innerHTML = "";
    const ii_3_1 = document.createElement("i");
    ii_3_1.className = "bi bi-align-start";
    const infos3 = document.createElement("strong");
    infos3.textContent = " Minimum :";
    const strong_3 = document.createElement("strong");
    strong_3.textContent = ` ${detailSalariale.min_tache_no_end} FCFA `;
    const ii_3_2 = document.createElement("i");
    ii_3_2.className = "bi bi-align-end";
    sall_3.append(ii_3_1);
    sall_3.append(infos3);
    sall_3.append(strong_3);
    sall_3.append(ii_3_2);
    document.getElementById("min-tache-no-end").value = detailSalariale.min_tache_no_end;

    const sall_4 = document.getElementById("sall-4");
    sall_4.innerHTML = "";
    const ii_4_1 = document.createElement("i");
    ii_4_1.className = "bi bi-align-start";
    const infos4 = document.createElement("strong");
    infos4.textContent = " Maximum :";
    const strong_4 = document.createElement("strong");
    strong_4.textContent = ` ${detailSalariale.max_tache_no_end} FCFA `;
    const ii_4_2 = document.createElement("i");
    ii_4_2.className = "bi bi-align-end";
    sall_4.append(ii_4_1);
    sall_4.append(infos4);
    sall_4.append(strong_4);
    sall_4.append(ii_4_2);
    document.getElementById("max-tache-no-end").value = detailSalariale.max_tache_no_end;
  }
}

afficherMasseSalariale(dataSalariale)
