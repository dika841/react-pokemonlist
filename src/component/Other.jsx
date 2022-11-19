const Button = ({ onClick }) => {
  return (
    <button
      class="rounded bg-indigo-500 text-white p-4 w-full"
      onClick={onClick}
    >
      Pilih pokemon
    </button>
  );
};

const GridLayout = ({ children }) => {
  return <div className="grid grid-cols-4 gap-4">{children}</div>;
};

const Card = ({ name, imageUrl, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <p class="font-bold text-xl mb-2 text-center">{name}</p>
      <img src={imageUrl} class="my-4 mx-auto h-32" alt="pokemon" />
      <Button onClick={onClick} />
    </div>
  );
};

export { Button, GridLayout, Card };
