// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Mycomponent from "./components/Mycomponent.vue"
import './style/index.css'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import "vitepress-markdown-timeline/dist/theme/index.css";
import googleAnalytics from 'vitepress-plugin-google-analytics'
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useLive2d } from 'vitepress-theme-website'


/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

  enhanceApp({app}) {
    googleAnalytics({
      id: 'G-D511MSFK6N', //跟踪ID，在analytics.google.com注册即可
    }),
    // 注册全局组件
    app.component('Mycomponent' , Mycomponent)
  },
  setup() {
    

  },
  
  setup() {
    // Get frontmatter and route
    const { frontmatter } = useData();
    const route = useRoute();
        
    // 评论 giscus配置
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


    // 图片缩放
    // const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  
    //看板娘
    // useLive2d({
    //   enable: true,
    //   model: {
    //     url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/WA2000-2/destroy/model.json'
    //   },
    //   display: {
    //     position: 'right',
    //     width: '135px',
    //     height: '300px',
    //     xOffset: '35px',
    //     yOffset: '5px'
    //   },
    //   mobile: {
    //     show: true
    //   },
    //   react: {
    //     opacity: 0.8
    //   }
    // })
  },
}
