import HelloWorld from '../components/HelloWorld.vue';
import UserAccount from '../components/UserAccount.vue';
import PayInfo from '../components/PayInfo.vue';
import PayList from '../components/PayList.vue';

export default [
    { path: '/', component: HelloWorld },
    { path: '/user_account/:id', name:'UserAccount', component: UserAccount, props: (route) => ({ userId: Number(route.params.id) }) },
    { path: '/payinfo/:id', name:'PayInfo', component: PayInfo, props: (route) => ({ id: Number(route.params.id) }) },
    { path: '/paylist', name:'PayList', component: PayList }
];
