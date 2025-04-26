
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchLocationProps {
  onSearch: (location: string) => void;
  isLoading: boolean;
  isNight?: boolean;
}

const SearchLocation: React.FC<SearchLocationProps> = ({ 
  onSearch, 
  isLoading,
  isNight = false 
}) => {
  const [location, setLocation] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim());
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex  w-full max-w-md gap-2">
      <div className="relative flex-grow ">
        <Input
          type="text"
          placeholder="Enter city name..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={`w-full pr-10 backdrop-blur-sm ${
            isNight 
              ? "bg-white/10 border-white/30 text-white placeholder:text-gray-300" 
              : "bg-white/90 border-white/30"
          }`}
          disabled={isLoading}
        />
      </div>
      <Button 
        type="submit" 
        disabled={isLoading || !location.trim()} 
        className={`${
          isNight
            ? "bg-white/20 hover:bg-white/30 text-white"
            : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
        }`}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
        ) : (
          <>
            <Search className="mr-2 h-4 w-4" />
            Search
          </>
        )}
      </Button>
    </form>
  );
};

export default SearchLocation;
