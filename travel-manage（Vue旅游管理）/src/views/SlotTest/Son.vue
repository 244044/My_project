<template>
  <div>
    <slot name="aaa"></slot>
    <input type="button" value="查看信息">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'son',
  components: {
  },
  data(){
    return {
    }
  }
}
</script>

<style></style>