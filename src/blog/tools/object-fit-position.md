<script setup>
import ObjectFitPosition from './components/ObjectFitPosition.vue'
</script>

# 图片适配 object-fit 和 object-position


<ObjectFitPosition /> 

## 概念解释


`object-fit` 和 `object-position` 是 CSS 中用于控制元素如图像、视频等的尺寸和位置的属性。

### object-fit

`object-fit` 属性用于指定可替换元素的内容应如何适应到其使用的高度和宽度确定的框中。可替换元素是其内容独立于 CSS 的元素，例如 `img`，`object`，`video`，`iframe` 等。

它有以下几个值：

- `fill`：默认值。替换内容拉伸填满整个内容框，可能会改变内容的宽高比。

- `contain`：保持元素内容的宽高比，将元素内容缩放以最大限度地将其内容放入内容框。

- `cover`：保持元素内容的宽高比，将元素内容缩放以最小程度覆盖整个内容框。元素的内容在其内容框中可能会溢出。

- `none`：元素内容的尺寸与内容框的尺寸无关。

- `scale-down`：元素的内容就好像没有指定 `object-fit` 一样，会取 `none` 或 `contain` 其中一个的行为。

```css
img {
  object-fit: cover;
}
```

### object-position

`object-position` 属性用于指定替换元素的内容在元素的内容框中的位置。就像 `background-position` 一样，你可以指定一个或两个位置值。

- 第一个值是水平方向上的位置，可以是左 (`left`)，中 (`center`) 或右 (`right`)，或一个具体的长度值。

- 第二个值是垂直方向上的位置，可以是顶部 (`top`)，中部 (`center`)，底部 (`bottom`)，或一个具体的长度值。

```css
img {
  object-fit: cover;
  object-position: 10px 20px;
}
```

以上的 CSS 代码会使 `img` 的内容被缩放以覆盖内容框，并且内容的左上角被定位在内容框中的 `(10px, 20px)` 的位置。

注意，`object-fit` 和 `object-position` 属性在某些老的浏览器版本中可能不被支持，使用时请注意兼容性问题。
