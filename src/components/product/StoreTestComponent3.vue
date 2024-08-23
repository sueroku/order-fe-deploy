<template>
    <h1>store test component3</h1>
    <p>count : {{ getCount }}</p> 
    <p>messge : {{ getMessage }}</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default{
    computed:{
        ...mapGetters(['getCount', 'getMessage']),
    },
    methods:{
    }
}

// 전역적인 공간에 두고 전역상태관리하고 싶다 // 장바구니 레츠고
</script>