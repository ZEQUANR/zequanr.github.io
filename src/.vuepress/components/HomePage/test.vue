<template>
  <ul class="deck">
    <li
      v-for="card in symbols"
      :key="card"
      :class="[
        'card',
        {
          open: card.isOpen,
          show: card.isShow,
          match: card.isMatch,
          wobble: card.isWobble,
          animated: card.isAnimated,
          infinite: card.isInfinite,
          notmatch: card.isNotmatch,
          rubberBand: card.isRubberBand,
        },
      ]"
      @click="cardFlip(card)"
    >
      <i :class="`fa fa-${card.name}`"></i>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue"

var arr = [
  "bicycle",
  "leaf",
  "cube",
  "anchor",
  "paper-plane-o",
  "bolt",
  "bomb",
  "diamond",
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
        isOpen: false,
        isShow: false,
        isMatch: false,
        isWobble: false,
        isAnimated: false,
        isInfinite: false,
        isNotmatch: false,
        isRubberBand: false,
      }
    })
  )
)

let moves = 0
const delay = 800
const opened = ref([])
const cardFlip = (card) => {
  if (
    card.isShow ||
    card.isMatch ||
    symbols.value.filter((e) => e.isOpen).length > 1
  ) {
    return
  }

  card.isOpen = true
  card.isShow = true
  opened.value.push(card)

  if (opened.value.length > 1) {
    if (card.name === opened.value[0].name) {
      opened.value.forEach((element) => {
        element.isMatch = true
        element.isAnimated = true
        element.isInfinite = true
        element.isRubberBand = true
      })
      setTimeout(() => {
        opened.value.forEach((element) => {
          element.isOpen = false
          element.isShow = false
          element.isAnimated = false
          element.isInfinite = false
          element.isRubberBand = false
        })
        opened.value = []
      }, delay)
    } else {
      opened.value.forEach((element) => {
        element.isNotmatch = true
        element.isAnimated = true
        element.isInfinite = true
        element.isWobble = true
      })
      setTimeout(() => {
        opened.value.forEach((element) => {
          element.isAnimated = false
          element.isInfinite = false
          element.isWobble = false
        })
      }, delay / 1.5)
      setTimeout(() => {
        opened.value.forEach((element) => {
          element.isOpen = false
          element.isShow = false
          element.isNotmatch = false
          element.isAnimated = false
          element.isInfinite = false
          element.isWobble = false
        })
        opened.value = []
      }, delay)
    }

    moves++
  }
}
</script>

<style lang="scss">
.deck {
  width: 345px;
  margin: 0 auto;
  background: #fffa62; /* - */
  padding: 16px;
  border-radius: 10px;

  .card {
    height: 75px;
    width: 75px;
    background: #ffcf7f; /* - */
    display: inline-block;
    margin: 0 15px 15px 0;
    line-height: 140px;
    font-size: 0;
    color: #ffffff;
    text-align: center;
    border-radius: 8px;
    vertical-align: top;
    cursor: pointer;
    transform: rotateY(180deg);
    transform-style: preserve-3d;
    transition: transform 0.3s ease;
    font-family: FontAwesome;
    line-height: 75px;

    &:nth-child(4n) {
      margin: 0 0 15px 0;
    }

    &:nth-child(n + 13) {
      margin: 0 15px 0 0;

      &:nth-child(4n) {
        margin: 0;
      }
    }

    &.open {
      transform: rotateY(0);
      background: #89c4ff; /* - */
      cursor: default;
    }
    &.show {
      font-size: 33px;
    }

    &.match {
      transform: rotateY(0);
      cursor: default;
      background: #9bcb3c; /* - */
      font-size: 33px;
    }

    &.notmatch {
      background: #ee0e51; /* - */
    }
  }
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  .infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}

@keyframes rubberBand {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.rubberBand {
  -webkit-animation-name: rubberBand;
  animation-name: rubberBand;
}

@keyframes wobble {
  from {
    -webkit-transform: none;
    transform: none;
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.wobble {
  -webkit-animation-name: wobble;
  animation-name: wobble;
}
</style>
