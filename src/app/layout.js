import './globals.css';
import Navbar from '@/components/Navbar';
import ParticleNetwork from '@/components/ParticleNetwork';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata = {
  title: 'Eric Ho | Electrical Engineering Portfolio',
  description: 'Personal portfolio of Eric Ho, Electrical Engineering student.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <ParticleNetwork />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
