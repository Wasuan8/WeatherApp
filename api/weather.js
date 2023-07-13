import axios from "axios";
import { apiKey } from "../constants";

const forecastEnfpoint = params =>`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;
const locationsEnfpoint = params =>`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;


const apiCall = async (endpoint)=> {
    const options = {
        method: 'GET',
        url: endpoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error', err);
        return {};
    }
}

export const fetchWeatherForecast = params => {
    let forecastUrl = forecastEnfpoint(params);
    return apiCall(forecastUrl);
}

export const fetchLocations = params => {
    let locationsUrl = locationsEnfpoint(params);
    return apiCall(locationsUrl);
}