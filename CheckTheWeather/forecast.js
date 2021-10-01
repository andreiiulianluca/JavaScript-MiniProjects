const key = 'HOXIKkI9TEkCziTZ6KPa7NAG3In8Ui6z'; 

const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query); 
    const data = await response.json();

    return data[0];
};

const getInfoAboutCity = async (cityKey) =>{
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${cityKey}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};