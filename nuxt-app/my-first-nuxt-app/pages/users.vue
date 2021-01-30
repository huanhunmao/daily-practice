<template>
    <div>
        <h2>这个是父级 parent</h2>
         <input type="text" name="" id="" v-model="userId">
        <button @click="onLoadUser">用户详情</button>
        <nuxt-child/>
    </div>
    
</template>



<script>
export default {
    data(){
        return {
            userId:''
        }
    },
    methods:{
        onLoadUser(){
            this.$router.push('/users/' + this.userId)
        }        
    },
    layout : 'default'
}
</script>