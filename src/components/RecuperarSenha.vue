<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md p-8 space-y-8 bg-gray-100 rounded-lg shadow">
            <h2 class="text-2xl font-bold text-center text-gray-900">Recuperar Senha</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <InputText v-model="email" id="email" type="email"
                        class="w-full mt-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <Button label="Enviar Email" type="submit"
                        class="w-full text-white bg-indigo-600 hover:bg-indigo-700" />
                    <Button label="Voltar" type="submit" severity="link" @click="router.push({name: 'login'})"
                        class="w-full text-white bg-indigo-600 hover:bg-indigo-700" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import router from '@/router';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const email = ref('');

const handleSubmit = () => {

    axios.post('http://127.0.0.1:8000/api/forgot-password', {

        email: email.value
    }, {

        headers:     {

            'Content-Type': 'application/json',
        }
    }).then(function (response) {

        if (response.data.success) {

            alert(response.data.message);
            router.push({ name: 'login' })
        } else {

            alert(response.data.message);
        }
    }).catch(function (error) {

        console.log(error);
        alert(error.response.data.message);
    });
};
</script>

<style scoped>

</style>
