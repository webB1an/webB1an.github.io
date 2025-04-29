# CSS 面试问题

## link 和 @import 的区别

- link 是 html 标签，除了加载 css 外，还可以定义 RSS 等其他事物；@import 属于 css 范畴，只能加载 css
- link 引用 css 时，在页面载入时同时加载；@import 在网页完全加载完成后加载。
- link 是 html 标签，无兼容性问题；@import 是 css2.1 提出的，低版本浏览器不兼容。
- link 支持使用 javaScript 控制 dom 去改变样式；@import 不支持。

## less 和 sass 区别

- 变量符号不同
  - sass：$
  - less：@
- sass 支持条件语句，less 不支持
