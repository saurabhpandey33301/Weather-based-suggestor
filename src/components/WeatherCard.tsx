
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { WeatherData, WeatherCondition, getWeatherBackground, getWeatherTextColor } from "../services/weatherApi";
import WeatherIcon from "./WeatherIcon";
import ActivitySuggestion from "./ActivitySuggestion";

interface WeatherCardProps {
  weatherData: WeatherData;
  isNight?: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, isNight = false }) => {
  const weatherCondition = weatherData.weather[0].main as WeatherCondition;
  const backgroundClass = isNight ? "" : getWeatherBackground(weatherCondition);
  const textColorClass = isNight ? "text-white" : getWeatherTextColor(weatherCondition);
  
  // Format temperature
  const temperature = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  
  return (
    <Card className={`w-full max-w-md overflow-hidden shadow-lg animate-fade-in ${backgroundClass}`}>
      <CardContent className={`p-6 ${textColorClass}`}>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">{weatherData.name}</h2>
            <p className="text-lg opacity-80">{weatherData.sys.country}</p>
          </div>
          <WeatherIcon condition={weatherCondition} size={64} />
        </div>
        
        <div className="mb-6">
          <div className="flex items-end">
            <span className="text-5xl font-bold">{temperature}°C</span>
            <span className="text-lg ml-2 opacity-80">Feels like {feelsLike}°C</span>
          </div>
          <p className="text-xl capitalize mt-1">
            {weatherData.weather[0].description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm opacity-80">Humidity</p>
            <p className="text-xl font-semibold">{weatherData.main.humidity}%</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
            <p className="text-sm opacity-80">Wind Speed</p>
            <p className="text-xl font-semibold">{weatherData.wind.speed} m/s</p>
          </div>
        </div>
        
        <ActivitySuggestion weatherCondition={weatherCondition} />
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
