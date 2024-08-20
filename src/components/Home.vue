<script setup>
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import router from '@/router';
import { onMounted, ref } from 'vue';
import axios from 'axios';
const route = useRoute();
const store = useStore();
const users = ref([]);

onMounted(() => {

    axios.get('http://127.0.0.1:8000/api/users?include=addresses', {

        headers:     {

            "Authorization" : "Bearer " + store.state.token,
            'Content-Type': 'application/json',
        }
    }).then(function (response) {

        if (response.data.success) {

            users.value = response.data.data.data;
        } else {

            alert(response.data.message);
        }
    }).catch(function (error) {

        console.log(error);
        alert(error.response.data.message);
    });
});

</script>
<template>

    <div class="w-full">
        <div class="flex justify-center text-2xl">
            <span>Usuários</span>
        </div>

        <div class="card mt-10">
            <DataTable :value="users" sortField="id" :sortOrder="-1" class="w-full">
                <Column field="id" header="Código"></Column>
                <Column field="name" header="Nome"></Column>
                <Column field="email" header="Email"></Column>
                <Column header="Endereço">
                    <template #body="slotProps">
                        <div v-if="slotProps.data.addresses.length">
                            {{ slotProps.data.addresses[0].street + ', ' + slotProps.data.addresses[0].number + ' - ' + slotProps.data.addresses[0].neighborhood + ', ' + slotProps.data.addresses[0].city.name + ' - ' + slotProps.data.addresses[0].state.name }}
                        </div>
                    </template>
                </Column>
            </DataTable>
        </div>

        <div>
            <Button label="Sair" @click="store.commit('clearToken'); router.push({ name: 'login' })"
                class="mt-5 mb-5 float-right" />
        </div>
    </div>
</template>
