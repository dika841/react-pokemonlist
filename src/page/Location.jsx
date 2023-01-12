import { Button, PokemonName, Card, Loading } from "../component/Other";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonList from "../component/PokemonList";
import Navbar from "../component/Navbar";

const Location = () => {
  const [locationData, setLocationdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://pokeapi.co/api/v2/location-area";

  const getLocation = async () => {
    try {
      setLoading(true);
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
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  };
  console.log(locationData);
  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <div className="p-6">
        {loading && <Loading />}
        <Navbar />
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
      </div>
    </>
  );
};

export default Location;
