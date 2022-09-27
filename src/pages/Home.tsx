//no need to use usestate and useeffect
import { Box, Button, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import Header from "../components/Header";
import PokemonCards from "../components/PokemonCards";
import { PokemonQuery } from "../hooks/usePokemons";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../hooks/usePokemons";

export default function Home() {
  const PAGE_SIZE = 14;
  const [page, setPage] = useState(0);

  const { data, loading, error } = useQuery<PokemonQuery>(GET_POKEMONS, {
    variables: {
      limit: PAGE_SIZE,
      offset: page * PAGE_SIZE,
    },
  });

  return (
    <Box maxW={"full"} alignContent={"center"} bg="orange.200">
      <Header />

      <Stack align={"center"}>
        <Text
          fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          p={4}
        >
          Welcome to the Home Page! Choose a Pokemon:
        </Text>
      </Stack>

      <HStack justify={"center"}>
        <Button
          colorScheme={"red"}
          disabled={!page}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </Button>

        <Spacer />
        <Box>Page {page + 1}</Box>
        <Spacer />

        <Button colorScheme={"red"} onClick={() => setPage((prev) => prev + 1)}>
          Next
        </Button>
      </HStack>

      {error && <h1>Something went wrong!</h1>}
      {loading ? (
        <h1>LOADING...</h1>
      ) : (
        <PokemonCards pokemons={data!.pokemons.results} />
      )}
    </Box>
  );
}
