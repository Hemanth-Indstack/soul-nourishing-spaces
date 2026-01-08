import useReveal from "../hooks/useReveal";

export default function Hero() {
  const [ref, show] = useReveal();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://assets.nicepagecdn.com/d2cc3eaa/6249008/images/young-woman-arranging-table-restaurant_23-2147936228.jpg)",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-3xl px-6 text-center text-white"
      >
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 nice-reveal ${
            show ? "nice-show" : ""
          }`}
        >
          Our Projects
        </h1>

        <p
          className={`text-lg md:text-xl mb-10 nice-reveal ${
            show ? "nice-show nice-delay-1" : ""
          }`}
        >
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>

        <a
          href="#contact"
          className={`inline-block px-10 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 nice-reveal ${
            show ? "nice-show nice-delay-2" : ""
          }`}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
