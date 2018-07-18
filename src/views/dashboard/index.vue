<template>
  <div :class="className">
    <ul>
      <li>基于vue全家桶和element ui的简单模板，使用less, axios和mockjs</li>
      <li>遵循JavaScript Standard Style规范</li>
      <li>统一的classPrefix</li>
      <li>可自定义主题色</li>
    </ul>
  </div>
</template>
<script>

export default {
  data () {
    return {
      className: `${this.classPrefix}-v-dashboard`
    }
  }
}
</script>
<style lang="less">
  .@{classPrefix}-v-dashboard {
    li {
      line-height: 2;
    }
  }
</style>
