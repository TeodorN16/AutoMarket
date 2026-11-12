export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-blue-600">
          AutoMarket
        </a>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <a href="#" className="text-blue-600">
              Catalog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Sell a Car
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Login
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Register
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
