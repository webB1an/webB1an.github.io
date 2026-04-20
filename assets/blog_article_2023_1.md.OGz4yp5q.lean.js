import{_ as s,c as n,o as a,R as i}from"./chunks/framework.Tt2DsVC6.js";const y=JSON.parse('{"title":"Vue 2.0.0-alpha.1 源码阅读","description":"","frontmatter":{},"headers":[],"relativePath":"blog/article/2023/1.md","filePath":"blog/article/2023/1.md","lastUpdated":1776652025000}'),p={name:"blog/article/2023/1.md"},l=i(`<h1 id="vue-2-0-0-alpha-1-源码阅读" tabindex="-1">Vue 2.0.0-alpha.1 源码阅读 <a class="header-anchor" href="#vue-2-0-0-alpha-1-源码阅读" aria-label="Permalink to &quot;Vue 2.0.0-alpha.1 源码阅读&quot;">​</a></h1><p>2.0.0-alpha.1 源码目录如下：</p><details class="details custom-block"><summary>vue 2.0.0-alpha.1 源码目录</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>📦vue 2.0.0-alpha.1</span></span>
<span class="line"><span> ┣ 📂.git</span></span>
<span class="line"><span> ┃ ┣ 📂branches</span></span>
<span class="line"><span> ┃ ┣ 📂hooks</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜applypatch-msg.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜commit-msg.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜fsmonitor-watchman.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜post-update.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜pre-applypatch.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜pre-commit.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜pre-push.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜pre-rebase.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜pre-receive.sample</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜prepare-commit-msg.sample</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜update.sample</span></span>
<span class="line"><span> ┃ ┣ 📂info</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜exclude</span></span>
<span class="line"><span> ┃ ┣ 📂logs</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂refs</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂heads</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜main</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜tag-2.0.0</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜tag_0.6</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📂remotes</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📂origin</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜HEAD</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜HEAD</span></span>
<span class="line"><span> ┃ ┣ 📂objects</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂info</span></span>
<span class="line"><span> ┃ ┃ ┗ 📂pack</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜pack-03e96769417a03bc400fdad635674977e4f99a2b.idx</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜pack-03e96769417a03bc400fdad635674977e4f99a2b.pack</span></span>
<span class="line"><span> ┃ ┣ 📂refs</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂heads</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜main</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜tag-2.0.0</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜tag_0.6</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂remotes</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📂origin</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜HEAD</span></span>
<span class="line"><span> ┃ ┃ ┗ 📂tags</span></span>
<span class="line"><span> ┃ ┣ 📜HEAD</span></span>
<span class="line"><span> ┃ ┣ 📜config</span></span>
<span class="line"><span> ┃ ┣ 📜description</span></span>
<span class="line"><span> ┃ ┣ 📜index</span></span>
<span class="line"><span> ┃ ┗ 📜packed-refs</span></span>
<span class="line"><span> ┣ 📂benchmarks</span></span>
<span class="line"><span> ┃ ┣ 📂big-table</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜demo.css</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜style.css</span></span>
<span class="line"><span> ┃ ┣ 📂dbmon</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂lib</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜bootstrap.min.css</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜memory-stats.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜monitor.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜styles.css</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜ENV.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜app.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜index.html</span></span>
<span class="line"><span> ┃ ┣ 📂reorder-list</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜index.html</span></span>
<span class="line"><span> ┃ ┣ 📂ssr</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜README.md</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜common.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜renderToStream.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜renderToString.js</span></span>
<span class="line"><span> ┃ ┗ 📂svg</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜index.html</span></span>
<span class="line"><span> ┣ 📂build</span></span>
<span class="line"><span> ┃ ┣ 📜alias.js</span></span>
<span class="line"><span> ┃ ┣ 📜build.js</span></span>
<span class="line"><span> ┃ ┣ 📜ci.sh</span></span>
<span class="line"><span> ┃ ┣ 📜karma.base.config.js</span></span>
<span class="line"><span> ┃ ┣ 📜karma.cover.config.js</span></span>
<span class="line"><span> ┃ ┣ 📜karma.dev.config.js</span></span>
<span class="line"><span> ┃ ┣ 📜karma.sauce.config.js</span></span>
<span class="line"><span> ┃ ┣ 📜karma.unit.config.js</span></span>
<span class="line"><span> ┃ ┣ 📜nightwatch.config.js</span></span>
<span class="line"><span> ┃ ┣ 📜release.sh</span></span>
<span class="line"><span> ┃ ┣ 📜webpack.compiler.dev.config.js</span></span>
<span class="line"><span> ┃ ┣ 📜webpack.dist.dev.config.js</span></span>
<span class="line"><span> ┃ ┣ 📜webpack.dist.dev.entry.js</span></span>
<span class="line"><span> ┃ ┣ 📜webpack.ssr.dev.config.js</span></span>
<span class="line"><span> ┃ ┗ 📜webpack.ssr.dev.entry.js</span></span>
<span class="line"><span> ┣ 📂dist</span></span>
<span class="line"><span> ┃ ┣ 📜vue.common.js</span></span>
<span class="line"><span> ┃ ┣ 📜vue.js</span></span>
<span class="line"><span> ┃ ┣ 📜vue.js.map</span></span>
<span class="line"><span> ┃ ┗ 📜vue.min.js</span></span>
<span class="line"><span> ┣ 📂examples</span></span>
<span class="line"><span> ┃ ┣ 📂commits</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜app.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜index.html</span></span>
<span class="line"><span> ┃ ┣ 📂elastic-header</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜style.css</span></span>
<span class="line"><span> ┃ ┣ 📂firebase</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜app.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜style.css</span></span>
<span class="line"><span> ┃ ┣ 📂grid</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜grid.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜style.css</span></span>
<span class="line"><span> ┃ ┣ 📂markdown</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜style.css</span></span>
<span class="line"><span> ┃ ┣ 📂modal</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜style.css</span></span>
<span class="line"><span> ┃ ┣ 📂select2</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜index.html</span></span>
<span class="line"><span> ┃ ┣ 📂svg</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜style.css</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜svg.js</span></span>
<span class="line"><span> ┃ ┣ 📂todomvc</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜app.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜routes.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜store.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂node_modules</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂director</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📂build</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜director.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📂todomvc-app-css</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜index.css</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜package.json</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜perf.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜readme.md</span></span>
<span class="line"><span> ┃ ┗ 📂tree</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.html</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜tree.js</span></span>
<span class="line"><span> ┣ 📂flow</span></span>
<span class="line"><span> ┃ ┣ 📜compiler.js</span></span>
<span class="line"><span> ┃ ┣ 📜component.js</span></span>
<span class="line"><span> ┃ ┣ 📜global-api.js</span></span>
<span class="line"><span> ┃ ┣ 📜options.js</span></span>
<span class="line"><span> ┃ ┗ 📜vnode.js</span></span>
<span class="line"><span> ┣ 📂packages</span></span>
<span class="line"><span> ┃ ┣ 📂vue-server-renderer</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜package.json</span></span>
<span class="line"><span> ┃ ┗ 📂vue-template-compiler</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜package.json</span></span>
<span class="line"><span> ┣ 📂src</span></span>
<span class="line"><span> ┃ ┣ 📂compiler</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂directives</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜bind.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜ref.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂parser</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜entity-decoder.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜filter-parser.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜html-parser.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜sfc-parser.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜text-parser.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜codegen.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜error-detector.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜events.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜helpers.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜optimizer.js</span></span>
<span class="line"><span> ┃ ┣ 📂core</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂components</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜keep-alive.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂global-api</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜assets.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜extend.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜mixin.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜use.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂instance</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜events.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜init.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜lifecycle.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜proxy.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜render.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜state.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂observer</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜array.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜dep.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜scheduler.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜watcher.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂util</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜debug.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜env.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜lang.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜options.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜props.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂vdom</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂modules</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜directives.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜ref.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜create-component.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜create-element.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜helpers.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜patch.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜vnode.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜config.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜index.js</span></span>
<span class="line"><span> ┃ ┣ 📂entries</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜web-compiler.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜web-runtime-with-compiler.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜web-runtime.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜web-server-renderer.js</span></span>
<span class="line"><span> ┃ ┣ 📂platforms</span></span>
<span class="line"><span> ┃ ┃ ┗ 📂web</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂compiler</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📂directives</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜html.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜model.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜text.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📂modules</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜class.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜style.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜transition.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂runtime</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📂components</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜transition-control.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📂directives</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜model.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜show.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📂modules</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜attrs.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜class.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜events.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜props.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜style.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜transition.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜class-util.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜node-ops.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜patch.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂server</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📂directives</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜show.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📂modules</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜attrs.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜class.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜index.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜style.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📂util</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜attrs.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜class.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜element.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜index.js</span></span>
<span class="line"><span> ┃ ┣ 📂server</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜create-renderer.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜render-stream.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜render.js</span></span>
<span class="line"><span> ┃ ┗ 📂shared</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜util.js</span></span>
<span class="line"><span> ┣ 📂test</span></span>
<span class="line"><span> ┃ ┣ 📂e2e</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂custom-assertions</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜attributePresent.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜checked.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜count.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜evaluate.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜focused.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜hasHTML.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜notVisible.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂custom-commands</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜dblClick.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜waitFor.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂specs</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜commits.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜grid.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜markdown.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜modal.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜select2.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜svg.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📜todomvc.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📜tree.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜.eslintrc</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜runner.js</span></span>
<span class="line"><span> ┃ ┣ 📂helpers</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜.eslintrc</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜classlist.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜to-equal.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜to-have-been-warned.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜trigger-event.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜vdom.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜wait-for-update.js</span></span>
<span class="line"><span> ┃ ┣ 📂ssr</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜.eslintrc</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜jasmine.json</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜ssr-env.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜ssr-stream.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜ssr-string.spec.js</span></span>
<span class="line"><span> ┃ ┗ 📂unit</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂features</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂component</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜component-async.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜component-keep-alive.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜component-slot.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜component.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂directives</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜bind.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜class.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜cloak.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜for.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜html.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜if.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜model-checkbox.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜model-radio.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜model-select.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜model-text.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜on.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜once.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜pre.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜ref.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜show.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜style.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜text.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂filter</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜filter.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂global-api</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜assets.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜compile.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜config.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜extend.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜mixin.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜set-delete.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜use.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂instance</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜methods-events.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜methods-lifecycle.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜methods-watch.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜properties.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂options</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜components.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜computed.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜data.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜delimiters.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜directives.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜el.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜extends.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜lifecycle.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜methods.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜mixins.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜name.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜parent.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜props.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜propsData.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜render.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜template.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜watch.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂render</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜render.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📂transition</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜inject-styles.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜transition-mode.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜transition.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📂modules</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂compiler</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜codegen.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜optimizer.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜parser.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜sfc-parser.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┣ 📂observer</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜observer.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜scheduler.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜watcher.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┗ 📂vdom</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📂modules</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜attrs.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜class.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜directive.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜events.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜props.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜style.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📂patch</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜children.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜element.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┣ 📜hooks.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┃ ┗ 📜hydration.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┣ 📜create-component.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┃ ┃ ┗ 📜create-element.spec.js</span></span>
<span class="line"><span> ┃ ┃ ┣ 📜.eslintrc</span></span>
<span class="line"><span> ┃ ┃ ┗ 📜index.js</span></span>
<span class="line"><span> ┣ 📜.babelrc</span></span>
<span class="line"><span> ┣ 📜.eslintignore</span></span>
<span class="line"><span> ┣ 📜.eslintrc</span></span>
<span class="line"><span> ┣ 📜.flowconfig</span></span>
<span class="line"><span> ┣ 📜.gitignore</span></span>
<span class="line"><span> ┣ 📜README.md</span></span>
<span class="line"><span> ┣ 📜circle.yml</span></span>
<span class="line"><span> ┣ 📜package-lock.json</span></span>
<span class="line"><span> ┗ 📜package.json</span></span></code></pre></div></details><h2 id="入口文件" tabindex="-1">入口文件 <a class="header-anchor" href="#入口文件" aria-label="Permalink to &quot;入口文件&quot;">​</a></h2><p>从源码的 <code>package.json</code> 中可以看到：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;webpack --watch --config build/webpack.dist.dev.config.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>dev 的入口文件在 <code>build/webpack.dist.dev.config.js</code>，webpack 的一个配置文件，然后我们定位到这个文件会发现以下代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 省去了部分代码</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  entry: path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(__dirname, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;webpack.dist.dev.entry.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>entry</code> 即入口文件，<code>entry</code> 配置的文件路径指向的文件为项目的入口文件，所以上面的代码 <code>path.resolve(__dirname, &#39;webpack.dist.dev.entry.js&#39;)</code> 表示我们的项目将从 <code>build/webpack.dist.dev.entry.js</code> 开始。</p><p>然后我们打开 <code>build/webpack.dist.dev.entry.js</code> 会发现以下代码：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;../src/entries/web-runtime-with-compiler&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;default&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>上述代码导出了 <code>src/entries/web-runtime-with-compiler</code>，也就是说这个文件是我们正式的入口文件，下面我们就从该文件开始分析。</p><details class="details custom-block"><summary>src/entries/web-runtime-with-compiler</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* @flow */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./web-runtime&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { warn, cached } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;core/util/index&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { query } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;web/util/index&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { compileToFunctions } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;web/compiler/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> idToTemplate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> cached</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el.innerHTML</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 缓存 web-runtime 版本的 $mount</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$mount</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$mount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  hydrating</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  el </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 获取实例化 vue 时的 options</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$options</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // resolve template/el and convert to render function</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 判断 options 是否有 render</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 没有 render 的话，通过 compileToFunctions 将 template 转换成 render</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 然后再执行 web-runtime 版本的 $mount</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">options.render) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options.template</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (template) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (template.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">charAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> idToTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(template)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (template.nodeType) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template.innerHTML</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;production&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;invalid template option:&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (el) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getOuterHTML</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (template) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">staticRenderFns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> compileToFunctions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(template, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        delimiters: options.delimiters,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        warn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      options.render </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> render</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      options.staticRenderFns </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> staticRenderFns</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mount.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, el, hydrating)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Get outerHTML of elements, taking care</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * of SVG elements in IE as well.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getOuterHTML</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (el.outerHTML) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el.outerHTML</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> container</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;div&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    container.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cloneNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> container.innerHTML</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.compile </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> compileToFunctions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue</span></span></code></pre></div></details><p>上述代码的逻辑基本上也很简单，就是引入 <code>web-runtime</code> 版本的 vue 后缓存 <code>$mount</code> 方法</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.$mount</span></span></code></pre></div><p>然后重写 <code>Vue.prototype.$mount</code>：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$mount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {}</span></span></code></pre></div><p>在重写的方法中先判断了实例化的 vue 中是否传入了 <code>render</code></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$mount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">options.render) {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mount.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, el, hydrating)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>如果没有传入的话则判断实例化 vue 时时候传入了 templete，有的话则通过一系列方法获取到 templete 的内容，没有的话则获取到实例化 vue 时传入的 el 外部的 html 为 templete，最后通过 <code>compileToFunctions</code> 方法转换为 <code>render</code> 后再调用缓存的 <code>$mount</code> 方法挂载。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 判断实例化 vue 时是否传入 render</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">options.render) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 没有的话通过一些列方法将 templete 转成 render</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options.template</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (template) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (template.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">charAt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> idToTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(template)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (template.nodeType) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template.innerHTML</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;production&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        warn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;invalid template option:&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> template, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (el) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    template </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getOuterHTML</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (template) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">staticRenderFns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> compileToFunctions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(template, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      delimiters: options.delimiters,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      warn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options.render </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> render</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options.staticRenderFns </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> staticRenderFns</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>总结而言，入口文件除了导出 vue 文件外，还重写了来自 web-runtime 的 mount 方法，其他的就没有了，接下来我们定位到 web-runtime 文件看看有什么！</p><h3 id="web-runtime-js" tabindex="-1">web-runtime.js <a class="header-anchor" href="#web-runtime-js" aria-label="Permalink to &quot;web-runtime.js&quot;">​</a></h3><details class="details custom-block"><summary>src/entries/web-runtime.js</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* @flow */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;core/index&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;core/config&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { extend, noop } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;shared/util&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { patch } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;web/runtime/patch&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> platformDirectives </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;web/runtime/directives/index&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> platformComponents </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;web/runtime/components/index&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { query, isUnknownElement, isReservedTag, mustUseProp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;web/util/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// install platform specific utils</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.config.isUnknownElement </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isUnknownElement</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.config.isReservedTag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isReservedTag</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.config.mustUseProp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> mustUseProp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// install platform runtime directives &amp; components</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue.options.directives, platformDirectives)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">extend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue.options.components, platformComponents)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// install platform patch function</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.__patch__ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config._isServer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> noop </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> patch</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// wrap mount</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$mount</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Element</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  hydrating</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el), hydrating)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue</span></span></code></pre></div></details><p>打开这个文件会发现 vue 的核心代码仍然不在这里，web-runtime.js 可以看到是引入了核心的 vue 模块，然后扩展了 vue 的一些 <code>directives</code> 和 <code>components</code> 后导出了 vue，所以我们继续查看来自 <code>core/index</code> 的代码。</p><h3 id="src-core-index-js" tabindex="-1">src/core/index.js <a class="header-anchor" href="#src-core-index-js" aria-label="Permalink to &quot;src/core/index.js&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./config&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initGlobalAPI } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./global-api/index&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./instance/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initGlobalAPI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;$isServer&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> config._isServer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.version </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;2.0.0-alpha.1&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue</span></span></code></pre></div><p>从上面的代码可以看到这个文件主要的作用是初始化一些 vue 的全局 api 然后导出 vue，但是到这里也不是 vue 核心文件，所以我们继续向上查找。</p><h3 id="src-core-instance-index-js" tabindex="-1">src/core/instance/index.js <a class="header-anchor" href="#src-core-instance-index-js" aria-label="Permalink to &quot;src/core/instance/index.js&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initMixin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./init&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { stateMixin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./state&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { renderMixin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./render&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { eventsMixin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./events&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { lifecycleMixin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./lifecycle&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(options)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initMixin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stateMixin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">eventsMixin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lifecycleMixin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">renderMixin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Vue)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue</span></span></code></pre></div><p>非常激动在这里终于看到定义 Vue 的地方了！但是一看这里的代码也是很简洁，就是定义了 Vue 的构造函数，然后把 Vue 传入不同的函数去给 Vue 的构造函数原型上添加不同的方法，在执行 <code>new Vue</code> 的时候调用原型上的 <code>this._init</code> 方法。</p><h2 id="initmixin-方法" tabindex="-1">initMixin 方法 <a class="header-anchor" href="#initmixin-方法" aria-label="Permalink to &quot;initMixin 方法&quot;">​</a></h2><p>上方代码中 <code>this._init()</code> 方法就是通过 <code>initMixin</code> 挂载的，所有接下来看看这个方法。</p><details class="details custom-block"><summary>src/core/instance/init.js</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* @flow */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initProxy } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./proxy&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initState } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./state&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initRender } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./render&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initEvents } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./events&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { initLifecycle, callHook } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./lifecycle&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { mergeOptions } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../util/index&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initMixin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Vue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_init</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // a uid</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vm._uid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // a flag to avoid this being observed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vm._isVue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // merge options</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options._isComponent) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // optimize internal component instantiation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // since dynamic options merging is pretty slow, and none of the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // internal component options needs special treatment.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      initInternalComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm, options)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      vm.$options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mergeOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        vm.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.options,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        vm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    /* istanbul ignore else */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;production&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      initProxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      vm._renderProxy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // expose real self</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vm._self </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initLifecycle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;init&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;created&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initRender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> initInternalComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> InternalComponentOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> opts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm.$options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.options)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // doing this because it&#39;s faster than dynamic enumeration.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  opts.parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options.parent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  opts.propsData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options.propsData</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  opts._parentVnode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options._parentVnode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  opts._parentListeners </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options._parentListeners</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  opts._renderChildren </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options._renderChildren</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  opts._componentTag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options._componentTag</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (options.render) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    opts.render </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options.render</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    opts.staticRenderFns </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> opts.staticRenderFns</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><p>下面我们一步步分析 <code>initMixin</code> 函数代码~</p><p>可以看到 只做了一件事就是在 Vue 的原型上挂载了 <code>_init</code> 方法：<code>Vue.prototype._init = function (options?: Object) {}</code></p><p>然后我们一步步看看 <code>Vue.prototype._init</code>:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">_init</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 获取 vue 的实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 每一个组件都会有一个 uid，确保组件的唯一性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vm._uid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 这里是一个标记，用来告诉监听者 vm 不需要响应式，后续会提到</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vm._isVue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 合并外部传入的 options</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 判断是否是独立的组件，如果是的话特殊处理</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> options._isComponent) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // optimize internal component instantiation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // since dynamic options merging is pretty slow, and none of the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // internal component options needs special treatment.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initInternalComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm, options)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vm.$options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> mergeOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      vm.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.options,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      options </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      vm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /* istanbul ignore else */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NODE_ENV</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;production&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    initProxy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vm._renderProxy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // expose real self</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  vm._self </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  initLifecycle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  initEvents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  callHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;init&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  initState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  callHook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;created&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  initRender</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vm)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,38),e=[l];function t(h,k,r,E,d,c){return a(),n("div",null,e)}const o=s(p,[["render",t]]);export{y as __pageData,o as default};
