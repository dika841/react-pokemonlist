import { GridLayout, Card } from "./component/Other";
import pokemons from "./helper/pokemon";
import { useState } from "react";
import Chosen from "./component/Chosen";
import PokemonList from "./component/PokemonList";

const Page = () => {
  const [name, setName] = useState("PIKACHU");
  const [img, setImg] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
  );

  const changes = (name, img) => {
    setName(name);
    setImg(img);
  };

  return (
    <>
      <Chosen teks={name} img={img} />
      <PokemonList>
        <GridLayout>
          {pokemons.map((el, i) => (
            <Card
              key={i}
              name={el.name}
              imageUrl={el.imageUrl}
              onClick={() => changes(el.name, el.imageUrl)}
            />
          ))}
        </GridLayout>
      </PokemonList>
    </>
  );
};

export default Page;
