import { defineComponent, ref, h } from "vue"
import "./memory-game.scss"

export default defineComponent({
  name: "MemoryGame",
  setup() {
    let arr = [
      "vscode-dark",
      "vuejs-dark",
      "mongodb-dark",
      "c-dark",
      "d3-dark",
      "docker-dark",
      "golang-dark",
      "javascript-dark",
    ]

    const shuffle = (array) => {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }

    const symbols = ref(
      shuffle(
        [...arr, ...arr].map((item) => {
          return {
            name: item,
            class: 'card',
            isOpen: false,
            isShow: false,
          }
        })
      )
    )

    const delay = 800
    const opened = ref([])
    const isStart = ref(false)
    const cardFlip = (card) => {
      if (card.isShow || symbols.value.filter((e) => e.isOpen).length > 1) {
        return
      }

      card.class = 'card open'
      card.isOpen = true
      card.isShow = true
      opened.value.push(card)

      if (opened.value.length > 1) {
        if (card.name === opened.value[0].name) {
          opened.value.forEach((element) => {
            element.class = 'card open animated infinite rubberBand'
          })
          setTimeout(() => {
            opened.value.forEach((element) => {
              element.class = 'card open'
              element.isOpen = false
            })
            opened.value = []
          }, delay)
        } else {
          opened.value.forEach((element) => {
            element.class = 'card open animated infinite wobble'
          })
          setTimeout(() => {
            opened.value.forEach((element) => {
              element.class = 'card open'
            })
          }, delay / 1.5)
          setTimeout(() => {
            opened.value.forEach((element) => {
              element.class = 'card'
              element.isShow = false
              element.isOpen = false
            })
            opened.value = []
          }, delay)
        }
      }

      if (symbols.value.filter((e) => e.isShow).length === 16) {
        isStart.value = false
      }
    }

    const onStart = () => {
      symbols.value = 
        shuffle(
          [...arr, ...arr].map((item) => {
            return {
              name: item,
              class: 'card',
              isOpen: false,
              isShow: false,
            }
          })
        )
      
      isStart.value = true
    }

    return () =>
      h("ul", { class: "memory-game-deck" }, [
        isStart.value ? symbols.value.map((card) =>
          h(
            "li",
            {
              class: [card.class, {'card-bg': card.isShow}],
              onClick: () => cardFlip(card),
            },
            h("i", {class: {[card.name]: card.isShow}})
          )
        ) : h("button", { class: "memory-game-start", onClick: () => onStart(), innerHTML: 'start'})
      ])
  },
})
