import { Flex, useColorMode } from "@chakra-ui/react";
import React, { FC } from "react";
import Navigation from "./Navigation/Navigation";

export const Layout: FC = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };

  return (
    <Flex
      minHeight="100vh"
      direction="column"
      alignItems="center"
      justifyContent="center"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
    >
      <Navigation />
      {props.children}
    </Flex>
  );
};
