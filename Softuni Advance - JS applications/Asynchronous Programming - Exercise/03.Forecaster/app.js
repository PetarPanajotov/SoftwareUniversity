function attachEvents() {
    const location = document.getElementById('location');
    const getWeatherBtn = document.getElementById('submit');
    const forecast = document.getElementById('forecast')
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming')
    const url = `http://localhost:3030/jsonstore/forecaster`
    const weatherSymbols = {
        'Sunny': '☀', //'☀'
        'Partly sunny': '⛅', //⛅
        'Overcast': '☁', // ☁
        'Rain': '☂', // ☂
        'Degrees': '°' // °
    }
    getWeatherBtn.addEventListener('click', getInfo)
    async function getInfo() {
        try {
        let response = await fetch(`${url}/locations`);
        const data = await response.json();
        let current = data.find(element => element.name === location.value);
        getInfoForToday(current.code);
        getInfoForUpcoming(current.code);
        }
        catch (err) {
            forecast.style.display = 'block';
            forecast.textContent = 'Error'
        }
    }
    async function getInfoForToday(cityCode) {
        let response = await fetch(`${url}/today/${cityCode}`);
        let data = await response.json();
        forecast.style.display = 'block';
        let newDiv = document.createElement('div');
        newDiv.classList = 'forecast'
        let spanSymbol = document.createElement('span');
        spanSymbol.classList.add('condition', 'symbol');
        spanSymbol.textContent = weatherSymbols[data.forecast.condition];
        let spanCondition = document.createElement('span');
        spanCondition.classList = 'condition';
        let spanName = document.createElement('span');
        spanName.classList = 'forecast-data';
        spanName.textContent = data.name;
        let spanDegree = document.createElement('span')
        spanDegree.classList = 'forecast-data';
        spanDegree.textContent = data.forecast.low + weatherSymbols.Degrees + '/' + data.forecast.high + weatherSymbols.Degrees;
        let spanWeatherInfo = document.createElement('span');
        spanWeatherInfo.classList = 'forecast-data';
        spanWeatherInfo.textContent = data.forecast.condition;
        spanCondition.appendChild(spanName);
        spanCondition.appendChild(spanDegree);
        spanCondition.appendChild(spanWeatherInfo);
        newDiv.appendChild(spanSymbol);
        newDiv.appendChild(spanCondition);
        current.appendChild(newDiv);
    }
    async function getInfoForUpcoming(cityCode) {
        let response = await fetch(`${url}/upcoming/${cityCode}`);
        let data = await response.json();
        let div = document.createElement('div');
        div.classList = 'forecast-info';
        data.forecast.forEach(element => {
            let spanUpcoming = document.createElement('span');
            spanUpcoming.classList = 'upcoming'
            let spanSymbol = document.createElement('span');
            spanSymbol.classList = 'symbol';
            spanSymbol.textContent = weatherSymbols[element.condition];
            let spanDegree = document.createElement('span');
            spanDegree.classList = 'forecast-data';
            spanDegree.textContent = element.low + weatherSymbols.Degrees + "/" + element.high + weatherSymbols.Degrees;
            let spanInfo = document.createElement('span');
            spanInfo.classList = 'forecast-data';
            spanInfo.textContent = element.condition
            spanUpcoming.appendChild(spanSymbol)
            spanUpcoming.appendChild(spanDegree);
            spanUpcoming.appendChild(spanInfo);
            div.appendChild(spanUpcoming);
            upcoming.appendChild(div);
        })
        
    }
}

attachEvents();