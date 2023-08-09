import{_ as s,o as a,c as n,d as l}from"./app.b0a58066.js";const d=JSON.parse('{"title":"Base64 \u56FE\u7247\u5BFC\u81F4\u9875\u9762\u5361\u987F\u89E3\u51B3\u65B9\u6848","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u95EE\u9898\u63CF\u8FF0","slug":"\u95EE\u9898\u63CF\u8FF0","link":"#\u95EE\u9898\u63CF\u8FF0","children":[]},{"level":2,"title":"\u89E3\u51B3\u65B9\u6848","slug":"\u89E3\u51B3\u65B9\u6848","link":"#\u89E3\u51B3\u65B9\u6848","children":[]}],"relativePath":"blog/article/2023/7.md","lastUpdated":1690101487000}'),o={name:"blog/article/2023/7.md"},p=l(`<h1 id="base64-\u56FE\u7247\u5BFC\u81F4\u9875\u9762\u5361\u987F\u89E3\u51B3\u65B9\u6848" tabindex="-1">Base64 \u56FE\u7247\u5BFC\u81F4\u9875\u9762\u5361\u987F\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#base64-\u56FE\u7247\u5BFC\u81F4\u9875\u9762\u5361\u987F\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h1><h2 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1">\u95EE\u9898\u63CF\u8FF0 <a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a></h2><p>\u5F00\u53D1\u4E2D\u6709\u4E9B\u573A\u666F\u4F1A\u7528\u9047\u5230 base64 \u683C\u5F0F\u56FE\u7247\u63D2\u5165 DOM \u4E2D\u7684\u9700\u6C42\uFF0C\u4F46\u662F\u5F53\u5982\u679C\u5F53\u56FE\u7247\u5F88\u5927\u7684\u65F6\uFF0C\u4F1A\u4F7F\u5F97\u56FE\u7247\u7684 base64 \u7F16\u7801\u5B57\u7B26\u4E32\u5F88\u957F\uFF0C\u8FD9\u6837\u5728\u63D2\u5165\u5230 DOM \u540E\u5F88\u5927\u6982\u7387\u4E0A\u4F1A\u5BFC\u81F4 UI \u7EBF\u7A0B\u5361\u987F\uFF0C\u4ECE\u800C\u5F71\u54CD\u7528\u6237\u4F53\u9A8C\uFF0C\u7279\u522B\u662F\u5728\u624B\u673A\u4E0A\u65F6\u975E\u5E38\u5F71\u54CD\u624B\u673A\u7684\u6027\u80FD\u3002</p><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1">\u89E3\u51B3\u65B9\u6848 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u53EF\u4EE5\u5C06 base64 \u683C\u5F0F\u7684\u56FE\u7247\u8F6C\u6362\u6210 blob \u5BF9\u8C61\uFF0C\u7136\u540E\u518D\u8F6C\u6362\u6210 URL \u5BF9\u8C61\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u89E3\u51B3\u4E0A\u9762\u7684\u95EE\u9898\u3002</p><p>\u8FD9\u91CC\u80FD\u7528\u5230\u7684 API \u6709\u4E24\u4E2A\uFF1A</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/fetch" target="_blank" rel="noreferrer">fetch</a>\uFF1Afetch \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0C\u4F7F\u5F97\u5F02\u6B65\u64CD\u4F5C\u66F4\u52A0\u76F4\u89C2\u548C\u6613\u4E8E\u5904\u7406\u3002</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL" target="_blank" rel="noreferrer">URL.createObjectURL</a>\uFF1A\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u6307\u5B9A\u6570\u636E\u7684\u552F\u4E00 URL\uFF0C\u901A\u5E38\u8FD9\u4E2A\u65B9\u6CD5\u7528\u4E8E\u5C06\u4E00\u4E9B\u7279\u6B8A\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u6BD4\u5982 Blob \u6216 File \u5BF9\u8C61\uFF0C\u8F6C\u6362\u4E3A\u53EF\u7528\u4E8E\u8BBF\u95EE\u7684 URL\u3002\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684 URL \u662F\u4E00\u4E2A\u7C7B\u4F3C\u4E8E blob: \u6216 file: \u5F00\u5934\u7684\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u7528\u4E8E\u5728\u6D4F\u89C8\u5668\u4E2D\u521B\u5EFA\u4E34\u65F6\u7684 URL \u5730\u5740\uFF0C\u4F7F\u5F97\u6D4F\u89C8\u5668\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5185\u5B58\u4E2D\u7684\u6570\u636E\uFF0C\u800C\u65E0\u9700\u901A\u8FC7\u670D\u52A1\u5668\u3002</li></ul><p>\u4E0B\u9762\u5C31\u53EF\u4EE5\u7528\u4E0A\u9762\u7684\u4E24\u4E2A API \u6765\u5B9E\u73B0\u4E0A\u9762\u7684\u9700\u6C42\u4E86\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">base64ToImageUrl</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b64str</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b64str</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">blob</span><span style="color:#F07178;">())</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">URL</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createObjectURL</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">b</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">catch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">error</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,9),e=[p];function t(r,c,F,y,D,i){return a(),n("div",null,e)}const C=s(o,[["render",t]]);export{d as __pageData,C as default};