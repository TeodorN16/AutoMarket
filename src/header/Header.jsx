import { Link } from "react-router";



export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <span className="text-2xl">🚗</span>
          AutoMarket
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/catalog">
              Catalog
            </Link>
          </li>
          <li>
            <Link to="/cars/create">
              Sell a Car
            </Link>
          </li>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}