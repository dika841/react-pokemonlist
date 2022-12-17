import { Button, PokemonName, Card, Image, Loading } from "../component/Other";
import { useState, useEffect } from "react";
import Chosen from "../component/Chosen";
import PokemonList from "../component/PokemonList";
import { useParams } from "react-router-dom";

const LocationDetail = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("tentacool");
  const [img, setImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/72.svg"
  );
  const [data, setData] = useState([]);
  const { id } = useParams();
  const url = "https://pokeapi.co/api/v2/location-area";

  const fetchData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(url + `/${id}`);
      const result = await response.json();

      const fetchLocation = async (url) => {
        const responseLocation = await fetch(url);
        const resultLocation = await responseLocation.json();
        return resultLocation;
      };

      const urls = await result.pokemon_encounters.map((el) => el.pokemon.url);
      const fetchArray = urls.map(fetchLocation);
      const pokemonLocation = await Promise.all(fetchArray);
      const pokemons = pokemonLocation.map((el) => ({
        name: el.name,
        imgUrl: el.sprites.other.dream_world.front_default,
      }));

      setData(pokemons);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };

  console.log(data);

  useEffect(() => {
    fetchData(name, img);
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
    </>
  );
};

export default LocationDetail;
