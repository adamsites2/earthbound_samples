"use strict";
function br() {
    let br = document.createElement("span");
    br.innerHTML = "<br/>";
    return br;
}
fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    var _a;
    const samplesDiv = document.getElementById("samples");
    const domParser = new DOMParser();
    const samplesDocc = domParser.parseFromString(response, "text/xml");
    const samplesDoc = samplesDocc.getElementById("samples");
    const samples = samplesDoc.getElementsByTagName("sample");
    for (let i = 0; i < samples.length; i++) {
        const sample = samples.item(i);
        let tableElement = document.createElement("tr");
        const sampleIndexes = (_a = sample.textContent) === null || _a === void 0 ? void 0 : _a.split("\\\\\\\\");
        sampleIndexes.forEach((index) => {
            let sampledName = document.createElement("td");
            sampledName.textContent = index;
            tableElement.appendChild(sampledName);
            tableElement.appendChild(br());
        });
        console.log(tableElement);
        samplesDiv.appendChild(tableElement);
    }
}));
