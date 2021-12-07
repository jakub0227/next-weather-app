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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import { DarkModeSwitch } from "../../../../components/DarkModeSwitch";

export const MobileMenu = () => {
  const bg = useColorModeValue("white", "gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box display={{ base: "inline-flex", md: "none" }}>
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Open menu"
          fontSize="20px"
          color={useColorModeValue("gray.800", "inherit")}
          variant="ghost"
          icon={<Icon as={HiMenu} />}
          onClick={onOpen}
        />
        <Drawer onClose={onClose} isOpen={isOpen} placement="top" size="xs">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>Menu</DrawerHeader>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              display={isOpen ? "flex" : "none"}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <DrawerBody>
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
              </DrawerBody>
              <DrawerFooter>
                <HStack spacing={8} width="100%">
                  <CloseButton
                    aria-label="Close menu"
                    onClick={onClose}
                    color="teal.600"
                  />
                  <DarkModeSwitch />
                </HStack>
              </DrawerFooter>
            </VStack>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};
