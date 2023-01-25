"use strict";
fetch("/samples.xml").then(xmlSamples => {
    const domParser = new DOMParser();
    const samplesDoc = domParser.parseFromString(xmlSamples, "text/xml");
    console.log(xmlSamples, samplesDoc);
});
