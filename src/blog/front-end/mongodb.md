# Mongodb

## Mongoose

### Schema.prototype.add()

`add` 方法可以给 `schema` 动态添加字段

```js
const userSchema = new Schema({
  name: {
    first: {
      type: String,
    },
    last: {
      type: String,
    }
  }
})
userSchema.add({age: 'String'})
```

### Virtual

可以使用 `virtual` 为 `schema` 添加设置虚拟属性，但这个虚拟属性不会保存到数据库中。比如，前台传给后台一个参数 `name`， 代表用户名称，但数据库保存的是两个字段，姓和名，就可以使用虚拟属性

```js
// 定义的数据格式
const userSchema = new Schema({
  name: {
    first: {
      type: String,
    },
    last: {
      type: String,
    }
  }
})

// 当获取该 schema 的 fullname 属性时，将 schema 中的 name.first 和 name.last 拼接起来返回
userSchema.virtual('fullname')
  .get(function() {
    return this.name.first + ' ' + this.name.last
  })
  // 当设置该 schema 的 fullname 属性时，将设置的名称以空格分开，分别赋值给 schema 中的 name.first 和 name.last
  .set(function(fullname) {
    let username = fullname.split(' ')
    this.name.first = username[0]
    this.name.last = username[1]
  })

// 将该 schema 保存到数据库中时，只会保存 name.first 和 name.last
```

### Schema.prototype.path()

`Modal` 的实例是 `documents`，`document` 有很多自己本身的实例方法，也可以定义自己的实例方法

```js
// 定义实例方法
const userSchema = new Schema({
  age: String,
  password: String
})

userSchema.methods = {
  validatePassword() {
    return this.password.length > 6
  }
}

// 使用实例方法
cosnt User = mongoose.model('User', userSchema)
const user = new User({
  age: 18,
  password: '12345'
})
console.log(user.validatePassword()) // false
```

### 定义 Static methods (静态方法)

```js
const userSchema = new Schema({
  age: String,
  password: String
})

userSchema.statics = {
  findByAge(name, callback) {
    this.findOne({name}, callback)
  }
}
const User = mongoose.model('User', userSchema)
User.findByAge(18, (err, user) => {
  console.log(user)
})
```

### 自定义字段验证方法 Validation

1. `Validation` 是定义在 `SchemaType` 上的
2. `Validation` 是中间件的一部分
3. `Validation` 是在 `document` 执行 `save` 方法后触发

```js
const userSchema = new Schema({
  age: String,
  username: String,
  password: String
})
// 同步的验证
userSchema.path('password').validate(value => {
  return vaule.length >= 6
}, 'Password length at least 6')

// 异步验证
userSchema.path('username').validate(username => {
  return new Promise((resolve => {
    const User = mongoose.model('User', userSchema)
    let result = User.findOne({username: 'test'})
    if (res) resolve(fasle)
    resolve(true)
  }))
}, 'username already exists')


const User = mongoose.model('User', userSchema)


const user = new User({
  age: 18,
  password: '12345'
})
user.save(err => {
  res.send(err.message) // Password length at least 6
})
```

### Schema.prototype.pre()

`pre` 方法给 `document` 提供了一个前置的钩子(pre hook)

```js
const userSchema = new Schema({
  age: String,
  username: String,
  password: String
})
// Schema.prototype.pre(method, callback) callback 不能使用箭头函数 否则不发使用 this 调用到实例的值
userSchema.pre('save', function(next) {
  if (this.password === '123456') return next(new Error('password too easy'))
  next()
})
userSchema.pre('validate', function(next) {
  if (this.age === '12') return next(new Error('age at least 18'))
  next()
})
```
