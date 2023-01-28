"use strict";
fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const samplesDiv = document.getElementById("samples");
    const domParser = new DOMParser();
    const samplesDocc = domParser.parseFromString(response, "text/xml");
    const samplesDoc = samplesDocc.getElementById("samples");
    const samples = samplesDoc.getElementsByTagName("sample");
    for (let i = 0; i < samples.length; i++) {
        const sample = samples.item(i);
        let tableElement = document.createElement("li");
        const sampledIndexes = (_b = (_a = sample.getElementsByTagName("indexMusic").item(0)) === null || _a === void 0 ? void 0 : _a.innerHTML) === null || _b === void 0 ? void 0 : _b.split("\\\\\\\\");
        let subTable = document.createElement("table");
        subTable.classList.add("fixed");
        tableElement.appendChild(subTable);
        let trElement = document.createElement("tr");
        subTable.appendChild(trElement);
        let colGroup = document.createElement("colgroup");
        let colWidth = document.createElement("col");
        colWidth.width = ((_c = sample.getElementsByTagName("colWidth").item(0)) === null || _c === void 0 ? void 0 : _c.textContent) || "600px";
        colGroup.appendChild(colWidth);
        subTable.appendChild(colGroup);
        let sampledName = document.createElement("td");
        sampledIndexes.forEach((index) => {
            sampledName.innerHTML = sampledName.innerHTML + index + " ";
        });
        sampledName.style.border = "none;";
        trElement.appendChild(sampledName);
        samplesDiv.appendChild(tableElement);
        const samplesIndexes = (_d = sample.getElementsByTagName("sampleValues").item(0)) === null || _d === void 0 ? void 0 : _d.getElementsByTagName("theSample");
        let samplesName = document.createElement("td");
        for (let index = 0; i < samplesIndexes.length; i++) {
            let value = samplesIndexes.item(index);
            let sampleMusic = (_e = value.getElementsByTagName("index").item(0)) === null || _e === void 0 ? void 0 : _e.textContent;
            let sampleTimestamp = (_f = value.getElementsByTagName("timestamp").item(0)) === null || _f === void 0 ? void 0 : _f.textContent;
            let sampleCreator = (_g = value.getElementsByTagName("creator").item(0)) === null || _g === void 0 ? void 0 : _g.textContent;
            let constructedHtmlLi = `<li>${sampleMusic}</br>${sampleTimestamp}</br>${sampleCreator}</li>`;
            samplesName.innerHTML = constructedHtmlLi;
        }
        samplesName.style.border = "none;";
        trElement.appendChild(samplesName);
        subTable.appendChild(trElement);
        tableElement.appendChild(document.createTextNode((_h = sample.getElementsByTagName("description").item(0)) === null || _h === void 0 ? void 0 : _h.textContent));
    }
}));
