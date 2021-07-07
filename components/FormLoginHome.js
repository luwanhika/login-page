function FormLoginHome() {
  const registerUser = async (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={registerUser} className="w-full mt-8">
      <input
        placeholder="Digite seu e-mail"
        className="flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
        type="email"
        name="e-mail"
        id="" 
      />
      <input
        placeholder="Digite sua senha"
        className=" mt-4 flex-1 w-full text-gray-700 bg-gray-200 rounded-md hover:bg-white border border-gray-200 outline-none focus:bg-white py-2 px-4"
        type="password"
        name="password"
        id="" 
      />
      <button type="submit" className="mt-4 btn btn-success">
        Entrar
      </button>
    </form> 
  );
}
export default FormLoginHome;