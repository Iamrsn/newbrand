import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Shop() {

  const products = [
    {name:"Kashmiri Saffron",price:"$45"},
    {name:"Tellicherry Pepper",price:"$18"},
    {name:"Ceylon Cinnamon",price:"$22"},
    {name:"Green Cardamom",price:"$26"},
  ];

  return (
    <>
      <Navbar />

      <section className="py-24">

        <h1 className="text-4xl font-bold text-center">
          Our Collection
        </h1>

        <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto px-6">

          {products.map((p,i)=>(
            <ProductCard key={i} {...p}/>
          ))}

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Shop;