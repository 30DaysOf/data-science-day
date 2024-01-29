# Starlight Starter Kit: Basics

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

The documentation site for this project is built with Astro Starlight and hosted on GitHub Pages. Here are the steps to replicate this process.

<br/>

## 🏁 | Create New Project

1. Use the command below to start the wizard workflow. Follow interactive steps to setup the default project.

    ```
    npm create astro@latest -- --template starlight
    ```

<br/>

## 🚀 | Project Structure

1. Inside of your Astro + Starlight project, you'll see the following folders and files:

    ```
    .
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── content/
    │   │   ├── docs/
    │   │   └── config.ts
    │   └── env.d.ts
    ├── astro.config.mjs
    ├── package.json
    └── tsconfig.json
    ```

1. Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.
1. Images can be added to `src/assets/` and embedded in Markdown _with a relative link_.
1. Static assets, like favicons, can be placed in the `public/` directory.

<br/>

## 🧰 | Customize Project
1. Astro collects telemetry by default - use the command below to opt-out.

    ```bash
    npm run astro telemetry disable
    ...
    Astro is no longer collecting anonymous usage data.
    ```
1. Preview the site locally:
    ```bash
    cd docs
    npm run dev
    ...
    Local http://localhost:4321
    ```
1. Build & preview static site: (builds in `dist/`)
    ```bash
    cd docs
    npm run build
    npm run preview
    ...
    Local http://localhost:4321
    ```
1. Modify the default configuration as required (see [Docs](https://starlight.astro.build/)). 
    
    1. Astro has [type-safe frontmatter](https://starlight.astro.build/reference/frontmatter/). Use it in content pages.
    1. Starlight builds on [content collections](https://docs.astro.build/en/guides/content-collections/). Configure it in `src/content/config.ts`
    1. Site homepage is at `src/content/docs/index.md`
    1. Use admonitions or [asides](https://starlight.astro.build/guides/authoring-content/#asides) - for {note, tip, caution, danger}
    1. Use code highlighting with 
        - [expressive code](https://github.com/expressive-code/expressive-code/tree/main/packages/astro-expressive-code) text markers (show adds, deletes)
        - frames, tabs and titles for code window
    1. Use [built-in components](https://starlight.astro.build/guides/components/#built-in-components) or create custom ones
        - built-in tabs, icons
        - built-in cards, link-cards
        - built-in "code import" capability
    1. Customize CSS by
        - adding file in `src/` e.g., _src/styles/custom.css_.
        - referencing it in `astro.config.mjs` "integrations"
        - using Tailwind CSS support (with related integration)
    1. Customize Theme by
        - Changing values for [Theming](https://starlight.astro.build/guides/css-and-tailwind/#theming)
        - Copying the values into a `src/styles/custom.css` file
        - Applying that as your default in `astro.config.mjs`
    1. Make yourself a logo with Bing Create
        - Create different logos for light and dark if needed
        - named assets under src/assets
        - scoped properties under starlight config



<br/>

## 🧞 | More Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npx @astrojs/upgrade` | Upgrade to latest Astro release regularly |

## 👀 | Learn More

1. Check out [Starlight’s docs](https://starlight.astro.build/)
1. Read [the Astro documentation](https://docs.astro.build), or 
1. Jump into the [Astro Discord server](https://astro.build/chat).