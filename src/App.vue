<template>
  <div id="app">
    <div class="row">
      <simple-button @click="fn" type="primary">登录</simple-button>
      <simple-button type="success">注销</simple-button>
      <simple-button type="info">删除</simple-button>
      <simple-button type="warning">按钮</simple-button>
      <simple-button type="danger">按钮</simple-button>
    </div>
    <div class="row">
      <simple-button plain type="primary">登录</simple-button>
      <simple-button plain type="success">注销</simple-button>
      <simple-button plain type="info">删除</simple-button>
      <simple-button plain type="warning">按钮</simple-button>
      <simple-button plain type="danger">按钮</simple-button>
    </div>
    <div class="row">
      <simple-button round plain type="primary">登录</simple-button>
      <simple-button round plain type="success">注销</simple-button>
      <simple-button round plain type="info">删除</simple-button>
      <simple-button round plain type="warning">按钮</simple-button>
      <simple-button round plain type="danger">按钮</simple-button>
    </div>
    <div class="row">
      <simple-button circle type="primary">登录</simple-button>
      <simple-button circle type="success">注销</simple-button>
      <simple-button circle type="info">删除</simple-button>
      <simple-button circle type="warning">按钮</simple-button>
      <simple-button circle type="danger">按钮</simple-button>
    </div>
    <div class="row">
      <simple-button icon="one-icon-audio" type="primary">登录</simple-button>
      <simple-button icon="one-icon-audio" type="success">注销</simple-button>
      <simple-button icon="one-icon-audio" type="info">删除</simple-button>
      <simple-button icon="one-icon-audio" type="warning">按钮</simple-button>
      <simple-button icon="one-icon-audio" type="danger"></simple-button>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    fn () {
      console.log('fn click')
    }
  }
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
