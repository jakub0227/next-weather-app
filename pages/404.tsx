import React, { FC } from "react";
import { Box, Heading, Text, Button, Flex, Container } from "@chakra-ui/react";
import Link from "next/link";

const Error404Page: FC = () => {
  return (
    <>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundColor="gray.300"
        backgroundBlendMode="multiply"
        backgroundImage={
          "url(https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        justifyContent="center"
        alignItems="center"
      >
        <Container centerContent>
          <Box textAlign="center" py={10} px={6}>
            <Heading
              display="inline-block"
              as="h2"
              size="2xl"
              bgGradient="linear(to-r, teal.400, teal.100)"
              backgroundClip="text"
            >
              Error: 404
            </Heading>
            <Text fontSize="18px" mt={3} mb={2}>
              Page Not Found
            </Text>
            <Text color={"white.400"} mb={6}>
              The page you're looking for does not exist...
            </Text>
            <Link href="/">
              <Button
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="white"
                variant="solid"
                rounded={"full"}
              >
                Let's start again
              </Button>
            </Link>
          </Box>
        </Container>
      </Flex>
    </>
  );
};

export default Error404Page;
