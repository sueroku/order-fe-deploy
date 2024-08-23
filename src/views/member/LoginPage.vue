<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="2" md="4">
                <v-card>
                    <v-card-title class="text-h5 text-center">👋로그인👋</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="doLogin">
                            <v-text-field label="이메일" prepend-icon="mdi-email" type="email" v-model="email" required>
                            </v-text-field>
                            <v-text-field label="비밀번호" prepend-icon="mdi-lock" type="password" v-model="password" required>
                            </v-text-field>
                            <v-row>
                                <v-col cols="6"><v-btn @click="showPasswordModal" color="red" block>비밀번호 변경</v-btn></v-col>
                                <v-col cols="6"><v-btn type="submit" color="primary" block>로그인</v-btn></v-col> 
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <ResetPasswordModal 
        v-model="resetPassword"
        @update:dialog="resetPassword = $event"
        >
        </ResetPasswordModal>
    </v-container>
</template>

<script>
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import ResetPasswordModal from './ResetPasswordModal.vue';

export default{
    components:{
        ResetPasswordModal
    },
    data(){
        return{
            email: "",
            password: "",
            resetPassword: false,
        }
    },
    methods:{
        async doLogin(){
            try{
                const loginData = {
                    email: this.email,
                    password: this.password
                }
                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/doLogin`, loginData);
                const token = response.data.result.token;
                const refreshToken = response.data.result.refreshToken;
                const role = jwtDecode(token).role;
                localStorage.setItem('token', token); 
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('role', role);
                // sse를 위한 연결 코드
                
                window.location.href="/";
            }catch(e){
                const error_message = e.response.data.error_message;
                console.log(error_message);
                alert(error_message);
            }
        },
        showPasswordModal(){
            this.resetPassword = true;
        }

    }
}
</script>