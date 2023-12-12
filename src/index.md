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
    <img src="/images/blog.gif" />
  </p>
  <p class="description">
    <div class="loading" v-if="!sentence">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>
    <template v-else>
      {{ sentence }}
    </template>
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
