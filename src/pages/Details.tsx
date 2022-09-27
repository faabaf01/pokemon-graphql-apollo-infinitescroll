import { Link } from "@tanstack/react-location";
import { useQuery } from '@apollo/client';
import Header from "../components/Header";
import { Button, Spinner, Stack, Text } from "@chakra-ui/react";
import GET_POKEMON_DETAIL from "../graphql/GetPokemonDetail";
import PokemonDetails from "../components/PokemonDetails";

// interface IPokemon {
//   name: string;
//   id: number;
//   types: any[];
//   moves: any[];
// }

export interface PokemonMove {
  move: { name: string };
}

interface PokemonDetailQuery {
  pokemon: {
    moves: PokemonMove[];
  };
}

export default function Details() {
  // const [pokemonData, setPokemonData] = useState<IPokemon>();

  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  const { loading, error, data } = useQuery<PokemonDetailQuery>(
    GET_POKEMON_DETAIL,
    {
      variables: { name: name },
    }
  );

  console.log(data);

  return (
    <Stack bg={"orange.200"}>
      <Header />
      <Link to="/">
        <Button colorScheme={"orange"}>Go back to Home</Button>
      </Link>

      {error && <Text>Something went wrong!</Text>}
      {loading && <Spinner />}
      {data && <PokemonDetails pokeMoves={data!.pokemon.moves} />}
    </Stack>
  );
}
