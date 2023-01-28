fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    const samplesDiv = document.getElementById("samples") as HTMLDivElement
    const domParser = new DOMParser()
    const samplesDoc = domParser.parseFromString(response, "text/xml")
    const samples = samplesDoc.getElementsByName("sample")
    
    samples.forEach((sample) => {
        let tableElement = document.createElement("tr") as HTMLTableRowElement
        const sampleIndexes = sample.textContent?.split("\n") as string[]
        sampleIndexes.forEach((index) => {
            let sampledName = document.createElement("td") as HTMLTableCellElement
            sampledName.textContent = index + "</br>"
            tableElement.appendChild(sampledName)
        })
        samplesDiv.appendChild(tableElement)
    })
}))