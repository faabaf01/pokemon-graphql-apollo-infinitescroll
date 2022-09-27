import { Box, Button, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Link } from "@tanstack/react-location";
import { Pokemon, usePokemons } from "../hooks/usePokemons";


// interface Kids {
//   name: string;
//   id: number;
// }

interface Props {
  pokemons: Pokemon[]
}

export default function PokemonCards({pokemons}: Props) {
  // const { name, id } = data;
console.log(pokemons);
// console.log(error);
// console.log(loading);


  return (

    <SimpleGrid
    minChildWidth="160px"
    spacing="40px"
    justifyItems={"center"}
    p={10}
  >
          {pokemons.map((p: Pokemon, i: number)=> {
          return (
          <Link key={i} to={`/details?name=${p.name}`}>
            <Box bg={"honeydew"} rounded={10} >
            <Box
            maxW={"300px"}
            height="200px"
            p={4}
            textTransform="capitalize"
            fontWeight={"bold"}
          >
            {p.id}<br />{p.name}
            
            <Image
              w={{ base: "80px", sm: "90px", lg: "150px" }}
              h={{ base: "80px", sm: "90px", lg: "150px" }}
              objectFit={"fill"}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                p.id
              }.png`}
              alt="pokemon_image"
            />

            </Box>

            </Box>
          </Link>)
        })} 


      </SimpleGrid>


  );
}

