fetch("/samples.xml").then(xmlSamples => {
    const domParser = new DOMParser()
    const samplesDoc = domParser.parseFromString(xmlSamples as unknown as string, "text/xml")
    console.log(xmlSamples, samplesDoc)
    
})