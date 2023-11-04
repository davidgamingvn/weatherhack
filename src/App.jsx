import React from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Text } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { VStack, Flex, Spacer } from "@chakra-ui/layout";
import { Heading, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div className="App">
      <NavBar />

      <Box justifyContent="center" alignItems='center'>
        <Heading  py="50px">
          A weather forecast app powered with OpenAI's ChatGPT
        </Heading>
        <Text>Sun Hacks</Text>
      </Box>
    </div>
  );
}

export default App;
