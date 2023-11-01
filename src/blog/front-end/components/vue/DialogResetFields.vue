<template>
  <el-button type="primary" @click="handleAdd">新增</el-button>
  <el-button type="primary" @click="handleOpenDialog">修改</el-button>
  <el-dialog title="弹窗" v-model="dialogFormVisible" width="500" @close="handleCloseDialog">
    <el-form ref="form" :model="form" :rules="rules">
      <el-form-item label="名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-input v-model="form.type" />
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleConfirmDialog">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        type: '',
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        type: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    handleAdd() {
      this.dialogFormVisible = true;
    },
    handleOpenDialog() {
      this.dialogFormVisible = true;
      this.form = {
        ...this.form,
        name: '活动名称',
        type: '活动区域',
      }
    },
    handleCloseDialog() {
      this.$refs['form'].resetFields();
    },
    handleConfirmDialog() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.dialogFormVisible = false;
          this.$message({
            type: 'success',
            message: '操作成功!'
          });
        } else {
          return false;
        }
      });
    }
  }
}
</script>
