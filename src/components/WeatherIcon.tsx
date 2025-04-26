import React from "react";
import {
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  CloudFog,
  Wind,
} from "lucide-react";
import { WeatherCondition } from "../services/weatherApi";
import { motion } from "framer-motion";

interface WeatherIconProps {
  condition: WeatherCondition | string;
  className?: string;
  size?: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({
  condition,
  className = "",
  size = 48,
}) => {
  const getIcon = () => {
    switch (condition) {
      case "Clear":
        return <Sun size={size} className={`text-yellow-100 ${className}`} />;
      case "Clouds":
        return <Cloud size={size} className={`text-gray-400 ${className}`} />;
      case "Rain":
        return (
          <CloudRain size={size} className={`text-blue-500 ${className}`} />
        );
      case "Snow":
        return (
          <CloudSnow size={size} className={`text-blue-200 ${className}`} />
        );
      case "Thunderstorm":
        return (
          <CloudLightning
            size={size}
            className={`text-purple-600 ${className}`}
          />
        );
      case "Drizzle":
        return (
          <CloudDrizzle size={size} className={`text-blue-300 ${className}`} />
        );
      case "Mist":
      case "Fog":
      case "Haze":
        return (
          <CloudFog size={size} className={`text-gray-300 ${className}`} />
        );
      default:
        return <Wind size={size} className={`text-gray-500 ${className}`} />;
    }
  };

  return (
    <motion.div
      animate={{
        y: [0, -10, 0], 
      }}
      transition={{
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut",
      }}
    >
      {getIcon()}
    </motion.div>
  );
};

export default WeatherIcon;
