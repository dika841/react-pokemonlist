import { Button, PokemonName, Card } from "../component/Other";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonList from "../component/PokemonList";

const Location = () => {
  const [locationData, setLocationdata] = useState([]);

  const url = "https://pokeapi.co/api/v2/location-area";

  const getLocation = async () => {
    const response = await fetch(url);
    const result = await response.json();

    const fetchLocation = async (url) => {
      const responseLocation = await fetch(url);
      const resultLocation = await responseLocation.json();
      return resultLocation;
    };

    const urls = result.results.map((el) => el.url);
    const fetchArray = urls.map(fetchLocation);
    const pokemonLocation = await Promise.all(fetchArray);

    setLocationdata(pokemonLocation);
  };
  console.log(locationData);
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <PokemonList>
        {locationData.map((el, i) => (
          <Card key={i}>
            <PokemonName name={el.name} />
            <Link to={`/location/${el.id}`}>
              <Button teks="Pilih Lokasi" />
            </Link>
          </Card>
        ))}
      </PokemonList>
    </>
  );
};

export default Location;
