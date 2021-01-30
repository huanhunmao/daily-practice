<template>
    <h2>这个页面是：{{$route.params.id}}</h2>
</template>


<script>
export default {
    validate(data){
        // console.log(data)
        // return true

        // return  parseInt(data.params.id) === 1

        //如何做到通用化  如果参数 为 数值就展示 
        return /^\d+$/.test(data.params.id)
    }
}
</script>