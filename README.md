**IMPORTANT NOTE: We're starting to migrate contents of this repo to the [devcontainers org](https://github.com/devcontainers), as part of the work on the [open dev container specification](https://containers.dev).**

**We'll now be publishing the `typescript-node` image from [devcontainers/images/src/typescript-node](https://github.com/devcontainers/images/tree/main/src/typescript-node).**

**For more details, you can review the [announcement issue](https://github.com/microsoft/vscode-dev-containers/issues/1589).**

# Node.js & TypeScript

## Summary

*Develop Node.js based applications in TypeScript. Includes Node.js, eslint, nvm, yarn, and the TypeScript compiler.*

| Metadata | Value |  
|----------|-------|
| *Contributors* | The VS Code Team |
| *Categories* | Core, Languages |
| *Definition type* | Dockerfile |
| *Published image* | mcr.microsoft.com/vscode/devcontainers/typescript-node |
| *Available image variants* | 12 / 12-buster, 14 / 14-buster, 16 / 16-buster, 12-bullseye, 14-bullseye, 16-bullseye ([full list](https://mcr.microsoft.com/v2/vscode/devcontainers/javascript-node/tags/list)) |
| *Published image architecture(s)* | x86-64, arm64/aarch64 for `bullseye` variants |
| *Works in Codespaces* | Yes |
| *Container host OS support* | Linux, macOS, Windows |
| *Container OS* | Debian |
| *Languages, platforms* | Node.js, TypeScript |

See **[history](history)** for information on the contents of published images.

## Using this definition

While the definition itself works unmodified, you can select the version of Node.js the container uses by updating the `VARIANT` arg in the included `devcontainer.json` (and rebuilding if you've already created the container).

```jsonc
// Or you can use 14-bullseye or 14-buster if you want to pin to an OS version
"args": { "VARIANT": "14" }
```

You can also directly reference pre-built versions of `.devcontainer/base.Dockerfile` by using the `image` property in `.devcontainer/devcontainer.json` or updating the `FROM` statement in your own `Dockerfile` with one of the following:

- `mcr.microsoft.com/vscode/devcontainers/typescript-node` (latest)
- `mcr.microsoft.com/vscode/devcontainers/typescript-node:16` (or `16-bullseye`, `16-buster` to pin to an OS version)
- `mcr.microsoft.com/vscode/devcontainers/typescript-node:14` (or `14-bullseye`, `14-buster` to pin to an OS version)
- `mcr.microsoft.com/vscode/devcontainers/typescript-node:12` (or `12-bullseye`, `12-buster` to pin to an OS version)

You can decide how often you want updates by referencing a [semantic version](https://semver.org/) of each image. For example:

- `mcr.microsoft.com/vscode/devcontainers/typescript-node:0-14` (or `0-14-bullseye`, `0-14-buster`)
- `mcr.microsoft.com/vscode/devcontainers/typescript-node:0.204-14` (or `0.203-14-bullseye`, `0.203-14-buster`)
- `mcr.microsoft.com/vscode/devcontainers/typescript-node:0.204.0-14` (or `0.203.0-14-bullseye`, `0.203.0-14-buster`)

However, we only do security patching on the latest [non-breaking, in support](https://github.com/microsoft/vscode-dev-containers/issues/532) versions of images (e.g. `0-14`). You may want to run `apt-get update && apt-get upgrade` in your Dockerfile if you lock to a more specific version to at least pick up OS security updates.

See [history](history) for information on the contents of each version and [here for a complete list of available tags](https://mcr.microsoft.com/v2/vscode/devcontainers/typescript-node/tags/list).

Alternatively, you can use the contents of the `base.Dockerfile` or the [JavaScript and Node.js `base.Dockerfile`](../javascript-node/.devcontainer/base.Dockerfile) to fully customize your container's contents.

Beyond TypeScript, Node.js, and `git`, this image / `Dockerfile` includes `eslint`, `zsh`, [Oh My Zsh!](https://ohmyz.sh/), a non-root `node` user with `sudo` access, and a set of common dependencies for development. Since `tslint` is [now fully deprecated](https://github.com/palantir/tslint/issues/4534), the definition includes `tslint-to-eslint-config` globally to help you migrate.

Note that, while `eslint`and `typescript` are installed globally for convenance, [as of ESLint 6](https://eslint.org/docs/user-guide/migrating-to-6.0.0#-plugins-and-shareable-configs-are-no-longer-affected-by-eslints-location), you will need to install the following packages locally to lint TypeScript code: `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint`, `typescript`.

### Adding the definition to a project or codespace

1. If this is your first time using a development container, please see getting started information on [setting up](https://aka.ms/vscode-remote/containers/getting-started) Remote-Containers or [creating a codespace](https://aka.ms/ghcs-open-codespace) using GitHub Codespaces.

2. To use the pre-built image:
   1. Start VS Code and open your project folder or connect to a codespace.
   2. Press <kbd>F1</kbd> select and **Add Development Container Configuration Files...** command for **Remote-Containers** or **Codespaces**.
   3. Select this definition. You may also need to select **Show All Definitions...** for it to appear.

3. To build a custom version of the image instead:
   1. Clone this repository locally.
   2. Start VS Code and open your project folder or connect to a codespace.
   3. Use your local operating system's file explorer to drag-and-drop the locally cloned copy of the `.devcontainer` folder for this definition into the VS Code file explorer for your opened project or codespace.
   4. Update `.devcontainer/devcontainer.json` to reference `"dockerfile": "base.Dockerfile"`.

4. After following step 2 or 3, the contents of the `.devcontainer` folder in your project can be adapted to meet your needs.

5. Finally, press <kbd>F1</kbd> and run **Remote-Containers: Reopen Folder in Container** or **Codespaces: Rebuild Container** to start using the definition.

## Testing the definition

This definition includes some test code that will help you verify it is working as expected on your system. Follow these steps:

1. If this is your first time using a development container, please follow the [getting started steps](https://aka.ms/vscode-remote/containers/getting-started) to set up your machine.
2. Clone this repository.
3. Start VS Code, press <kbd>F1</kbd>, and select **Remote-Containers: Open Folder in Container...**
4. Select the `containers/typescript-node` folder.
5. After the folder has opened in the container, press <kbd>F5</kbd> to start the project. This will automatically run `npm install` and compile the source before starting it.
6. Once the project is running, press <kbd>F1</kbd> and select **Remote-Containers: Forward Port from Container...**
7. Select port 3000 and click the "Open Browser" button in the notification that appears.
8. You should see "Hello remote world!" after the page loads.
9. From here, you can add breakpoints or edit the contents of the `test-project` folder to do further testing.

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the MIT License. See [LICENSE](https://github.com/microsoft/vscode-dev-containers/blob/main/LICENSE).
# Transcandance_backend
