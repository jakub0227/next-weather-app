import React from "react";
import NextLink from "next/link";
import {
  Box,
  useColorModeValue,
  Button,
  VStack,
  IconButton,
  CloseButton,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { DarkModeSwitch } from "../../../../components/DarkModeSwitch";

export const MobileMenu = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <Box display={{ base: "inline-flex", md: "none" }}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        color={useColorModeValue("gray.800", "inherit")}
        variant="ghost"
        icon={<Icon as={HiMenu} />}
        onClick={mobileNav.onOpen}
      />
      <VStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg={bg}
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />
        <NextLink href="/">
          <Button w="full" variant="ghost">
            Home
          </Button>
        </NextLink>
        <NextLink href="/weather">
          <Button w="full" variant="ghost">
            Weather
          </Button>
        </NextLink>
        <NextLink href="/about">
          <Button w="full" variant="ghost">
            About
          </Button>
        </NextLink>
        <DarkModeSwitch />
      </VStack>
    </Box>
  );
};
