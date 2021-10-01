const key = 'jykBm99doKNxNZNO5PaBr0LBUbjFaWyN';

const getWeather = async (id) => {

	const weatherApi = 'http://dataservice.accuweather.com/currentconditions/v1/';
	const query  = `${id}?apikey=${key}`;
	
	const response = await fetch(weatherApi+query);
	const data = await response.json();
	
	//console.log(data);
	return data[0]; //returns a promise
};

const getCity = async (city) => {

	const cityApi = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	const query = `?apikey=${key}&q=${city}`;
	
	const response = await fetch(cityApi+query);
	const data = await response.json();
	
	return data[0]; //returns a promise
};


