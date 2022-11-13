const input = document.getElementById('stopId')
const buses = document.getElementById('buses')
const stopName = document.getElementById('stopName')

async function getInfo() {
    try {
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${input.value}`)
        input.value = ''
        const data = await response.json()
        renderInformation(data)
    }
    catch (err) {
        buses.innerHTML = ''
        stopName.textContent = 'Error';
    }
}
function renderInformation(data) {
    buses.innerHTML = ''
    stopName.textContent = data.name;
    let entriesBuses = Object.entries(data.buses)
    debugger;
    entriesBuses.forEach(bus => {
        debugger;
        let [busId, time] = bus
        let li = document.createElement('li')
        li.textContent = `Bus ${busId} arrives in ${time} minutes`
        buses.appendChild(li)
    })
}