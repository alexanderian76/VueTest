<template>
    <el-input

        resize="none"
        class="input"
        :placeholder="placeholder"


        :autofocus="autofocus"

        v-model="formValue"
        @input="enterValue"
    />
</template>

<script>
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
Vue.use(Element);

export default {

    name: 'BaseInput',
    components: {

    },
    props:{
        autofocus: { type:Boolean, default: false },
        chatMode: { type: Boolean, default: false },
        placeholder: { type: String, default: '' },
        value: { type: String, default: '' },
    },
    data() {
        return {
            formValue: this.value
        }
    },
    watch: {
        value(value) {
            if (value) {
                this.formValue = value;
            }
        }
    },
    mounted() {

    },
    methods:{
        enterValue() {
            if(this.chatMode) {
                this.$emit('enter', this.formValue);
            }
            this.$emit('input', this.formValue);
        }
    }


};
</script>

<style>


.tabs-wrapper {
  padding: 10px;
}

.position {
  margin-left: 30px;
}

.input {
  display: inline;
}

</style>
