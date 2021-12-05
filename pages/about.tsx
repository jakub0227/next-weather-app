import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { FC } from "react";
import { AccordionItemType } from "../types/models/AccordionItem";

const ACCORDION_DATA: AccordionItemType[] = [
  {
    id: 1,
    title: "About the app:",
    descriptionTxt:
      "App built using Next.js / TypeScript / Chakra-UI with integrated API by `openweathermap.org`",
  },
  {
    id: 2,
    title: "Additional informations:",
    descriptionTxt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const AboutPage: FC = () => {
  return (
    <>
      <Head>
        <title>Weather App - About Page</title>
      </Head>
      <Container centerContent>
        <Box w="100%" p={4}>
          <Accordion defaultIndex={[0]} allowMultiple>
            {ACCORDION_DATA.map((accordion) => {
              return (
                <AccordionItem key={accordion.id}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        {accordion.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {accordion.descriptionTxt}
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
