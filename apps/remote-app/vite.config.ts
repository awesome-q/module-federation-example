/// <reference types='vitest' />
import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import { PluginOption } from "vite";

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/remote-app",
  server: {
    port: 4100,
    host: "localhost",
  },
  preview: {
    port: 4200,
    host: "localhost",
  },
  plugins: [
    federation({
      name: "remote-app",
      filename: "assets/remoteEntry.js",
      exposes: {
        "./Remote": "./src/index.ts",
      },
      shared: {
        lit: { singleton: true },
        "lit/": { singleton: true },
        "@mf-example/common-ui/foo": { singleton: true },
        "@mf-example/common-ui/bar": { singleton: true },
      },
    }) as PluginOption[],
  ],
  build: {
    minify: false,
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    target: "chrome89",
    modulePreload: false,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
