import React, { FC, useEffect, useState } from "react";
import {
  Container,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  List,
  ListItem,
  ListIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import { FaCity } from "react-icons/fa";
import cities from "../lib/city.list.min.json";
import { HiSearch } from "react-icons/hi";
import { CitiesList } from "../types/models/CityListItemType";
import Link from "next/link";
import { Router } from "next/router";

interface SearchCityInputProps {
  placeholder: string;
}

export const SearchCityInput: FC<SearchCityInputProps> = (props) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<CitiesList>([]);

  useEffect(() => {
    const clearSearch = () => setSearch("");
    Router.events.on("routeChangeComplete", clearSearch);
    return () => {
      Router.events.off("routeChangeComplete", clearSearch);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    const { value } = e.target;
    setSearch(value);
    let matchingCities = [];

    if (value.length > 3) {
      for (let city of cities as CitiesList) {
        if (matchingCities.length >= 5) {
          break;
        }
        const match = city.name.toLowerCase().startsWith(value.toLowerCase());
        if (match) {
          const cityData = {
            ...city,
            queryId: city.id,
          };
          matchingCities.push(cityData);
          continue;
        }
      }
      return setResults(matchingCities);
    }
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon color="gray.300" as={HiSearch} />}
        />
        <Input
          type="text"
          colorScheme="teal"
          color="teal.500"
          value={search}
          onChange={handleInputChange}
          placeholder={props.placeholder}
          size="lg"
          variant="outline"
        />
      </InputGroup>
      {search.length > 3 && (
        <Container maxW="container.md" centerContent>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            my={6}
            p={6}
          >
            <List>
              {results.length > 0 ? (
                results.map((city) => {
                  return (
                    <Link key={city.id} href={`/details/${city.id}`}>
                      <ListItem my={4} mx={4}>
                        <Button colorScheme="teal" variant="link">
                          <ListIcon as={FaCity} color="green.500" />
                          {city.name} {city.state ? `, ${city.state}` : ""} (
                          {city.country})
                        </Button>
                      </ListItem>
                    </Link>
                  );
                })
              ) : (
                <ListItem color="red" fontWeight="semibold">
                  Location not found!
                </ListItem>
              )}
            </List>
          </Box>
        </Container>
      )}
    </>
  );
};
