<template>
    <div class="container">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item><i class="el-icon-film"></i> 基本表格</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            我是baseContent组件
        </div>
    </div>
</template>

<script>
    export default {
        name: "baseContent"
    }
</script>

<style scoped>
    .container .content{
        margin-top: 10px;
    }
</style>
