import { hopeTheme } from "vuepress-theme-hope"
import navbar from "./navbar.js"
import sidebar from "./sidebar.js"

export default hopeTheme(
  {
    hostname: "https://zequanr.github.io",

    author: {
      name: "ZEQUANR",
      url: "https://github.com/ZEQUANR",
    },

    iconAssets: "iconify",

    darkmode: "disable",

    logo: "logo.svg",

    // 仓库配置，用于在导航栏中显示仓库链接。
    repo: "ZEQUANR",

    // 文档在仓库中的目录
    docsDir: "src",

    // 是否显示编辑链接（每个页面生成的编辑此页链接）
    editLink: false,

    // 导航栏组件位置
    navbarLayout: {
      start: ["Brand"],
      center: [],
      end: ["Search", "Links", "Repo"],
    },

    // 导航栏配置
    navbar,

    // 侧边栏配置
    sidebar,

    // 设置页脚内容-类型: boolean | string | HTMLString
    footer: "让我们建设一个更美好的世界",

    displayFooter: true,

    // encrypt: {
    //   config: {
    //     "/demo/encrypt.html": ["1234"],
    //   },
    // },

    // 页面元数据
    metaLocales: {
      // editLink 为 false 时不显示
      editLink: "在 GitHub 上编辑此页",
    },

    blog: {
      // timeline: "时间线的顶部文字"
      description: "现在学习都是为了将来",
      intro: "/pages/about/",
      medias: {
        GitHub: "https://github.com/ZEQUANR",
        语雀: [
          "https://www.yuque.com/zequanr",
          '<svg t="1705310485175" class="icon" viewBox="0 0 1121 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1494" width="26" height="26"><path d="M1118.415339 145.958083l-91.292562-4.976133s-34.528264-123.607802-192.99438-134.698314c-158.466116-11.086281-262.152463-4.12562-262.152463-4.125619s117.54843 76.355702 70.440198 212.606942c-35.002182 73.48681-90.378579 133.530446-149.419372 202.536198L102.586182 871.931769c363.426909-5.437355 577.688331-8.158149 642.788496-8.158149 182.563967 0 336.853686-161.546579 330.540429-341.288199-4.341421-123.531636-42.885289-151.441983-56.133818-205.544727-13.244298-54.102744 13.269686-140.381091 98.63405-170.982611z" fill="#31CC79" p-id="1495"></path><path d="M491.401521 418.769455C300.311273 638.976 0 989.336331 0 989.336331c540.265785 144.688661 789.186645-206.471405 828.166347-328.03967 52.257851-162.993719-21.580165-242.527207-63.369521-268.465719-141.692826-87.945521-246.822083-4.684165-273.395305 25.938513z" fill="#93E65C" p-id="1496"></path><path d="M499.390413 410.006215c35.907702-34.739835 135.713851-98.99795 266.595438-17.763438 41.950149 26.040066 116.084364 105.890909 63.619174 269.540496-15.220364 47.463669-62.315901 129.789884-146.097719 204.144132-86.671868 0.592397-280.808727 3.143934-582.410579 7.654612l373.214149-434.603372c8.145455-9.520661 16.218975-18.863603 24.174017-28.092298z" fill="#60DB69" opacity=".86" p-id="1497"></path></svg>',
        ],
        公众号: [
          "https://www.yuque.com/zequanr/gtgmxl/zbd0feqfy2vkqpkv?singleDoc#",
          '<svg xmlns="http://www.w3.org/2000/svg" class="icon wechatmp-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#07C160"></circle><g fill="#FFF"><path d="M702 338a218 218 0 0 0-359-37c-35 42-46 91-39 140 5 33 24 78 50 106a263 263 0 0 1 348-209"></path><path d="M771 445c-54-71-147-90-232-59l9 3a240 240 0 0 1 99 389 214 214 0 0 0 124-333"></path><path d="M509 669c-21 0-42-2-62-7-5 0-9 2-14 5l-58 38-5 1c-6 1-10-3-10-8l1-7 11-47v-6c0-6-3-11-8-14a262 262 0 0 1-113-176 227 227 0 0 0 111 338c124 41 242-5 283-110 5-13 10-34 11-52-43 32-89 45-147 45"></path></g></svg>',
        ],
        Observable: [
          "https://observablehq.com/@zequanr",
          '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 256 267"><path d="M128 221.867c-11.819 0-22.059-2.574-30.72-7.721c-8.63-5.127-15.53-12.39-19.915-20.964c-4.661-8.921-8.074-18.356-10.154-28.073A151.012 151.012 0 0 1 64 133.12c0-8.5.555-16.626 1.675-24.396c1.11-7.76 3.168-15.649 6.165-23.655c2.997-8.007 6.859-14.95 11.563-20.836c4.897-6.031 11.229-10.94 18.506-14.348c7.637-3.678 16.32-5.512 26.091-5.512c11.819 0 22.059 2.574 30.72 7.721c8.63 5.127 15.53 12.39 19.915 20.964c4.63 8.826 8.01 18.183 10.155 28.073c2.133 9.88 3.21 20.55 3.21 31.989c0 8.5-.555 16.626-1.674 24.396a108.848 108.848 0 0 1-6.294 23.655c-3.093 8.007-6.933 14.95-11.563 20.837c-4.63 5.886-10.752 10.669-18.379 14.347c-7.626 3.678-16.319 5.512-26.09 5.512m22.593-65.251c6.12-6.145 9.525-14.649 9.407-23.496c0-9.141-3.062-16.973-9.173-23.496c-6.122-6.523-13.729-9.784-22.827-9.784c-9.098 0-16.703 3.261-22.827 9.784c-5.995 6.214-9.306 14.695-9.173 23.496c0 9.141 3.061 16.973 9.173 23.496c6.124 6.523 13.729 9.784 22.827 9.784c9.098 0 16.63-3.261 22.593-9.784M128 266.24c70.688 0 128-59.605 128-133.12C256 59.604 198.688 0 128 0S0 59.604 0 133.12c0 73.515 57.312 133.12 128 133.12"/></svg>',
        ],
        CodePen: [
          "https://codepen.io/zequanr",
          '<svg t="1705312043718" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4204" width="26" height="26"><path d="M0 512a512 512 0 1 0 1024 0A512 512 0 1 0 0 512z" fill="#030502" p-id="4205"></path><path d="M840.277 383.595l-312-208a29.333 29.333 0 0 0-32.554 0l-312 208A29.717 29.717 0 0 0 170.667 408v208c0 10.07 5.397 19.35 13.056 24.405l312 208a29.333 29.333 0 0 0 32.554 0l312-208c7.531-4.906 13.056-14.229 13.056-24.405V408c0-9.45-4.842-18.987-13.056-24.405zM541.333 254.827L771.18 408.043l-102.656 68.672-127.19-85.078v-136.81z m-58.666 0v136.81l-127.168 85.078L252.82 408.02l229.846-153.194zM229.333 462.912l73.387 49.067-73.387 49.109v-98.176z m253.334 306.261L252.8 615.957l102.677-68.65 127.147 85.056v136.81zM512 581.397L408.256 512 512 442.603 615.744 512 512 581.397z m29.333 187.776v-136.81l127.19-85.056 102.656 68.65-229.846 153.216z m253.334-208.085L721.28 512l73.387-49.088v98.155z" fill="#FFFFFF" p-id="4206"></path></svg>',
        ],
        "ZEQUANR@88.com": [
          "https://www.88.com",
          '<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"></circle><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"></path></svg>',
        ],
      },
      roundAvatar: true,
    },

    plugins: {
      blog: true,
      // You should generate and use your own comment service
      // comment: {
      //   provider: "Giscus",
      //   repo: "vuepress-theme-hope/giscus-discussions",
      //   repoId: "R_kgDOG_Pt2A",
      //   category: "Announcements",
      //   categoryId: "DIC_kwDOG_Pt2M4COD69",
      // },

      // All features are enabled for demo, only preserve features you need here
      mdEnhance: {
        align: true,
        attrs: true,
        codetabs: true,
        component: true,
        demo: true,
        figure: true,
        imgLazyload: true,
        imgSize: true,
        include: true,
        mark: true,
        stylize: [
          {
            matcher: "Recommended",
            replacer: ({ tag }) => {
              if (tag === "em")
                return {
                  tag: "Badge",
                  attrs: { type: "tip" },
                  content: "Recommended",
                }
            },
          },
        ],
        sub: true,
        sup: true,
        tabs: true,
        vPre: true,

        // install chart.js before enabling it
        // chart: true,

        // insert component easily

        // install echarts before enabling it
        // echarts: true,

        // install flowchart.ts before enabling it
        // flowchart: true,

        // gfm requires mathjax-full to provide tex support
        // gfm: true,

        // install katex before enabling it
        // katex: true,

        // install mathjax-full before enabling it
        // mathjax: true,

        // install mermaid before enabling it
        // mermaid: true,

        // playground: {
        //   presets: ["ts", "vue"],
        // },

        // install reveal.js before enabling it
        // revealJs: {
        //   plugins: ["highlight", "math", "search", "notes", "zoom"],
        // },

        // install @vue/repl before enabling it
        // vuePlayground: true,
      },

      // uncomment these if you want a pwa
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cachePic: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
  },
  { custom: true }
)
