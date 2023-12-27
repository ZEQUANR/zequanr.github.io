import { defineUserConfig } from "vuepress"
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js"

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ZEQUANR",
  description: "ZEQUANR 的个人博客",

  head: [
    // 添加百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?f3b3102ebd032b085c6e0550c0e02f74";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
        `
    ]
  ],

  theme,

  alias: {
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },
});