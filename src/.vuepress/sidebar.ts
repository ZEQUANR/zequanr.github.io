import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/": ["/"],

  "/pages/about/": "structure",

  "/pages/javascript/": [
    "",
    {
      text: "指南",
      icon: "lightbulb",
      collapsible: true,
      children: [
        "Deep copy and front copy",
        "File Blob FileReader ArrayBuffer Base64",
      ],
    },
  ],

  "/pages/go/": "structure",

  "/pages/c/": "structure",

  "/pages/math/": "structure",
})
