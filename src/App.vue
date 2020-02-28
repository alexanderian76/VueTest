<template>
  <div id="app">
   
     <div class="header" />
        <nav class="menu">
            <div>
                <router-link to="/">
                    Главная
                </router-link>
            </div>
            <div>
                <router-link to="/user_account/0">
                   Оплатить
                </router-link>
            </div>
            <div>
                <router-link to="/paylist">
                    Статистика
                </router-link>
            </div>
        </nav>
        <div class="field">
            <router-view />
        </div>
  
            </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      bill : ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.formitem {
  padding: 0;
  width: 50%;
}

.item {
  display: inline;
  padding: 0;
}

.must {
  color: red;

}
.header {
  background: linear-gradient(-45deg, green 10%, white 30%, green 80%);
  grid-area: logo;
  height: 100px;
}

.menu {
  background-color: #45ba30;
  box-shadow: 0 0 10px 0 #0008;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  grid-area: menu;
  justify-content: space-around;
  padding: 5px;
  position: relative;
  white-space: nowrap;
  z-index: 10;
}

.menu a {
  color: #fff;
  text-decoration: none;
}

.field {
  grid-area: field;
  overflow: auto;
}
</style>

<style lang='scss' src='./styles/global.scss'></style>
