import{_ as s,c as n,o as a,d as l}from"./app.5a551424.js";const A=JSON.parse('{"title":"docker + vue + express + mongodb \u90E8\u7F72","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u90E8\u7F72vue","slug":"\u4E00\u3001\u90E8\u7F72vue","link":"#\u4E00\u3001\u90E8\u7F72vue","children":[{"level":3,"title":"\u6253\u5305vue","slug":"\u6253\u5305vue","link":"#\u6253\u5305vue","children":[]},{"level":3,"title":"default.conf","slug":"default-conf","link":"#default-conf","children":[]},{"level":3,"title":"Dockerfile","slug":"dockerfile","link":"#dockerfile","children":[]},{"level":3,"title":"\u6784\u5EFAvue\u955C\u50CF","slug":"\u6784\u5EFAvue\u955C\u50CF","link":"#\u6784\u5EFAvue\u955C\u50CF","children":[]},{"level":3,"title":"\u542F\u52A8\u955C\u50CF","slug":"\u542F\u52A8\u955C\u50CF","link":"#\u542F\u52A8\u955C\u50CF","children":[]}]},{"level":2,"title":"\u4E8C\u3001\u90E8\u7F72express+mongodb","slug":"\u4E8C\u3001\u90E8\u7F72express-mongodb","link":"#\u4E8C\u3001\u90E8\u7F72express-mongodb","children":[{"level":3,"title":"\u6DFB\u52A0.dockerignore\u6587\u4EF6","slug":"\u6DFB\u52A0-dockerignore\u6587\u4EF6","link":"#\u6DFB\u52A0-dockerignore\u6587\u4EF6","children":[]},{"level":3,"title":"\u6DFB\u52A0Dockerfile\u6587\u4EF6","slug":"\u6DFB\u52A0dockerfile\u6587\u4EF6","link":"#\u6DFB\u52A0dockerfile\u6587\u4EF6","children":[]},{"level":3,"title":"\u6DFB\u52A0docker-compose.yml\u6587\u4EF6","slug":"\u6DFB\u52A0docker-compose-yml\u6587\u4EF6","link":"#\u6DFB\u52A0docker-compose-yml\u6587\u4EF6","children":[]},{"level":3,"title":"\u6267\u884C","slug":"\u6267\u884C","link":"#\u6267\u884C","children":[]}]}],"relativePath":"blog/article/1.md"}'),o={name:"blog/article/1.md"},e=l(`<h1 id="docker-vue-express-mongodb-\u90E8\u7F72" tabindex="-1">docker + vue + express + mongodb \u90E8\u7F72 <a class="header-anchor" href="#docker-vue-express-mongodb-\u90E8\u7F72" aria-hidden="true">#</a></h1><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>\u8FD9\u7BC7\u8BB0\u5F55\u662F\u521A\u63A5\u89E6 docker \u65F6\u6700\u7B80\u5355\u7684\u9879\u76EE\u8BB0\u5F55\uFF0C\u540E\u7EED\u53EF\u67E5\u770B\u5347\u7EA7\u7248 <a href="/blog/article/3.html">Express+Mongodb \u52A8\u6001\u6CE8\u5165 mongodb \u5BC6\u7801\u5B9E\u8DF5\u8BB0\u5F55</a>\u3002</p></div><div class="info custom-block"><p class="custom-block-title">\u521D\u8877</p><p>\u8FD9\u4E24\u5929\u7814\u7A76\u4E86<code>docker</code>\u90E8\u7F72<code>vue</code>+<code>express</code>+<code>mongodb</code>\u9879\u76EE\uFF0C\u7B80\u5355\u505A\u4E86\u4E2A\u5C0F\u4F8B\u5B50\u56DE\u987E\u4E0B\u3002</p></div><h2 id="\u4E00\u3001\u90E8\u7F72vue" tabindex="-1">\u4E00\u3001\u90E8\u7F72<code>vue</code> <a class="header-anchor" href="#\u4E00\u3001\u90E8\u7F72vue" aria-hidden="true">#</a></h2><h3 id="\u6253\u5305vue" tabindex="-1">\u6253\u5305<code>vue</code> <a class="header-anchor" href="#\u6253\u5305vue" aria-hidden="true">#</a></h3><p>\u9996\u5148\u8981\u5BF9\u5F00\u53D1\u5B8C\u7684vue\u9879\u76EE\u8FDB\u884C\u6253\u5305:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm build</span></span>
<span class="line"></span></code></pre></div><h3 id="default-conf" tabindex="-1">default.conf <a class="header-anchor" href="#default-conf" aria-hidden="true">#</a></h3><p>\u5728\u6839\u76EE\u5F55\u6DFB\u52A0<code>default.conf</code>\u6587\u4EF6</p><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        root   </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">share</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        index  index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#error_page  404              /404.html;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#</span></span>
<span class="line"><span style="color:#A6ACCD;">    error_page   </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">502</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    location </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">50x.html </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        root   </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">share</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="dockerfile" tabindex="-1">Dockerfile <a class="header-anchor" href="#dockerfile" aria-hidden="true">#</a></h3><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">FROM</span><span style="color:#A6ACCD;"> nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY dist</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">usr</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">share</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">COPY .</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;">.conf </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">etc</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">nginx</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">conf.d</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;">.conf</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6784\u5EFAvue\u955C\u50CF" tabindex="-1">\u6784\u5EFA<code>vue</code>\u955C\u50CF <a class="header-anchor" href="#\u6784\u5EFAvue\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker build -t zhihu/portal </span><span style="color:#82AAFF;">.</span></span>
<span class="line"></span></code></pre></div><h3 id="\u542F\u52A8\u955C\u50CF" tabindex="-1">\u542F\u52A8\u955C\u50CF <a class="header-anchor" href="#\u542F\u52A8\u955C\u50CF" aria-hidden="true">#</a></h3><div class="language-scheme"><button title="Copy Code" class="copy"></button><span class="lang">scheme</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker run -p 3000:80 -d --name zhihu-mcn-portal zhihu/portal</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4E8C\u3001\u90E8\u7F72express-mongodb" tabindex="-1">\u4E8C\u3001\u90E8\u7F72<code>express</code>+<code>mongodb</code> <a class="header-anchor" href="#\u4E8C\u3001\u90E8\u7F72express-mongodb" aria-hidden="true">#</a></h2><h3 id="\u6DFB\u52A0-dockerignore\u6587\u4EF6" tabindex="-1">\u6DFB\u52A0<code>.dockerignore</code>\u6587\u4EF6 <a class="header-anchor" href="#\u6DFB\u52A0-dockerignore\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">node_modules</span></span>
<span class="line"><span style="color:#A6ACCD;">npm</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">debug.log</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6DFB\u52A0dockerfile\u6587\u4EF6" tabindex="-1">\u6DFB\u52A0<code>Dockerfile</code>\u6587\u4EF6 <a class="header-anchor" href="#\u6DFB\u52A0dockerfile\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">FROM</span><span style="color:#A6ACCD;"> node:</span><span style="color:#F78C6C;">10.15</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">LABEL maintainer</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webB1anyaoyao@gmail.com</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">COPY </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">app</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">RUN npm install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">RUN ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">RUN npm install </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">registry</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">https:</span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;">registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">RUN ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">EXPOSE </span><span style="color:#F78C6C;">3981</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CMD </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">npm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6DFB\u52A0docker-compose-yml\u6587\u4EF6" tabindex="-1">\u6DFB\u52A0<code>docker-compose.yml</code>\u6587\u4EF6 <a class="header-anchor" href="#\u6DFB\u52A0docker-compose-yml\u6587\u4EF6" aria-hidden="true">#</a></h3><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">version: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">services:</span></span>
<span class="line"><span style="color:#A6ACCD;">  app:</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: service </span><span style="color:#676E95;"># \u5BB9\u5668\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">    restart: on</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">failure </span><span style="color:#676E95;"># \u91CD\u542F\u65B9\u5F0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    build: .</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u6784\u5EFAdockerfile\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports: </span><span style="color:#676E95;"># \u66B4\u9732\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3981:3981</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;"># volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">#   - .:/app</span></span>
<span class="line"><span style="color:#A6ACCD;">    links: </span><span style="color:#676E95;"># \u4F9D\u8D56\u5BB9\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> mongo</span></span>
<span class="line"><span style="color:#A6ACCD;">  mongo:</span></span>
<span class="line"><span style="color:#A6ACCD;">    container_name: mongo</span></span>
<span class="line"><span style="color:#A6ACCD;">    image: mongo:</span><span style="color:#F78C6C;">4.0</span><span style="color:#A6ACCD;">.</span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u4F9D\u8D56\u955C\u50CF</span></span>
<span class="line"><span style="color:#A6ACCD;">    volumes:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> ~</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mongo</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">db:</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">data</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">db </span><span style="color:#676E95;"># \u6570\u636E\u6302\u8F7D</span></span>
<span class="line"><span style="color:#A6ACCD;">    ports:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">27017:27017</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><p>\u4FEE\u6539<code>env</code>\u6587\u4EF6</p><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">MONGODB_URL</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">mongodb:</span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;">localhost:</span><span style="color:#F78C6C;">27017</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">service</span></span>
<span class="line"><span style="color:#A6ACCD;">\u6539\u4E3A</span></span>
<span class="line"><span style="color:#A6ACCD;">MONGODB_URL</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">mongodb:</span><span style="color:#89DDFF;">//</span><span style="color:#A6ACCD;">mongo:</span><span style="color:#F78C6C;">27017</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">service</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6267\u884C" tabindex="-1">\u6267\u884C <a class="header-anchor" href="#\u6267\u884C" aria-hidden="true">#</a></h3><div class="language-powershell"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">docker</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">compose up </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">d</span></span>
<span class="line"></span></code></pre></div>`,27),p=[e];function c(r,t,D,i,C,y){return a(),n("div",null,p)}const F=s(o,[["render",c]]);export{A as __pageData,F as default};
