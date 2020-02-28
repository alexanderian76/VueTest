<template>
    <div>
        <p class="description__title">
            {{ user.name  }}
        </p>
        <p>
            <b>Никнейм: </b> {{ user.card }}
        </p>

        <p>
            <b>Дата рождения: </b> {{ user.date }}
        </p>
        <p>
            <b>E-mail: </b> {{ user.sum }}
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
        //  user: { type: Object, default: () => Object() },
    },
     beforeRouteEnter(to, from, next) {
        next((vm) => {
            if (vm.id) {
               // vm.$store.dispatch('getUser', vm.userId);
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
        // this.currentUser = this.user;
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
