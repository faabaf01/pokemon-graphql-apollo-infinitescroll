import { Box, Flex, Heading, SimpleGrid, Spinner, Stack, Text } from '@chakra-ui/react';
import React from 'react'

interface Props {
  [x: string]: any;
// data: any[];
}

export default function PokemonDetails(data: Props) {
  // const { name, id } = data;  
  // console.log(name)

  return (
    <>
    <Flex flex={1} justify={"center"}>
      <Heading> Moves: </Heading>
      </Flex>
      <SimpleGrid
        minChildWidth="120px"
        spacing="4px"
        paddingBlock={10}
        paddingInline={20}
      >

      {data.data.pokemon.moves.map((p: { move: { name: string }}, i: number) => (
              <Box
                key={i}
                bg="green.200"
                width="120px"
                rounded="10"
                textAlign={"center"}
                p="5px"
              >
                {p.move.name}
              </Box>
            ))}

      
</SimpleGrid>
      </>
  )
}
