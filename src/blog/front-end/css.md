# CSS

## 长文本换行

<div style="width: 150px; border: 1px solid #ccc; word-wrap: break-word; margin: 0 auto;">https://webb1an.github.io/</div>

```css
white-space: pre-line;
word-wrap: break-word;
```

## 文本溢出

### 单行文本溢出

<div style="width: 150px; border: 1px solid #ccc; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0 auto;">https://webb1an.github.io/</div>

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

### 多行文本溢出

<div style="width: 150px; border: 1px solid #ccc; white-space: pre-line; word-wrap: break-word; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin: 0 auto;">https://webb1an.github.io/ 多行文本测试多行文本测试多行文本测试多行文本测试</div>

```css
white-space: pre-line;
word-wrap: break-word;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
```
