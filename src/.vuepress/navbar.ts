import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  "/pages/about/",
  "/pages/javascript/",
  "/pages/go/",
  "/pages/math/",
  "/pages/timeline/",
  {
    text: "更多",
    icon: "icon-park:more-app",
    children: [
      {
        text: "编程语言",
        children: [
          "/pages/c/",
          "/pages/go/",
          "/pages/vue/",
          "/pages/react/",
          "/pages/python/",
          "/pages/javascript/",
        ],
      },
      {
        text: "数据库",
        children: [
          "/pages/mysql/",
          "/pages/mongodb/",
        ],
      },
      {
        text: "党史学习",
        children: [
          {
            text: "文章标题",
            icon: "fxemoji:chineseflag",
            link: "/pages/vue/"
          }
        ],
      },
    ],
  },
  // "/demo/",
  // {
  //   text: "指南",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
  //     },
  //   ],
  // },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
])
