<template>
    <div class="container">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item><i class="el-icon-s-grid"></i> 表单相关</el-breadcrumb-item>
            <el-breadcrumb-item> 上传组件</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            我是upload上传组件
        </div>
    </div>
</template>

<script>
    export default {
        name: "upload"
    }
</script>

<style scoped>
    .container .content{
        margin-top: 10px;
    }
</style>
