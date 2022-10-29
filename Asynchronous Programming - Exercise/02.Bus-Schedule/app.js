function solve() {
    let stop = {
        next: 'depot'
    }
    const infoElement = document.getElementsByClassName('info')[0];
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');


    function depart() {
        departBtn.disabled = true;
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(data));
                stop = JSON.parse(JSON.stringify(data));
                infoElement.textContent = `Next stop ${stop.name}`;
            })
            .catch(error => {
                infoElement.textContent = "Error"
            });
        arriveBtn.disabled = false;
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${stop.name}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;

    }


    return {
        depart,
        arrive
    };
}
let result = solve();