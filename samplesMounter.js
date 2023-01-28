"use strict";
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
            tableElement.appendChild(document.createElement("br"));
        });
        console.log(tableElement);
        samplesDiv.appendChild(tableElement);
    }
}));
