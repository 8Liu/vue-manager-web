<template>
  <div class="main">
    <v-aside></v-aside>
    <div class="main-body">
      <v-header></v-header>
      <v-tags></v-tags>
      <div class="main-container">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import vAside from '@/components/layout/aside'
import vHeader from '@/components/layout/header'
import vTags from '@/components/layout/tags'

export default {
    name: "home",
    components: {
        vAside,
        vHeader,
        vTags
    }

}
</script>

<style scoped>
  .main {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
  }

  .main .main-body {
    order: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }


  .main-body .v-header {
    height: 56px;
    width: 100%;
    text-align: right;
    background-color: #409EFF;
    color: #303133;
    line-height: 60px;
  }

  .main-body .tags{
    margin-top: 10px;
    margin-left: 10px;
  }

  .main-body .main-container{
    margin-top: 10px;
    margin-left: 10px;
  }

</style>
<style>

</style>
