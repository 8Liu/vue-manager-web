<template>
  <div class="main">
    <v-aside></v-aside>
    <div class="main-body" :collapse="true">
      <v-header></v-header>
      <div class="main-container" :collapse="true">

      </div>
    </div>

  </div>
</template>

<script>
    import vAside from '@/components/layout/aside'
    import vHeader from '@/components/layout/header'

    export default {
        name: "home",
        components: {
            vAside,
            vHeader
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


  .main-body v-header {
    height: 56px;
    width: 100%;
    text-align: right;
    background-color: #409EFF;
    color: #303133;
    line-height: 60px;
  }

</style>
