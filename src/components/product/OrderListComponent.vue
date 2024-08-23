<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <v-card-title class="text-center text-h5">
                    주문목록
                </v-card-title>
                <v-card-text>
                    <v-data-table
                    :headers="tableHeaders"
                    :items="orderList"
                    class="elevation-1"
                    show-expand
                    >
                    <template v-slot:[`item.actions`]="{item}"> <!--내가 커스텀하겠다-->
                        <v-btn color="red" v-if="isAdmin && item.orderStatus==='ORDERED'" @click.stop="cancelOrder(item.id)" size="small">
                            cancel
                        </v-btn>
                    </template>
                    <template v-slot:expanded-row="{item}">
                        <v-row>
                            <v-col>
                                <v-list-item v-for="orderItem in item.orderDetailShortList" :key="orderItem.id"> <!--변수명같은거 자기가 작성한대로-->
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{orderItem.productName}} {{ orderItem.count }}개
                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </template>
                    </v-data-table>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
export default{
    props:['isAdmin'],
    data(){
        return{
            orderList:[],
            tableHeaders:[  {title:'ID', key:'id', align:'start'},
                            ...(this.isAdmin ? [{title:'회원EMAIL', key:'memberEmail', align:'start'}] : []), 
                            {title:'주문상태', key:'orderStatus', align:'start'},
                            ...(this.isAdmin ? [{ title: 'ACTION',  align: 'start', key: 'actions'}] : []) ]
        }
    },
    async created(){
        try{
            if(this.isAdmin){
                const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/order/list`);
                console.log(response.data.result.content)
                this.orderList = response.data.result.content;
            }else{
                const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/order/myorders`);
                console.log(response)
                this.orderList = response.data.result.content;
            }
            
        }catch(e){
            console.log(e);
        }
    },
    methods:{
        async cancelOrder(id){
            try{
               await axios.patch(`${process.env.VUE_APP_API_BASE_URL}/order/${id}/cancel`);
                window.location.reload();
            }catch(e){
                console.log(e);
            }
        }

    }
}
</script>