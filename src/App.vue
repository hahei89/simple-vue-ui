<template>
  <div id="app">
    <div class="row">
      <simple-button type="primary">登录</simple-button>
      <simple-button type="success">注销</simple-button>
      <simple-button type="info">删除</simple-button>
      <simple-button type="warning">按钮</simple-button>
      <simple-button type="danger">按钮</simple-button>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
  .row {
    margin-bottom: 20px;
    .hm-button {
      margin-right: 20px;
    }
  }
</style>
