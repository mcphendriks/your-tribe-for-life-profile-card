<script>
  import { onMount } from 'svelte'

  onMount(() => {
    let cardSlice = document.getElementById('card')
    let x = document.getElementById('x')
    let y = document.getElementById('y')

    window.onmousemove = (e) => {
      const degX = (e.clientX / window.innerWidth) * 360 - 180
      const degY = (e.clientY / window.innerHeight) * 360 - 180

      cardSlice.style.transform = `rotateY(${degX}deg) rotateX(${degY}deg)`

      const fx = Math.floor(degX)
      const fy = Math.floor(degY)

      x.innerText = `X: ${fx}`
      y.innerText = `Y: ${fy}`
    }
  })

  export let slice
</script>

<article
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  id="card"
>
  <section class="front cover">
    <h2>{slice.primary.cardtitle[0].text}</h2>
    <p>{slice.primary.cardparagraph[0].text}</p>
    <p>{slice.primary.card_text[0].text}</p>
    <p>{slice.primary.cardlogo[0].text}</p>
  </section>

  <section class="back cover" />
  <section class="left cover" />
  <section class="right cover" />
  <section class="bottom cover" />
  <section class="top cover" />
</article>

<div class="blob" />

<style>
  article {
    width: 25rem;
    height: 35rem;
    background: #f1cfb2ff;
    font-family: 'Inconsolata', monospace;
    transform-style: preserve-3d;
    transform: rotate3d(0, 0, 0, 190deg);
    position: relative;
  }

  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: -5px -5px 9px rgb(213, 179, 148), 5px 5px 9px rgb(234, 174, 141);
  }

  .front {
    transform: translateZ(50px) translateX(0px) translateY(0px);
  }

  .front h1 {
    font-size: 2.5em;
  }

  .front p {
    font-family: 'Inconsolata', monospace;
    letter-spacing: 1.4px;
  }

  .front p:last-child {
    text-align: right;
    margin-right: 1.5rem;
    font-weight: 600;
    font-size: 2.5em;
    animation: letterspacing 10s infinite alternate cubic-bezier(0.2, 0, 0, 1);
  }

  .back {
    transform: translateZ(0px) translateX(0px) translateY(0px) rotateY(180deg);
  }

  .left {
    transform: translateZ(25px) translateX(-25px) translateY(0px)
      rotateY(-90deg);
    width: 50px;
  }

  .right {
    transform: translateZ(25px) translateX(-25px) translateY(0px) rotateY(90deg);
    width: 50px;
    border-top: 1px solid #f1cfb2ff;
    border-bottom: 1px solid rgb(233, 194, 160);
  }

  .top {
    transform: translateZ(25px) translateX(0px) translateY(-25px) rotateX(90deg);
    height: 50px;
  }

  .bottom {
    transform: translateZ(25px) translateX(0px) translateY(528px) rotateX(90deg);
    height: 50px;
  }

  .blob {
    position: absolute;
    width: 500px;
    height: 500px;
    background: linear-gradient(
      180deg,
      rgba(250, 225, 204, 0.42) 31.77%,
      #edbf98 100%
    );
    mix-blend-mode: color-dodge;
    animation: move 10s infinite alternate;
    transition: 1s cubic-bezier(0.07, 0.8, 0.16, 1);
  }

  .blob:hover {
    width: 520px;
    height: 520px;
    filter: blur(30px);
  }

  @keyframes letterspacing {
    0% {
      letter-spacing: -3rem;
    }

    100% {
      letter-spacing: 0.5rem;
    }
  }

  @keyframes move {
    from {
      transform: translate(190px, -40px) rotate(-60deg);
      border-radius: 24% 76% 35% 65% / 27% 36% 64% 73%;
    }

    to {
      transform: translate(-190px, 100px) rotate(-10deg);
      border-radius: 76% 24% 33% 67% / 68% 55% 45% 32%;
    }
  }

  @media screen and (min-width: 0em) and (max-width: 45em) {
    article {
      width: 300px;
      height: 500px;
    }

    .front h2 {
      font-size: 1.5em;
    }

    .front p:first-child {
      font-size: 0.1em;
    }

    .front p:last-child {
      font-size: 1.5em;
    }

    .front {
      transform: translateZ(50px) translateX(0px) translateY(0px);
    }

    .left {
      transform: translateZ(25px) translateX(-25px) translateY(0px)
        rotateY(-90deg);
    }

    .right {
      transform: translateZ(25px) translateX(279px) translateY(0px)
        rotateY(90deg);
    }

    .bottom {
      transform: translateZ(25px) translateX(0px) translateY(476px)
        rotateX(90deg);
    }
  }
</style>
