import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";

const WeatherCard = ({ data }) => {
  const {
    location,
    temperature,
    feelsLike,
    minTemp,
    maxTemp,
    humidity,
    pressure,
    weather,
    windSpeed,
    windDirection,
    cloudiness,
  } = data;
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>WeatherCard</div>
  );
};

export default WeatherCard;
