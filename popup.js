chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: tabs[0].url,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});