# astro-template
Astro template using Svelte and a variety of linters and test suites

[![lint](https://github.com/Shmuppel/astro-template/actions/workflows/lint.yml/badge.svg)](https://github.com/Shmuppel/astro-template/actions/workflows/lint.yml)
[![svelte-check](https://github.com/Shmuppel/astro-template/actions/workflows/svelte-check.yml/badge.svg)](https://github.com/Shmuppel/astro-template/actions/workflows/svelte-check.yml)
[![vitest](https://github.com/Shmuppel/astro-template/actions/workflows/vitest.yml/badge.svg)](https://github.com/Shmuppel/astro-template/actions/workflows/vitest.yml)
[![playwright](https://github.com/Shmuppel/astro-template/actions/workflows/playwright.yml/badge.svg)](https://github.com/Shmuppel/astro-template/actions/workflows/playwright.yml)
![coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/shmuppel/3eca25da4f1f1f04172a54cfd111b698/raw/astro-template-coverage.json)

## Features
- Typescript
- SCSS, also available in Svelte files
- Astro-compress to compress the bundle

### Linters / Type Checkers
- Prettier  
- ESLint (with a11y)
- Stylelint  (with idiomatic order)
- Svelte-check  

### Testing suites
- Vitest (with Svelte Testing Library)
- Playwright

### Editors
Default settings for plugins I use are provided for JetBrains IDEs (WebStorm) and VSCode, you might want to change these to your liking. VSCode has Astro syntax support, WebStorm doesn't for the moment. 


### Bugs
`Cannot find module '.svelte' or its corresponding type declarations.` when importing Svelte components in .ts files. Affects syntax highlighting only, it seems to be related to the VSCode Svelte plugin.
