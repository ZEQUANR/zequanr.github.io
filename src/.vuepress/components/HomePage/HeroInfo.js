import { computed, defineComponent, shallowRef, h } from "vue";
import { usePageFrontmatter, useSiteLocaleData, withBase, } from "@vuepress/client";
import { isString, IconBase } from "vuepress-shared/client";
import AutoLink from "@theme-hope/components/AutoLink";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import HopeIcon from "@theme-hope/components/HopeIcon";
import "./hero-info.scss";

const SlideDownIcon = () => h(IconBase, { name: "down" }, () => [
    h("path", {
        d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z",
    }),
    h("path", {
        d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z",
    }),
]);

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?f3b3102ebd032b085c6e0550c0e02f74";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

export default defineComponent({
    name: "HeroInfo",
    slots: Object,
    setup(_props, { slots }) {
        const frontmatter = usePageFrontmatter();
        const siteLocale = useSiteLocaleData();
        const hero = shallowRef();
        const isFullScreen = computed(() => frontmatter.value.heroFullScreen ?? false);
        const heroInfo = computed(() => {
            const { heroText, tagline } = frontmatter.value;
            return {
                text: heroText ?? siteLocale.value.title ?? "Hello",
                tagline: tagline ?? siteLocale.value.description ?? "",
                isFullScreen: isFullScreen.value,
            };
        });
        const heroImage = computed(() => {
            const { heroText, heroImage, heroImageDark, heroAlt, heroImageStyle } = frontmatter.value;
            return {
                image: heroImage ? withBase(heroImage) : null,
                imageDark: heroImageDark ? withBase(heroImageDark) : null,
                heroStyle: heroImageStyle,
                alt: heroAlt || heroText || "hero image",
                isFullScreen: isFullScreen.value,
            };
        });
        const bgInfo = computed(() => {
            const { bgImage, bgImageDark, bgImageStyle } = frontmatter.value;
            return {
                image: isString(bgImage) ? withBase(bgImage) : null,
                imageDark: isString(bgImageDark) ? withBase(bgImageDark) : null,
                bgStyle: bgImageStyle,
                isFullScreen: isFullScreen.value,
            };
        });
        const actions = computed(() => frontmatter.value.actions ?? []);
        return () => h("header", { ref: hero, class: ["vp-hero-info-wrapper", { fullscreen: isFullScreen.value }] }, [
            slots.heroBg?.(bgInfo.value) || [
                bgInfo.value.image
                    ? h("div", {
                        class: ["vp-hero-mask", { light: bgInfo.value.imageDark }],
                        style: [
                            { "background-image": `url(${bgInfo.value.image})` },
                            bgInfo.value.bgStyle,
                        ],
                    })
                    : null,
                bgInfo.value.imageDark
                    ? h("div", {
                        class: "vp-hero-mask dark",
                        style: [
                            {
                                "background-image": `url(${bgInfo.value.imageDark})`,
                            },
                            bgInfo.value.bgStyle,
                        ],
                    })
                    : null,
            ],
            h("div", { class: "vp-hero-info" }, [
                slots.heroImage?.(heroImage.value) ||
                    h(DropTransition, { appear: true, type: "group" }, () => [
                        heroImage.value.image
                            ? h("img", {
                                key: "light",
                                class: [
                                    "vp-hero-image",
                                    { light: heroImage.value.imageDark },
                                ],
                                style: heroImage.value.heroStyle,
                                src: heroImage.value.image,
                                alt: heroImage.value.alt,
                            })
                            : null,
                        heroImage.value.imageDark
                            ? h("img", {
                                key: "dark",
                                class: "vp-hero-image dark",
                                style: heroImage.value.heroStyle,
                                src: heroImage.value.imageDark,
                                alt: heroImage.value.alt,
                            })
                            : null,
                    ]),
                slots.heroInfo?.(heroInfo.value) ??
                    h("div", { class: "vp-hero-infos" }, [
                        heroInfo.value.text
                            ? h(DropTransition, { appear: true, delay: 0.04 }, () => h("h1", { id: "main-title" }, heroInfo.value.text))
                            : null,
                        heroInfo.value.tagline
                            ? h(DropTransition, { appear: true, delay: 0.08 }, () => h("p", {
                                id: "main-description",
                                innerHTML: heroInfo.value.tagline,
                            }))
                            : null,
                        actions.value.length
                            ? h(DropTransition, { appear: true, delay: 0.12 }, () => h("p", { class: "vp-hero-actions" }, actions.value.map((action) => h(AutoLink, {
                                class: [
                                    "vp-hero-action",
                                    action.type || "default",
                                ],
                                config: action,
                                noExternalLinkIcon: true,
                            }, action.icon
                                ? {
                                    before: () => h(HopeIcon, { icon: action.icon }),
                                }
                                : {}))))
                            : null,
                    ]),
            ]),
            h("button", {
                type: "button",
                    class: "slide-down-button",
                    onClick: () => {
                        window.scrollTo({
                            top: hero.value.clientHeight - 60,
                            behavior: "smooth",
                        });
                    },
                }, [h(SlideDownIcon), h(SlideDownIcon)]),
        ]);
    },
});
//# sourceMappingURL=HeroInfo.js.map