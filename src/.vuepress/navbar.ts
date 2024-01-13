import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  "/pages/about/",
  "/pages/javascript/",
  "/pages/go/",
  "/pages/c/",
  "/pages/math/",
  {
    text: "时间轴",
    icon: "flat-color-icons:timeline",
    link: "/timeline/",
  },
  {
    text: "更多",
    icon: "icon-park:more-app",
    children: [
      {
        text: "编程语言",
        children: ["/pages/c/", "/pages/go/", "/pages/javascript/"],
      },
      {
        text: "前端框架",
        children: ["/pages/vue/", "/pages/react/"],
      },
      {
        text: "数据库",
        children: ["/pages/mysql/", "/pages/mongodb/"],
      },
      {
        text: "党史学习",
        children: [
          {
            text: "文章标题",
            icon: "fxemoji:chineseflag",
            link: "/pages/history/",
          },
        ],
      },
    ],
  },
])
