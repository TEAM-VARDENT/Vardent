import './globals.css';
import Navbar from '@/components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Injects the global institutional nav header */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}