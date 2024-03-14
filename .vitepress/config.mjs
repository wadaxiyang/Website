import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.js";	// 改成自己的路径
import timeline from "vitepress-markdown-timeline"; 
// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/Website/",
  head: [["link", { rel: "icon", href: "Blog.svg" }]],
  title: "wadaxiyangのBLOG",
  description: "Personal Blog",
  lastUpdated: true,
  markdown: { 
    //行号显示
    lineNumbers: true, 

    //时间线
    config: (md) => {
      md.use(timeline);
    },
  }, 
  themeConfig: {
    outlineTitle: "Contents",
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'vitepress usage', link: '/notes/vitepress/' },
      { text: 'Sparse Matrix', link: '/notes/radar/' }
    ],

    sidebar: {
      '/notes/vitepress':[
        {
          text: 'Guide',
          collapsed: false,
          items: set_sidebar("/notes/vitepress/Guide")
        },
        {
          text: 'Reference',
          collapsed: false,
          items: set_sidebar("/notes/vitepress/Reference")
        }
      ],
      '/notes/radar':[
        {
          text: 'Sparse Matrix',
          collapsed: false,
          items: set_sidebar("/notes/radar/SparseMatrix")
        },
        {
          text: 'DOA',
          collapsed: false,
          items: set_sidebar("/notes/radar/DOA")
        },
      ],   
    }, //自动路由sidebar

    // sidebar: false, // 关闭侧边栏
    // aside: "left", // 设置右侧侧边栏在左侧显示

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wadaxiyang' },
      { icon: {
          svg: '<svg t="1710294664668" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4417" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="4418"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="4419"></path></svg>'
        }, link: 'https://github.com/wadaxiyang' 
      },
      {
        icon: {
            svg: '<svg t="1710294723248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5391" width="200" height="200"><path d="M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z" fill="#C71D23" p-id="5392"></path><path d="M762.538667 457.045333h-281.088a24.4736 24.4736 0 0 0-24.439467 24.405334v61.098666c-0.034133 13.5168 10.922667 24.439467 24.405333 24.439467h171.1104c13.5168 0 24.439467 10.922667 24.439467 24.439467v12.219733a73.3184 73.3184 0 0 1-73.3184 73.3184h-232.209067a24.439467 24.439467 0 0 1-24.439466-24.439467v-232.174933a73.3184 73.3184 0 0 1 73.3184-73.3184h342.152533c13.482667 0 24.405333-10.922667 24.439467-24.439467l0.034133-61.098666a24.405333 24.405333 0 0 0-24.405333-24.439467H420.352a183.296 183.296 0 0 0-183.296 183.296V762.538667c0 13.482667 10.922667 24.439467 24.405333 24.439466h360.516267a164.9664 164.9664 0 0 0 165.000533-165.000533v-140.526933a24.439467 24.439467 0 0 0-24.439466-24.439467z" fill="#FFFFFF" p-id="5393"></path></svg>'
        }, link: 'https://github.com/wadaxiyang'
      },
    ],
    footer:{
      copyright: "Copyright@ 2024 wadaxiyang"
    },
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search File",
            buttonAriaLabel: "Search File",
          },
          modal: {
            noResultsText: "cannot find result",
            resetButtonTitle: "clear result",
            footer: {
              selectText: "select",
              navigateText: "change",
            },
          },
        },
      },
    },
  }
})
