<template>
    <div>
        <p class="description__title">
            {{ user.name  }}
        </p>
        <p>
            <b>Номер карты: </b> {{ user.card }}
        </p>

        <p>
            <b>Дата оплаты: </b> {{ user.date }}
        </p>
        <p>
            <b>Сумма платежа: </b> {{ user.sum }}
        </p>

    </div>
</template>

<script>

import UserAccount from '../components/UserAccount.vue';

export default {

    name: 'PayInfo',
    components:{
        
    },
    props:{
        id: { type: Number, default: () => Number() },
    },
     beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (vm.id) {
                  vm.$store.state.userModule.user.forEach((item) => {
                if(!Number(item.card.split(' ').join('')) === Number(vm.id))
                {
                    this.user = item
                    this.$router.push({ path: '/user_account/:id', name: 'UserAccount', component: UserAccount,

                                    params:{ id: 0 } })
                }
            });
            }
        });
     },
    data() {
        return{
            currentUser: {},
            user: {}

        }
    },
    mounted() {
        if(this.id === null) {
            this.$router.push({ path: '/user_account/:id', name: 'UserAccount', component: UserAccount,

                                    params:{ id: 0 } })
        }
        else{
            this.$store.state.userModule.user.forEach((item) => {
                if(Number(item.card.split(' ').join('')) === Number(this.id))
                {
                    this.user = item
                     
                }
                
            });
        }
        if(this.user.card === undefined){
                    this.$router.push({ path: '/user_account/:id', name: 'UserAccount', component: UserAccount,

                    params:{ id: 0 } })
        }
    },
    methods: {
        
    }


};
</script>

<style lang="scss" scoped>

@import '../styles/classes';

.error-text {
  font-size: 10px;
}

.save {
  background: white;
  color: black;
}

.disabled {
  background: grey;
  color: white;
}

.must {
  color: red;
  display: inline;
}

.tabs-wrapper {
  padding: 10px;
}

.position {
  margin-left: 30px;
}

</style>
