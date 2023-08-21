<script setup>
import ElUpload from './components/ElUpload.vue'
</script>

# Element 自定义上传

<ElUpload />

以前在做上传相关功能的时候，都是用的自定义上传动能，虽然能够上传了，但是相关的流程有很多问题，比如：

- 文件上传成功后前端回显上传成功的标志就没有，这样子页面显示会有问题
- 自定义上传没有在 el-upload 提供的 `http-request` 中处理，这样会让代码非常凌乱
- 自定义上传没有在 el-upload 提供的 `on-success` 和 `on-error` 中处理，这样会让代码非常凌乱

::: warning 注意
1. 当 `auto-upload` 属性设置为 `false` 的时候，如果不在 `on-change` 事件中调用 `submit` 方法，那么上传的文件是不会上传的
2. 在 `on-change` 事件中调用 `submit` 方法后，才会触发 `http-request` 事件的自定义上传
:::


::: details 点击查看代码
```vue
<template>
  <div class="app-container">
    <el-upload
      ref="upload"
      action=""
      :file-list="fileList"
      :limit="2"
      :auto-upload="false"
      :http-request="handleHttpRequest"
      :before-upload="handleBeforeUpload"
      :on-change="handleChange"
      :on-exceed="handleExceed"
      :on-success="handleSuccess"
      :on-error="handleError"
    >
      <el-button type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: []
    }
  },
  methods: {
    handleHttpRequest(params) {
      const formData = new FormData();
      formData.append('file', params.file);
      fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        body: formData
      }).then(res => res.json()).then(res => {
        params.onSuccess()
      }).catch(err => {
        params.onError()
      })
    },
    handleChange(file, fileList) {
      console.log('handleChange')
      this.fileList = fileList
      this.$refs.upload.submit()
    },
    handleBeforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    handleSuccess(response, file, fileList) {
      this.$message.success('上传成功');
    },
    handleError(err, file, fileList) {
      console.log('err', err)
      console.log('file', file)
      console.log('fileList', fileList)
      this.$message.error('上传失败');
    }
  }
}
</script>

<style>

</style>
```
:::
