const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {
    const cityDetails = data.cityDetails;
    const weather = data.weather;

    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
        </div>`;

    
    const iconSrc = `assets/img/icons/${weather.WeatherIcon}.svg`; 
    icon.setAttribute('src', iconSrc);

    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'assets/img/day.svg';
    } else{
        timeSrc = 'assets/img/night.svg';
    }

    time.setAttribute('src', timeSrc);
    card.classList.remove('d-none');
}

const updateCity = async (city) =>{
    const cityDetails = await getCity(city);
    const weather = await getInfoAboutCity(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    };
}

form.addEventListener('submit', e => {
    e.preventDefault();

    //get city value
    const city = form.city.value.trim().toLowerCase();
    form.reset();

    //update the ui with info
    updateCity(city).then(data => updateUI(data))
                    .catch(err => alert(err));
})

