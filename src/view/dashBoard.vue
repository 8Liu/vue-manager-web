<template>
    <div class="container">
        <el-breadcrumb separator=">">
            <el-breadcrumb-item><i class="el-icon-s-home"></i> 系统首页</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
            我是dashBoard组件
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashBoard"
    }
</script>

<style scoped>
    .container .content{
        margin-top: 10px;
    }
</style>
