// ==UserScript==
// @name         MegaUp.net Auto Downloader
// @version      1.2
// @description  Auto DL script for MegaUp.net
// @author       Elxss
// @match        *://*.megaup.net/*
// @homepage     https://elxss.github.io/
// @icon         https://avatars.githubusercontent.com/u/121466211?s=400&u=e6018d225103ed4be48117d0341d74a212d0b607&v=4
// @grant        none
// @run-at       document-start
// ==/UserScript==

// Last Updated and Tested the 14/04/2025
// I Hope you enjoy it :)

console.log("[AUTO-DL] Loaded ! Version 1.2 If it doesn't work anymore let me know :)");

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
            let AExist = TimerDiv.querySelector("a[class='btn btn--primary']");
            if (AExist) {

                let waiting_stage1_check = setInterval(() => { if (AExist.getAttribute("href") && AExist.getAttribute("href")!="#") {
                    clearInterval(waiting_stage1_check);
                } else {
                    console.log("[AUTO-DL] [ Stage 1 ] WAITING !");
                }}, 1000);

                console.log("[AUTO-DL] [ Stage 1 ] HIT !");
                document.location.href = AExist.getAttribute("href");
                console.log(AExist.getAttribute("href"));
                clearInterval(checkButtonGenerateLink);
            }
        }
    }, 1000);

    const checkButtonDownload = setInterval(() => {
        let DownloadDiv = document.querySelector("div[id='download']");

        console.log('[AUTO-DL] [ Stage 2 ] Checking ...');

        if (DownloadDiv) {
            if (Confirmed===false) {
                Confirmed = true;
                console.log('[AUTO-DL] [ Stage 2 ] Confirmed Stoping Stage 1 Check');
                clearInterval(checkButtonGenerateLink);
            }

            let keywords_query_selector = ["button[id='btndownload']","button[id='btndownload']"];

            let ButtonExist = DownloadDiv.querySelectorAll(keywords_query_selector.join(','));

            if (ButtonExist.length > 0) {
                let clicked = false;

                ButtonExist.forEach(btn => {
                    console.log(btn);
                    if (btn && !btn.classList.contains("disable") && !btn.classList.contains("disabled") ) {
                        console.log("[AUTO-DL] [ Stage 2 ] Jackpot :)");
                        btn.click();
                        clearInterval(checkButtonDownload);
                        setTimeout(() => window.close(), 3000);
                    }
                });
            } else {
                console.log("[AUTO-DL] [ Stage 2 ] No buttons detected ...");
            }


        }
    }, 1000);


})();
