<script>
import "./rubik.css";
</script>
<template>
  <div id="intro">
    <h1>Hello.</h1>
    <p style="font-weight: 500; font-size: 2.2em">My name is Lisk Rynn.</p>
    <p>
      I am a developer due to my hobby, living in Anhui, China.Interested in
      <a href="https://vuejs.org" target="_blank" class="no-icon">Vue.js</a> the frontend build
      tool <a href="https://vitejs.dev/" target="_blank" class="no-icon">Vite</a>,
      <a href="https://nodejs.org/" target="_blank" class="no-icon">Node.js</a> ,
      <a href="https://typescript.org/" target="_blank" class="no-icon">TypeScript</a> and
      <a href="https://python.org/" target="_blank" class="no-icon">Python</a>
      my work is open source and publicly available on
      <a href="https://github.com/lisk809" target="_blank" class="no-icon">GitHub</a>. If you
      are interested in my project, please give it to a star.
    </p>
    <p>
      You can follow me on
      <a href="https://twitter.com/Lisk325301" target="_blank" class="no-icon">X / Twitter</a>
      where I mostly post about my daily life and frontend technologies. My name
      is Lisk, pronounced as /lɛtske/.It comes from my Chinese name.
    </p>
    <p>
      Besides developing my life, I am still a high school student.I like
      watching movies and listening to songs every day.Do you know
      <a href="//www.taylorswift.com/" target="_blank" class="no-icon">Taylor Swift</a>?
      I'm a fan of hers.You might be able to describe me in terms of ACG.My
      favorite character is Frieren, Loxy, Conan. Do you like poetry and
      literature?If possible, I hope we can share and write together about
      Haizi, Xu Zhimo, Shi Tiesheng and Shakespeare.
    </p>
    <p>The world is splendid and grand. Welcome to meet you.</p>
    <cite
      >There is no incurable pain, no endless sinking. All that is lost will
      come back in another way.</cite
    >
  </div>
</template>

<style scoped>
#intro {
  font-family:
    "Rubik",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: calc(10px + 0.33vw);
  -webkit-font-smoothing: antialiased;
  padding: 5vh 10vw;
  color: #121314;
}
h1 {
  font-size: 4.5em;
  font-weight: 500;
  margin-bottom: 0;
}
p {
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  max-width: 28em;
}
a {
  text-decoration: none;
  white-space: nowrap;
  color: #121314;
  position: relative;
}
a::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 66%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
  background-color: rgba(79, 192, 141, 0.5);

}
a:hover::after {
  top: 0%;
}
</style>
