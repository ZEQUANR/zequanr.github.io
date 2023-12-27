import { defineUserConfig } from "vuepress"
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js"

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ZEQUANR",
  description: "ZEQUANR 的个人博客",

  theme,

  alias: {
    "@theme-hope/components/HomePage": path.resolve(
      __dirname,
      "./components/HomePage.vue"
    ),
  },
});
