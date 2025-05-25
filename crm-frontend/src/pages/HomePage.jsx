import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple demo login check (replace with your real auth)
    if (username === 'admin' && password === 'admin123') {
      // Save user to localStorage to simulate logged in state
      localStorage.setItem('user', JSON.stringify({ username: 'admin', role: 'admin' }));
      navigate('/dashboard'); // Redirect to internal dashboard
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-navyBlue shadow-md">
        <div className="max-w-5xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-white text-2xl font-bold tracking-wide">School CRM</div>
          <ul className="flex gap-4">
            {['Home', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="bg-navyBlue hover:bg-gold text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-8 py-10 flex gap-8">
        {/* News / Updates Section (2/3) */}
        <section className="flex-[2] bg-navyBlue text-white rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6">Latest News & Updates</h1>
          <article className="space-y-4">
            <p>
              Welcome to the School CRM platform! Stay tuned for upcoming features, events,
              and important announcements here.
            </p>
            <p>
              Our goal is to simplify school management with a clean, user-friendly system.
              Enjoy the experience!
            </p>
          </article>
        </section>

        {/* Login Section (1/3) */}
        <aside className="flex-[1] bg-white border border-gray-300 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-navyBlue">Staff Login</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {error && (
              <p className="text-red-500 font-semibold">{error}</p>
            )}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button
              type="submit"
              className="bg-gold hover:bg-navyBlue text-navyBlue hover:text-white font-semibold rounded-md py-2 transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </aside>
      </main>
    </div>
  );
}
