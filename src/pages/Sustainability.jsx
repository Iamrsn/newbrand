import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Sustainability() {
  return (
    <>
      <Navbar />

      <section className="py-24 text-center">

        <h1 className="text-4xl font-bold">
          Sustainability
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Our sourcing focuses on ethical farming
          and environmentally responsible practices.
        </p>

      </section>

      <Footer />
    </>
  );
}

export default Sustainability;