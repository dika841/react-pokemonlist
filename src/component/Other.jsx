const Button = ({ onClick }) => {
  return (
    <button
      className="rounded bg-indigo-500 text-white p-4 w-full"
      onClick={onClick}
    >
      Pilih pokemon
    </button>
  );
};

const PokemonName = ({ name }) => {
  return <p className="font-bol text-xl mb-2 text-center">{name}</p>;
};

const Image = ({ imgUrl }) => {
  return <img src={imgUrl} className="my-4 mx-auto h-32" alt="pokemon" />;
};

const Card = ({ children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      {children}
    </div>
  );
};

export { Button, PokemonName, Card, Image };
