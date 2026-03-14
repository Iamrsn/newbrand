import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="py-24 max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          Contact Us
        </h1>

        <form className="mt-10 space-y-6">

          <input
            className="border p-3 w-full"
            placeholder="Name"
          />

          <input
            className="border p-3 w-full"
            placeholder="Email"
          />

          <textarea
            className="border p-3 w-full"
            rows="5"
            placeholder="Message"
          />

          <button className="bg-black text-white px-6 py-3">
            Send Message
          </button>

        </form>

      </section>

      <Footer />
    </>
  );
}

export default Contact;