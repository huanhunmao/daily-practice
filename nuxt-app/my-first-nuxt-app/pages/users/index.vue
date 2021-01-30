<template>
    <div>
        <div>
            <h2>这个是子级 child</h2>
         <input type="text" name="" id="" v-model="userId">
        <button @click="onLoadUser">用户详情</button>

        </div>
       
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
    }
}
</script>
