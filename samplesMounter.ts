fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    const samplesDiv = document.getElementById("samples") as HTMLDivElement
    const domParser = new DOMParser()
    const samplesDocc = domParser.parseFromString(response, "text/xml")
    const samplesDoc = samplesDocc.getElementById("samples") as HTMLDivElement
    samplesDoc.innerHTML = samplesDoc.innerHTML.replace("</br>", "")
    const samples = samplesDoc.getElementsByTagName("sample")
    for (let i = 0; i < samples.length; i++){
        const sample = samples.item(i) as HTMLElement
        let tableElement = document.createElement("tr") as HTMLTableRowElement
        const sampleIndexes = sample.textContent?.split("\n") as string[]
        sampleIndexes.forEach((index) => {
            let sampledName = document.createElement("td") as HTMLTableCellElement
            sampledName.textContent = index + "</br>"
            tableElement.appendChild(sampledName)
        })
        console.log(tableElement)
        samplesDiv.appendChild(tableElement)
    }
}))