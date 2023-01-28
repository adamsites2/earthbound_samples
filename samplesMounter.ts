fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    const domParser = new DOMParser()
    const samplesDoc = domParser.parseFromString(response, "text/xml")
    const samples = samplesDoc.getElementsByName("sample")
    samples.forEach((sample) => {
        
    })
}))