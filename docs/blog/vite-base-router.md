# Vite 中 base 与 Router 配置指南

在 Vite 中，`base` 对应 Vue CLI 中的 `publicPath`，用于控制打包后的资源路径。

## 一、base 配置

```ts
export default defineConfig({
  base: '/your-path/'
})
```

## 二、Router 配置

当项目部署在子路径时，必须配置：

```ts
createWebHistory(import.meta.env.BASE_URL)
```

## 三、常见问题

- 刷新 404
- 子路径访问失败

原因通常是 base 与 router 不一致。

## 四、总结

> base + router + 服务器配置 必须一致
