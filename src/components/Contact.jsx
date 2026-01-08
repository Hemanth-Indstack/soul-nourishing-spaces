import useReveal from "../hooks/useReveal";

export default function Contact() {
  const [ref, show] = useReveal();

  return (
    <section id="contact" className="py-24 bg-[#f3f5f7]">
      <div ref={ref} className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-6 nice-reveal ${
            show ? "nice-show" : ""
          }`}
        >
          Contact Us
        </h2>

        <p
          className={`text-center text-gray-600 text-lg mb-14 nice-reveal ${
            show ? "nice-show nice-delay-1" : ""
          }`}
        >
          Any questions or remarks? Just write us a message!
        </p>

        {/* Form */}
        <div
          className={`max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 nice-reveal ${
            show ? "nice-show nice-delay-2" : ""
          }`}
        >
          <form className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="w-full px-5 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-5 py-3 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="inline-block px-10 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-all duration-300"
              >
                Submit
              </button>
            </div>

          </form>
        </div>

        {/* Footer note */}
        <p
          className={`text-center text-gray-600 mt-10 nice-reveal ${
            show ? "nice-show nice-delay-3" : ""
          }`}
        >
          Images from{" "}
          <a
            href="https://www.freepik.com/"
            target="_blank"
            className="underline hover:text-black"
          >
            Freepik
          </a>
        </p>

      </div>
    </section>
  );
}
