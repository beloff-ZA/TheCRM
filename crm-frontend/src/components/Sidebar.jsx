// components/Sidebar.jsx
import { useState } from 'react';

export default function Sidebar() {
  // You can replace this with props or context later
  const [userRole] = useState('admin'); // e.g., 'admin', 'teacher', 'it', etc.

  const baseLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Students', href: '/students' },
    { name: 'Parents', href: '/parents' },
  ];

  const adminLinks = [
    { name: 'Staff', href: '/staffpage' },
    { name: 'Finance', href: '/finance' },
    { name: 'Maintenance', href: '/maintenance' },
    { name: 'IT Support', href: '/itsupport' },
  ];

  const linksToRender = [...baseLinks, ...(userRole === 'admin' ? adminLinks : [])];

  return (
    <aside className="w-64 min-h-screen bg-navyBlue text-white px-6 py-8 shadow-md">
      <nav className="flex flex-col gap-4">
        {linksToRender.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="bg-navyBlue hover:bg-gold text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}
