const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto p-4 w-full flex justify-between z-[9999] absolute top-0">
      <h1 className="text-3xl font-black text-red-600">E-Kantin</h1>
      <a
        href="#"
        className="font-bold text-sm py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300 ease-in-out"
      >
        Masuk
      </a>
    </nav>
  );
};

export default Navbar;
