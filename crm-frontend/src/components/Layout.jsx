import Navbar from './Navbar';
import DashboardStats from './DashboardStats';
import Sidebar from './Sidebar';


export default function Layout({ children, showStats = false }) {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col">
      {/* Top Navigation */}
      <Nav />

      {/* Main content area */}
      <div className="flex max-w-5xl mx-auto flex-1 px-8 py-6 gap-8">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content + optional Stats */}
        <main className="flex-1">
          {children}
        </main>

        {/* Show Stats only when needed */}
        {showStats && (
          <aside className="w-72">
            <Stats />
          </aside>
        )}
      </div>
    </div>
  );
}
