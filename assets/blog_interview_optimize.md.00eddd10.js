import{_ as s,o as a,c as n,d as l}from"./app.5ba76a81.js";const u=JSON.parse('{"title":"\u9879\u76EE\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"v-if \u548C v-show \u533A\u5206\u573A\u666F\u4F7F\u7528","slug":"v-if-\u548C-v-show-\u533A\u5206\u573A\u666F\u4F7F\u7528","link":"#v-if-\u548C-v-show-\u533A\u5206\u573A\u666F\u4F7F\u7528","children":[]},{"level":2,"title":"computed \u548C watch \u533A\u5206\u573A\u666F\u4F7F\u7528","slug":"computed-\u548C-watch-\u533A\u5206\u573A\u666F\u4F7F\u7528","link":"#computed-\u548C-watch-\u533A\u5206\u573A\u666F\u4F7F\u7528","children":[]},{"level":2,"title":"v-for \u904D\u5386\u5FC5\u987B\u4E3A item \u6DFB\u52A0 key\uFF0C\u4E14\u907F\u514D\u540C\u65F6\u4F7F\u7528 v-if","slug":"v-for-\u904D\u5386\u5FC5\u987B\u4E3A-item-\u6DFB\u52A0-key-\u4E14\u907F\u514D\u540C\u65F6\u4F7F\u7528-v-if","link":"#v-for-\u904D\u5386\u5FC5\u987B\u4E3A-item-\u6DFB\u52A0-key-\u4E14\u907F\u514D\u540C\u65F6\u4F7F\u7528-v-if","children":[]}],"relativePath":"blog/interview/optimize.md","lastUpdated":1669086660000}'),e={name:"blog/interview/optimize.md"},o=l(`<h1 id="\u9879\u76EE\u4F18\u5316" tabindex="-1">\u9879\u76EE\u4F18\u5316 <a class="header-anchor" href="#\u9879\u76EE\u4F18\u5316" aria-hidden="true">#</a></h1><h2 id="v-if-\u548C-v-show-\u533A\u5206\u573A\u666F\u4F7F\u7528" tabindex="-1"><code>v-if</code> \u548C <code>v-show</code> \u533A\u5206\u573A\u666F\u4F7F\u7528 <a class="header-anchor" href="#v-if-\u548C-v-show-\u533A\u5206\u573A\u666F\u4F7F\u7528" aria-hidden="true">#</a></h2><p><b>v-if</b> \u662F\u771F\u6B63\u7684\u6761\u4EF6\u6E32\u67D3\uFF0C\u5982\u679C\u521D\u59CB\u6761\u4EF6\u4E3A\u5047\uFF0C\u5219\u4EC0\u4E48\u90FD\u4E0D\u505A\uFF0C\u76F4\u5230\u6761\u4EF6\u53D8\u4E3A\u771F\u65F6\u624D\u7B2C\u4E00\u6B21\u6E32\u67D3\u6761\u4EF6\u5757\u3002</p><p><b>v-show</b> \u4E0D\u7BA1\u521D\u59CB\u7684\u5224\u65AD\u6761\u4EF6\u662F\u4EC0\u4E48\uFF0C\u5143\u7D20\u603B\u4F1A\u88AB\u6E32\u67D3\uFF0C\u5E76\u4E14\u53EA\u662F\u5207\u6362 css \u7684 <code>display</code> \u5C5E\u6027\u3002</p><p><code>v-if</code> \u9002\u7528\u5728\u8FD0\u884C\u65F6\u5F88\u5C11\u6539\u53D8\u6761\u4EF6\uFF0C\u5982\u548C\u7528\u6237\u6743\u9650\u76F8\u5173\u7684\u83DC\u5355\u3002v-show\u9002\u7528\u4E8E\u9700\u8981\u9891\u7E41\u5207\u6362\u6761\u4EF6\u7684\u573A\u666F\uFF0C\u5982tab\u680F\u7B49\u3002</p><h2 id="computed-\u548C-watch-\u533A\u5206\u573A\u666F\u4F7F\u7528" tabindex="-1"><code>computed</code> \u548C <code>watch</code> \u533A\u5206\u573A\u666F\u4F7F\u7528 <a class="header-anchor" href="#computed-\u548C-watch-\u533A\u5206\u573A\u666F\u4F7F\u7528" aria-hidden="true">#</a></h2><p><b>computed</b> \u662F\u8BA1\u7B97\u5C5E\u6027\uFF0C\u4F9D\u8D56\u5176\u4ED6\u5C5E\u6027\u503C\uFF0C\u5E76\u4E14 <code>computed</code> \u7684\u503C\u6709\u7F13\u5B58\uFF0C\u53EA\u6709\u5728\u5B83\u4F9D\u8D56\u7684\u5C5E\u6027\u503C\u53D1\u751F\u6539\u53D8\uFF0C\u4E0B\u4E00\u6B21\u83B7\u53D6 <code>computed</code> \u7684\u503C\u65F6\u624D\u56DE\u4ECE\u65B0\u8BA1\u7B97 <code>computed</code> \u7684\u503C\u3002</p><p><b>watch</b> \u66F4\u591A\u7684\u662F\u89C2\u5BDF\u4F5C\u7528\uFF0C\u7C7B\u4F3C\u4E8E\u6570\u636E\u7684\u76D1\u542C\u56DE\u8C03\uFF0C\u6BCF\u5F53\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\u624D\u6267\u884C\u56DE\u8C03\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\u3002</p><p>\u8FD0\u7528\u573A\u666F\uFF1A</p><ul><li>\u5F53\u6211\u4EEC\u9700\u8981\u8FDB\u884C\u6570\u503C\u8FD0\u7B97\uFF0C\u5E76\u4E14\u4F9D\u8D56\u4E8E\u5176\u4ED6\u6570\u636E\u65F6\uFF0C\u5E94\u8BE5\u4F7F\u7528 <code>computed</code>\uFF0C\u56E0\u4E3A\u53EF\u4EE5\u5229\u7528 <code>computed</code> \u7684\u7F13\u5B58\u7279\u6027\uFF0C\u907F\u514D\u6BCF\u6B21\u53D6\u503C\u65F6\uFF0C\u90FD\u8981\u91CD\u65B0\u8BA1\u7B97</li><li>\u5F53\u4E00\u4E2A\u503C\u7684\u6539\u53D8\u4F1A\u5F71\u54CD\u591A\u4E2A\u503C\u65F6\uFF0C\u5E94\u4F7F\u7528 <code>watch</code></li></ul><h2 id="v-for-\u904D\u5386\u5FC5\u987B\u4E3A-item-\u6DFB\u52A0-key-\u4E14\u907F\u514D\u540C\u65F6\u4F7F\u7528-v-if" tabindex="-1"><code>v-for</code> \u904D\u5386\u5FC5\u987B\u4E3A <code>item</code> \u6DFB\u52A0 <code>key</code>\uFF0C\u4E14\u907F\u514D\u540C\u65F6\u4F7F\u7528 <code>v-if</code> <a class="header-anchor" href="#v-for-\u904D\u5386\u5FC5\u987B\u4E3A-item-\u6DFB\u52A0-key-\u4E14\u907F\u514D\u540C\u65F6\u4F7F\u7528-v-if" aria-hidden="true">#</a></h2><ul><li>v-for \u904D\u5386\u5FC5\u987B\u4E3A item \u6DFB\u52A0 key <ul><li>\u5728\u5217\u8868\u6839\u636E\u904D\u5386\u6E32\u67D3\u6570\u636E\u65F6\uFF0C\u9700\u8981\u4E3A\u6BCF\u4E00\u9879 item \u8BBE\u7F6E\u552F\u4E00\u7684 key \u503C\uFF0C\u65B9\u4FBF vue \u5185\u90E8\u673A\u5236\u7CBE\u51C6\u627E\u5230\u8BE5\u6761\u5217\u8868\u6570\u636E\u3002\u5F53 state \u66F4\u65B0\u65F6\uFF0C\u65B0\u7684\u72B6\u6001\u548C\u65E7\u7684\u72B6\u6001\u5BF9\u6BD4\uFF0C\u5FEB\u901F\u5B9A\u4F4D\u5230 diff\u3002</li></ul></li><li>v-for \u904D\u5386\u907F\u514D\u540C\u65F6\u4F7F\u7528 v-if <ul><li>v-for \u6BD4 v-if \u7684\u4F18\u5148\u7EA7\u9AD8\uFF0C\u5982\u679C\u6BCF\u4E00\u6B21\u90FD\u9700\u8981\u904D\u5386\u6574\u4E2A\u6570\u7EC4\uFF0C\u5C06\u4F1A\u5F71\u54CD\u901F\u5EA6\u3002</li></ul></li></ul><p><b>\u63A8\u8350:</b></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user in activeUsers</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :key=&quot;user.id&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    {{</span><span style="color:#A6ACCD;"> user.name </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">computed: {</span></span>
<span class="line"><span style="color:#A6ACCD;">  activeUsers: </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">users</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	 </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">isActive</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><b>\u4E0D\u63A8\u8350:</b></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user in users</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user.isActive</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :key=&quot;user.id&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    {{</span><span style="color:#A6ACCD;"> user.name </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/ul&gt;</span></span>
<span class="line"></span></code></pre></div><p><b></b><b></b><b></b><b></b><b></b></p>`,17),p=[o];function t(c,r,i,D,F,d){return a(),n("div",null,p)}const v=s(e,[["render",t]]);export{u as __pageData,v as default};