# remix-radix

This repo is intended to demonstrate an issue with using [Remix](https://remix.run) with [Radix](https://radix-ui.com). The current setup throws the following error:

```
file:///workspaces/remix-radix/www/build/index.js?t=1703820342005.7925:122
import { Theme, Card, Flex, Avatar, Box, Text } from "@radix-ui/themes";
                            ^^^^^^
SyntaxError: Named export 'Avatar' not found. The requested module '@radix-ui/themes' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '@radix-ui/themes';
const { Theme, Card, Flex, Avatar, Box, Text } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:132:21)
    at ModuleJob.run (node:internal/modules/esm/module_job:214:5)
    at ModuleLoader.import (node:internal/modules/esm/loader:329:24)
    at importModuleDynamicallyWrapper (node:internal/vm/module:431:15)
    at run (/workspaces/remix-radix/node_modules/.pnpm/@remix-run+serve@2.4.1/node_modules/@remix-run/serve/dist/cli.js:111:15)
```

## See also
- https://github.com/remix-run/remix/discussions/7494