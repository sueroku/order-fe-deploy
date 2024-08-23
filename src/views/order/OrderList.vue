<template>
    <OrderListComponent
    :isAdmin="true"
    />
</template>

<script>
import OrderListComponent from '@/components/product/OrderListComponent.vue';
export default{
    components:{
        OrderListComponent
    }
}
</script>