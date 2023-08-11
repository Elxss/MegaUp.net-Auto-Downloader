// ==UserScript==
// @name         MegaUp.net AUTO-DL
// @version      0.1
// @description  Auto DL script for MegaUp.net
// @author       Elxss
// @match        *://*.megaup.net/*
// @homepage     https://elxss.github.io/
// @icon         https://avatars.githubusercontent.com/u/121466211?s=400&u=e6018d225103ed4be48117d0341d74a212d0b607&v=4
// @grant        none
// @run-at       document-start
// ==/UserScript==

console.log('[AUTO-DL] DL Ready');

setTimeout(function() {
    var selection = document.getElementById("btnsubmit") !== null;
    if (selection) {
        console.log('[AUTO-DL] DL available');
        document.getElementById("btnsubmit").click();
        document.getElementById("btnsubmit").click();
        document.getElementById("btnsubmit").click();
    } else {
        console.log('[AUTO-DL] DL unavailable');
        'use strict';
        window.close();
    }
}, 15000);

