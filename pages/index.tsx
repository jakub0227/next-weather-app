import React, { FC } from "react";
import {
  Button,  
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

const IndexPage:FC = () => {
  return (
    <>
      <Head>
        <title>Weather App - Home Page</title>
      </Head>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1608671611568-895aaf8ec972?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Welcome to Weather-APP
            </Text>
            <Stack direction={"row"}>
              <Link href="/weather">
                <Button
                  colorScheme="teal"
                  rounded={"full"}
                  color={"white"}
                  bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                >
                  Check weather
                </Button>
              </Link>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  );
};

export default IndexPage;
