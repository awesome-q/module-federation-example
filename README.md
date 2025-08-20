# MfExample

This repo shows how module-federation/vite does not recognize shared imports when they're imported as relative paths in the shared package itself. This repo illustrates this through the following:

- `packages/common-ui` is a common
- `apps/host-app` is the host module federation app
- `apps/remote-app` is the remote module federation app
- they both share:
  - lit
  - common-ui/foo
  - common-ui/bar
- in common-ui, foo actually imports bar as a relative path `import "./bar";`
- When the app starts up, foo is loaded as is bar, and it's side effects are run (in this case, a customElement is defined globally)
- However, because the plugin didn't recognize that `import "./bar"` is actually the same as `import "@mf-example/common-ui/bar"`, the global share scope is not aware that bar was already imported
- When the button is clicked in the host application, the remote loads. It tries to also import `bar`, which it sees hasn't been imported after checking the share scope and this leads to an error at runtime


## To run

First install:
```
pnpm i
```

Next run these 2 commands:
```
> nx run host-app:preview
> nx run remote-app:preview
```

Finally, navigate to localhost:4300 for the host app, click the button to load the remote, and observe the error in the console
