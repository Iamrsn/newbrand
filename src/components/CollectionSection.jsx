import ProductCard from "./ProductCard";

function CollectionSection() {

  const products = [
    {
      name:"Kashmiri Saffron",
      price:"$45",
      image:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2"
    },
    {
      name:"Tellicherry Pepper",
      price:"$18",
      image:"https://images.unsplash.com/photo-1604908176997-431e8c36c4d0"
    },
    {
      name:"True Ceylon Quills",
      price:"$22",
      image:"https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
    },
    {
      name:"Green Cardamom",
      price:"$26",
      image:"https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e"
    }
  ];

  return (
    <section className="bg-gray-100 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          The Master Collection
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}

        </div>

      </div>

    </section>
  );
}

export default CollectionSection;