function Hero() {
  return (
    <section className="bg-gray-100 py-28">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

        <div>

          <p className="text-orange-500 text-xs uppercase tracking-widest">
            Premium Global Origin
          </p>

          <h1 className="text-6xl font-light mt-4 leading-tight">
            The Purest
            <span className="block font-semibold">
              Essence of the Earth
            </span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-md">
            Sourced directly from untouched landscapes.
            We deliver single-origin spices defined by potency,
            purity and profound aroma.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-orange-600 text-white px-6 py-3">
              Explore Collection
            </button>

            <button className="border px-6 py-3">
              Our Process
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1604908177420-bf54f7c7c3c1"
            alt="spice"
            className="w-[420px] shadow-xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;