import { useNavigate } from "react-router-dom";
import logoo from "../img/pokemon.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="mb-8 sticky top-0 bg-white p-2">
      <div className="container flex flex-wrap items-center justify-between mx-auto text-yellow-500 text-xl  font-bold ">
        <img
          className="w-[120px] h-[50px] hover:cursor-pointer"
          src={logoo}
          onClick={() => navigate("/")}
          alt="logo"
        />
        <ul className="flex gap-5 ">
          <li
            className=" hover:text-yellow-400 hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </li>
          <li
            className=" hover:text-orange-300 hover:cursor-pointer"
            onClick={() => navigate("location")}
          >
            Location
          </li>
          <li className=" hover:text-orange-300 hover:cursor-pointer">
            Battles
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
