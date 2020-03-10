let occupations = {
    2113: {name: 'keemik', rate: 0 },
    2212: {name: 'eriarst', rate: 0 },
    2250: {name: 'loomaarst', rate: 0 },
    2261: {name: 'hambaarst', rate: 0 },
    5141: {name: 'juuksur', rate: 0 }
}

fetch ('http://andmebaas.stat.ee/sdmx-json/data/PA633/36+59+64+65+DBL248.3.1/all?startTime=2014&endTime=2014&dimensionAtObservation=allDimensions')
.then(response => {
    return response.json()

})

.then(data => {
    data.structure.dimensions.observation[0].values.forEach((el, i) => {
        const occupations = (el.name.split(' ')[0])
        const dataSetKey = i + '0:0:0:'
        console.log(el.name.split(' '[0]))
        console.log(dataSetKey)
        console.log(data.dataSets[0].observation[dataSetKey][0])
        occupations[occupationsKey].rate = dataSets[0].observation
    })

})
