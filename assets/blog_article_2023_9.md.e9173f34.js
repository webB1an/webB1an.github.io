import{_ as a,o as s,c as l,d as n}from"./app.b0a58066.js";const C=JSON.parse('{"title":"\u6DF1\u5165\u63A2\u7D22 JavaScript \u4E2D\u7684 flatMap \u65B9\u6CD5\uFF1A\u7528\u6CD5\u4E0E\u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EC0\u4E48\u662F flatMap \u65B9\u6CD5\uFF1F","slug":"\u4EC0\u4E48\u662F-flatmap-\u65B9\u6CD5","link":"#\u4EC0\u4E48\u662F-flatmap-\u65B9\u6CD5","children":[]},{"level":2,"title":"flatMap \u7684\u8BED\u6CD5","slug":"flatmap-\u7684\u8BED\u6CD5","link":"#flatmap-\u7684\u8BED\u6CD5","children":[]},{"level":2,"title":"\u4F7F\u7528\u793A\u4F8B\uFF1A\u63D0\u53D6\u6280\u80FD\u5217\u8868","slug":"\u4F7F\u7528\u793A\u4F8B-\u63D0\u53D6\u6280\u80FD\u5217\u8868","link":"#\u4F7F\u7528\u793A\u4F8B-\u63D0\u53D6\u6280\u80FD\u5217\u8868","children":[]},{"level":2,"title":"\u66F4\u591A\u6CE8\u610F\u4E8B\u9879","slug":"\u66F4\u591A\u6CE8\u610F\u4E8B\u9879","link":"#\u66F4\u591A\u6CE8\u610F\u4E8B\u9879","children":[]},{"level":2,"title":"\u5B9E\u9645\u5E94\u7528\u573A\u666F","slug":"\u5B9E\u9645\u5E94\u7528\u573A\u666F","link":"#\u5B9E\u9645\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"\u7ED3\u8BBA","slug":"\u7ED3\u8BBA","link":"#\u7ED3\u8BBA","children":[]}],"relativePath":"blog/article/2023/9.md","lastUpdated":1691546933000}'),p={name:"blog/article/2023/9.md"},o=n(`<h1 id="\u6DF1\u5165\u63A2\u7D22-javascript-\u4E2D\u7684-flatmap-\u65B9\u6CD5-\u7528\u6CD5\u4E0E\u793A\u4F8B" tabindex="-1">\u6DF1\u5165\u63A2\u7D22 JavaScript \u4E2D\u7684 flatMap \u65B9\u6CD5\uFF1A\u7528\u6CD5\u4E0E\u793A\u4F8B <a class="header-anchor" href="#\u6DF1\u5165\u63A2\u7D22-javascript-\u4E2D\u7684-flatmap-\u65B9\u6CD5-\u7528\u6CD5\u4E0E\u793A\u4F8B" aria-hidden="true">#</a></h1><p>\u5728 JavaScript \u7F16\u7A0B\u4E2D\uFF0C\u6570\u7EC4\u662F\u4E00\u79CD\u5E38\u89C1\u4E14\u91CD\u8981\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u7528\u4E8E\u5B58\u50A8\u4E00\u7EC4\u6709\u5E8F\u7684\u5143\u7D20\u3002JavaScript \u63D0\u4F9B\u4E86\u8BB8\u591A\u7528\u4E8E\u64CD\u4F5C\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u5176\u4E2D <code>flatMap</code> \u5C31\u662F\u4E00\u4E2A\u5F3A\u5927\u800C\u591A\u7528\u9014\u7684\u65B9\u6CD5\u3002\u672C\u6587\u5C06\u4ECB\u7ECD <code>flatMap</code> \u7684\u7528\u6CD5\u3001\u5DE5\u4F5C\u539F\u7406\uFF0C\u5E76\u901A\u8FC7\u5B9E\u4F8B\u6765\u89E3\u91CA\u5B83\u7684\u5B9E\u9645\u5E94\u7528\u3002</p><h2 id="\u4EC0\u4E48\u662F-flatmap-\u65B9\u6CD5" tabindex="-1">\u4EC0\u4E48\u662F <code>flatMap</code> \u65B9\u6CD5\uFF1F <a class="header-anchor" href="#\u4EC0\u4E48\u662F-flatmap-\u65B9\u6CD5" aria-hidden="true">#</a></h2><p><code>flatMap</code> \u65B9\u6CD5\u662F\u6570\u7EC4\u5BF9\u8C61\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u5728 ECMAScript 2019 \u89C4\u8303\u4E2D\u88AB\u5F15\u5165\u3002\u8FD9\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u5BF9\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u5E94\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u7136\u540E\u5C06\u6BCF\u4E2A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u7EC4\u5408\u6210\u4E00\u4E2A\u65B0\u7684\u6241\u5E73\u5316\u6570\u7EC4\u3002\u8FD9\u4E2A\u65B9\u6CD5\u7684\u8BBE\u8BA1\u76EE\u7684\u662F\u80FD\u591F\u5728\u6620\u5C04\u540E\u7684\u6570\u7EC4\u4E2D\u81EA\u52A8\u53BB\u9664\u7A7A\u9879\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4E00\u6B21\u6027\u5730\u5C06\u591A\u4E2A\u6570\u7EC4\u8FDE\u63A5\u6210\u4E00\u4E2A\u3002</p><h2 id="flatmap-\u7684\u8BED\u6CD5" tabindex="-1"><code>flatMap</code> \u7684\u8BED\u6CD5 <a class="header-anchor" href="#flatmap-\u7684\u8BED\u6CD5" aria-hidden="true">#</a></h2><p><code>flatMap</code> \u65B9\u6CD5\u7684\u8BED\u6CD5\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flatMap</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">callback</span><span style="color:#A6ACCD;">(currentValue[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> index[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> array]])[</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> thisArg])</span></span>
<span class="line"></span></code></pre></div><ul><li><code>array</code>\uFF1A\u8981\u64CD\u4F5C\u7684\u6570\u7EC4\u3002</li><li><code>callback</code>\uFF1A\u5BF9\u6BCF\u4E2A\u6570\u7EC4\u5143\u7D20\u6267\u884C\u7684\u56DE\u8C03\u51FD\u6570\u3002</li><li><code>currentValue</code>\uFF1A\u5F53\u524D\u6B63\u5728\u5904\u7406\u7684\u6570\u7EC4\u5143\u7D20\u3002</li><li><code>index</code>\uFF08\u53EF\u9009\uFF09\uFF1A\u5F53\u524D\u5143\u7D20\u7684\u7D22\u5F15\u3002</li><li><code>array</code>\uFF08\u53EF\u9009\uFF09\uFF1A\u8C03\u7528 <code>flatMap</code> \u65B9\u6CD5\u7684\u6570\u7EC4\u3002</li><li><code>thisArg</code>\uFF08\u53EF\u9009\uFF09\uFF1A\u5728\u6267\u884C\u56DE\u8C03\u51FD\u6570\u65F6\u4F7F\u7528\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002</li></ul><h2 id="\u4F7F\u7528\u793A\u4F8B-\u63D0\u53D6\u6280\u80FD\u5217\u8868" tabindex="-1">\u4F7F\u7528\u793A\u4F8B\uFF1A\u63D0\u53D6\u6280\u80FD\u5217\u8868 <a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B-\u63D0\u53D6\u6280\u80FD\u5217\u8868" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u6211\u4EEC\u6709\u4E00\u4E2A\u5305\u542B\u591A\u4E2A\u4EBA\u7684\u6280\u80FD\u5217\u8868\u7684\u6570\u7EC4\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> people </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Alice</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">skills</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">JavaScript</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">HTML</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Bob</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">skills</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Python</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CSS</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Charlie</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">skills</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Java</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">React</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u60F3\u8981\u4ECE\u8FD9\u4E2A\u6570\u7EC4\u4E2D\u63D0\u53D6\u6240\u6709\u7684\u6280\u80FD\uFF0C\u7EC4\u6210\u4E00\u4E2A\u65B0\u7684\u6241\u5E73\u5316\u6570\u7EC4\u3002\u8FD9\u5C31\u662F <code>flatMap</code> \u7684\u7528\u6B66\u4E4B\u5730\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> allSkills </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> people</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">flatMap</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">person</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> person</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">skills)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(allSkills)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">// \u8F93\u51FA: [&#39;JavaScript&#39;, &#39;HTML&#39;, &#39;Python&#39;, &#39;CSS&#39;, &#39;Java&#39;, &#39;React&#39;]</span></span>
<span class="line"></span></code></pre></div><p>\u5728\u8FD9\u4E2A\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>flatMap</code> \u65B9\u6CD5\u5BF9\u6BCF\u4E2A\u4EBA\u7684\u6280\u80FD\u5217\u8868\u5E94\u7528\u4E86\u56DE\u8C03\u51FD\u6570\uFF0C\u5C06\u6BCF\u4E2A\u6280\u80FD\u5217\u8868\u8FDE\u63A5\u6210\u4E86\u4E00\u4E2A\u65B0\u7684\u6241\u5E73\u5316\u6570\u7EC4\u3002</p><h2 id="\u66F4\u591A\u6CE8\u610F\u4E8B\u9879" tabindex="-1">\u66F4\u591A\u6CE8\u610F\u4E8B\u9879 <a class="header-anchor" href="#\u66F4\u591A\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a></h2><ul><li><code>flatMap</code> \u65B9\u6CD5\u4F1A\u81EA\u52A8\u5FFD\u7565\u6620\u5C04\u540E\u7684\u7ED3\u679C\u4E2D\u7684\u7A7A\u9879\uFF08<code>undefined</code>\u3001<code>null</code>\u7B49\uFF09\u3002</li><li><code>flatMap</code> \u65B9\u6CD5\u53EA\u4F1A\u6241\u5E73\u5316\u4E00\u5C42\uFF0C\u5373\u5982\u679C\u6620\u5C04\u7684\u7ED3\u679C\u672C\u8EAB\u662F\u6570\u7EC4\uFF0C\u5B83\u4E0D\u4F1A\u9012\u5F52\u5730\u7EE7\u7EED\u6241\u5E73\u5316\u3002</li></ul><h2 id="\u5B9E\u9645\u5E94\u7528\u573A\u666F" tabindex="-1">\u5B9E\u9645\u5E94\u7528\u573A\u666F <a class="header-anchor" href="#\u5B9E\u9645\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a></h2><p>\u9664\u4E86\u63D0\u53D6\u6280\u80FD\u5217\u8868\uFF0C<code>flatMap</code> \u5728\u8BB8\u591A\u60C5\u51B5\u4E0B\u90FD\u80FD\u591F\u53D1\u6325\u4F5C\u7528\u3002\u6BD4\u5982\u5904\u7406\u5D4C\u5957\u6570\u7EC4\u3001\u53BB\u9664\u7A7A\u683C\u3001\u6570\u636E\u8F6C\u6362\u7B49\u3002\u901A\u8FC7\u7ED3\u5408\u56DE\u8C03\u51FD\u6570\u7684\u81EA\u7531\u5EA6\uFF0C<code>flatMap</code> \u53EF\u4EE5\u6EE1\u8DB3\u4E0D\u540C\u573A\u666F\u4E0B\u7684\u9700\u6C42\u3002</p><h2 id="\u7ED3\u8BBA" tabindex="-1">\u7ED3\u8BBA <a class="header-anchor" href="#\u7ED3\u8BBA" aria-hidden="true">#</a></h2><p><code>flatMap</code> \u662F JavaScript \u6570\u7EC4\u65B9\u6CD5\u4E2D\u4E00\u4E2A\u5F3A\u5927\u7684\u5DE5\u5177\uFF0C\u5B83\u80FD\u591F\u5BF9\u6570\u7EC4\u5143\u7D20\u8FDB\u884C\u6620\u5C04\u64CD\u4F5C\u5E76\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u6241\u5E73\u5316\u6570\u7EC4\u3002\u901A\u8FC7\u6DF1\u5165\u7406\u89E3\u5176\u7528\u6CD5\u548C\u7279\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u66F4\u9AD8\u6548\u5730\u5904\u7406\u6570\u636E\uFF0C\u7B80\u5316\u4EE3\u7801\u903B\u8F91\u3002\u65E0\u8BBA\u662F\u5728\u6570\u636E\u5904\u7406\u3001\u8F6C\u6362\u8FD8\u662F\u6570\u636E\u63D0\u53D6\u65B9\u9762\uFF0C<code>flatMap</code> \u90FD\u662F\u4E00\u4E2A\u5F3A\u6709\u529B\u7684\u9009\u62E9\u3002\u5E0C\u671B\u672C\u6587\u80FD\u591F\u5E2E\u52A9\u4F60\u66F4\u597D\u5730\u638C\u63E1\u548C\u5E94\u7528 <code>flatMap</code> \u65B9\u6CD5\u3002</p>`,20),e=[o];function c(t,r,D,i,d,y){return s(),l("div",null,e)}const A=a(p,[["render",c]]);export{C as __pageData,A as default};