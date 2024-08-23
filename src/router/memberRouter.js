import MemberCreate from '@/views/member/MemberCreate.vue' // '../views//~~~'
import LoginPage from '@/views/member/LoginPage.vue'
import MemberList from '@/views/member/MemberList.vue'
import MyInfo from '@/views/member/MyInfo.vue'

export const memberRouter = [
    {
        path: '/member/create',
        name: 'MemberCreate',
        component: MemberCreate
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/member/list',
        name: 'MemberList',
        component: MemberList
    },
    {
        path: '/member/myinfo',
        name: 'MyInfo',
        component: MyInfo
    },
]