import React from "react";
import {
  chakra,
  Flex,
  useColorModeValue,
  HStack,
  Button,
} from "@chakra-ui/react";
import { DarkModeSwitch } from "../../../components/DarkModeSwitch";
import NextLink from "next/link";
import { MobileMenu } from "./MobileMenu/MobileMenu";

export default function App() {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <chakra.header
        position="fixed"
        bg={bg}
        w="full"
        top="0"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="lg"
        zIndex="popover"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <NextLink href="/">
              <chakra.h1
                color="teal.500"
                fontSize="xl"
                fontWeight="medium"
                ml="2"
                cursor="pointer"
              >
                Weather-APP
              </chakra.h1>
            </NextLink>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="teal.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <NextLink href="/">
                <Button variant="ghost">Home</Button>
              </NextLink>
              <NextLink href="/weather">
                <Button variant="ghost">Weather</Button>
              </NextLink>
              <NextLink href="/about">
                <Button variant="ghost">About</Button>
              </NextLink>
              <DarkModeSwitch />
            </HStack>
            <MobileMenu />
          </HStack>
        </Flex>
      </chakra.header>
    </>
  );
}
