import { sidebar } from "vuepress-theme-hope"

export default sidebar({
  "/pages/javascript/": [
    "",
    {
      prefix: "/pages/javascript/",
      children: [
        "Deep copy and front copy",
        "File Blob FileReader ArrayBuffer Base64",
      ],
    },
  ],

  "/": [
    "/pages/c/",
    "/pages/go/",
    "/pages/vue/",
    "/pages/react/",
    "/pages/python/",
    "/pages/javascript/",
    "/pages/database/",
    "/pages/docker/",
    "/pages/mysql/",
    "/pages/mongodb/",
  ],
})
