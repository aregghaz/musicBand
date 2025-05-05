import { ReactNode } from 'react';
import './styles/globals.scss';
import Footer from '@components/Common/Footer/Footer';
import HeroSection from '@components/HomePageComponents/HeroSection/HeroSection';
import ScrollUp from '@uikit/ScrollUp/ScrollUp';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body>
        {children}
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
