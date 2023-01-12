import { Button, PokemonName, Card, Image, Loading } from "../component/Other";
import { useState, useEffect } from "react";
import Chosen from "../component/Chosen";
import PokemonList from "../component/PokemonList";
import { useParams } from "react-router-dom";

const LocationDetail = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("PIKACHU");
  const [img, setImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  );
  const [type, setType] = useState("Electric");
  const [attack, setAttack] = useState("55");
  const [deffence, setDeffence] = useState("40");
  const [data, setData] = useState([]);
  const { id } = useParams();
  const url = "https://pokeapi.co/api/v2/location-area";

  console.log(data);

  useEffect(() => {
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

        const urls = await result.pokemon_encounters.map(
          (el) => el.pokemon.url
        );
        const fetchArray = urls.map(fetchLocation);
        const pokemonLocation = await Promise.all(fetchArray);
        const pokemons = pokemonLocation.map((el) => ({
          name: el.name,
          imgUrl: el.sprites.other.dream_world.front_default,
          base: el.stats.map((stat) => stat.base_stat),
          type: el.types.map((tipe) => tipe.type.name),
        }));

        setData(pokemons);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const changes = (name, img, type, attack, deffence) => {
    setName(name);
    setImg(img);
    setType(type);
    setAttack(attack);
    setDeffence(deffence);
  };

  return (
    <>
      <div className="p-6">
        {loading && <Loading />}
        <Chosen
          name={name}
          img={img}
          type={type}
          attack={attack}
          deffence={deffence}
        />
        <PokemonList>
          {data.map((el, i) => (
            <Card key={i}>
              <PokemonName name={el.name} />
              <Image imgUrl={el.imgUrl} />
              <Button
                teks="Pilih Pokemon"
                onClick={() =>
                  changes(
                    el.name,
                    el.imgUrl,
                    el.type[0],
                    el.base[1],
                    el.base[2]
                  )
                }
              />
            </Card>
          ))}
        </PokemonList>
      </div>
    </>
  );
};

export default LocationDetail;
