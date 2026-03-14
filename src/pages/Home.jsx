import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import StandardSection from "../components/StandardSection";
import CollectionSection from "../components/CollectionSection";
import ExportSection from "../components/ExportSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StandardSection />
      <CollectionSection />
      <ExportSection />
      <Footer />
    </>
  );
}

export default Home;