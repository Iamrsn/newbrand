import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ExportPage() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-24 text-center">

        <h1 className="text-4xl font-bold">
          Global Export & Institutional Supply
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-400">
          We provide premium spice exports worldwide
          for restaurants and manufacturers.
        </p>

      </section>

      <Footer />
    </>
  );
}

export default ExportPage;