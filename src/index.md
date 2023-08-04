---
layout: home

title: Wu T1ao - Personal Blog
---

<script setup lang="ts">
import { ref } from 'vue'

const sentence = ref('')

getSentence()

async function getSentence() {
  try {
    const response = await fetch('https://v1.hitokoto.cn')
    const { hitokoto: hitokotoText } = await response.json()
    sentence.value = hitokotoText
  } catch (error) {
    sentence.value = '吾将抵斯之梦境不尽欢畅'
  }
  
}
</script>

<section id="hero">
  <h1 class="tagline">
    Welcome To
    <span class="accent">WuT1ao</span>
    <br/> Personal Blog
  </h1>
  <p class="logo">
    <img src="/images/blog.gif">
  </p>
  <p class="description">
    <div class="loading" v-if="!sentence">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
    <span v-else>
      {{ sentence }}
    </span>
  </p>
  <p class="actions">
    <a class="get-started" href="/blog/tools/useful-website">
      Go On
      <svg
        class="icon"
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        viewBox="0 0 24 24"
      >
        <path
          d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
        />
      </svg>
    </a>
    <a class="setup" href="https://github.com/webB1an" target="_blank">Github</a>
  </p>
</section>

<style>
/* :root {
  --vt-c-white: #ffffff;
  --vt-c-white-soft: #f9f9f9;
  --vt-c-white-mute: #f1f1f1;
  --vt-c-black: #1a1a1a;
  --vt-c-black-pure: #000000;
  --vt-c-black-soft: #242424;
  --vt-c-black-mute: #2f2f2f;
  --vt-c-indigo: #213547;
  --vt-c-indigo-soft: #476582;
  --vt-c-indigo-light: #aac8e4;
  --vt-c-gray: #8e8e8e;
  --vt-c-gray-light-1: #aeaeae;
  --vt-c-gray-light-2: #c7c7c7;
  --vt-c-gray-light-3: #d1d1d1;
  --vt-c-gray-light-4: #e5e5e5;
  --vt-c-gray-light-5: #f2f2f2;
  --vt-c-gray-dark-1: #636363;
  --vt-c-gray-dark-2: #484848;
  --vt-c-gray-dark-3: #3a3a3a;
  --vt-c-gray-dark-4: #282828;
  --vt-c-gray-dark-5: #202020;
  --vt-c-divider-light-1: rgba(60, 60, 60, .29);
  --vt-c-divider-light-2: rgba(60, 60, 60, .12);
  --vt-c-divider-dark-1: rgba(84, 84, 84, .65);
  --vt-c-divider-dark-2: rgba(84, 84, 84, .48);
  --vt-c-text-light-1: var(--vt-c-indigo);
  --vt-c-text-light-2: rgba(60, 60, 60, .7);
  --vt-c-text-light-3: rgba(60, 60, 60, .33);
  --vt-c-text-light-4: rgba(60, 60, 60, .18);
  --vt-c-text-light-code: var(--vt-c-indigo-soft);
  --vt-c-text-dark-1: rgba(255, 255, 255, .87);
  --vt-c-text-dark-2: rgba(235, 235, 235, .6);
  --vt-c-text-dark-3: rgba(235, 235, 235, .38);
  --vt-c-text-dark-4: rgba(235, 235, 235, .18);
  --vt-c-text-dark-code: var(--vt-c-indigo-light);
  --vt-c-green: #42b883;
  --vt-c-green-light: #42d392;
  --vt-c-green-lighter: #35eb9a;
  --vt-c-green-dark: #33a06f;
  --vt-c-green-darker: #155f3e;
  --vt-c-blue: #3b8eed;
  --vt-c-blue-light: #549ced;
  --vt-c-blue-lighter: #50a2ff;
  --vt-c-blue-dark: #3468a3;
  --vt-c-blue-darker: #255489;
  --vt-c-yellow: #ffc517;
  --vt-c-yellow-light: #ffe417;
  --vt-c-yellow-lighter: #ffff17;
  --vt-c-yellow-dark: #e0ad15;
  --vt-c-yellow-darker: #bc9112;
  --vt-c-red: #ed3c50;
  --vt-c-red-light: #f43771;
  --vt-c-red-lighter: #fd1d7c;
  --vt-c-red-dark: #cd2d3f;
  --vt-c-red-darker: #ab2131;
  --vt-c-purple: #de41e0;
  --vt-c-purple-light: #e936eb;
  --vt-c-purple-lighter: #f616f8;
  --vt-c-purple-dark: #823c83;
  --vt-c-purple-darker: #602960
}

:root {
  --vt-c-bg: var(--vt-c-white);
  --vt-c-bg-soft: var(--vt-c-white-soft);
  --vt-c-bg-mute: var(--vt-c-white-mute);
  --vt-c-divider: var(--vt-c-divider-light-1);
  --vt-c-divider-light: var(--vt-c-divider-light-2);
  --vt-c-divider-inverse: var(--vt-c-divider-dark-1);
  --vt-c-divider-inverse-light: var(--vt-c-divider-dark-2);
  --vt-c-text-1: var(--vt-c-text-light-1);
  --vt-c-text-2: var(--vt-c-text-light-2);
  --vt-c-text-3: var(--vt-c-text-light-3);
  --vt-c-text-4: var(--vt-c-text-light-4);
  --vt-c-text-code: var(--vt-c-text-light-code);
  --vt-c-text-inverse-1: var(--vt-c-text-dark-1);
  --vt-c-text-inverse-2: var(--vt-c-text-dark-2);
  --vt-c-text-inverse-3: var(--vt-c-text-dark-3);
  --vt-c-text-inverse-4: var(--vt-c-text-dark-4);
  --vt-c-brand: var(--vt-c-green);
  --vt-c-brand-light: var(--vt-c-green-light);
  --vt-c-brand-dark: var(--vt-c-green-dark);
  --vt-c-brand-highlight: var(--vt-c-brand-dark)
}

.dark {
  --vt-c-bg: var(--vt-c-black);
  --vt-c-bg-soft: var(--vt-c-black-soft);
  --vt-c-bg-mute: var(--vt-c-black-mute);
  --vt-c-divider: var(--vt-c-divider-dark-1);
  --vt-c-divider-light: var(--vt-c-divider-dark-2);
  --vt-c-divider-inverse: var(--vt-c-divider-light-1);
  --vt-c-divider-inverse-light: var(--vt-c-divider-light-2);
  --vt-c-text-1: var(--vt-c-text-dark-1);
  --vt-c-text-2: var(--vt-c-text-dark-2);
  --vt-c-text-3: var(--vt-c-text-dark-3);
  --vt-c-text-4: var(--vt-c-text-dark-4);
  --vt-c-text-code: var(--vt-c-text-dark-code);
  --vt-c-text-inverse-1: var(--vt-c-text-light-1);
  --vt-c-text-inverse-2: var(--vt-c-text-light-2);
  --vt-c-text-inverse-3: var(--vt-c-text-light-3);
  --vt-c-text-inverse-4: var(--vt-c-text-light-4);
  --vt-c-brand-highlight: var(--vt-c-brand-light)
}

:root {
  --vt-font-family-base: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  --vt-font-family-mono: Menlo, Monaco, Consolas, "Courier New", monospace
}

:root {
  --vt-shadow-1: 0 1px 2px rgba(0, 0, 0, .04), 0 1px 2px rgba(0, 0, 0, .06);
  --vt-shadow-2: 0 3px 12px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07);
  --vt-shadow-3: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
  --vt-shadow-4: 0 14px 44px rgba(0, 0, 0, .12), 0 3px 9px rgba(0, 0, 0, .12);
  --vt-shadow-5: 0 18px 56px rgba(0, 0, 0, .16), 0 4px 12px rgba(0, 0, 0, .16)
}

:root {
  --vt-nav-height: 55px
} */
</style>

