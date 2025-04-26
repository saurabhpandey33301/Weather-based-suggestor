import { toast } from "sonner";

export type WeatherData = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  timezone: number;
  coord: {
    lat: number;
    lon: number;
  };
};

export type WeatherCondition =
  | "Clear"
  | "Clouds"
  | "Rain"
  | "Snow"
  | "Thunderstorm"
  | "Drizzle"
  | "Mist"
  | "Fog"
  | "Haze"
  | "Dust"
  | "Sand"
  | "Ash"
  | "Squall"
  | "Tornado";


export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );

    if (!response.ok) {
      if (response.status === 404) {
        toast.error("Location not found. Please try another city.");
        return null;
      } else {
        toast.error("Unable to fetch weather data. Please try again later.");

        return null;
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    toast.error(
      "Something went wrong. Please check your connection and try again."
    );

    return null;
  }
};


export const getWeatherIconUrl = (iconCode: string): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
};


export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};


export const getWeatherBackground = (condition: WeatherCondition): string => {
  switch (condition) {
    case "Clear":
      return "bg-gradient-to-r from-[#FFB347] to-[#FFCC70]";
    case "Clouds":
      return "bg-gradient-to-r from-[#8E9196] to-[#BDC3C7]";
    case "Rain":
      return "bg-gradient-to-r from-[#6A8CAF] to-[#A4BEE0]";
    case "Drizzle":
      return "bg-gradient-to-r from-[#6A8CAF] to-[#A4BEE0]";
    case "Snow":
      return "bg-gradient-to-r from-[#E2E8F0] to-[#EDF2F7]";
    case "Thunderstorm":
      return "bg-gradient-to-r from-[#403E43] to-[#565960]";
    default:
      return "bg-gradient-to-r from-[#8E9196] to-[#BDC3C7]"; // fallback cloudy gradient
  }
};

// Function to get text color based on weather condition
export const getWeatherTextColor = (condition: WeatherCondition): string => {
  switch (condition) {
    case "Clear":
    case "Snow":
      return "text-slate-800";
    case "Clouds":
      return "text-slate-900";
    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      return "text-white";
    default:
      return "text-slate-900";
  }
};
