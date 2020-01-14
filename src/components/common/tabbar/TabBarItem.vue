<template>
   <div class='tab-bar-item'  @click='itemClick'>
     <div v-if='!isActive'><slot  name='item-icon'></slot></div>
     <div v-else ><slot name='item-icon-active'></slot></div>
     <div :style='activeStyle'>
        <slot  name='item-text' ></slot>
     </div>
   </div>
</template>
<script>
     export  default {
        name:'TabBarItem',
        props:{
            path:String,
            activeColor: {
                type:String,
                default:"#950e0e"
            }
        },
        data(){
            return {
               
            }
        },
        computed:{
            isActive() {
              return  this.$route.path.indexOf(this.path) !== -1  //判断当前组件的路劲是够否和地址栏上的路劲相同
            },
            activeStyle(){ //  如果样式过于复杂可以写在计算属性里面  style 绑定的是对象语法
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods:{
            itemClick(){
                console.log('itemClick');
                console.log(this.path);//注册这里不需要写 this .props.path
                this.$router.replace(this.path);
            }
        }
     }
</script>
<style  scoped>
  .active{
     color:#950e0e;
  }
  .tab-bar-item{
      flex:1;
      text-align:center;
      height:49px;
      font-size:14px;
  }
  .tab-bar-item img {
     width:24px;
     height:24px;
     margin-top:3px;
     vertical-align:middle;
     margin-bottom:2px;
  }
</style>