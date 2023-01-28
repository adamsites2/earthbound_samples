fetch("/samples.xml").then(xmlSamples => xmlSamples.text().then(response => {
    const samplesDiv = document.getElementById("samples") as HTMLDivElement
    const domParser = new DOMParser()
    const samplesDocc = domParser.parseFromString(response, "text/xml")
    const samplesDoc = samplesDocc.getElementById("samples") as HTMLDivElement
    const samples = samplesDoc.getElementsByTagName("sample")
    for (let i = 0; i < samples.length; i++){
        const sample = samples.item(i) as HTMLDivElement
        let tableElement = document.createElement("li") as HTMLLIElement
        const sampledIndexes = sample.getElementsByTagName("indexMusic").item(0)?.innerHTML?.split("\\\\\\\\") as string[]
        let subTable = document.createElement("table") as HTMLTableElement
        subTable.classList.add("fixed")
        tableElement.appendChild(subTable)
        let trElement = document.createElement("tr") as HTMLTableRowElement
        subTable.appendChild(trElement)
        let colGroup = document.createElement("colgroup")
        let colWidth = document.createElement("col")
        colWidth.width = sample.getElementsByTagName("colWidth").item(0)?.textContent || "600px"
        colGroup.appendChild(colWidth)
        subTable.appendChild(colGroup)
        let sampledName = document.createElement("td") as HTMLTableCellElement
        sampledIndexes.forEach((index) => {
            sampledName.innerHTML = sampledName.innerHTML + index + " "
        })
        subTable.appendChild(sampledName)
        samplesDiv.appendChild(tableElement)
        const samplesIndexes = sample.getElementsByTagName("sampleValues").item(0)?.getElementsByTagName("sampleValues") as HTMLCollection
        let samplesName = document.createElement("td") as HTMLTableCellElement
        for (let index = 0; i < samplesIndexes.length; i++){
            let value = samplesIndexes.item(index) as HTMLElement
            let sampleMusic = value.getElementsByTagName("index").item(0)?.textContent as string
            let sampleTimestamp = value.getElementsByTagName("timestamp").item(0)?.textContent as string
            let sampleCreator = value.getElementsByTagName("creator").item(0)?.textContent as string
            let constructedHtmlLi = `<li>${sampleMusic}</br>${sampleTimestamp}</br>${sampleCreator}</li>`
            samplesName.innerHTML = samplesName.innerHTML + constructedHtmlLi + " "
        }
        trElement.appendChild(samplesName)
        tableElement.appendChild(document.createTextNode(sample.getElementsByTagName("description").item(0)?.textContent as string))
    }
}))