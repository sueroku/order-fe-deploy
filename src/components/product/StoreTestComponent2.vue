<template>
    <h1>store test component2</h1>
    <p>count : {{ getCount }}</p> <!-- 함수를 변수처럼..쓰면 리턴값이 들어온대-->
    <v-btn color="red" @click="incrementCount">증가</v-btn>
    <br>
    <input type="text" v-model="message">
    <v-btn color="red" @click="updateMessage">메세지</v-btn>
</template>

<script>
import { mapGetters } from 'vuex';
export default{
    data(){
        return{
            count:0,
            message:"",
        }
    },
    computed:{
        ...mapGetters(['getCount']),
    },
    methods:{
        incrementCount(){
            // this.count++;
            this.$store.dispatch('incrementCount')
        },
        updateMessage(){
            this.$store.dispatch('updateMessage', this.message)
        }
    }
}
</script>