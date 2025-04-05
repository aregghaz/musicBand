import { ReactNode } from 'react';
import './styles/globals.scss';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}
