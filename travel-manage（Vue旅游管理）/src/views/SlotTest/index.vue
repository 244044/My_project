<template>
  <div>
    <Son>
      <template #aaa>
        <h4>哈哈旅程</h4>
      </template>

      <p>哈哈旅程不是旅游公司哦！</p>
    </Son>
  </div>
</template>

<!-- 
  父组件生成html结构并传递到子组件渲染 ==> 子组件可以由父组件定制化
  1. 普通插槽：
    父组件中使用子组件时，在子组件标签对内，写要插槽的内容
    子组件使用slot标签就能拿到这个内容
  2. 具名插槽
    （1）父组件中使用子组件时，在子组件标签对内，
    写<template v-slot:插槽名>插槽内容</template>
    （2）子组件使用slot标签[name="插槽名"]拿到这个内容

-->

<script>
import Son from './Son.vue'
export default {
  name: 'slotTest',
  components: {
    Son
  },
  data(){
    return {
    }
  }
}
</script>

<style></style>