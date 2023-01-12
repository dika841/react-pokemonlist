import background from "../img/bg.svg";

const RegisterForm = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="w-full h-full bg-no-repeat bg-cover bg-top bg-fixed"
      >
        <div className="h-screen w-full flex items-center justify-center">
          <section
            id="login"
            className="bg-white max-w-md max-h-md flex items-center py-10 px-3 justify-center rounded-lg flex-col"
          >
            <h1 className="font-bold text-center text-slate-500 text-2xl">
              Register
            </h1>
            <form>
              <input
                className="w-60 h-10 bg-slate-100 flex justify-center mx-4 my-5 p-4 outline-none rounded-md border-2 border-inherit"
                type="teks"
                name="username"
                placeholder="Username"
              />
              <input
                className="w-60 h-10 bg-slate-100 flex justify-center mx-4 my-5 p-4 outline-none rounded-md border-2 border-inherit"
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                className="w-60 h-10 bg-slate-100 flex justify-center mx-4 my-5 p-4 outline-none rounded-md border-2 border-inherit"
                type="password"
                name="password"
                placeholder="Confirm Password"
              />
              <button className="text-white text-center font-bold bg-blue-400 w-60 h-8 rounded-md ml-4">
                Register
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
