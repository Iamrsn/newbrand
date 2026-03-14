import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Heritage() {
  return (
    <>
      <Navbar />

      <section className="py-24 text-center">

        <h1 className="text-4xl font-bold">
          Our Heritage
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-600">
          For generations we have sourced the finest spices
          directly from farms across the globe ensuring purity
          and exceptional flavor.
        </p>

      </section>

      <Footer />
    </>
  );
}

export default Heritage;