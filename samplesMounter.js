"use strict";
fetch("/samples.xml").then(xmlSamples => xmlSamples.json().then(response => {
    const domParser = new DOMParser();
    const samplesDoc = domParser.parseFromString(response, "text/xml");
}));
