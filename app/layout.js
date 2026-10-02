import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AOSProvider from '@/components/ui/AOSProvider';
import './globals.css';

export const metadata = {
  title: 'Planfit - AI Personal Training',
  description: 'Get your personalized AI workout plan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>
          <Navbar />
          <main>{children}</main>
          {/* <Footer /> */}
        </AOSProvider>
      </body>
    </html>
  );
}