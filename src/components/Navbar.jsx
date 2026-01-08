export default function Navbar() {
  const linkClass =
    "cursor-pointer px-5 py-2 font-semibold hover:text-blue-600 transition";

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl">InterioSpark</h1>

        <nav className="hidden md:flex">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#portfolio" className={linkClass}>Portfolio</a>
          <a href="#contact" className={linkClass}>Contact</a>
        </nav>
      </div>
    </header>
  );
}
