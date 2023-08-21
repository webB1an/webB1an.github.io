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
    // 自定义上传
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
    // 监听文件改变
    handleChange(file, fileList) {
      console.log('handleChange')
      this.fileList = fileList
      this.$refs.upload.submit()
    },
    // 上传前的钩子，处理文件
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
