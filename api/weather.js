import axios from "axios";
import { apiKey } from "../constants";

const forecastEndpoint = ({ cityName, days }) => {
  return `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${days}&aqi=no&alerts=no`;
};

const locationsEndpoint = ({ cityName }) => {
  console.log(cityName);
  return `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${cityName}`;
};

const apiCall = async (endpoint) => {
  //   const options = {
  //     method: "GET",
  //     url: endpoint,
  //   };

  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (err) {
    console.log("Error:", err);
    return null;
  }
};

export const fetchWeatherForecast = (params) => {
  return apiCall(forecastEndpoint(params));
};

export const fetchLocations = (params) => {
  return apiCall(locationsEndpoint(params));
};
