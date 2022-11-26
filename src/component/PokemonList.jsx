const PokemonList = ({ children }) => {
  return (
    <div id="PokemonList" className="grid grid-cols-4 gap-4">
      {children}
    </div>
  );
};

export default PokemonList;
