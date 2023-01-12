import {
  Button,
  PokemonName,
  Card,
  Image,
  Loading,
  LoadButton,
} from "../component/Other";
import { useState, useEffect } from "react";
import Chosen from "../component/Chosen";
import Navbar from "../component/Navbar";
import PokemonList from "../component/PokemonList";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(20);

  const url = "https://pokeapi.co/api/v2/pokemon";
  //start set pikachu as default chosen
  const [name, setName] = useState("PIKACHU");
  const [img, setImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  );
  const [type, setType] = useState("Electic");
  const [attack, setAttack] = useState("55");
  const [deffence, setDeffence] = useState("40");
  // end set pikachu as default chosen

  const loadmore = () => {
    setLimit(limit + 20);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url + `?page=1&limit=${limit}`);
        const result = await response.json();

        const fetchPokemon = async (url) => {
          const responseAbility = await fetch(url);
          const resultAbility = await responseAbility.json();
          return resultAbility;
        };

        const urls = result.results.map((el) => el.url);
        const fetchArray = urls.map(fetchPokemon);
        const pokemonData = await Promise.all(fetchArray);
        console.log(pokemonData);
        const pokemons = pokemonData.map((el) => ({
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
  }, [limit]);

  const changes = (name, img, type, attack, deffence) => {
    setName(name);
    setImg(img);
    setType(type);
    setAttack(attack);
    setDeffence(deffence);
  };

  return (
    <>
      <Navbar />
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
        <LoadButton onClick={loadmore} />
      </div>
    </>
  );
};

export default Page;
