<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="w-full max-w-md p-8 space-y-8 bg-gray-100 rounded-lg shadow">
            <h2 class="text-2xl font-bold text-center text-gray-900">Mudar Senha</h2>
            <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <InputText v-model="email" id="email" type="email"
                        class="w-full mt-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700">Nova Senha</label>
                    <InputText v-model="password" id="password" type="password"
                        class="password w-full mt-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div class="mb-6">
                    <label for="password_confirmation" class="block text-sm font-medium text-gray-700">Confirme a
                        Senha</label>
                    <InputText v-model="password_confirmation" id="password_confirmation" type="password"
                        class="password w-full mt-1 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                    <Button label="Mudar Senha" type="submit"
                        class="w-full text-white bg-indigo-600 hover:bg-indigo-700" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios';
import router from '@/router';

const email = ref('');
const code = ref('');
const password = ref('');
const password_confirmation = ref('');

const route = useRoute();
const store = useStore();

const handleSubmit = () => {

    console.log('Email:', email.value);
    console.log('Password:', password.value);
    console.log(route.params.code);

    axios.post('http://127.0.0.1:8000/api/new-password', {

        email: email.value,
        code: route.params.code,
        password: password.value,
        password_confirmation: password_confirmation.value
    }, {

        headers: {

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
.password {

    -webkit-text-security: disc;
    text-security: disc;
}
</style>
