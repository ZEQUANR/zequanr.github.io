import { defineClientConfig } from "@vuepress/client"
import NotFound from "./components/NotFound.vue"
import "vuepress-theme-hope/presets/bounce-icon.scss"
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"

export default defineClientConfig({
  layouts: {
    NotFound,
  },
})
