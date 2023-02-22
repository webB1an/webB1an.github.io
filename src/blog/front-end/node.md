# NODE

## `__dirname` 和 `process.cwd()` 差异

:::info 初衷
node 中很多概念经常会忘记，这里做一个记录~
:::

测试目录如下：

```
📦node
 ┗ 📂test
 ┃ ┗ 📜index.js
```

`index.js` 内容如下：

```js
console.log(`cwd: ${process.cwd()}`)
console.log(`dirname: ${__dirname}`)
```

命令行定位到 node 目录，执行 `node test/index.js`，得到的结果为：

```
cwd: /Users/wut1ao/learn/node
dirname: /Users/wut1ao/learn/node/test
```

命令行定位到 test 目录，执行 `node index.js`，得到的结果为：

```
cwd: /Users/wut1ao/learn/node/test
dirname: /Users/wut1ao/learn/node/test
```

由此可以看出：

- `__dirname`：表示要执行源代码的目录
- `process.cwd()`：表示返回当前工作目录，如：调用 node 命令执行脚本时的目录

所有在上面的例子中，我们定位到不同的目录执行 `index.js` 时，`__dirname` 的输出都是不变的，而因为我们调用 node 命令执行脚本的目录变了，所有 `process.cwd()` 运行的结果发生了改变。


## express-validator 使用

这里做个 express-validator 使用记录，具体详细使用方法可移步：[express-validator](https://express-validator.github.io/) 官网。

### router

```ts
import express from 'express'
import { checkSchema } from 'express-validator'
import type { Router, Request, Response } from 'express'

import { cookerFindCheckSchema } from '../validation/cooker'
import checkSchemaError from '../middleware/checkSchemaError'

router.post('/find', checkSchema(cookerFindCheckSchema), checkSchemaError, async(req: Request, res: Response) => {
  // your code
})
```

### cookerFindCheckSchema

```ts
export const cookerFindCheckSchema: Schema = {
  pageSize: {
    notEmpty: true,
    isInt: true,
    errorMessage: '缺少 pageSize 参数'
  },
  page: {
    notEmpty: true,
    isInt: true,
    errorMessage: '缺少 page 参数'
  },
  requestData: {
    custom: {
      options: (value, { req, location, path }) => {
        try {
          if (typeof value === 'object') return value
          return JSON.parse(value)
        } catch (error) {
          throw new Error('请输入正确的参数类型')
        }
      }
    }
  }
}
```

### checkSchemaError

```ts
import type { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export default function checkSchemaError(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.json({
      code: 90002,
      msg: errors.array().map(err => err.msg).join(' | ')
    })
  }
  next()
}
```

## 配置环境变量

::: tip 原因
环境变量的配置，可以将项目中的敏感数据从代码中剥离出去，作为环境变量存储在环境中，全局调用。
:::

### 配置示例

1. 在根目录添加 `dev.env` 文件
```
NODE_ENV=dev
PORT=3000
```
1. 引入 dotenv

::: tip dotenv 介绍
[dotenv](https://www.npmjs.com/package/dotenv) 是一个 `npm` 包，可以将配置的文件解析成 `json` 对象，并对其中的 `key-value` 对通过 process.env 将其赋值为环境变量。
:::


```zsh
npm install dotenv
```

3. 使用 dotenv


```js
require('dotenv).config({ path: 'dev.env' })
console.log(process.env)

// {NODE_ENV: 'dev', PORT: '3000'}
```

4. 在其他文件使用配置后的环境变量
```js
console.log(process.env.PORT) // 3000
```

## 使用 `Passport` 实现 `oAuth 2.0` 第三方登录认证

- 安装`passport`相关第三方库

```zsh
$ yarn add passport passport-oauth2 express-session
```

- 为`Passport`添加`oAuth`策略

```javascript
const passport = require('passport')
const OAuth2Strategy = require('passport-oauth2').Strategy

const client_id = 'my-passport-client'
const client_secret = 'mysecret'

passport.use(new OAuth2Strategy(
  {
    authorizationURL: 'Your authorizationURL',
    tokenURL: `Your tokenURL`,
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: 'http://localhost:5555/callbacks'
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, accessToken)
  }
))

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(user, done) {
  done(null, user)
})
```

- 使用策略认证

```javascript
const express = require('express')
const session = require('express-session')
const passport = require('passport')
require('./config/passport')

// Constants
const PORT = process.env.PORT
const HOST = process.env.HOST

const app = express()

app.use(session({ secret: 'passport-client-app' }))
app.use(passport.initialize())
app.use(passport.session())

function isLoggedIn(req, res, next) {
  req.user ? next() : res.redirect('/error')
}

app.get('/', passport.authenticate('oauth2'))

app.get('/callbacks', passport.authenticate('oauth2', {
  successRedirect: '/authenticate',
  failureRedirect: '/error'
}))

app.get('/authenticate', isLoggedIn, (req, res) => {
  res.send('Hello!')
})

app.get('/logout', (req, res) => {
  req.logout()
  res.send('Byebye')
})

app.get('/error', async(req, res) => {
  res.send('error')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
```

## 保存网络图片

```ts
import rq from 'request-promise'
import { writeFileSync, mkdirSync, existsSync } from 'fs'

export async function saveSimpleImage(url: string, path = 'images'): Promise<boolean> {
  const destination = join(__dirname, '../', path)
  const response = await rq({ url, resolveWithFullResponse: true, encoding: null })
  // console.log('---------------res---------------', response)
  console.log('---------------des---------------', destination)
  if (!existsSync(destination)) {
    mkdirSync(destination, { recursive: true })
  }
  const fileName = join(destination, sanitize(basename(url)))
  try {
    writeFileSync(fileName, response.body)
  } catch (error) {
    console.log('---------------error---------------', error)
  }
  console.log('---------------fileName---------------', fileName)
  return true
}
```

::: tip
保存文件时需要判断要保存文件的路径是否存在，不存在需要用`mkdirSync`创建
`mkdirSync` 创建文件夹时，如果给的路径是多层嵌套路径且路径的文件夹不存在，需要指定`mkdirSync`的第二个参数`{ recursive: true }`
:::

