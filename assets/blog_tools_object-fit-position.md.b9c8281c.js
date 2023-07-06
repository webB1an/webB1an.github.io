import{P as A}from"./chunks/prism-okaidia.5b4c99c5.js";import{e as S,r,f as P,w as B,k as T,o as n,c as l,a as t,n as w,g as o,l as s,h as u,F as C,m,b as c,t as h,_ as N,d as $}from"./app.57f6c006.js";const L="/images/tools/object-image.png",O={class:"object-css"},U={class:"object-css-img"},I={class:"language-css extra-class"},E={class:"language-css"},M=S({__name:"ObjectFitPosition",setup(x){const g=["fill","contain","cover","none","scale-down"],y=["left","right","center"],V=["top","bottom","center"],i=r("fill"),p=r("center"),d=r("center"),_=r(),v=P(()=>`object-fit: ${i.value};
object-position: ${p.value} ${d.value};`),D=()=>{if(!_.value)return;let F=A.highlight(v.value,A.languages.css,"css");_.value.innerHTML=F};return B(v,()=>{D()},{immediate:!0}),T(()=>{D()}),(F,a)=>{const b=u("el-radio"),f=u("el-radio-group"),j=u("el-form-item"),k=u("el-form");return n(),l("div",O,[t("div",U,[t("img",{src:L,style:w({"object-fit":i.value,"object-position":p.value+" "+d.value})},null,4)]),t("div",I,[t("pre",E,[t("code",{ref_key:"codeContainer",ref:_},null,512)])]),o(k,{"label-width":"130px"},{default:s(()=>[o(j,{label:"object-fit"},{default:s(()=>[o(f,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e)},{default:s(()=>[(n(),l(C,null,m(g,e=>o(b,{key:e,label:e},{default:s(()=>[c(h(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),o(j,{label:"object-position-x"},{default:s(()=>[o(f,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=e=>p.value=e)},{default:s(()=>[(n(),l(C,null,m(y,e=>o(b,{key:e,label:e},{default:s(()=>[c(h(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1}),o(j,{label:"object-position-y"},{default:s(()=>[o(f,{modelValue:d.value,"onUpdate:modelValue":a[2]||(a[2]=e=>d.value=e)},{default:s(()=>[(n(),l(C,null,m(V,e=>o(b,{key:e,label:e},{default:s(()=>[c(h(e),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})])}}});const X=N(M,[["__scopeId","data-v-a1217100"]]),Y=t("h1",{id:"\u56FE\u7247\u9002\u914D-object-fit-\u548C-object-position",tabindex:"-1"},[c("\u56FE\u7247\u9002\u914D object-fit \u548C object-position "),t("a",{class:"header-anchor",href:"#\u56FE\u7247\u9002\u914D-object-fit-\u548C-object-position","aria-hidden":"true"},"#")],-1),z=$(`<h2 id="\u6982\u5FF5\u89E3\u91CA" tabindex="-1">\u6982\u5FF5\u89E3\u91CA <a class="header-anchor" href="#\u6982\u5FF5\u89E3\u91CA" aria-hidden="true">#</a></h2><p><code>object-fit</code> \u548C <code>object-position</code> \u662F CSS \u4E2D\u7528\u4E8E\u63A7\u5236\u5143\u7D20\u5982\u56FE\u50CF\u3001\u89C6\u9891\u7B49\u7684\u5C3A\u5BF8\u548C\u4F4D\u7F6E\u7684\u5C5E\u6027\u3002</p><h3 id="object-fit" tabindex="-1">object-fit <a class="header-anchor" href="#object-fit" aria-hidden="true">#</a></h3><p><code>object-fit</code> \u5C5E\u6027\u7528\u4E8E\u6307\u5B9A\u53EF\u66FF\u6362\u5143\u7D20\u7684\u5185\u5BB9\u5E94\u5982\u4F55\u9002\u5E94\u5230\u5176\u4F7F\u7528\u7684\u9AD8\u5EA6\u548C\u5BBD\u5EA6\u786E\u5B9A\u7684\u6846\u4E2D\u3002\u53EF\u66FF\u6362\u5143\u7D20\u662F\u5176\u5185\u5BB9\u72EC\u7ACB\u4E8E CSS \u7684\u5143\u7D20\uFF0C\u4F8B\u5982 <code>img</code>\uFF0C<code>object</code>\uFF0C<code>video</code>\uFF0C<code>iframe</code> \u7B49\u3002</p><p>\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u503C\uFF1A</p><ul><li><p><code>fill</code>\uFF1A\u9ED8\u8BA4\u503C\u3002\u66FF\u6362\u5185\u5BB9\u62C9\u4F38\u586B\u6EE1\u6574\u4E2A\u5185\u5BB9\u6846\uFF0C\u53EF\u80FD\u4F1A\u6539\u53D8\u5185\u5BB9\u7684\u5BBD\u9AD8\u6BD4\u3002</p></li><li><p><code>contain</code>\uFF1A\u4FDD\u6301\u5143\u7D20\u5185\u5BB9\u7684\u5BBD\u9AD8\u6BD4\uFF0C\u5C06\u5143\u7D20\u5185\u5BB9\u7F29\u653E\u4EE5\u6700\u5927\u9650\u5EA6\u5730\u5C06\u5176\u5185\u5BB9\u653E\u5165\u5185\u5BB9\u6846\u3002</p></li><li><p><code>cover</code>\uFF1A\u4FDD\u6301\u5143\u7D20\u5185\u5BB9\u7684\u5BBD\u9AD8\u6BD4\uFF0C\u5C06\u5143\u7D20\u5185\u5BB9\u7F29\u653E\u4EE5\u6700\u5C0F\u7A0B\u5EA6\u8986\u76D6\u6574\u4E2A\u5185\u5BB9\u6846\u3002\u5143\u7D20\u7684\u5185\u5BB9\u5728\u5176\u5185\u5BB9\u6846\u4E2D\u53EF\u80FD\u4F1A\u6EA2\u51FA\u3002</p></li><li><p><code>none</code>\uFF1A\u5143\u7D20\u5185\u5BB9\u7684\u5C3A\u5BF8\u4E0E\u5185\u5BB9\u6846\u7684\u5C3A\u5BF8\u65E0\u5173\u3002</p></li><li><p><code>scale-down</code>\uFF1A\u5143\u7D20\u7684\u5185\u5BB9\u5C31\u597D\u50CF\u6CA1\u6709\u6307\u5B9A <code>object-fit</code> \u4E00\u6837\uFF0C\u4F1A\u53D6 <code>none</code> \u6216 <code>contain</code> \u5176\u4E2D\u4E00\u4E2A\u7684\u884C\u4E3A\u3002</p></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">object-fit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> cover</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="object-position" tabindex="-1">object-position <a class="header-anchor" href="#object-position" aria-hidden="true">#</a></h3><p><code>object-position</code> \u5C5E\u6027\u7528\u4E8E\u6307\u5B9A\u66FF\u6362\u5143\u7D20\u7684\u5185\u5BB9\u5728\u5143\u7D20\u7684\u5185\u5BB9\u6846\u4E2D\u7684\u4F4D\u7F6E\u3002\u5C31\u50CF <code>background-position</code> \u4E00\u6837\uFF0C\u4F60\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u6216\u4E24\u4E2A\u4F4D\u7F6E\u503C\u3002</p><ul><li><p>\u7B2C\u4E00\u4E2A\u503C\u662F\u6C34\u5E73\u65B9\u5411\u4E0A\u7684\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u662F\u5DE6 (<code>left</code>)\uFF0C\u4E2D (<code>center</code>) \u6216\u53F3 (<code>right</code>)\uFF0C\u6216\u4E00\u4E2A\u5177\u4F53\u7684\u957F\u5EA6\u503C\u3002</p></li><li><p>\u7B2C\u4E8C\u4E2A\u503C\u662F\u5782\u76F4\u65B9\u5411\u4E0A\u7684\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u662F\u9876\u90E8 (<code>top</code>)\uFF0C\u4E2D\u90E8 (<code>center</code>)\uFF0C\u5E95\u90E8 (<code>bottom</code>)\uFF0C\u6216\u4E00\u4E2A\u5177\u4F53\u7684\u957F\u5EA6\u503C\u3002</p></li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">img</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">object-fit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> cover</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">object-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4EE5\u4E0A\u7684 CSS \u4EE3\u7801\u4F1A\u4F7F <code>img</code> \u7684\u5185\u5BB9\u88AB\u7F29\u653E\u4EE5\u8986\u76D6\u5185\u5BB9\u6846\uFF0C\u5E76\u4E14\u5185\u5BB9\u7684\u5DE6\u4E0A\u89D2\u88AB\u5B9A\u4F4D\u5728\u5185\u5BB9\u6846\u4E2D\u7684 <code>(10px, 20px)</code> \u7684\u4F4D\u7F6E\u3002</p><p>\u6CE8\u610F\uFF0C<code>object-fit</code> \u548C <code>object-position</code> \u5C5E\u6027\u5728\u67D0\u4E9B\u8001\u7684\u6D4F\u89C8\u5668\u7248\u672C\u4E2D\u53EF\u80FD\u4E0D\u88AB\u652F\u6301\uFF0C\u4F7F\u7528\u65F6\u8BF7\u6CE8\u610F\u517C\u5BB9\u6027\u95EE\u9898\u3002</p>`,13),q=JSON.parse('{"title":"\u56FE\u7247\u9002\u914D object-fit \u548C object-position","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6982\u5FF5\u89E3\u91CA","slug":"\u6982\u5FF5\u89E3\u91CA","link":"#\u6982\u5FF5\u89E3\u91CA","children":[{"level":3,"title":"object-fit","slug":"object-fit","link":"#object-fit","children":[]},{"level":3,"title":"object-position","slug":"object-position","link":"#object-position","children":[]}]}],"relativePath":"blog/tools/object-fit-position.md","lastUpdated":1688629533000}'),H={name:"blog/tools/object-fit-position.md"},G=Object.assign(H,{setup(x){return(g,y)=>(n(),l("div",null,[Y,o(X),c(),z]))}});export{q as __pageData,G as default};
