const form = document.querySelector('form');

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
    updateCity(city).then(data => console.log(data))
                    .catch(err => alert(err));
})

