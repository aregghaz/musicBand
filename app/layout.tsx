import { ReactNode } from 'react';
import './styles/globals.scss';
import Footer from '@components/Common/Footer/Footer';
import ScrollUp from '@uikit/ScrollUp/ScrollUp';
import Nav from '@components/Common/Nav/Nav';
import { navigationItems } from '@utils/index';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body>
        <Nav navItems={navigationItems} />
        <main>{children}</main>

        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
