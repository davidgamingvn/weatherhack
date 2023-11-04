import React, { useState } from "react";
import { IconButton, Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Input, Text } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { VStack, Flex, Spacer } from "@chakra-ui/layout";
import { Heading, Box, Image } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [location, setLocation] = useState("");
  const [chosenLocation, setChosenLocation] = useState("");

  const handleSubmit = () => {
    const input = location;
    setChosenLocation(input);
    setLocation("");
  };

  return (
    <div className="App">
      <NavBar />
      <Heading px="50px" py="50px">
        A weather forecast app
      </Heading>
      <Box
        mx="50"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        maxW="600"
      >
        <Input
          placeholder="What location do you want to know the weather of?"
          maxW="500px"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        <Button
          my="3"
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            setChosenLocation("Tempe");
            setLocation("");
          }}
        >
          Use current location
        </Button>
        <Heading>Your Location: {chosenLocation}</Heading>
      </Box>
    </div>
  );
}

export default App;
