import { Box, Button, Image, SimpleGrid, Spinner, Stack, Text } from '@chakra-ui/react'
import { Link } from '@tanstack/react-location'
import { useQuery } from '@apollo/client';
import Header from '../components/Header'
import PokemonCards from '../components/PokemonCards'
import { Pokemon, usePokemons } from '../hooks/usePokemons';
import { useEffect, useState } from 'react';


export default function Home() {
  const queryParams = new URLSearchParams(window.location.search);
  const name = queryParams.get("name");

  const {data, loading, error} = usePokemons();

  // const [pokes, setPokes] = useState<Pokemon[]>([]);

  // useEffect(() => {
  //   console.log(data)
  //   if (data) {
  //     return setPokes(data.pokemons.results);
  //   }
  // }, []);

// if (error) return <div>Ooops!</div>
// if (loading) return <div>LOADING....</div>

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

{/* 
        {pokes.map((p:{id: number; name: string; image: string},i: number)=> {
            return (
            <Link key={i} to={`/details?name=${p.name}`}>
            <Text key={i}>{p.name}</Text>
            <Image
                w={{ base: "80px", sm: "90px", lg: "150px" }}
                h={{ base: "80px", sm: "90px", lg: "150px" }}
                objectFit={"fill"}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  p.id
                }.png`}
                alt="pokemon_image"
              />
            </Link>)
          })} */}
    <SimpleGrid
      minChildWidth="160px"
      spacing="40px"
      justifyItems={"center"}
      p={10}
    >
            {/* {pokes.map((p: {name: string, id:number},i: number)=> {
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
          })}  */}
{/* {JSON.stringify(data)} */}
{loading ? (<h1>LOADING...</h1>): (<PokemonCards pokemons={data!.pokemons.results} />)}
        
        </SimpleGrid>


    </Box>
  )
}
