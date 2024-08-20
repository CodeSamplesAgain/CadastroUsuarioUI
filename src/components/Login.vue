<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md p-8 space-y-8 bg-gray-100 rounded-lg shadow">
            <h2 class="text-2xl font-bold text-center text-gray-900">Login</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <InputText v-model="email" id="email" type="text"
                        class="w-full mt-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
                    <InputText v-model="password" id="password" type="password"
                        class="password w-full max-w-full mt-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <Button label="Login" type="submit" class="w-full text-white bg-indigo-600 hover:bg-indigo-700" />
                    <Button label="Recuperar Senha" @click="router.push({name: 'recuperar_senha'})" severity="link" class="w-full text-white bg-indigo-600 hover:bg-indigo-700" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';
import router from '@/router';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const route = useRoute();
const store = useStore();
const email = ref('');
const password = ref('');

const handleSubmit = () => {

    axios.post('http://127.0.0.1:8000/api/login', {

        email: email.value,
        password: password.value
    }).then(function(response)  {

        if (response.data.success)  {

            store.commit('setToken', response.data.data.token);
            // console.log(store.state.token);
            router.push({name: 'home'});
            // console.log(router.push({name: 'home'}));
        } else {

            alert(response.data.message);
        }
    }).catch(function(error) {

        console.log(error);
        alert(error.response.data.message);
    });
};
</script>

<style scoped>
.password {

    -webkit-text-security: disc;
    text-security: disc;
}
</style>
