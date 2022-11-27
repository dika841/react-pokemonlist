import { Button, PokemonName, Card, Image } from "./Other";
import { useState, useEffect } from "react";
import Chosen from "./Chosen";
import PokemonList from "./PokemonList";

const Page = () => {
  const [data, setData] = useState([]);
  //start set pikachu as default chosen
  const [name, setName] = useState("PIKACHU");
  const [img, setImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  );
  // end set pikachu as default chosen

  //start fetching data pokemon api
  const fetchData = async () => {
    const response = await fetch(" https://pokeapi.co/api/v2/pokemon");
    const result = await response.json();

    const fetchPokemon = async (url) => {
      const responseAbility = await fetch(url);
      const resultAbility = await responseAbility.json();
      return resultAbility;
    };

    const urls = result.results.map((el) => el.url);
    const fetchArray = urls.map(fetchPokemon);
    const pokemonData = await Promise.all(fetchArray);

    const pokemons = pokemonData.map((el) => ({
      name: el.name,
      imgUrl: el.sprites.other.dream_world.front_default,
    }));

    setData(pokemons);
  };
  //end fetching data pokemon api

  useEffect(() => {
    fetchData();
  }, [name, img]);

  const changes = (name, img) => {
    setName(name);
    setImg(img);
  };

  return (
    <>
      <Chosen teks={name} img={img} />
      <PokemonList>
        {data.map((el, i) => (
          <Card key={i}>
            <PokemonName name={el.name} />
            <Image imgUrl={el.imgUrl} />
            <Button onClick={() => changes(el.name, el.imgUrl)} />
          </Card>
        ))}
      </PokemonList>
    </>
  );
};

export default Page;
