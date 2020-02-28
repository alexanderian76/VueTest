<template>
    <div>
        <p class="description__title">
            Платежи
        </p>
        <div
            v-for="item in users"
            :key="item.card"
        >
            
            <router-link

                :to="{ path: `/payinfo/${item.card.split(' ').join('')}`, params: { id: Number(item.card.split(' ').join('')) }}"
            >
                <div class="tabs-wrapper users-list">
                    <b>{{ item.name }}</b>


                    <div class="error-text">
                        {{ item.date }}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {

    name: 'PayList',
    components:{

    },
    data() {
        return{
            
            users : this.$store.state.userModule.user

        }
    },

};
</script>

<style lang="scss" scoped>

@import '../styles/classes';

.users-list {
  border-style: solid;
  border-width: 0.1px;
}

.users-list:hover {
  background: yellow;
}

.search {
  width: 100%;
}

.delete {
  display: inline;
}

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

.add-friend {
  background: silver;
  float: right;
  margin-left: 5px;
  margin-top: 3%;
  padding: 1px;
}

.tabs-wrapper {
  padding: 10px;
}

.position {
  margin-left: 30px;
}

</style>
