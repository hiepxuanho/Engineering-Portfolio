'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  if (pathname?.startsWith('/studio')) {
    return null;
  }
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link href="/" className="nav-item">
          HOME
        </Link>
        <Link href="/projects" className="nav-item">
          PROJECTS
        </Link>
        <Link href="/homelab" className="nav-item">
          HOMELAB
        </Link>
      </div>
      <div className="theme-toggle-wrapper">
        <ThemeToggle />
      </div>
    </nav>
  );
}
