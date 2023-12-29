import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import * as Radix from '@radix-ui/themes';
import radixStylesheet from '@radix-ui/themes/styles.css';

export const links = () => [{ rel: 'stylesheet', href: radixStylesheet }];

export default function App() {
  return (
    <Radix.Theme>
      <html>
        <head>
          <link rel="icon" href="data:image/x-icon;base64,AA" />
          <Meta />
          <Links />
        </head>
        <body>
          <h1>Hello world!</h1>
          <Outlet />

          <Scripts />
        </body>
      </html>
    </Radix.Theme>
  );
}
