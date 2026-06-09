import './globals.css';
import Navbar from '@/components/Navbar';
import ParticleNetwork from '@/components/ParticleNetwork';

export const metadata = {
  title: 'Eric Ho | Electrical Engineering Portfolio',
  description: 'Personal portfolio of Eric Ho, Electrical Engineering student.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ParticleNetwork />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
