'use strict';

/* ===== Responsive Sidepanel ====== */
const sidePanelToggler = document.getElementById('sidepanel-toggler');
const sidePanel = document.getElementById('app-sidepanel');
const sidePanelDrop = document.getElementById('sidepanel-drop');
const sidePanelClose = document.getElementById('sidepanel-close');

window.addEventListener('load', function () {
    responsiveSidePanel();
});

window.addEventListener('resize', function () {
    responsiveSidePanel();
});

function responsiveSidePanel() {
    let w = window.innerWidth;
    if (w >= 1200) {
        sidePanel.classList.remove('sidepanel-hidden');
        sidePanel.classList.add('sidepanel-visible');
    } else {
        sidePanel.classList.remove('sidepanel-visible');
        sidePanel.classList.add('sidepanel-hidden');
    }
};

sidePanelToggler.addEventListener('click', () => {
    if (sidePanel.classList.contains('sidepanel-visible')) {
        sidePanel.classList.remove('sidepanel-visible');
        sidePanel.classList.add('sidepanel-hidden');
    } else {
        sidePanel.classList.remove('sidepanel-hidden');
        sidePanel.classList.add('sidepanel-visible');
    }
});

sidePanelClose.addEventListener('click', (e) => {
    e.preventDefault();
    sidePanelToggler.click();
});

sidePanelDrop.addEventListener('click', (e) => {
    sidePanelToggler.click();
});

/* ====== Mobile search ======= */
const searchMobileTrigger = document.querySelector('.barre-recherche');
const searchBox = document.querySelector('.toute-boite-recherche');

searchMobileTrigger.addEventListener('click', () => {
    searchBox.classList.toggle('is-visible');
    let searchMobileTriggerIcon = document.querySelector('.barre-recherche-auto');
    if (searchMobileTriggerIcon.classList.contains('fa-search')) {
        searchMobileTriggerIcon.classList.remove('fa-search');
        searchMobileTriggerIcon.classList.add('fa-times');
    } else {
        searchMobileTriggerIcon.classList.remove('fa-times');
        searchMobileTriggerIcon.classList.add('fa-search');
    }
});


