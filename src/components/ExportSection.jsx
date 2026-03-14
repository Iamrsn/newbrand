function ExportSection() {
  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        <div>

          <p className="text-orange-500 text-xs uppercase">
            Commercial Partners
          </p>

          <h2 className="text-4xl font-semibold mt-4">
            Global Export & Institutional Supply
          </h2>

          <p className="text-gray-400 mt-6">
            From Michelin kitchens to large-scale food manufacturers,
            we deliver premium spices worldwide.
          </p>

          <button className="mt-8 bg-white text-black px-6 py-3">
            Request Export Catalog
          </button>

        </div>

        <div className="border border-gray-700 p-8">

          <p className="italic text-gray-300">
            "The consistency in aroma and oil content from
            SpicePure is unparalleled in the global market."
          </p>

          <p className="mt-6 font-semibold">
            Marcello Ricci
          </p>

        </div>

      </div>

    </section>
  );
}

export default ExportSection;