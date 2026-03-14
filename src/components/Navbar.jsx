import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-white border-b py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo Redirects to Home */}
        <Link to="/" className="font-bold text-lg">
          SPICEPURE
        </Link>

        <nav className="flex gap-8 text-gray-600 text-sm">
          <Link to="/heritage">Heritage</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/export">Export</Link>
          <Link to="/sustainability">Sustainability</Link>
        </nav>

        <Link
          to="/contact"
          className="bg-black text-white px-4 py-2 text-sm"
        >
          Enquire
        </Link>

      </div>
    </header>
  );
}

export default Navbar;