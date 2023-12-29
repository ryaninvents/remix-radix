# remix-radix

This repo is intended to demonstrate a way to resolve import issues using [Remix](https://remix.run) with [Radix](https://radix-ui.com). If you follow normal installation steps, you'll get the following error:

```
file:///workspaces/remix-radix/www/build/index.js?t=1703820342005.7925:122
import { Theme } from "@radix-ui/themes";
         ^^^^^
SyntaxError: Named export 'Theme' not found. The requested module '@radix-ui/themes' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '@radix-ui/themes';
const { Theme } = pkg;
```

The approach demonstrated here is to use `pnpm patch` to remove all ESM-related information from the package.json for `@remix-ui/themes`, forcing it to use the more compatible CommonJS version.

## See also
- https://github.com/remix-run/remix/discussions/7494