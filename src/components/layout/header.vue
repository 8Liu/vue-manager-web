<template>
  <el-header>
    <div class="collapse-btn" @click="setCollapse(!collapse)">
      <i class="el-icon-s-operation"></i>
    </div>
    <div class="dropdown">
      <el-dropdown>
        <i class="el-icon-setting"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </div>

  </el-header>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        name: "header",
        methods:{
          ...mapMutations([
            'setCollapse'
          ])
        },
        computed:{
          ...mapState([
            'collapse'
          ])
        }
    }
</script>

<style>
  .el-header{
    display: flex;
    justify-content: space-between;
    height: 56px;
    width: 100%;
    text-align: right;
    background-color: #409EFF;
    color: #303133;
    line-height: 60px;
  }
  .collapse-btn{
    font-size: 25px;
  }
</style>

