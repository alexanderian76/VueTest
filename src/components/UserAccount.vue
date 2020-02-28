<template>
    <div class="user-account">
        <p class="description__title">
            Страница оплаты
        </p>
        <el-form
            :model="currentUser"
            ref="currentUser"
            :rules="rules"
            class="formitem"
        >
            <el-form-item
                prop="name"
                class="item"
            >
                <b>Имя: </b>
                <span class="must">
                    *
                </span>
                <BaseInput
                    v-model="currentUser.name"
                    placeholder="Антон"
                />
            </el-form-item>
             <el-form-item
                prop="card"
                class="item"
            >
                <b>Номер карты: </b>
                <span class="must">
                    *
                </span>
                <BaseInput
                    v-model="currentUser.card"
                    placeholder="0000 0000 0000 0000"
                />
            </el-form-item>
             <el-form-item
                prop="cvv"
                class="item"
            >
                <b>CVV: </b>
                <span class="must">
                    *
                </span>
                <BaseInput
                    v-model="currentUser.cvv"
                    placeholder="000"
                />
            </el-form-item>
             <el-form-item
                prop="sum"
                class="item"
            >
                <b>Сумма платежа: </b>
                <span class="must">
                    *
                </span>
                <BaseInput
                    v-model="currentUser.sum"
                    placeholder="1234"
                />
            </el-form-item>
            <el-form-item>
                <div class="tabs-wrapper" />
                <el-button
                    type="primary"
                    @click="onClick"
                    class="input-group-text btn "
                    :class="[!saved ? 'save' : 'disabled']"
                >
                    Оплатить
                </el-button>
            </el-form-item>
        </el-form>
        <BaseModal :chatMode="saved" />
        <div class="tabs-wrapper">
            <span class="must">
                *
            </span> - обязательные к заполнению поля.
        </div>
    </div>
</template>

<script>

import BaseInput from '@/components/BaseInput';
import PayInfo from '../components/PayInfo.vue';
import Element from 'element-ui'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);

export default {

    name: 'UserAccount',
    components:{
        BaseInput
    },
    props:{
        userId: { type: Number, default: () => Number() }
    },
    data() {
        return{
            currentUser: {name : '',
            card : '',
            cvv : '',
            sum : '',
            date: new Date()},
            saved: false,
            card: null,
            rules: {
                name: [
                    { validator: this.nameRule, trigger: 'blur' }
                ],
                birthday: [
                    { validator: this.dateRule, trigger: 'blur' }
                ],
                card: [
                    { validator: this.cardRule, trigger: 'change' }
                ],
                cvv: [
                    { validator: this.cvvRule, trigger: 'blur' }
                ],
                sum: [
                    { validator: this.sumRule, trigger: 'blur' }
                ] }
        }
    },
    
    methods:{
        onClick() {
            this.$refs.currentUser.validate((valid) => {
                if (valid) {
                       this.saved = true
                       this.$store.dispatch('getUser', this.currentUser)
                         this.$router.push({ path: '/payinfo/:id', name: 'PayInfo', component: PayInfo,
                                    params:{ id: this.card } })
                }
            })
        },
        nameRule(rule, value, callback){
             if (value.split('').length < 5) {
                return callback(new Error('Количество символов должно быть больше 4'));
            }
             return this.isLat(this.currentUser.name) ? callback(new Error('Введите английские буквы')) : callback()
        },
        dateRule(rule, value, callback) {
            if (!value) {
                return callback(new Error('Введите дату в формате ДД.ММ.ГГГГ'));
            }
            const now = new Date()
            const age = now.getFullYear() - value.split('.')[2];
            return age < 0 ? callback(new Error('Введите корректную дату')) : callback()
        },
        cardRule(rule, value, callback){
          let arr = []
          
        if(!/^[0-9' ']+$/.test(value.split(' ').join(''))){
                return callback(new Error('Номер карты может содержать только цифры'))
        }
        if(value.split('').length === 16)
            {
            for(let i = 0; i < value.split('').length; i++)
                {
                  
                    arr.push(value.slice(i,i+4))
                    i = i+3;
                    
                }
                
                this.currentUser.card = arr.join(' ')
                this.card = Number(arr.join(''))
                return callback()
            }
            else if(value.split(' ').length === 4 && value.split('').length === 19){
                return callback()
            }
            else{
                return callback(new Error('Номер карты должен содержать 16 цифр'))
            }
        },
        cvvRule(rule, value, callback){
            if(value.split('').length !== 3 || !/^[0-9]+$/.test(value)){
                    return callback(new Error('CVV должен содержать 3 цифры'))
                }
                return callback()
        },
        sumRule(rule, value, callback){
            if( !/^[0-9'.']+$/.test(value) || value.split('.').length > 2 || !value.split('.').indexOf('')){
                return callback(new Error('Неверная сумма'))
            }
            if(value.split('.').indexOf('') === 1){
                this.currentUser.sum = value + '0'
            }
            return callback()
        },
        isLat (value) {
            return !/^[a-zA-z]+$/.test(value);
            }

    }
};
</script>

<style lang="scss" scoped>

@import '../styles/classes';

.user-account {
  overflow: auto;
}

.error-text {
  font-size: 10px;
}

.formitem {
  padding: 0;
  width: 50%;
}

.item {
  display: inline;
  padding: 0;
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

}

.tabs-wrapper {
  padding: 10px;
}

.position {
  margin-left: 30px;
}

</style>
