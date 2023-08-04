import{_ as s,o as n,c as a,d as p}from"./app.b0a58066.js";const i=JSON.parse('{"title":"Vue 2.0.0-alpha.1 \u6E90\u7801\u9605\u8BFB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5165\u53E3\u6587\u4EF6","slug":"\u5165\u53E3\u6587\u4EF6","link":"#\u5165\u53E3\u6587\u4EF6","children":[{"level":3,"title":"web-runtime.js","slug":"web-runtime-js","link":"#web-runtime-js","children":[]},{"level":3,"title":"src/core/index.js","slug":"src-core-index-js","link":"#src-core-index-js","children":[]},{"level":3,"title":"src/core/instance/index.js","slug":"src-core-instance-index-js","link":"#src-core-instance-index-js","children":[]}]},{"level":2,"title":"initMixin \u65B9\u6CD5","slug":"initmixin-\u65B9\u6CD5","link":"#initmixin-\u65B9\u6CD5","children":[]}],"relativePath":"blog/article/2023/1.md","lastUpdated":1680576945000}'),l={name:"blog/article/2023/1.md"},o=p(`<h1 id="vue-2-0-0-alpha-1-\u6E90\u7801\u9605\u8BFB" tabindex="-1">Vue 2.0.0-alpha.1 \u6E90\u7801\u9605\u8BFB <a class="header-anchor" href="#vue-2-0-0-alpha-1-\u6E90\u7801\u9605\u8BFB" aria-hidden="true">#</a></h1><p>2.0.0-alpha.1 \u6E90\u7801\u76EE\u5F55\u5982\u4E0B\uFF1A</p><details class="details custom-block"><summary>vue 2.0.0-alpha.1 \u6E90\u7801\u76EE\u5F55</summary><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">\u{1F4E6}vue 2.0.0-alpha.1</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}.git</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}branches</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}hooks</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}applypatch-msg.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}commit-msg.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}fsmonitor-watchman.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}post-update.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}pre-applypatch.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}pre-commit.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}pre-push.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}pre-rebase.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}pre-receive.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}prepare-commit-msg.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}update.sample</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}info</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}exclude</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}logs</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}refs</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}heads</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}main</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}tag-2.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}tag_0.6</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4C2}remotes</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4C2}origin</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}objects</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}info</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4C2}pack</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}pack-03e96769417a03bc400fdad635674977e4f99a2b.idx</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}pack-03e96769417a03bc400fdad635674977e4f99a2b.pack</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}refs</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}heads</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}main</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}tag-2.0.0</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}tag_0.6</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}remotes</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4C2}origin</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4C2}tags</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}config</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}description</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}index</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4DC}packed-refs</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}benchmarks</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}big-table</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}demo.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}style.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}dbmon</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}lib</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}bootstrap.min.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}memory-stats.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}monitor.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}styles.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}ENV.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}app.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}reorder-list</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}ssr</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}README.md</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}common.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}renderToStream.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}renderToString.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4C2}svg</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}build</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}alias.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}build.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}ci.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}karma.base.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}karma.cover.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}karma.dev.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}karma.sauce.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}karma.unit.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}nightwatch.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}release.sh</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}webpack.compiler.dev.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}webpack.dist.dev.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}webpack.dist.dev.entry.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}webpack.ssr.dev.config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4DC}webpack.ssr.dev.entry.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}dist</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}vue.common.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}vue.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}vue.js.map</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4DC}vue.min.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}examples</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}commits</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}app.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}elastic-header</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}style.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}firebase</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}app.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}style.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}grid</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}grid.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}style.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}markdown</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}style.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}modal</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}style.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}select2</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}svg</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}style.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}svg.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}todomvc</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}app.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}routes.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}store.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}director</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4C2}build</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}director.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4C2}todomvc-app-css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}index.css</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}perf.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}readme.md</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4C2}tree</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.html</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}tree.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}flow</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}compiler.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}component.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}global-api.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4DC}options.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4DC}vnode.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}packages</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}vue-server-renderer</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4C2}vue-template-compiler</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}src</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}compiler</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}directives</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}bind.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}ref.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}parser</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}entity-decoder.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}filter-parser.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}html-parser.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}sfc-parser.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}text-parser.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}codegen.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}error-detector.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}events.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}helpers.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}optimizer.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}core</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}components</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}keep-alive.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}global-api</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}assets.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}extend.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}mixin.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}use.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}instance</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}events.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}init.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}lifecycle.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}proxy.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}render.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}state.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}observer</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}array.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}dep.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}scheduler.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}watcher.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}util</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}debug.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}env.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}lang.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}options.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}props.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}vdom</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}modules</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}directives.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}ref.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}create-component.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}create-element.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}helpers.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}patch.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}vnode.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}config.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}entries</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}web-compiler.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}web-runtime-with-compiler.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}web-runtime.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}web-server-renderer.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}platforms</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4C2}web</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}compiler</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}directives</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}html.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}model.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}text.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}modules</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}class.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}style.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}transition.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}runtime</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}components</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}transition-control.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}directives</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}model.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}show.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}modules</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}attrs.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}class.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}events.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}props.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}style.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}transition.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}class-util.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}node-ops.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}patch.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}server</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}directives</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}show.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4C2}modules</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}attrs.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}class.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}style.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4C2}util</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}attrs.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}class.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}element.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}server</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}create-renderer.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}render-stream.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}render.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4C2}shared</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}util.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4C2}test</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}e2e</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}custom-assertions</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}attributePresent.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}checked.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}count.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}evaluate.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}focused.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}hasHTML.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}notVisible.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}custom-commands</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}dblClick.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}waitFor.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}specs</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}commits.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}grid.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}markdown.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}modal.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}select2.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}svg.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4DC}todomvc.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4DC}tree.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}.eslintrc</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}runner.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}helpers</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}.eslintrc</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}classlist.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}to-equal.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}to-have-been-warned.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}trigger-event.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}vdom.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}wait-for-update.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2523 \u{1F4C2}ssr</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}.eslintrc</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}jasmine.json</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}ssr-env.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}ssr-stream.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}ssr-string.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2517 \u{1F4C2}unit</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}features</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}component</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}component-async.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}component-keep-alive.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}component-slot.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}component.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}directives</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}bind.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}class.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}cloak.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}for.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}html.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}if.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}model-checkbox.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}model-radio.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}model-select.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}model-text.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}on.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}once.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}pre.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}ref.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}show.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}style.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}text.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}filter</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}filter.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}global-api</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}assets.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}compile.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}config.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}extend.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}mixin.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}set-delete.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}use.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}instance</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}methods-events.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}methods-lifecycle.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}methods-watch.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}properties.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}options</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}components.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}computed.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}data.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}delimiters.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}directives.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}el.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}extends.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}lifecycle.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}methods.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}mixins.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}name.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}parent.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}props.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}propsData.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}render.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}template.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}watch.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}render</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}render.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4C2}transition</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}inject-styles.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}transition-mode.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}transition.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4C2}modules</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}compiler</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}codegen.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}optimizer.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}parser.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}sfc-parser.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2523 \u{1F4C2}observer</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}observer.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}scheduler.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}watcher.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2517 \u{1F4C2}vdom</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}modules</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}attrs.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}class.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}directive.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}events.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}props.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}style.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4C2}patch</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}children.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}element.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}hooks.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}hydration.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2523 \u{1F4DC}create-component.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2503 \u2503 \u2517 \u{1F4DC}create-element.spec.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2523 \u{1F4DC}.eslintrc</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2503 \u2503 \u2517 \u{1F4DC}index.js</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4DC}.babelrc</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4DC}.eslintignore</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4DC}.eslintrc</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4DC}.flowconfig</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4DC}.gitignore</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4DC}README.md</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4DC}circle.yml</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2523 \u{1F4DC}package-lock.json</span></span>
<span class="line"><span style="color:#A6ACCD;"> \u2517 \u{1F4DC}package.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div></details><h2 id="\u5165\u53E3\u6587\u4EF6" tabindex="-1">\u5165\u53E3\u6587\u4EF6 <a class="header-anchor" href="#\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a></h2><p>\u4ECE\u6E90\u7801\u7684 <code>package.json</code> \u4E2D\u53EF\u4EE5\u770B\u5230\uFF1A</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">dev</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webpack --watch --config build/webpack.dist.dev.config.js</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>dev \u7684\u5165\u53E3\u6587\u4EF6\u5728 <code>build/webpack.dist.dev.config.js</code>\uFF0Cwebpack \u7684\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\uFF0C\u7136\u540E\u6211\u4EEC\u5B9A\u4F4D\u5230\u8FD9\u4E2A\u6587\u4EF6\u4F1A\u53D1\u73B0\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u7701\u53BB\u4E86\u90E8\u5206\u4EE3\u7801</span></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">entry</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> path</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#A6ACCD;">(__dirname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack.dist.dev.entry.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>entry</code> \u5373\u5165\u53E3\u6587\u4EF6\uFF0C<code>entry</code> \u914D\u7F6E\u7684\u6587\u4EF6\u8DEF\u5F84\u6307\u5411\u7684\u6587\u4EF6\u4E3A\u9879\u76EE\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u6240\u4EE5\u4E0A\u9762\u7684\u4EE3\u7801 <code>path.resolve(__dirname, &#39;webpack.dist.dev.entry.js&#39;)</code> \u8868\u793A\u6211\u4EEC\u7684\u9879\u76EE\u5C06\u4ECE <code>build/webpack.dist.dev.entry.js</code> \u5F00\u59CB\u3002</p><p>\u7136\u540E\u6211\u4EEC\u6253\u5F00 <code>build/webpack.dist.dev.entry.js</code> \u4F1A\u53D1\u73B0\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../src/entries/web-runtime-with-compiler</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">default</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u8FF0\u4EE3\u7801\u5BFC\u51FA\u4E86 <code>src/entries/web-runtime-with-compiler</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u8FD9\u4E2A\u6587\u4EF6\u662F\u6211\u4EEC\u6B63\u5F0F\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u4E0B\u9762\u6211\u4EEC\u5C31\u4ECE\u8BE5\u6587\u4EF6\u5F00\u59CB\u5206\u6790\u3002</p><details class="details custom-block"><summary>src/entries/web-runtime-with-compiler</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* @flow */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./web-runtime</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">warn</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">cached</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">core/util/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">query</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web/util/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">compileToFunctions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web/compiler/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> idToTemplate </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cached</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">query</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">id</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u7F13\u5B58 web-runtime \u7248\u672C\u7684 $mount</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$mount</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Element</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">hydrating</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">query</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u83B7\u53D6\u5B9E\u4F8B\u5316 vue \u65F6\u7684 options</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$options</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// resolve template/el and convert to render function</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5224\u65AD options \u662F\u5426\u6709 render</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6CA1\u6709 render \u7684\u8BDD\uFF0C\u901A\u8FC7 compileToFunctions \u5C06 template \u8F6C\u6362\u6210 render</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u7136\u540E\u518D\u6267\u884C web-runtime \u7248\u672C\u7684 $mount</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">template</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">idToTemplate</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nodeType</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#82AAFF;">warn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">invalid template option:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getOuterHTML</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">render</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">staticRenderFns</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">compileToFunctions</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        delimiters</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">delimiters</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">warn</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">staticRenderFns</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">staticRenderFns</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mount</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hydrating</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Get outerHTML of elements, taking care</span></span>
<span class="line"><span style="color:#676E95;"> * of SVG elements in IE as well.</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getOuterHTML</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Element</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outerHTML</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outerHTML</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">container</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createElement</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">div</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">appendChild</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">cloneNode</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">compile </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> compileToFunctions</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> Vue</span></span>
<span class="line"></span></code></pre></div></details><p>\u4E0A\u8FF0\u4EE3\u7801\u7684\u903B\u8F91\u57FA\u672C\u4E0A\u4E5F\u5F88\u7B80\u5355\uFF0C\u5C31\u662F\u5F15\u5165 <code>web-runtime</code> \u7248\u672C\u7684 vue \u540E\u7F13\u5B58 <code>$mount</code> \u65B9\u6CD5</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> mount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$mount</span></span>
<span class="line"></span></code></pre></div><p>\u7136\u540E\u91CD\u5199 <code>Vue.prototype.$mount</code>\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u91CD\u5199\u7684\u65B9\u6CD5\u4E2D\u5148\u5224\u65AD\u4E86\u5B9E\u4F8B\u5316\u7684 vue \u4E2D\u662F\u5426\u4F20\u5165\u4E86 <code>render</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mount</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hydrating</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u5982\u679C\u6CA1\u6709\u4F20\u5165\u7684\u8BDD\u5219\u5224\u65AD\u5B9E\u4F8B\u5316 vue \u65F6\u65F6\u5019\u4F20\u5165\u4E86 templete\uFF0C\u6709\u7684\u8BDD\u5219\u901A\u8FC7\u4E00\u7CFB\u5217\u65B9\u6CD5\u83B7\u53D6\u5230 templete \u7684\u5185\u5BB9\uFF0C\u6CA1\u6709\u7684\u8BDD\u5219\u83B7\u53D6\u5230\u5B9E\u4F8B\u5316 vue \u65F6\u4F20\u5165\u7684 el \u5916\u90E8\u7684 html \u4E3A templete\uFF0C\u6700\u540E\u901A\u8FC7 <code>compileToFunctions</code> \u65B9\u6CD5\u8F6C\u6362\u4E3A <code>render</code> \u540E\u518D\u8C03\u7528\u7F13\u5B58\u7684 <code>$mount</code> \u65B9\u6CD5\u6302\u8F7D\u3002</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5224\u65AD\u5B9E\u4F8B\u5316 vue \u65F6\u662F\u5426\u4F20\u5165 render</span></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6CA1\u6709\u7684\u8BDD\u901A\u8FC7\u4E00\u4E9B\u5217\u65B9\u6CD5\u5C06 templete \u8F6C\u6210 render</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">template</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">string</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">charAt</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">idToTemplate</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nodeType</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">warn</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">invalid template option:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getOuterHTML</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">template</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">render</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">staticRenderFns</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">compileToFunctions</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">template</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      delimiters</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">delimiters</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">warn</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">staticRenderFns</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">staticRenderFns</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u603B\u7ED3\u800C\u8A00\uFF0C\u5165\u53E3\u6587\u4EF6\u9664\u4E86\u5BFC\u51FA vue \u6587\u4EF6\u5916\uFF0C\u8FD8\u91CD\u5199\u4E86\u6765\u81EA web-runtime \u7684 mount \u65B9\u6CD5\uFF0C\u5176\u4ED6\u7684\u5C31\u6CA1\u6709\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u5B9A\u4F4D\u5230 web-runtime \u6587\u4EF6\u770B\u770B\u6709\u4EC0\u4E48\uFF01</p><h3 id="web-runtime-js" tabindex="-1">web-runtime.js <a class="header-anchor" href="#web-runtime-js" aria-hidden="true">#</a></h3><details class="details custom-block"><summary>src/entries/web-runtime.js</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* @flow */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">core/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">core/config</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">extend</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">noop</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">shared/util</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">patch</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web/runtime/patch</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> platformDirectives </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web/runtime/directives/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> platformComponents </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web/runtime/components/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">query</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isUnknownElement</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">isReservedTag</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mustUseProp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">web/util/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// install platform specific utils</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isUnknownElement </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> isUnknownElement</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isReservedTag </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> isReservedTag</span></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mustUseProp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mustUseProp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// install platform runtime directives &amp; components</span></span>
<span class="line"><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">directives</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> platformDirectives)</span></span>
<span class="line"><span style="color:#82AAFF;">extend</span><span style="color:#A6ACCD;">(Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">components</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> platformComponents)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// install platform patch function</span></span>
<span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__patch__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_isServer </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> noop </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> patch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// wrap mount</span></span>
<span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$mount</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">el</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Element</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#A6ACCD;">hydrating</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">_mount</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">query</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">el</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">hydrating</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> Vue</span></span>
<span class="line"></span></code></pre></div></details><p>\u6253\u5F00\u8FD9\u4E2A\u6587\u4EF6\u4F1A\u53D1\u73B0 vue \u7684\u6838\u5FC3\u4EE3\u7801\u4ECD\u7136\u4E0D\u5728\u8FD9\u91CC\uFF0Cweb-runtime.js \u53EF\u4EE5\u770B\u5230\u662F\u5F15\u5165\u4E86\u6838\u5FC3\u7684 vue \u6A21\u5757\uFF0C\u7136\u540E\u6269\u5C55\u4E86 vue \u7684\u4E00\u4E9B <code>directives</code> \u548C <code>components</code> \u540E\u5BFC\u51FA\u4E86 vue\uFF0C\u6240\u4EE5\u6211\u4EEC\u7EE7\u7EED\u67E5\u770B\u6765\u81EA <code>core/index</code> \u7684\u4EE3\u7801\u3002</p><h3 id="src-core-index-js" tabindex="-1">src/core/index.js <a class="header-anchor" href="#src-core-index-js" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> config </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./config</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initGlobalAPI</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./global-api/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> Vue </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./instance/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">initGlobalAPI</span><span style="color:#A6ACCD;">(Vue)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">defineProperty</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$isServer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_isServer</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">version </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2.0.0-alpha.1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> Vue</span></span>
<span class="line"></span></code></pre></div><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u6587\u4EF6\u4E3B\u8981\u7684\u4F5C\u7528\u662F\u521D\u59CB\u5316\u4E00\u4E9B vue \u7684\u5168\u5C40 api \u7136\u540E\u5BFC\u51FA vue\uFF0C\u4F46\u662F\u5230\u8FD9\u91CC\u4E5F\u4E0D\u662F vue \u6838\u5FC3\u6587\u4EF6\uFF0C\u6240\u4EE5\u6211\u4EEC\u7EE7\u7EED\u5411\u4E0A\u67E5\u627E\u3002</p><h3 id="src-core-instance-index-js" tabindex="-1">src/core/instance/index.js <a class="header-anchor" href="#src-core-instance-index-js" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initMixin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./init</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stateMixin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./state</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">renderMixin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./render</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">eventsMixin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./events</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lifecycleMixin</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lifecycle</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Vue</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">_init</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">initMixin</span><span style="color:#A6ACCD;">(Vue)</span></span>
<span class="line"><span style="color:#82AAFF;">stateMixin</span><span style="color:#A6ACCD;">(Vue)</span></span>
<span class="line"><span style="color:#82AAFF;">eventsMixin</span><span style="color:#A6ACCD;">(Vue)</span></span>
<span class="line"><span style="color:#82AAFF;">lifecycleMixin</span><span style="color:#A6ACCD;">(Vue)</span></span>
<span class="line"><span style="color:#82AAFF;">renderMixin</span><span style="color:#A6ACCD;">(Vue)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> Vue</span></span>
<span class="line"></span></code></pre></div><p>\u975E\u5E38\u6FC0\u52A8\u5728\u8FD9\u91CC\u7EC8\u4E8E\u770B\u5230\u5B9A\u4E49 Vue \u7684\u5730\u65B9\u4E86\uFF01\u4F46\u662F\u4E00\u770B\u8FD9\u91CC\u7684\u4EE3\u7801\u4E5F\u662F\u5F88\u7B80\u6D01\uFF0C\u5C31\u662F\u5B9A\u4E49\u4E86 Vue \u7684\u6784\u9020\u51FD\u6570\uFF0C\u7136\u540E\u628A Vue \u4F20\u5165\u4E0D\u540C\u7684\u51FD\u6570\u53BB\u7ED9 Vue \u7684\u6784\u9020\u51FD\u6570\u539F\u578B\u4E0A\u6DFB\u52A0\u4E0D\u540C\u7684\u65B9\u6CD5\uFF0C\u5728\u6267\u884C <code>new Vue</code> \u7684\u65F6\u5019\u8C03\u7528\u539F\u578B\u4E0A\u7684 <code>this._init</code> \u65B9\u6CD5\u3002</p><h2 id="initmixin-\u65B9\u6CD5" tabindex="-1">initMixin \u65B9\u6CD5 <a class="header-anchor" href="#initmixin-\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u4E0A\u65B9\u4EE3\u7801\u4E2D <code>this._init()</code> \u65B9\u6CD5\u5C31\u662F\u901A\u8FC7 <code>initMixin</code> \u6302\u8F7D\u7684\uFF0C\u6240\u6709\u63A5\u4E0B\u6765\u770B\u770B\u8FD9\u4E2A\u65B9\u6CD5\u3002</p><details class="details custom-block"><summary>src/core/instance/init.js</summary><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/* @flow */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initProxy</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./proxy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./state</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initRender</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./render</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initEvents</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./events</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">initLifecycle</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">callHook</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./lifecycle</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mergeOptions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../util/index</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> uid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initMixin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">Vue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Class</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_init</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// a uid</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_uid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uid</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// a flag to avoid this being observed</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_isVue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// merge options</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_isComponent</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// optimize internal component instantiation</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// since dynamic options merging is pretty slow, and none of the</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// internal component options needs special treatment.</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">initInternalComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">mergeOptions</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">vm</span></span>
<span class="line"><span style="color:#F07178;">      )</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#676E95;">/* istanbul ignore else */</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">initProxy</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_renderProxy</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// expose real self</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_self</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">initLifecycle</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">initEvents</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">callHook</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">init</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">initState</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">callHook</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">created</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">initRender</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initInternalComponent</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">InternalComponentOptions</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">opts</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// doing this because it&#39;s faster than dynamic enumeration.</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parent</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">parent</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">propsData</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">propsData</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_parentVnode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_parentVnode</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_parentListeners</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_parentListeners</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_renderChildren</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_renderChildren</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_componentTag</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_componentTag</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">render</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">staticRenderFns</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">opts</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">staticRenderFns</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></details><p>\u4E0B\u9762\u6211\u4EEC\u4E00\u6B65\u6B65\u5206\u6790 <code>initMixin</code> \u51FD\u6570\u4EE3\u7801~</p><p>\u53EF\u4EE5\u770B\u5230 \u53EA\u505A\u4E86\u4E00\u4EF6\u4E8B\u5C31\u662F\u5728 Vue \u7684\u539F\u578B\u4E0A\u6302\u8F7D\u4E86 <code>_init</code> \u65B9\u6CD5\uFF1A<code>Vue.prototype._init = function (options?: Object) {}</code></p><p>\u7136\u540E\u6211\u4EEC\u4E00\u6B65\u6B65\u770B\u770B <code>Vue.prototype._init</code>:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">_init</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u83B7\u53D6 vue \u7684\u5B9E\u4F8B</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6BCF\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u4F1A\u6709\u4E00\u4E2A uid\uFF0C\u786E\u4FDD\u7EC4\u4EF6\u7684\u552F\u4E00\u6027</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_uid</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">uid</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u8FD9\u91CC\u662F\u4E00\u4E2A\u6807\u8BB0\uFF0C\u7528\u6765\u544A\u8BC9\u76D1\u542C\u8005 vm \u4E0D\u9700\u8981\u54CD\u5E94\u5F0F\uFF0C\u540E\u7EED\u4F1A\u63D0\u5230</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_isVue</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5408\u5E76\u5916\u90E8\u4F20\u5165\u7684 options</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5224\u65AD\u662F\u5426\u662F\u72EC\u7ACB\u7684\u7EC4\u4EF6\uFF0C\u5982\u679C\u662F\u7684\u8BDD\u7279\u6B8A\u5904\u7406</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_isComponent</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// optimize internal component instantiation</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// since dynamic options merging is pretty slow, and none of the</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// internal component options needs special treatment.</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">initInternalComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">mergeOptions</span><span style="color:#F07178;">(</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">vm</span></span>
<span class="line"><span style="color:#F07178;">    )</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;">/* istanbul ignore else */</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">env</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">NODE_ENV</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">initProxy</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_renderProxy</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// expose real self</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_self</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vm</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">initLifecycle</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">initEvents</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">callHook</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">init</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">initState</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">callHook</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">created</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">initRender</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">vm</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,38),e=[o];function c(t,r,y,D,F,A){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
