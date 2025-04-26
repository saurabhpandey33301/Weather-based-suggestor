import  { useState, useEffect } from "react";
import SearchLocation from "../components/SearchLocation";
import WeatherCard from "../components/WeatherCard";
import WeatherError from "../components/WeatherError";
import { fetchWeatherByCity, WeatherData } from "../services/weatherApi";
import { toast } from "sonner"

import { Toaster } from "../components/ui/sonner";
import { Moon, Sun } from "lucide-react";

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isNight, setIsNight] = useState<boolean>(false);

  useEffect(() => {
    const checkDayNight = () => {
      const hours = new Date().getHours();
      setIsNight(hours < 6 || hours >= 18); 
    };

    checkDayNight();
    const interval = setInterval(checkDayNight, 30000); 

    return () => clearInterval(interval);
  }, []);

  const handleSearch = async (location: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchWeatherByCity(location);
      if (data) {
        setWeatherData(data);
        setError(null);
      } else {
        setError("Location not found. Please try another city.");
        setWeatherData(null);
      }
    } catch (err) {
      setError("An error occurred while fetching weather data.");
      console.error("Error in handleSearch:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const timeBasedGradient = isNight
    ? "bg-gradient-to-b from-[#1a237e] to-[#283593]"
    : "bg-gradient-to-b from-blue-100 to-purple-100";

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-start p-4 sm:p-6 md:p-8 transition-colors duration-1000 ${timeBasedGradient}`}
    >
      <Toaster />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
        <div>
          <header className="text-center mb-8 mt-8 ">
            <div className="flex justify-end">
              {isNight ? (
                <Moon className="text-white h-8 w-8" />
              ) : (
                <Sun className="text-yellow-500 h-8 w-8" />
              )}
            </div>
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 pb-2 ${
                isNight
                  ? "text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              }`}
            >
             Weather-Based Activity Suggester
            </h1>
            <p
              className={`text-lg ${
                isNight ? "text-gray-300" : "text-slate-700"
              }`}
            >
              Discover the weather and find your perfect activity
            </p>
          </header>
          <div className="w-full mb-8 md:transform md:translate-x-40">
            <SearchLocation
              onSearch={handleSearch}
              isLoading={loading}
              isNight={isNight}
            />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center m-2 w-full  gap-10">
          
          <div className="w-full flex justify-center">
            {loading ? (
              <div className="flex flex-col items-center justify-center p-8">
                <div
                  className={`w-12 h-12 border-4 ${
                    isNight ? "border-white" : "border-blue-500"
                  } border-t-transparent rounded-full animate-spin mb-4`}
                ></div>
                <p className={isNight ? "text-gray-300" : "text-slate-600"}>
                  Loading weather data...
                </p>
              </div>
            ) : error ? (
              <WeatherError message={error} isNight={isNight} />
            ) : weatherData ? (
              <WeatherCard weatherData={weatherData} isNight={isNight} />
            ) : (
              <div className="text-center p-8 max-w-md">
                <div className="mb-4 opacity-60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={isNight ? "#fff" : "currentColor"}
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto text-slate-400"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
                  </svg>
                </div>
                <h2
                  className={`text-xl font-semibold mb-2 ${
                    isNight ? "text-white" : "text-slate-700"
                  }`}
                >
                  Enter a Location
                </h2>
                <p className={isNight ? "text-gray-300" : "text-slate-500"}>
                  Search for a city to get current weather conditions and
                  activity suggestions.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <footer
        className={`mt-auto pt-8 pb-4 text-center text-sm ${
          isNight ? "text-gray-400" : "text-slate-500"
        }`}
      >
        <p>
          © {new Date().getFullYear()}. made with love ❤️ and code . All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Index;
