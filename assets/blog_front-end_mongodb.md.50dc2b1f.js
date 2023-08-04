import{_ as s,o as n,c as a,d as l}from"./app.b0a58066.js";const i=JSON.parse('{"title":"Mongodb","description":"","frontmatter":{},"headers":[{"level":2,"title":"Mongoose","slug":"mongoose","link":"#mongoose","children":[{"level":3,"title":"Schema.prototype.add()","slug":"schema-prototype-add","link":"#schema-prototype-add","children":[]},{"level":3,"title":"Virtual","slug":"virtual","link":"#virtual","children":[]},{"level":3,"title":"Schema.prototype.path()","slug":"schema-prototype-path","link":"#schema-prototype-path","children":[]},{"level":3,"title":"\u5B9A\u4E49 Static methods (\u9759\u6001\u65B9\u6CD5)","slug":"\u5B9A\u4E49-static-methods-\u9759\u6001\u65B9\u6CD5","link":"#\u5B9A\u4E49-static-methods-\u9759\u6001\u65B9\u6CD5","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u9A8C\u8BC1\u65B9\u6CD5 Validation","slug":"\u81EA\u5B9A\u4E49\u5B57\u6BB5\u9A8C\u8BC1\u65B9\u6CD5-validation","link":"#\u81EA\u5B9A\u4E49\u5B57\u6BB5\u9A8C\u8BC1\u65B9\u6CD5-validation","children":[]},{"level":3,"title":"Schema.prototype.pre()","slug":"schema-prototype-pre","link":"#schema-prototype-pre","children":[]}]}],"relativePath":"blog/front-end/mongodb.md","lastUpdated":1669690904000}'),p={name:"blog/front-end/mongodb.md"},o=l(`<h1 id="mongodb" tabindex="-1">Mongodb <a class="header-anchor" href="#mongodb" aria-hidden="true">#</a></h1><h2 id="mongoose" tabindex="-1">Mongoose <a class="header-anchor" href="#mongoose" aria-hidden="true">#</a></h2><h3 id="schema-prototype-add" tabindex="-1">Schema.prototype.add() <a class="header-anchor" href="#schema-prototype-add" aria-hidden="true">#</a></h3><p><code>add</code> \u65B9\u6CD5\u53EF\u4EE5\u7ED9 <code>schema</code> \u52A8\u6001\u6DFB\u52A0\u5B57\u6BB5</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userSchema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">first</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">last</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">userSchema</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">String</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="virtual" tabindex="-1">Virtual <a class="header-anchor" href="#virtual" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u4F7F\u7528 <code>virtual</code> \u4E3A <code>schema</code> \u6DFB\u52A0\u8BBE\u7F6E\u865A\u62DF\u5C5E\u6027\uFF0C\u4F46\u8FD9\u4E2A\u865A\u62DF\u5C5E\u6027\u4E0D\u4F1A\u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D\u3002\u6BD4\u5982\uFF0C\u524D\u53F0\u4F20\u7ED9\u540E\u53F0\u4E00\u4E2A\u53C2\u6570 <code>name</code>\uFF0C \u4EE3\u8868\u7528\u6237\u540D\u79F0\uFF0C\u4F46\u6570\u636E\u5E93\u4FDD\u5B58\u7684\u662F\u4E24\u4E2A\u5B57\u6BB5\uFF0C\u59D3\u548C\u540D\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u865A\u62DF\u5C5E\u6027</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u7684\u6570\u636E\u683C\u5F0F</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userSchema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">first</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">last</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5F53\u83B7\u53D6\u8BE5 schema \u7684 fullname \u5C5E\u6027\u65F6\uFF0C\u5C06 schema \u4E2D\u7684 name.first \u548C name.last \u62FC\u63A5\u8D77\u6765\u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">userSchema</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">virtual</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fullname</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">first</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">last</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u5F53\u8BBE\u7F6E\u8BE5 schema \u7684 fullname \u5C5E\u6027\u65F6\uFF0C\u5C06\u8BBE\u7F6E\u7684\u540D\u79F0\u4EE5\u7A7A\u683C\u5206\u5F00\uFF0C\u5206\u522B\u8D4B\u503C\u7ED9 schema \u4E2D\u7684 name.first \u548C name.last</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fullname</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">username</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">fullname</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">first</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">username</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">last</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">username</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5C06\u8BE5 schema \u4FDD\u5B58\u5230\u6570\u636E\u5E93\u4E2D\u65F6\uFF0C\u53EA\u4F1A\u4FDD\u5B58 name.first \u548C name.last</span></span>
<span class="line"></span></code></pre></div><h3 id="schema-prototype-path" tabindex="-1">Schema.prototype.path() <a class="header-anchor" href="#schema-prototype-path" aria-hidden="true">#</a></h3><p><code>Modal</code> \u7684\u5B9E\u4F8B\u662F <code>documents</code>\uFF0C<code>document</code> \u6709\u5F88\u591A\u81EA\u5DF1\u672C\u8EAB\u7684\u5B9E\u4F8B\u65B9\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u5B9A\u4E49\u81EA\u5DF1\u7684\u5B9E\u4F8B\u65B9\u6CD5</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u5B9A\u4E49\u5B9E\u4F8B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userSchema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">userSchema</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">methods </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">validatePassword</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">password</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4F7F\u7528\u5B9E\u4F8B\u65B9\u6CD5</span></span>
<span class="line"><span style="color:#A6ACCD;">cosnt User </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">model</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> userSchema)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">User</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12345</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">validatePassword</span><span style="color:#A6ACCD;">()) </span><span style="color:#676E95;">// false</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5B9A\u4E49-static-methods-\u9759\u6001\u65B9\u6CD5" tabindex="-1">\u5B9A\u4E49 Static methods (\u9759\u6001\u65B9\u6CD5) <a class="header-anchor" href="#\u5B9A\u4E49-static-methods-\u9759\u6001\u65B9\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userSchema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">userSchema</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">statics </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">findByAge</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">callback</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">findOne</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">callback</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> User </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">model</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> userSchema)</span></span>
<span class="line"><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findByAge</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">user</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u5B57\u6BB5\u9A8C\u8BC1\u65B9\u6CD5-validation" tabindex="-1">\u81EA\u5B9A\u4E49\u5B57\u6BB5\u9A8C\u8BC1\u65B9\u6CD5 Validation <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5B57\u6BB5\u9A8C\u8BC1\u65B9\u6CD5-validation" aria-hidden="true">#</a></h3><ol><li><code>Validation</code> \u662F\u5B9A\u4E49\u5728 <code>SchemaType</code> \u4E0A\u7684</li><li><code>Validation</code> \u662F\u4E2D\u95F4\u4EF6\u7684\u4E00\u90E8\u5206</li><li><code>Validation</code> \u662F\u5728 <code>document</code> \u6267\u884C <code>save</code> \u65B9\u6CD5\u540E\u89E6\u53D1</li></ol><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userSchema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// \u540C\u6B65\u7684\u9A8C\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">userSchema</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">path</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">validate</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vaule</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">6</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Password length at least 6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5F02\u6B65\u9A8C\u8BC1</span></span>
<span class="line"><span style="color:#A6ACCD;">userSchema</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">path</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">validate</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">username</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">((</span><span style="color:#A6ACCD;">resolve</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">User</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">model</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">userSchema</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">User</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findOne</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">) </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">fasle</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">username already exists</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> User </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> mongoose</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">model</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> userSchema)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> user </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">User</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">18</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12345</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">user</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">save</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">send</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message</span><span style="color:#F07178;">) </span><span style="color:#676E95;">// Password length at least 6</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h3 id="schema-prototype-pre" tabindex="-1">Schema.prototype.pre() <a class="header-anchor" href="#schema-prototype-pre" aria-hidden="true">#</a></h3><p><code>pre</code> \u65B9\u6CD5\u7ED9 <code>document</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u524D\u7F6E\u7684\u94A9\u5B50(pre hook)</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> userSchema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Schema</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">age</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> String</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;">// Schema.prototype.pre(method, callback) callback \u4E0D\u80FD\u4F7F\u7528\u7BAD\u5934\u51FD\u6570 \u5426\u5219\u4E0D\u53D1\u4F7F\u7528 this \u8C03\u7528\u5230\u5B9E\u4F8B\u7684\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">userSchema</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pre</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">save</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">password</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password too easy</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">userSchema</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pre</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">validate</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">next</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">age</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Error</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">age at least 18</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,19),e=[o];function c(t,r,y,D,F,A){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{i as __pageData,d as default};