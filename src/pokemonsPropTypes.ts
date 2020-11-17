export const EmptyData = {
  total: 0,
  pokemons: [
    {
      stats: {
        attack: 0,
        defense: 0,
      },
      types: [''],
    },
  ],
};

export interface PokemonStatsProps {
  hp?: number;
  attack: number;
  defense: number;
  'special-attack'?: number;
  'special-defense'?: number;
  speed?: number;
}

export interface PokemonProps {
  nameClean?: string;
  abilities?: string[];
  stats: PokemonStatsProps;
  types: string[];
  img?: string;
  name?: string;
  baseExperience?: number;
  height?: number;
  id?: number;
  isDefault?: boolean;
  order?: number;
  weight?: number;
}

export interface PokemonResponse {
  total: number;
  count?: number;
  limit?: number;
  offset?: number;
  pokemons: PokemonProps[];
}
