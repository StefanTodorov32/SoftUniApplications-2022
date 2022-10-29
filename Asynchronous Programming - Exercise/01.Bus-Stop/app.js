function getInfo() {
    let bussId = document.getElementById('stopId')
    let stopName = document.getElementById('stopName')
    let stopBuses = document.getElementById('buses')
    url = `http://localhost:3030/jsonstore/bus/businfo/${bussId.value}`

    stopBuses.innerHTML = ``
    fetchBusses(url)
    async function fetchBusses(url) {
        try {

            const response = await fetch(url)
            if (response.status !== 200) {
                stopName.textContent = `Error`
            }
            const data = await response.json()
            stopName.textContent = data['name']
            const buses = data['buses']
            bussId.value = ``

            for (const bus in buses) {
                let li = document.createElement('li')
                li.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`
                stopBuses.appendChild(li)

            }
        } catch {
            stopName.textContent = `Error`
        }
    }
}