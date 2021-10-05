class Forecast{
	constructor(){
		this.key = 'jykBm99doKNxNZNO5PaBr0LBUbjFaWyN';
		this.weatherApi = 'http://dataservice.accuweather.com/currentconditions/v1/';
		this.cityApi = 'http://dataservice.accuweather.com/locations/v1/cities/search';
	}
	
	async updateCity(city){
		const cityDets = await this.getCity(city);
		const weather = await this.getWeather(cityDets.Key);
	
		return {cityDets, weather};
	}
	
	async getCity(city){
		const query = `?apikey=${this.key}&q=${city}`;
	
		const response = await fetch(this.cityApi+query);
		const data = await response.json();
	
		return data[0]; //returns a promise
	}
	
	async getWeather(id){
		const query  = `${id}?apikey=${this.key}`;
	
		const response = await fetch(this.weatherApi+query);
		const data = await response.json();
	
		return data[0]; //returns a promise
	}
}
//const key = 'jykBm99doKNxNZNO5PaBr0LBUbjFaWyN';

//const getWeather = async (id) => {
//
//	const weatherApi = 'http://dataservice.accuweather.com/currentconditions/v1/';
//	const query  = `${id}?apikey=${key}`;
//	
//	const response = await fetch(weatherApi+query);
//	const data = await response.json();
//	
	//console.log(data);
//	return data[0]; //returns a promise
//};

//const getCity = async (city) => {
//
//	const cityApi = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//	const query = `?apikey=${key}&q=${city}`;
//	
//	const response = await fetch(cityApi+query);
//	const data = await response.json();
//	
//	return data[0]; //returns a promise
//};


