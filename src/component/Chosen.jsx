const Chosen = ({ img, teks }) => {
  return (
    <div
      id="chosen-one"
      className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-indigo-500 text-white mb-8"
    >
      <h2 className="font-bold text-xl mb-2 text-center">Sang Terpilih</h2>
      <img className="my-4 mx-auto h-64" src={img} alt="pokemon" />
      <p class="font-bold text-xl mb-2 text-center">{teks}</p>
    </div>
  );
};

export default Chosen;