/// <reference types='vitest' />
import { defineConfig, PluginOption } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: "../../node_modules/.vite/apps/host-app",
  server: {
    port: 4200,
    host: "localhost",
  },
  preview: {
    port: 4300,
    host: "localhost",
  },
  plugins: [
    federation({
      name: "host-app",
      manifest: true,
      shared: {
        lit: { singleton: true },
        "lit/": { singleton: true },
        "@mf-example/common-ui/foo": { singleton: true },
        "@mf-example/common-ui/bar": { singleton: true },
      },
      remotes: {
        remote_app: {
          type: "module",
          name: "remote_app",
          entry: "http://localhost:4200/assets/remoteEntry.js",
          entryGlobalName: "remote-app",
          shareScope: "default",
        },
      },
    }),
  ] as PluginOption[],
  build: {
    minify: false,
    outDir: "./dist",
    emptyOutDir: true,
    reportCompressedSize: true,
    target: "chrome89",
    modulePreload: false,
  },
}));
