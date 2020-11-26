import getUrlWithParamsConfig from './getUrlWithParamsConfig'

describe('getUrlWithParamsConfig', () => {
  test('Should get arguments: "getPokemons" & empty object and return object with props: "pathname", "protocol", "host", empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {}
    })
  });

  test('Should get arguments: "getPokemons" & {name: "Pikachu"} and return object with props: "pathname", "protocol", "host", query with {name: "Pikachu"}', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: "Pikachu" });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: "Pikachu" }
    })
  });

  test('Should get arguments: "getPokemon" & {id: 25} and return object with props: "pathname", "protocol", "host", empty query', () => {
    const url = getUrlWithParamsConfig('getPokemon', { id: 25 });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {}
    })
  })
})
