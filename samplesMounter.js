"use strict";
fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    const samplesDiv = document.getElementById("samples");
    const domParser = new DOMParser();
    const samplesDoc = domParser.parseFromString(response, "text/xml");
    const samples = samplesDoc.getElementsByName("sample");
    samples.forEach((sample) => {
        var _a;
        let tableElement = document.createElement("tr");
        const sampleIndexes = (_a = sample.textContent) === null || _a === void 0 ? void 0 : _a.split("\n");
        sampleIndexes.forEach((index) => {
            let sampledName = document.createElement("td");
            sampledName.textContent = index + "</br>";
            tableElement.appendChild(sampledName);
        });
        samplesDiv.appendChild(tableElement);
    });
}));
