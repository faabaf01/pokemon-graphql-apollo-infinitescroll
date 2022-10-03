import { useQuery } from "@apollo/client";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { GET_POKEMON_LIST, PokemonQuery } from "../graphql/GetPokemonList";
// import { InView } from "react-intersection-observer";
import PokemonCards from "../components/PokemonCards";
import Header from "../components/Header";
import ShowLoading from "../components/ShowLoading";
import ShowError from "../components/ShowError";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const { data, error, fetchMore } = useQuery<PokemonQuery>(GET_POKEMON_LIST, {
    variables: { offset: 0, limit: 6 },
  });

  const loadMore = () => {
    fetchMore({ variables: { offset: data!.pokemons.results.length } });
  };

  console.log(data);

  const currentLength = data ? data.pokemons.results.length : 0;
  const hasMore = data ? data.pokemons.count > currentLength : true;

  return (
    <Box maxW={"full"} alignContent={"center"} bg="orange.200">
      <Header />

      <Stack align={"center"}>
        <Heading
          fontSize={{ base: "13px", sm: "14px", md: "15px", lg: "16px" }}
          fontFamily={"mono"}
          p={4}
        >
          Welcome to the Home Page! Choose a Pokemon:
        </Heading>

        {error && <ShowError />}
      </Stack>

      {/* <div
          id="scrollableDiv"
          style={{
            height: 500,
            width: "100%",
            overflow: "auto",
            display: "flex",
          }}
        > */}
      <InfiniteScroll
        // scrollableTarget="scrollableDiv"
        dataLength={currentLength}
        next={loadMore}
        hasMore={hasMore}
        scrollThreshold={0.7}
        loader={<ShowLoading />}
      >
        {data && <PokemonCards pokemons={data!.pokemons.results} />}
      </InfiniteScroll>
      {/* </div> */}
      {/* {data && <PokemonCards pokemons={data!.pokemons.results} />}
        {data && (
          <InView
            onChange={async (inView) => {
              const currentLength = data ? data.pokemons.results.length : 0;
              if (inView) {
                await fetchMore({
                  variables: {
                    offset: currentLength, //8
                    limit: currentLength * 2, //8x2 =16
                  },
                });
              }
            }}
          />
        )} */}
    </Box>
  );
}
//https://www.npmjs.com/package/react-infinite-scroll-component
//https://github.com/ankeetmaini/react-infinite-scroll-component/issues/121
