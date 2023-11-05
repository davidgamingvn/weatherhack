import React, { useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

const WeatherDesign = ({ data }) => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const toggleFullInfo = () => {
    setShowFullInfo(!showFullInfo);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={4}>
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
      <Button
        mt={2}
        colorScheme="teal"
        onClick={toggleFullInfo}
      >
        {showFullInfo ? "Show Less" : "Show More"}
      </Button>
    </Box>
  );
};

export default WeatherDesign;

