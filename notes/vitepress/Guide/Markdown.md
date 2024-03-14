# Markdown Usage

---
## Time line
this extension powered by [@HanochMa](https://github.com/HanochMa/)


Repository: https://github.com/HanochMa/vitepress-markdown-timeline


Demo：https://hanochma.github.io/daily/2023-04

::: code-group
```sh [pnpm]
pnpm add -D vitepress-markdown-timeline
```

```sh [yarn]
yarn add -D vitepress-markdown-timeline
```

```sh [npm]
npm install vitepress-markdown-timeline
```

```sh [bun]
bun add -D vitepress-markdown-timeline
```
:::
Register the markdown parsing plugin in the `config.mjs` file.
```ts{1,8-11}
import timeline from "vitepress-markdown-timeline"; // [!code focus]

export default {
  markdown: { // [!code focus]
    
    lineNumbers: true, 

    //here // [!code focus:5]
    config: (md) => {
      md.use(timeline);
    },
  }, 
}
```
Import timeline styles within the `.vitepress/theme/index.js` file.
::: info info
If you do not have this file, create one by yourself.
:::

```ts{4-5}
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

// only this line
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
  extends: DefaultTheme,
}
```
Finally, in our markdown files, we simply use the format accordingly.


**example:**
```md
::: timeline 2024-03-13
- I've begun writing a blog to document my study journey.
  - Website: https://blog.230513.xyz
  - Introduction: 
- my github: https://github.com/wadaxiyang
:::

::: timeline 2023-04-23
:::


```
**output**
::: timeline 2024-03-13
- I've begun writing a blog to document my study journey.
  - Website: https://blog.230513.xyz
  - Introduction: 
- my github: https://github.com/wadaxiyang
:::

::: timeline 2023-04-23
:::

## Reference
[@Yiov](https://vitepress.yiov.top/plugin.html#%E6%97%B6%E9%97%B4%E7%BA%BF)
