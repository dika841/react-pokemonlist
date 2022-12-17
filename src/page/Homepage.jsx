import { Button, PokemonName, Card, Image, Loading } from "../component/Other";
import { useState, useEffect } from "react";
import Chosen from "../component/Chosen";
import PokemonList from "../component/PokemonList";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://pokeapi.co/api/v2/pokemon";
  //start set pikachu as default chosen
  const [name, setName] = useState("PIKACHU");
  const [img, setImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  );
  // end set pikachu as default chosen

  //start fetching data pokemon api
  const fetchData = async () => {
    setLoading(true);
    try {
      const displayPerPage = 40;
      const response = await fetch(url + `?limit=${displayPerPage}`);
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
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
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
      {loading && <Loading />}
      <Chosen teks={name} img={img} />
      <PokemonList>
        {data.map((el, i) => (
          <Card key={i}>
            <PokemonName name={el.name} />
            <Image imgUrl={el.imgUrl} />
            <Button
              teks="Pilih Pokemon"
              onClick={() => changes(el.name, el.imgUrl)}
            />
          </Card>
        ))}
      </PokemonList>
      <Button teks="Load" />
    </>
  );
};

export default Page;
