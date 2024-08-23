<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="4" md="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">🤘회원가입🤘</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="memberCreate">
                            <v-text-field label="이름" prepend-icon="mdi-account" v-model="name" required>
                            </v-text-field>
                            <v-text-field label="이메일" prepend-icon="mdi-email" type="email" v-model="email" required>
                            </v-text-field>
                            <v-text-field label="비밀번호" prepend-icon="mdi-lock" type="password" v-model="password" required>
                            </v-text-field>
                            <v-text-field label="도시" prepend-icon="mdi-city" v-model="city">
                            </v-text-field>
                            <v-text-field label="상세주소" prepend-icon="mdi-home" v-model="street">
                            </v-text-field>
                            <v-text-field label="우편번호" prepend-icon="mdi-mailbox" v-model="zipcode">
                            </v-text-field>
                            <v-btn type="submit" color="primary" block>등록</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            name: "",
            email: "",
            password: "",
            city:"",
            street: "",
            zipcode: ""
        }
    },
    methods:{
        async memberCreate(){
            try{
                const registerData = {
                    name: this.name, 
                    email: this.email,
                    password: this.password,
                    address: {city:this.city, street:this.street, zipcode:this.zipcode}
                }
                await axios.post(`${process.env.VUE_APP_API_BASE_URL}/member/create`, registerData);
                this.$router.push("/");
            }catch(e){
                const error_message = e.response.data.error_message;
                console.log(error_message);
                alert(error_message);
            }
        }
    }
}
</script>