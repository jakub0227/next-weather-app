import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { FC } from "react";
import { API_KEY } from "../../API/API";
import { CityWeatherType } from "../../types/models/CityWeatherType";
import {
  Box,
  SimpleGrid,
  useBreakpointValue,
  Text,
  Image,
  Button,
  Container,
  Stack,
  AspectRatio,
  VStack,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import Link from "next/link";
import { SearchCityInput } from "../../components/SearchCityInput";
import { CityWeatherDailyType } from "../../types/models/CityWeatherDailyType";
import moment from "moment-timezone";

interface DetailsProps {
  city: CityWeatherType;
  dailyForecast: CityWeatherDailyType;
}

const DetailsPage: FC<DetailsProps> = (props) => {
  return (
    <>
      <Head>
        <title>Weather App - Weather Details of {props.city.name}</title>
      </Head>
      <Container>
        <Box my={20} p={10} width="100%">
          <Text
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            fontWeight={600}
            lineHeight={1.2}
            my={5}
          >
            {props.city.name} | {props.city.sys.country}
          </Text>
          <Text
            fontSize={useBreakpointValue({ base: "xl", md: "2xl" })}
            fontWeight={400}
            lineHeight={1}
            my={12}
          >
            Min: {props.city.main.temp_min.toFixed(0)} °C / Max:{" "}
            {props.city.main.temp_max.toFixed(0)} °C
          </Text>
          <AspectRatio maxW="550px" ratio={4 / 3}>
            <iframe
              src={`https://www.google.com/maps?q=${props.city.coord.lat},${props.city.coord.lon}&output=embed&z=8`}              
              style={{
                border: "2px solid teal",
                borderRadius: "15px",
              }}
              loading="lazy"
              allowFullScreen
            />
          </AspectRatio>
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <Box p={5} border="solid 2px teal" borderRadius={25} my={5}>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="2xl"
                  >
                    Weather now:
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Box boxSize="fit-content">
                    <Image
                      src={`https://openweathermap.org/img/wn/${props.city.weather[0].icon}@2x.png`}
                      alt="Weather Icon"
                    />
                  </Box>
                  <SimpleGrid columns={{ base: 2, md: 2 }} spacing={4}>
                    <Text my={2}>
                      Temperature now: {props.city.main.temp.toFixed(0)} °C
                    </Text>
                    <Text my={2}>
                      Real feeling: {props.city.main.feels_like.toFixed(0)} °C
                    </Text>
                    <Text my={2}>
                      Pressure: {props.city.main.pressure} hPa{" "}
                    </Text>
                    <Text my={2}>Humidity: {props.city.main.humidity} %</Text>
                  </SimpleGrid>
                </AccordionPanel>
              </Box>
            </AccordionItem>
            <AccordionItem>
              <Box p={5} border="solid 2px teal" borderRadius={25} my={5}>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="2xl"
                  >
                    Daily forecast:
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    align="stretch"
                  >
                    {props.dailyForecast.daily.map((dailyWeather) => (
                      <Box
                        flex="1"
                        textAlign="left"
                        key={dailyWeather.dt}
                        my={5}
                      >
                        <Text fontWeight="semibold" fontSize="lg">
                          {moment
                            .unix(dailyWeather.dt)
                            .tz(props.dailyForecast.timezone)
                            .format(`${"dddd"} (DD-MM-YYYY)`)}
                          :
                        </Text>
                        <Text>
                          Max Temp: {dailyWeather.temp.max.toFixed(0)}°C
                        </Text>
                        <Text>
                          Min Temp: {dailyWeather.temp.min.toFixed(0)}°C
                        </Text>
                        <Text>
                          Forecast: {dailyWeather.weather[0].description}
                        </Text>
                        <Image
                          src={`https://openweathermap.org/img/wn/${dailyWeather.weather[0].icon}@2x.png`}
                          alt={`https://openweathermap.org/img/wn/${dailyWeather.weather[0].description}`}
                        />
                      </Box>
                    ))}
                  </VStack>
                </AccordionPanel>
              </Box>
            </AccordionItem>
          </Accordion>
          <SearchCityInput placeholder="Try another location" />
          <Stack direction={"row"} align={"center"} spacing={6}>
            <Link href="/">
              <Button my={6} rounded={"full"}>
                Home
              </Button>
            </Link>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<DetailsProps> = async (
  ctx
) => {
  try {
    const resCity = (
      await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?id=${ctx.query.id}&units=metric&APPID=${API_KEY}`
      )
    ).data as CityWeatherType;

    const resDailyWeather = (
      await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${resCity.coord.lat}&lon=${resCity.coord.lon}&exclude=minutely&units=metric&APPID=${API_KEY}`
      )
    ).data as CityWeatherDailyType;
    return {
      props: {
        city: resCity,
        dailyForecast: resDailyWeather,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

export default DetailsPage;
