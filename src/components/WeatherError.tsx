
import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Cloud } from "lucide-react";

interface WeatherErrorProps {
  message?: string;
  isNight?: boolean;
}

const WeatherError: React.FC<WeatherErrorProps> = ({ 
  message = "Unable to load weather information. Please try again.",
  isNight = false
}) => {
  return (
    <Card className={`w-full max-w-md shadow-lg animate-fade-in ${
      isNight ? "bg-white/10 backdrop-blur-sm" : "bg-gray-100"
    }`}>
      <CardContent className="p-6 text-center">
        <div className="flex flex-col items-center justify-center gap-4 py-8">
          <div className={`rounded-full ${isNight ? "bg-white/20" : "bg-gray-200"} p-4`}>
            <Cloud className={`h-12 w-12 ${isNight ? "text-white/70" : "text-gray-400"}`} />
          </div>
          <h3 className={`text-xl font-semibold ${isNight ? "text-white" : "text-gray-700"}`}>
            Weather Not Available
          </h3>
          <p className={isNight ? "text-gray-300" : "text-gray-500"}>{message}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherError;
