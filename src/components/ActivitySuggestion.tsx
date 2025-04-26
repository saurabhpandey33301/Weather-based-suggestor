
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { getRandomActivity } from "../services/activitySuggestions";
import { WeatherCondition } from "../services/weatherApi";
import { RefreshCw } from "lucide-react";

interface ActivitySuggestionProps {
  weatherCondition: WeatherCondition | string;
}

const ActivitySuggestion: React.FC<ActivitySuggestionProps> = ({ weatherCondition }) => {
  const [activity, setActivity] = useState(getRandomActivity(weatherCondition));
  
  const handleNewSuggestion = () => {
    setActivity(getRandomActivity(weatherCondition));
  };
  
  return (
    <div className="border border-white/30 rounded-lg p-4 backdrop-blur-sm bg-white/10">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Activity Suggestion</h3>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleNewSuggestion}
          className="h-8 w-8 rounded-full hover:bg-white/20"
        >
          <RefreshCw size={16} />
          <span className="sr-only">New suggestion</span>
        </Button>
      </div>
      
      <h4 className="text-xl font-bold mb-2">{activity.title}</h4>
      <p className="opacity-90">{activity.description}</p>
    </div>
  );
};

export default ActivitySuggestion;
