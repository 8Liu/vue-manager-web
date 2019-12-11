<template>
    <div class="container">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item><i class="el-icon-s-grid"></i> 表单相关</el-breadcrumb-item>
            <el-breadcrumb-item> 基本表单</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            我是baseForm组件
        </div>

    </div>
</template>

<script>
    export default {
        name: "baseForm",
    }
</script>

<style>
    .container .content{
        margin-top: 10px;
    }
</style>
