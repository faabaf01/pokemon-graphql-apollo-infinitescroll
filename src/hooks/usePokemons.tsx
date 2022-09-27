import { useQuery, gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        name
        image
      }
    }
  }
`;

export interface Pokemon {
id: string;
name: string;
image: string;
}
export interface PokemonQuery {
  pokemons: { results: Pokemon[] };
}

// export const usePokemons = () => {
//     const { error, data, loading } = useQuery<PokemonQuery>(GET_POKEMONS, {
//       variables: {
//         limit: 20,
//         offset: 0,
//       },
//     });

//     return {
//         error,
//         data,
//         loading
//     }
// }

