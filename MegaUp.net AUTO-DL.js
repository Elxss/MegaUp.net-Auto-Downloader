// ==UserScript==
// @name         MegaUp.net Auto Downloader
// @version      1.1
// @description  Auto DL script for MegaUp.net
// @author       Elxss
// @match        *://*.megaup.net/*
// @homepage     https://elxss.github.io/
// @icon         https://avatars.githubusercontent.com/u/121466211?s=400&u=e6018d225103ed4be48117d0341d74a212d0b607&v=4
// @grant        none
// @run-at       document-start
// ==/UserScript==

// Last Updated and Tested the 15/03/2025
// I Hope you enjoy it :)

console.log("[AUTO-DL] Loaded ! Version 1.1 If it doesn't work anymore let me know :)");

(function() {
    'use strict';

    let Confirmed = false;

    const checkButtonGenerateLink = setInterval(() => {
        let TimerDiv = document.querySelector("div[class='download-timer']");

        console.log('[AUTO-DL] [ Stage 1 ] Checking ...');
        if (TimerDiv) {
            if (Confirmed===false) {
                Confirmed = true;
                console.log('[AUTO-DL] [ Stage 1 ] Confirmed Stoping Stage 2 Check');
            }
            clearInterval(checkButtonDownload);
            let AExist = TimerDiv.querySelector("a");
            if (AExist) {
                console.log("[AUTO-DL] [ Stage 1 ] HIT !");
                AExist.click();
                clearInterval(checkButtonGenerateLink);
            }
        }
    }, 1000);

    const checkButtonDownload = setInterval(() => {
        let DownloadDiv = document.querySelector("div[class='download']");

        console.log('[AUTO-DL] [ Stage 2 ] Checking ...');
        if (DownloadDiv) {
            if (Confirmed===false) {
                Confirmed = true;
                console.log('[AUTO-DL] [ Stage 2 ] Confirmed Stoping Stage 1 Check');
                clearInterval(checkButtonGenerateLink);
            }

            let ButtonExist = DownloadDiv.querySelector("button[id='btndownload']");

            if (ButtonExist && !ButtonExist.classList.contains("disable")) {
                console.log("[AUTO-DL] [ Stage 2 ] Jackpot :)");
                ButtonExist.click();
                clearInterval(checkButtonDownload);
                setTimeout(() => window.close(), 3000);
            }
        }
    }, 1000);


})();