import useReveal from "../hooks/useReveal";

export default function About() {
  const [ref, show] = useReveal();

  return (
    <section id="about" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN (Heading like Nicepage) */}
          <h3
            className={`text-3xl md:text-4xl font-bold leading-tight nice-reveal ${
              show ? "nice-show" : ""
            }`}
          >
            Unleash your wildest design dreams with InterioSpark
          </h3>

          {/* RIGHT COLUMN (Text + Button) */}
          <div
            className={`nice-reveal ${
              show ? "nice-show nice-delay-1" : ""
            }`}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <a
              href="#contact"
              className="inline-block px-8 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300"
            >
              Start your Transformations
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
