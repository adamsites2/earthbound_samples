"use strict";
fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    const domParser = new DOMParser();
    const samplesDoc = domParser.parseFromString(response, "text/xml");
    console.log(response, samplesDoc);
}));
