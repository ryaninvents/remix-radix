import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import { Theme, ThemePanel } from '@radix-ui/themes';
import radixStylesheet from '@radix-ui/themes/styles.css';
import { cssBundleHref } from "@remix-run/css-bundle";

export const links = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: radixStylesheet }
];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Theme>
          <Outlet />
          <Scripts />
        </Theme>
      </body>
    </html>
  );
}