<style scoped>

section {
  padding: 42px 32px;
}

#hero {
  padding: 96px 32px;
  text-align: center;
}

.tagline {
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0px auto;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

html:not(.dark) .accent,
.dark .tagline {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  max-width: 960px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 22px;
  margin: 24px auto 40px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  margin-right: 18px;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.actions .get-started:hover {
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.actions .get-started,
.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .get-started:hover,
.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .get-started:hover,
.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}

#highlights {
  max-width: 960px;
  margin: 0px auto;
  color: var(--vt-c-text-2);
}

#highlights h2 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: -0.4px;
  color: var(--vt-c-text-1);
  transition: color 0.5s;
  margin-bottom: 0.75em;
}

#highlights p {
  font-weight: 400;
  font-size: 15px;
}

#highlights .vt-box {
  background-color: transparent;
}

#sponsors {
  max-width: 900px;
  margin: 0px auto;
}

#sponsors h2 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1em;
}

#sponsors .sponsor-container {
  margin-bottom: 3em;
}

@media (max-width: 960px) {
  .tagline {
    font-size: 64px;
    letter-spacing: -0.5px;
  }
  .description {
    font-size: 18px;
    margin-bottom: 48px;
  }
}

@media (max-width: 768px) {
  .tagline {
    font-size: 48px;
    letter-spacing: -0.5px;
  }
}

@media (max-width: 576px) {
  #hero {
    padding: 64px 32px;
  }
  .description {
    font-size: 16px;
    margin: 18px 0 30px;
  }
  #special-sponsor {
    flex-direction: column;
  }
  #special-sponsor img {
    height: 36px;
    margin: 8px 0;
  }
  #special-sponsor span {
    text-align: center !important;
  }
  #highlights h3 {
    margin-bottom: 0.6em;
  }
  #highlights .vt-box {
    padding: 20px 36px;
  }
  .actions a {
    margin: 0.5em 0;
  }
}

@media (max-width: 370px) {
  .tagline {
    font-size: 36px;
  }
}
</style>

<style scoped>
.loading {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 auto;
}

.shape {
  width: 13px;
  height: 13px;
  position: absolute;
  border-radius: 2px;
}

.shape-1 {
  background-color: #1875e5;
  left: 0;
  animation: animationShape1 2s linear infinite;
}

.shape-2 {
  background-color: #c5523f;
  right: 0;
  animation: animationShape2 2s linear infinite;
}

.shape-3 {
  background-color: #499255;
  bottom: 0;
  animation: animationShape3 2s linear infinite;
}

.shape-4 {
  background-color: #f2b736;
  right: 0;
  bottom: 0;
  animation: animationShape4 2s linear infinite;
}

@keyframes animationShape1 {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translateX(17px);
  }

  50% {
    transform: translate(17px, 17px);
  }

  75% {
    transform: translate(0, 17px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes animationShape2 {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translateY(17px);
  }

  50% {
    transform: translate(-17px, 17px);
  }

  75% {
    transform: translate(-17px, 0);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes animationShape3 {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translateY(-17px);
  }

  50% {
    transform: translate(17px, -17px);
  }

  75% {
    transform: translate(17px, 0);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes animationShape4 {
  0% {
    transform: translate(0);
  }

  25% {
    transform: translateX(-17px);
  }

  50% {
    transform: translate(-17px, -17px);
  }

  75% {
    transform: translate(0, -17px);
  }

  100% {
    transform: translate(0);
  }
}
</style>
