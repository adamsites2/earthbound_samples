"use strict";
fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    var _a;
    const samplesDiv = document.getElementById("samples");
    const domParser = new DOMParser();
    const samplesDocc = domParser.parseFromString(response, "text/xml");
    const samplesDoc = samplesDocc.getElementById("samples");
    samplesDoc.innerHTML = samplesDoc.innerHTML.replace("</br>", "");
    const samples = samplesDoc.getElementsByTagName("sample");
    for (let i = 0; i < samples.length; i++) {
        const sample = samples.item(i);
        let tableElement = document.createElement("tr");
        const sampleIndexes = (_a = sample.textContent) === null || _a === void 0 ? void 0 : _a.split("\n");
        sampleIndexes.forEach((index) => {
            let sampledName = document.createElement("td");
            sampledName.textContent = index + "</br>";
            tableElement.appendChild(sampledName);
        });
        console.log(tableElement);
        samplesDiv.appendChild(tableElement);
    }
}));
