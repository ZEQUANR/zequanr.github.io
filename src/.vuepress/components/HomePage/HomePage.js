import { usePageFrontmatter } from "@vuepress/client"
import { isArray } from "@vuepress/shared"
import { computed, defineComponent, h } from "vue"
import { usePure } from "@theme-hope/composables/index"
import FeaturePanel from "@theme-hope/components/FeaturePanel"
import MarkdownContent from "@theme-hope/components/MarkdownContent"
import DropTransition from "@theme-hope/components/transitions/DropTransition"
import HighlightPanel from "./HighlightPanel"
import HeroInfo from "./HeroInfo"
import "./home-page.scss"
export default defineComponent({
  name: "HomePage",
  slots: Object,
  setup(_props, { slots }) {
    const pure = usePure()
    const frontmatter = usePageFrontmatter()
    const features = computed(() => {
      const { features } = frontmatter.value
      return isArray(features) ? features : null
    })
    const highlights = computed(() => {
      const { highlights } = frontmatter.value
      if (isArray(highlights)) return highlights
      return null
    })
    
    // window.console.log(highlights.value)
    return () =>
      h(
        "main",
        {
          id: "main-content",
          class: ["vp-project-home ", { pure: pure.value }],
          "aria-labelledby":
            frontmatter.value.heroText === null ? "" : "main-title",
        },
        [
          slots.top?.(),
          h(HeroInfo),
          highlights.value?.map((highlight) =>
            "features" in highlight
              ? h(FeaturePanel, highlight)
              : h(HighlightPanel, highlight)
          ) ||
            (features.value
              ? h(DropTransition, { appear: true, delay: 0.24 }, () =>
                  h(FeaturePanel, { features: features.value })
                )
              : null),
          slots.center?.(),
          h(
            DropTransition,
            {
              appear: true,
              delay: 0.32,
            },
            () => h(MarkdownContent)
          ),
          slots.bottom?.(),
        ]
      )
  },
})
//# sourceMappingURL=HomePage.js.map
