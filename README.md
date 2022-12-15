# astro-template
Astro template using Svelte and a variety of linters and test suites

[![lint](https://github.com/Shmuppel/astro-template/actions/workflows/lint.yml/badge.svg)](https://github.com/Shmuppel/astro-template/actions/workflows/lint.yml)
[![svelte-check](https://github.com/Shmuppel/astro-template/actions/workflows/svelte-check.yml/badge.svg)](https://github.com/Shmuppel/astro-template/actions/workflows/svelte-check.yml)
[![vitest](https://github.com/Shmuppel/astro-template/actions/workflows/vitest.yml/badge.svg)](https://github.com/Shmuppel/astro-template/actions/workflows/vitest.yml)
[![playwright](https://github.com/Shmuppel/astro-template/actions/workflows/playwright.yml/badge.svg)](https://github.com/Shmuppel/astro-template/actions/workflows/playwright.yml)

### Linters / Type Checkers
- Prettier  
- ESLint (with a11y)
- Stylelint  (with idiomatic order)
- Svelte-check  

### Testing suites
- Vitest (with Svelte Testing Library)
- Playwright

### Editors
Default settings for plugins are provided for JetBrains IDEs (WebStorm) and VSCode.  
VSCode has Astro syntax support, WebStorm doesn't for the moment. 


### Bugs
`Cannot find module '.svelte' or its corresponding type declarations.` related to the VSCode Svelte plugin 
