// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Mycomponent from "./components/Mycomponent.vue"
import './style/index.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';


/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({app}) {
    // 注册全局组件
    app.component('Mycomponent' , Mycomponent)
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // giscus配置
    giscusTalk({
      repo: 'wadaxiyang/Website', //仓库
      repoId: 'R_kgDOLfkCrA', //仓库ID
      category: 'Announcements', // 讨论分类
      categoryId: 'DIC_kwDOLfkCrM4Cd9dH', //讨论分类ID
      mapping: 'pathname',
      inputPosition: 'bottom',
      lang: 'en',
      }, 
      {
        frontmatter, route
      },
      //默认值为true，表示已启用，此参数可以忽略；
      //如果为false，则表示未启用
      //您可以使用“comment:true”序言在页面上单独启用它
      true
    );

},
}
