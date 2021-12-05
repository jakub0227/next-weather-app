import React, { FC } from "react";
import { Container, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { SearchCityInput } from "../components/SearchCityInput";

const WeatherPage: FC = () => {
  return (
    <>
      <Head>
        <title>Weather App - Weather Page</title>
      </Head>
      <Container centerContent>
        <Text
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          fontWeight={500}
          lineHeight={1.2}
          my={12}
        >
          Check weather here:
        </Text>
        <SearchCityInput placeholder="Enter city name you search for" />
      </Container>
    </>
  );
};

export default WeatherPage;
