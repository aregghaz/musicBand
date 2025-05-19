import { ReactNode } from 'react';
import './styles/globals.scss';
import Footer from '@components/Common/Footer/Footer';
import ScrollUp from '@uikit/ScrollUp/ScrollUp';
import Nav from '@components/Common/Nav/Nav';
import { BASE_URL, navigationItems } from '@utils/index';

async function getData() {
  const res = await fetch(`${BASE_URL}/home-sections-manage`, {
    cache: 'no-store',
  });
  return res.json();
}

export default async function Layout({ children }: { children: ReactNode }) {
  const permissions = await getData();
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body>
        <Nav navItems={navigationItems} permissions={permissions.data} />
        <main>{children}</main>

        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
