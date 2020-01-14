<template>  
   <div id="tabbar">
     <slot></slot> 
   </div>  
</template>
<script>
export default {
    name:'tabbar'
}
</script>

<style  scoped> 
   #tabbar{
      background:#f2f2f2;
     display:flex;
     justify-content:space-around;
     position:fixed;
     bottom:0;
     left:0;
     right:0;
     box-shadow:0px  -1px 1px rgba(100,100,100,0.2);
   }
</style>