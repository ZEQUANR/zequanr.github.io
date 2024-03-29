import { navbar } from "vuepress-theme-hope"

export default navbar([
  "/",
  {
    text: "关于我",
    icon: "flat-color-icons:about",
    link: "/About/",
  },
  {
    text: "JavaScript",
    icon: "devicon:javascript",
    link: "/FrontEnd/JavaScript/",
  },
  {
    text: "Go",
    icon: "skill-icons:golang",
    link: "/Go/",
  },
  {
    text: "C",
    icon: "devicon:c",
    link: "/C/",
  },
  {
    text: "Math",
    icon: "ooui:mathematics",
    link: "/Math/",
  },
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
        children: [
          {
            text: "C",
            icon: "devicon:c",
            link: "/C/",
          },
          {
            text: "Go",
            icon: "skill-icons:golang",
            link: "/Go/",
          },
          {
            text: "JavaScript",
            icon: "devicon:javascript",
            link: "/FrontEnd/JavaScript/",
          },
        ],
      },
      {
        text: "前端框架",
        children: [
          {
            text: "Vue",
            icon: "devicon:vuejs",
            link: "/FrontEnd/Vue/",
          },
          {
            text: "React",
            icon: "devicon:react",
            link: "/FrontEnd/React/",
          },
        ],
      },
      {
        text: "数据库",
        children: [
          {
            text: "MySql",
            icon: "logos:mysql",
            link: "/Database/MySql/",
          },
          {
            text: "MongoDB",
            icon: "skill-icons:mongodb",
            link: "/Database/MongoDB/",
          },
        ],
      },
      {
        text: "党史学习",
        children: [
          {
            text: "在建",
            icon: "fxemoji:chineseflag",
            link: "/pages/history/",
          },
        ],
      },
    ],
  },
])
