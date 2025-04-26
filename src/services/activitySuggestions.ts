
import { WeatherCondition } from "./weatherApi";

interface Activity {
  title: string;
  description: string;
}


const ACTIVITIES: Record<WeatherCondition, Activity[]> = {
  Clear: [
    { title: "Outdoor Picnic", description: "Enjoy a relaxing picnic in the park under the clear blue sky." },
    { title: "Stargazing Adventure", description: "With clear skies, tonight is perfect for stargazing! Pack some snacks and find an open space away from city lights." },
    { title: "Beach Day", description: "Head to the nearest beach for swimming, sunbathing, and building sandcastles." },
    { title: "Botanical Garden Visit", description: "Explore a botanical garden and enjoy the vibrant colors and fragrances of flowers in the sunshine." },
    { title: "Outdoor Photography", description: "Grab your camera and capture the beauty of nature in perfect lighting conditions." },
  ],
  Clouds: [
    { title: "Museum Exploration", description: "Visit a local museum or art gallery and expand your cultural horizons." },
    { title: "Cozy Café Visit", description: "Find a charming café, grab a book or journal, and enjoy watching the cloudy world go by." },
    { title: "Moody Photography", description: "Cloudy days provide perfect diffused lighting for stunning photography - especially portraits or landscapes." },
    { title: "Nature Walk", description: "Take a leisurely stroll through a park or forest - cloudy days often reveal colors and textures that bright sunlight can wash out." },
    { title: "Creative Workshop", description: "Try your hand at a new craft or artistic pursuit at home or at a local workshop." },
  ],
  Rain: [
    { title: "Indoor Gardening", description: "Start a small indoor herb garden or repot your existing plants while listening to the rain." },
    { title: "Cozy Reading Nook", description: "Create a comfortable reading spot by a window, grab a warm drink and that book you've been meaning to finish." },
    { title: "Baking Adventure", description: "Try baking something new and fill your home with delicious aromas to contrast the rainy atmosphere outside." },
    { title: "Board Game Marathon", description: "Dust off those board games and invite friends or family for a fun indoor game day." },
    { title: "DIY Home Spa", description: "Create a relaxing spa experience at home with a warm bath, face masks, and soothing music." },
  ],
  Snow: [
    { title: "Snow Sculpture Contest", description: "Challenge friends or family to build the most creative snow sculpture in your yard or local park." },
    { title: "Winter Photography", description: "Capture the serene beauty of freshly fallen snow before it gets disturbed." },
    { title: "Cozy Movie Marathon", description: "Create a nest of blankets and pillows for a winter movie marathon with hot chocolate and snacks." },
    { title: "Snowshoeing Adventure", description: "Try snowshoeing through a winter wonderland for a magical outdoor experience." },
    { title: "Winter Baking", description: "Warm up your home by baking winter treats like cookies or bread." },
  ],
  Thunderstorm: [
    { title: "Indoor Fort Building", description: "Gather blankets and pillows to create a cozy fort for reading or watching movies safely indoors." },
    { title: "Storm Watching", description: "Find a safe, covered location with a good view and witness the power of nature (from a safe distance)." },
    { title: "Creative Writing Session", description: "Let the dramatic weather inspire a creative writing session - perhaps a short story or poem." },
    { title: "Indoor Picnic", description: "Spread a blanket on the floor and enjoy an indoor picnic with your favorite snacks." },
    { title: "Podcast Marathon", description: "Listen to educational or entertaining podcasts while watching the storm pass through." },
  ],
  Drizzle: [
    { title: "Coffee Shop Hopping", description: "Visit different local coffee shops to find your new favorite brew while staying dry." },
    { title: "Bookstore Browsing", description: "Spend a couple of hours exploring a bookstore and discovering new authors and genres." },
    { title: "Gentle Yoga Practice", description: "Practice gentle yoga while listening to the calming sound of light rain." },
    { title: "Plan Your Next Adventure", description: "Use this quiet time to research and plan your next trip or weekend getaway." },
    { title: "Indoor Plant Care", description: "Give some attention to your indoor plants - repot them if needed or just clean their leaves." },
  ],
  Mist: [
    { title: "Mysterious Photography", description: "Capture the ethereal quality of misty landscapes - parks and bodies of water look particularly magical." },
    { title: "Reflective Journaling", description: "The contemplative atmosphere is perfect for journaling your thoughts and setting intentions." },
    { title: "Mindful Walking", description: "Take a slow, mindful walk and appreciate how mist transforms familiar surroundings." },
    { title: "Visit a Greenhouse", description: "Explore a local greenhouse or botanical garden where you can enjoy plants in a controlled environment." },
    { title: "Tea Tasting", description: "Set up a tea tasting session at home with different varieties to match the misty mood outside." },
  ],
  Fog: [
    { title: "Foggy Forest Walk", description: "Experience the magical atmosphere of a forest or park enveloped in fog." },
    { title: "Mystery Novel Reading", description: "Dive into a mystery or thriller novel that matches the atmospheric conditions outside." },
    { title: "Atmospheric Audio Books", description: "Listen to gothic or mystery audiobooks that complement the foggy atmosphere." },
    { title: "Fog Photography", description: "Capture the haunting beauty of familiar places transformed by fog." },
    { title: "Warming Soup Making", description: "Prepare a hearty soup or stew that will provide comfort in the damp conditions." },
  ],
  Haze: [
    { title: "Indoor Air Purifying", description: "Consider running air purifiers and caring for air-purifying plants like snake plants or peace lilies." },
    { title: "Virtual Museum Tours", description: "Explore world-famous museums from home through their virtual tour options." },
    { title: "Home Organization", description: "Use this time indoors to tackle a small organization project that you've been putting off." },
    { title: "Learn a New Skill", description: "Take an online class or tutorial in something you've always wanted to learn." },
    { title: "Indoor Exercise", description: "Follow a home workout routine to stay active while avoiding outdoor air pollution." },
  ],
  Dust: [
    { title: "Indoor Cinema", description: "Create a home cinema experience with your favorite films and homemade treats." },
    { title: "Deep Cleaning Session", description: "Do some deep cleaning to minimize dust inside your home while it's dusty outside." },
    { title: "Digital Photo Organization", description: "Sort through digital photos, create albums, or print special ones for framing." },
    { title: "Indoor Plant Care", description: "Clean your houseplants' leaves and give them extra attention." },
    { title: "Recipe Testing", description: "Try out new recipes you've been saving for a special occasion." },
  ],
  Sand: [
    { title: "Home Spa Day", description: "Create a spa-like experience at home with facials, skin care, and relaxation." },
    { title: "Virtual Desert Tour", description: "Take virtual tours of famous desert landscapes and learn about their ecosystems." },
    { title: "Terrarium Creating", description: "Build a mini desert terrarium with succulents and decorative sand." },
    { title: "Desert-Inspired Art", description: "Create artwork inspired by desert landscapes and colors." },
    { title: "Home Music Festival", description: "Create a playlist of your favorite music and have a private dance party." },
  ],
  Ash: [
    { title: "Indoor Air Quality Management", description: "Run air purifiers, keep windows closed, and follow local health guidelines." },
    { title: "Virtual Socializing", description: "Connect with friends and family through video calls to maintain social connections while staying indoors." },
    { title: "Gentle Indoor Exercise", description: "Practice gentle yoga or stretching to stay active while protecting your respiratory system." },
    { title: "DIY Face Masks", description: "If appropriate, make some DIY face coverings or prepare N95 masks for when you need to go outside." },
    { title: "Community Support", description: "Check in on vulnerable neighbors (remotely) and see if they need assistance." },
  ],
  Squall: [
    { title: "Weather Tracking", description: "Follow the progress of the squall through weather apps and learn about meteorology." },
    { title: "Emergency Preparedness", description: "Use this time to check and update your emergency kit and family emergency plan." },
    { title: "Indoor Camping", description: "Set up a tent indoors for a fun and safe 'camping' experience." },
    { title: "Candle Making", description: "Try making your own candles for future power outages or just for fun." },
    { title: "Battery Check", description: "Ensure all your devices and emergency equipment are fully charged." },
  ],
  Tornado: [
    { title: "Safety First", description: "Move to your designated safe room or shelter area and follow official safety guidelines." },
    { title: "Emergency Radio Listening", description: "Keep a battery-powered weather radio nearby for updates." },
    { title: "Family Check-In", description: "Once safe, check in with family members through text messages (which may work when calls don't)." },
    { title: "Document Preparation", description: "After the threat passes, make sure important documents are organized and stored safely." },
    { title: "Community Aid", description: "When safe to do so, check if neighbors need assistance or support." },
  ],
};


const DEFAULT_ACTIVITIES: Activity[] = [
  { title: "Reading Session", description: "Grab that book you've been meaning to finish and find a cozy spot to read." },
  { title: "Call a Friend", description: "Reach out to someone you haven't spoken to in a while for a catch-up." },
  { title: "Try a New Recipe", description: "Find an interesting recipe online and prepare a special meal." },
  { title: "Learn Something New", description: "Spend an hour learning about a topic you're curious about." },
  { title: "Home Organization", description: "Pick one small area of your home to declutter and organize." },
];


export const getActivitiesByWeather = (condition: WeatherCondition | string): Activity[] => {
  return ACTIVITIES[condition as WeatherCondition] || DEFAULT_ACTIVITIES;
};


export const getRandomActivity = (condition: WeatherCondition | string): Activity => {
  const activities = getActivitiesByWeather(condition);
  const randomIndex = Math.floor(Math.random() * activities.length);
  return activities[randomIndex];
};
