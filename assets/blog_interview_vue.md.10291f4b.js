import{_ as s,c as a,o as n,d as l}from"./app.5a551424.js";const d=JSON.parse('{"title":"VUE \u9762\u8BD5\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53CC\u5411\u6570\u636E\u7ED1\u5B9A","slug":"\u53CC\u5411\u6570\u636E\u7ED1\u5B9A","link":"#\u53CC\u5411\u6570\u636E\u7ED1\u5B9A","children":[]},{"level":2,"title":"vue \u9879\u76EE\u4F18\u5316","slug":"vue-\u9879\u76EE\u4F18\u5316","link":"#vue-\u9879\u76EE\u4F18\u5316","children":[]},{"level":2,"title":"vue \u4E2D key \u503C\u7684\u4F5C\u7528","slug":"vue-\u4E2D-key-\u503C\u7684\u4F5C\u7528","link":"#vue-\u4E2D-key-\u503C\u7684\u4F5C\u7528","children":[]},{"level":2,"title":"computed \u548C watch \u7684\u533A\u522B","slug":"computed-\u548C-watch-\u7684\u533A\u522B","link":"#computed-\u548C-watch-\u7684\u533A\u522B","children":[]},{"level":2,"title":"vuex \u6A21\u5757\u5316\u540E, \u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\u5982\u4F55\u8C03\u7528\u5176\u4ED6\u6A21\u5757\u7684\u5185\u5BB9","slug":"vuex-\u6A21\u5757\u5316\u540E-\u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\u5982\u4F55\u8C03\u7528\u5176\u4ED6\u6A21\u5757\u7684\u5185\u5BB9","link":"#vuex-\u6A21\u5757\u5316\u540E-\u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\u5982\u4F55\u8C03\u7528\u5176\u4ED6\u6A21\u5757\u7684\u5185\u5BB9","children":[]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528 v-model","slug":"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528-v-model","link":"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528-v-model","children":[]},{"level":2,"title":"nextTick \u7528\u9014","slug":"nexttick-\u7528\u9014","link":"#nexttick-\u7528\u9014","children":[]}],"relativePath":"blog/interview/vue.md"}'),p={name:"blog/interview/vue.md"},e=l(`<h1 id="vue-\u9762\u8BD5\u95EE\u9898" tabindex="-1">VUE \u9762\u8BD5\u95EE\u9898 <a class="header-anchor" href="#vue-\u9762\u8BD5\u95EE\u9898" aria-hidden="true">#</a></h1><h2 id="\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" tabindex="-1">\u53CC\u5411\u6570\u636E\u7ED1\u5B9A <a class="header-anchor" href="#\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a></h2><p>vue \u91C7\u7528 <b>\u6570\u636E\u52AB\u6301</b> \u7ED3\u5408 <b>\u53D1\u5E03-\u8BA2\u9605\u8005\u6A21\u5F0F</b> \u7684\u65B9\u5F0F, \u901A\u8FC7 <span class="important">Object.defineProperty()</span> \u6765\u52AB\u6301\u5404\u4E2A\u5C5E\u6027\u7684 <b>setter</b> \u4EE5\u53CA <b>getter</b>, \u5728\u6570\u636E\u53D8\u52A8\u65F6\u53D1\u5E03\u6D88\u606F\u7ED9\u8BA2\u9605\u8005\u89E6\u53D1\u76F8\u5E94\u7684\u76D1\u542C\u56DE\u8C03.</p><h2 id="vue-\u9879\u76EE\u4F18\u5316" tabindex="-1">vue \u9879\u76EE\u4F18\u5316 <a class="header-anchor" href="#vue-\u9879\u76EE\u4F18\u5316" aria-hidden="true">#</a></h2><ul><li>\u5173\u95ED sourceMap: \u8FDB\u884C\u6253\u5305\u6E90\u7801\u4E0A\u7EBF\u73AF\u8282\uFF0C\u9700\u8981\u5BF9\u9879\u76EE\u5F00\u53D1\u73AF\u8282\u7684\u5F00\u53D1\u63D0\u793A\u4FE1\u606F\u4EE5\u53CA\u9519\u8BEF\u4FE1\u606F\u8FDB\u884C\u5C4F\u853D, \u4E00\u65B9\u9762\u53EF\u4EE5\u51CF\u5C11\u4E0A\u7EBF\u4EE3\u7801\u5305\u7684\u5927\u5C0F; \u53E6\u4E00\u65B9\u9762\u63D0\u9AD8\u7CFB\u7EDF\u7684\u5B89\u5168\u6027.</li><li>\u5BF9\u9879\u76EE\u4E2D\u7684 js/css/svg \u7B49\u8D44\u6E90\u5F00\u542F gzip \u538B\u7F29</li><li>\u8DEF\u7531\u61D2\u52A0\u8F7D:</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">path</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/views/user/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ul><li>\u7B2C\u4E09\u65B9\u63D2\u4EF6\u6309\u9700\u5F15\u5165</li><li>\u4EE3\u7801\u4F18\u5316 <ul><li>v-if \u548C v-show \u9009\u62E9\u8C03\u7528: v-if \u662F\u61D2\u52A0\u8F7D\uFF0C\u5F53\u72B6\u6001\u4E3A true \u65F6\u624D\u4F1A\u52A0\u8F7D, \u5E76\u4E14\u4E3A false \u65F6\u4E0D\u4F1A\u5360\u7528\u5E03\u5C40\u7A7A\u95F4; v-show \u662F\u65E0\u8BBA\u72B6\u6001\u662F true \u6216\u8005\u662F false, \u90FD\u4F1A\u8FDB\u884C\u6E32\u67D3\uFF0C\u5E76\u5BF9\u5E03\u5C40\u5360\u636E\u7A7A\u95F4\u5BF9\u4E8E\u5728\u9879\u76EE\u4E2D, \u9700\u8981\u9891\u7E41\u8C03\u7528, \u4E0D\u9700\u8981\u6743\u9650\u7684\u663E\u793A\u9690\u85CF\uFF0C\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 v-show, \u53EF\u4EE5\u51CF\u5C11\u7CFB\u7EDF\u7684\u5207\u6362\u5F00\u9500.</li><li>\u5217\u8868\u5FAA\u73AF\u65F6\u4E3A item \u8BBE\u7F6E key \u503C</li><li>\u51CF\u5C11 watch \u6570\u636E: watch \u76D1\u542C\u7684\u6570\u636E\u8F83\u5927\u65F6, \u7CFB\u7EDF\u4F1A\u51FA\u73B0\u5361\u987F</li><li>\u7CFB\u7EDF\u56FE\u7247\u8D44\u6E90\u6309\u9700\u52A0\u8F7D</li></ul></li><li>\u63D0\u53D6 css \u6587\u4EF6: vue-cli \u811A\u624B\u67B6\u4F7F\u7528\u4E86 extract-text-webpack-plugin \u63D2\u4EF6,\u53EF\u4EE5\u5C06\u653E\u5728 head \u4E2D\u7684 style \u63D0\u53D6\u6210 css \u6587\u4EF6\u5F15\u5165</li></ul><h2 id="vue-\u4E2D-key-\u503C\u7684\u4F5C\u7528" tabindex="-1"><a href="https://cn.vuejs.org/v2/api/#key" target="_blank" rel="noreferrer">vue \u4E2D key \u503C\u7684\u4F5C\u7528</a> <a class="header-anchor" href="#vue-\u4E2D-key-\u503C\u7684\u4F5C\u7528" aria-hidden="true">#</a></h2><ul><li>v-for \u5217\u8868\u5FAA\u73AF\u4E2D\u7684 key: \u4F5C\u7528\u5C31\u662F\u5728\u66F4\u65B0\u7EC4\u4EF6\u65F6\u5224\u65AD\u4E24\u4E2A\u8282\u70B9\u662F\u5426\u76F8\u540C\u3002\u76F8\u540C\u5C31\u590D\u7528\uFF0C\u4E0D\u76F8\u540C\u5C31\u5220\u9664\u65E7\u7684\u521B\u5EFA\u65B0\u7684.</li><li>\u5176\u4ED6\u4F5C\u7528: \u7528\u4E8E\u5F3A\u5236\u66F4\u65B0\u5143\u7D20/\u7EC4\u4EF6\u800C\u4E0D\u662F\u91CD\u590D\u4F7F\u7528 <ul><li>\u89E6\u53D1\u8FC7\u5EA6</li><li>\u5B8C\u6574\u5730\u89E6\u53D1\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50</li></ul></li></ul><p>\u4F8B\u5982:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">{{ text }}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">transition</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5F53 text \u53D1\u751F\u6539\u53D8\u65F6, span \u4F1A\u968F\u65F6\u88AB\u66F4\u65B0, \u56E0\u6B64\u4F1A\u89E6\u53D1\u8FC7\u6E21</p><h2 id="computed-\u548C-watch-\u7684\u533A\u522B" tabindex="-1">computed \u548C watch \u7684\u533A\u522B <a class="header-anchor" href="#computed-\u548C-watch-\u7684\u533A\u522B" aria-hidden="true">#</a></h2><p>computed \u662F\u8BA1\u7B97\u5C5E\u6027,\u4E5F\u5C31\u662F\u8BA1\u7B97\u503C,\u5B83\u66F4\u591A\u7528\u4E8E\u8BA1\u7B97\u503C\u7684\u573A\u666F</p><p>computed \u5177\u6709\u7F13\u5B58\u6027,computed \u7684\u503C\u5728 getter \u6267\u884C\u540E\u662F\u4F1A\u7F13\u5B58\u7684\uFF0C\u53EA\u6709\u5728\u5B83\u4F9D\u8D56\u7684\u5C5E\u6027\u503C\u6539\u53D8\u4E4B\u540E\uFF0C\u4E0B\u4E00\u6B21\u83B7\u53D6 computed \u7684\u503C\u65F6\u624D\u4F1A\u91CD\u65B0\u8C03\u7528\u5BF9\u5E94\u7684 getter \u6765\u8BA1\u7B97</p><p>computed \u9002\u7528\u4E8E\u8BA1\u7B97\u6BD4\u8F83\u6D88\u8017\u6027\u80FD\u7684\u8BA1\u7B97\u573A\u666F</p><p>watch \u66F4\u591A\u7684\u662F\u300C\u89C2\u5BDF\u300D\u7684\u4F5C\u7528,\u7C7B\u4F3C\u4E8E\u67D0\u4E9B\u6570\u636E\u7684\u76D1\u542C\u56DE\u8C03,\u7528\u4E8E\u89C2\u5BDF props $emit \u6216\u8005\u672C\u7EC4\u4EF6\u7684\u503C,\u5F53\u6570\u636E\u53D8\u5316\u65F6\u6765\u6267\u884C\u56DE\u8C03\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C, \u65E0\u7F13\u5B58\u6027, \u9875\u9762\u91CD\u65B0\u6E32\u67D3\u65F6\u503C\u4E0D\u53D8\u5316\u4E5F\u4F1A\u6267\u884C</p><p>\u6211\u4EEC\u8981\u8FDB\u884C\u6570\u503C\u8BA1\u7B97, \u800C\u4E14\u4F9D\u8D56\u4E8E\u5176\u4ED6\u6570\u636E, \u90A3\u4E48\u628A\u8FD9\u4E2A\u6570\u636E\u8BBE\u8BA1\u4E3A computed, \u5982\u679C\u4F60\u9700\u8981\u5728\u67D0\u4E2A\u6570\u636E\u53D8\u5316\u65F6\u505A\u4E00\u4E9B\u4E8B\u60C5, \u4F7F\u7528 watch \u6765\u89C2\u5BDF\u8FD9\u4E2A\u6570\u636E\u53D8\u5316</p><h2 id="vuex-\u6A21\u5757\u5316\u540E-\u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\u5982\u4F55\u8C03\u7528\u5176\u4ED6\u6A21\u5757\u7684\u5185\u5BB9" tabindex="-1">vuex \u6A21\u5757\u5316\u540E, \u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\u5982\u4F55\u8C03\u7528\u5176\u4ED6\u6A21\u5757\u7684\u5185\u5BB9 <a class="header-anchor" href="#vuex-\u6A21\u5757\u5316\u540E-\u5F00\u542F\u547D\u540D\u7A7A\u95F4\u540E\u5982\u4F55\u8C03\u7528\u5176\u4ED6\u6A21\u5757\u7684\u5185\u5BB9" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u9632\u6B62 store \u5BF9\u8C61\u7531\u4E8E\u9879\u76EE\u590D\u6742\u65F6\u53D8\u5F97\u81C3\u80BF, \u53EF\u4EE5\u5C06 store \u5206\u5272\u6210\u4E0D\u540C\u6A21\u5757 <a href="https://vuex.vuejs.org/zh/guide/modules.html" target="_blank" rel="noreferrer">module</a></p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B: \u4E0D\u540C module \u4E0B\u7684 action/mutation/getter \u662F\u6CE8\u518C\u5728\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u2014\u2014\u2014\u2014\u8FD9\u6837\u4F7F\u5F97\u591A\u6A21\u5757\u80FD\u591F\u5BF9\u540C\u4E00 mutation \u6216 action \u4F5C\u51FA\u54CD\u5E94,\u4F46\u662F\u6240\u6709\u6A21\u5757\u4E0B\u7684 action/mutation/getter \u90FD\u5728\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u4E0B\u4F1A\u5BFC\u81F4\u4EE3\u7801\u7684\u5C01\u88C5\u5EA6\u548C\u53EF\u7528\u5EA6\u964D\u4F4E, \u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0 <span style="background-color:rgba(27,31,35,.05);color:#476582;padding:.25rem .5rem;">namespaced: true</span>\u65B9\u5F0F\u4F7F\u5176\u6210\u4E3A\u81EA\u5E26\u547D\u540D\u7A7A\u95F4\u7684\u6A21\u5757. \u5F53\u6A21\u5757\u88AB\u6CE8\u518C\u540E\uFF0C\u5B83\u7684\u6240\u6709 getter\u3001action \u53CA mutation \u90FD\u4F1A\u81EA\u52A8\u6839\u636E\u6A21\u5757\u6CE8\u518C\u7684\u8DEF\u5F84\u8C03\u6574\u547D\u540D. <a href="https://segmentfault.com/a/1190000009434398" target="_blank" rel="noreferrer">\u8BE6\u7EC6\u4F8B\u5B50</a></p><h2 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528-v-model" tabindex="-1">\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528 v-model <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528-v-model" aria-hidden="true">#</a></h2><p><span class="important">v-model</span> \u7684\u8BED\u6CD5\u7CD6\u5982\u4E0B\u6240\u793A\u5305\u88C5\u800C\u6210:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">inpu</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">something</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@:input</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">something = $event.target.value</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">inpu</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5F53\u5728\u7EC4\u4EF6\u4E0A\u4F7F\u7528\u5982\u4E0B:</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">custom-input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:value</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">something</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@input</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">value =&gt; { something = value }</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">custom-input</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u56E0\u6B64, \u5E26\u6709 <span class="important">v-model</span> \u7684\u7EC4\u4EF6\u7684\u6838\u5FC3\u56E0\u8BE5\u662F:</p><ul><li>\u5E26\u6709 v-model \u7684\u7236\u7EC4\u4EF6\u901A\u8FC7\u7ED1\u5B9A\u7684 value \u503C\uFF08\u5373 v-model \u7684\u7ED1\u5B9A\u503C\uFF09\u4F20\u7ED9\u5B50\u7EC4\u4EF6\uFF0C\u5B50\u7EC4\u4EF6\u901A\u8FC7 prop \u63A5\u6536\u4E00\u4E2A value</li><li>\u5B50\u7EC4\u4EF6\u5229\u7528 $emit \u89E6\u53D1 input \u4E8B\u4EF6\uFF0C\u5E76\u4F20\u5165\u65B0\u503C value \u7ED9\u7236\u7EC4\u4EF6</li></ul><p><a href="https://www.cnblogs.com/coffeelovetea/p/8326115.html" target="_blank" rel="noreferrer">\u5177\u4F53\u793A\u4F8B</a></p><h2 id="nexttick-\u7528\u9014" tabindex="-1">nextTick \u7528\u9014 <a class="header-anchor" href="#nexttick-\u7528\u9014" aria-hidden="true">#</a></h2><p>vue \u5728\u4FEE\u6539\u6570\u636E\u540E, \u89C6\u56FE\u5E76\u4E0D\u4F1A\u5B9E\u65F6\u66F4\u65B0, \u800C\u662F\u7B49\u540C\u4E00\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u6240\u6709\u6570\u636E\u53D8\u5316\u5B8C\u6210\u4E4B\u540E, \u518D\u7EDF\u4E00\u8FDB\u884C\u89C6\u56FE\u66F4\u65B0</p><p>\u4F8B\u5B50:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//\u6539\u53D8\u6570\u636E</span></span>
<span class="line"><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">changed</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u60F3\u8981\u7ACB\u5373\u4F7F\u7528\u66F4\u65B0\u540E\u7684DOM\u3002\u8FD9\u6837\u4E0D\u884C\uFF0C\u56E0\u4E3A\u8BBE\u7F6Emessage\u540EDOM\u8FD8\u6CA1\u6709\u66F4\u65B0</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u5E76\u4E0D\u4F1A\u5F97\u5230&#39;changed&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">//\u8FD9\u6837\u53EF\u4EE5\uFF0CnextTick\u91CC\u9762\u7684\u4EE3\u7801\u4F1A\u5728DOM\u66F4\u65B0\u540E\u6267\u884C</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">textContent</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//\u53EF\u4EE5\u5F97\u5230&#39;changed&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u56E0\u6B64, nextTick \u7684\u5E94\u7528\u573A\u666F: \u9700\u8981\u5728\u89C6\u56FE\u66F4\u65B0\u4E4B\u540E\uFF0C\u57FA\u4E8E\u65B0\u7684\u89C6\u56FE\u8FDB\u884C\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u7528 nextTick</p><p>\u5982:</p><p>\u53EF\u4EE5\u5C06\u4EE5\u4E0B\u64CD\u4F5C:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">showsou</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">showit</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//\u4FEE\u6539 v-show</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keywords</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#F07178;">()  </span><span style="color:#676E95;">//\u5728\u7B2C\u4E00\u4E2A tick \u91CC\uFF0C\u83B7\u53D6\u4E0D\u5230\u8F93\u5165\u6846\uFF0C\u81EA\u7136\u4E5F\u83B7\u53D6\u4E0D\u5230\u7126\u70B9</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539\u4E3A:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">showsou</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">showit</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$nextTick</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// DOM \u66F4\u65B0\u4E86</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keywords</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">focus</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://segmentfault.com/a/1190000012861862" target="_blank" rel="noreferrer">\u8BE6\u7EC6\u6587\u7AE0\u8BF7\u89C1</a></p>`,40),o=[e];function t(c,r,F,i,y,D){return n(),a("div",null,o)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
