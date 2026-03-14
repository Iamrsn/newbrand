function Footer() {
  return (
    <footer className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        <div>

          <h3 className="font-bold mb-3">SPICEPURE</h3>

          <p className="text-gray-500 text-sm">
            Connecting the world to the finest botanical
            treasures since 1994.
          </p>

        </div>

        <div>

          <h4 className="font-semibold mb-3">Collections</h4>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>Single Origin</li>
            <li>Blended Spices</li>
            <li>Whole Spices</li>
          </ul>

        </div>

        <div>

          <h4 className="font-semibold mb-3">Company</h4>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>Our Story</li>
            <li>Sourcing Ethos</li>
            <li>Sustainability</li>
          </ul>

        </div>

        <div>

          <h4 className="font-semibold mb-3">Newsletter</h4>

          <div className="flex">

            <input
              placeholder="Email Address"
              className="border px-3 py-2 w-full"
            />

            <button className="bg-black text-white px-4">
              →
            </button>

          </div>

        </div>

      </div>

      <div className="text-center text-xs text-gray-500 mt-12">
        © 2024 SpicePure Premium Spices.
      </div>

    </footer>
  );
}

export default Footer;