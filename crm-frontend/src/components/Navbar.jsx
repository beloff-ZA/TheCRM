import Sidebar from './Sidebar';

export default function Nav() {
  return (
    <>
      {/* Top navigation bar */}
      <nav className="bg-navyBlue text-white px-8 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold tracking-wide">School CRM</div>
        <ul className="flex gap-4">
          <li>
            <a
              href="/dashboard"
              className="hover:bg-gold text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/support"
              className="hover:bg-gold text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300"
            >
              Support Log
            </a>
          </li>
          <li>
            <a
              href="/logout"
              className="hover:bg-gold text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>

      {/* Sidebar component will handle the left-side navigation */}
      <Sidebar />
    </>
  );
}
