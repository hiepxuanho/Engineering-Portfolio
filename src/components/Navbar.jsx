import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link href="/" className="nav-item">
          HOME
        </Link>
        <Link href="/projects" className="nav-item">
          PROJECTS
        </Link>
      </div>
    </nav>
  );
}
