import React, { useState, useEffect } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import axios from "axios";

const WeatherDesign = ({ data }) => {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");

  const toggleFullInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  useEffect(() => {
    fetchSunriseSunset(data.coord.lat, data.coord.lon);
  }, [data.coord.lat, data.coord.lon]);

  const fetchSunriseSunset = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
      );
      const { sunrise, sunset } = response.data.results;

      const currentTime = new Date().getTime();
      const sunriseTime = new Date(sunrise).getTime();
      const sunsetTime = new Date(sunset).getTime();

      setBackground(currentTime, sunriseTime, sunsetTime, data.weather[0].description);
    } catch (error) {
      console.error("Error fetching sunrise and sunset times:", error);
    }
  };

  const setBackground = (currentTime, sunriseTime, sunsetTime, weatherDescription) => {
    let newBackgroundImage = "";

    if (currentTime >= sunriseTime && currentTime < sunsetTime) {
      // Daytime
      if (weatherDescription.includes("clear") && !weatherDescription.includes("cloud")) {
        newBackgroundImage = "url('https://static.bnr.bg/gallery/cr/medium/2ee68680d762e2f17fb75d56a58a9d98.jpg')"; // Sunny weather image
      } else if (weatherDescription.includes("cloud")) {
        newBackgroundImage = "url('https://static.vecteezy.com/system/resources/previews/001/353/506/non_2x/blue-sky-with-cloud-on-cloudy-day-photo.jpg')"; // Cloudy weather image
      }
    } else {
      // Nighttime
      if (weatherDescription.includes("clear") && !weatherDescription.includes("cloud")) {
        newBackgroundImage = "url('https://images.squarespace-cdn.com/content/v1/57c891d41b631b297aa4aa10/1634324143608-9HCUM6OTEX1ZZSRD0AZZ/night-sky-stars.jpg')"; // Clear night image
      } else if (weatherDescription.includes("cloud")) {
        newBackgroundImage = "url('https://t3.ftcdn.net/jpg/03/80/42/46/360_F_380424606_6qJIhGTtcS3j8wZ6QfTdKeEuCLwoC2A9.jpg')"; // Cloudy night image
      }
    }

    setBackgroundImage(newBackgroundImage);
  };

  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={4} style={backgroundStyle}>
      <Text fontSize="2xl">Weather Information</Text>
      <Text>Temperature: {data.main.temp}°C</Text>
      <Text>Feels Like: {data.main.feels_like}°C</Text>
      {showFullInfo && (
        <>
          <Text>Max Temperature: {data.main.temp_max}°C</Text>
          <Text>Min Temperature: {data.main.temp_min}°C</Text>
          <Text>Humidity: {data.main.humidity}%</Text>
          <Text>Pressure: {data.main.pressure} hPa</Text>
          <Text>Weather: {data.weather[0].description}</Text>
          <Text>Wind Speed: {data.wind.speed} m/s</Text>
          <Text>Wind Direction: {data.wind.deg}°</Text>
          <Text>Cloudiness: {data.clouds.all}%</Text>
          <Text>
            Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
          </Text>
          <Text>
            Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
          </Text>
        </>
      )}
      <Button mt={2} colorScheme="teal" onClick={toggleFullInfo}>
        {showFullInfo ? "Show Less" : "Show More"}
      </Button>
    </Box>
  );
};

export default WeatherDesign;
