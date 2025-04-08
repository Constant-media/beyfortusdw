$(document).ready(function () {

    var agent = navigator.userAgent;
    var checkagent1 = agent.includes("Brightsign");
    var checkagent2 = agent.includes("MW22");
    var checkagent3 = agent.includes("MW15");

    //*** Opens an external URL
    function openExternalLinkFull(e, clickTag) {
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestFullscreenBrowserView(clickTag);
        } else {
            window.open(clickTag);
        }
    }
    //external pdf
    function openExternalPDF(e, pdfUrl) {
        if (checkagent1 === true || checkagent2 === true || checkagent3 === true || typeof appHost !== 'undefined') {
            appHost.requestPDFView(pdfUrl);
        } else {
            window.open(pdfUrl);
        }
    }

    function assignClickHandlers() {
        //external links

        $('.main-link')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "#TBD");
        }, false);

        $('#link1')[0].addEventListener("click", function (e) {
            openExternalLinkFull(e, "#TBD");
        }, false);

        $('#link2')[0].addEventListener("click", function (e) {
            openExternalPDF(e, "#TBD");
        }, false);
    }
  
    assignClickHandlers();
});