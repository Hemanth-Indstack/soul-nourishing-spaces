import useReveal from "../hooks/useReveal";

export default function CTA() {
  const [ref, show] = useReveal();

  return (
    <section className="py-24 bg-[#f3f5f7]">
      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className="bg-white rounded-2xl shadow-lg px-8 py-14 md:px-16 text-center"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 nice-reveal ${
              show ? "nice-show" : ""
            }`}
          >
            Ready to Redefine Your Space?
          </h2>

          <p
            className={`text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-10 nice-reveal ${
              show ? "nice-show nice-delay-1" : ""
            }`}
          >
            All of our design concepts are aimed at giving interiors a soul.
            People must be able to feel and experience spaces – and the interior
            design must make a decisive contribution to this.
          </p>

          <a
            href="#contact"
            className={`inline-block px-10 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300 nice-reveal ${
              show ? "nice-show nice-delay-2" : ""
            }`}
          >
            Start your Transformations
          </a>
        </div>
      </div>
    </section>
  );
}
