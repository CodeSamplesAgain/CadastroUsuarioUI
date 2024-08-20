<script setup>
    import { RouterView } from 'vue-router';
    import Toast from 'primevue/toast';
    import { isArray } from '@/utils/utils.js';
</script>
<template>
    <div class="flex flex-col w-full h-screen">
        <div class="w-full p-3 text-3xl border-b-2 h-16 flex items-center">
            <RouterLink to="/" style="text-decoration: none; color: inherit;"> Cadastro de Usuários </RouterLink>
        </div>
        <div class="flex h-full w-4/5 mx-auto">
            <div class="p-4 w-full h-full">
                <RouterView />
            </div>
        </div>
    </div>

    <Toast position="bottom-center">
        <template #message="{ message }">
            <span :class="[
                'p-toast-message-icon',
                'pi',
                {
                    'pi-check': message.severity === 'success',
                },
                {
                    'pi-exclamation-triangle':
                        message.severity === 'warning',
                },
                { 'pi-times': message.severity === 'error' },
                {
                    'pi-info-circle': message.severity === 'info',
                },
            ]"></span>
            <div class="p-toast-message-text">
                <span class="p-toast-summary">{{ message.summary }}</span>
                <div class="p-toast-detail">
                    <template v-if="!isArray(message.detail)">
                        <span class="text-black">{{ message.detail }}</span>
                    </template>
                    <p
                        v-else
                        class="m-0"
                        v-for="(item, index) in message.detail"
                        :key="index"
                    >
                        {{ item }}
                    </p>
                </div>
            </div>
        </template>
    </Toast>
</template>
<style scoped lang="less">

.menu {

    &-item {

        display: flex;
        align-items: baseline;
        cursor: pointer;
        user-select: none;
        border-radius: .3rem;
        padding: 8px 2px 0 6px;
        padding-bottom: 6px;
        transition-duration: 200ms;

        span {

            margin-left: 3px;
        }

        &:hover {

            background-color: var(--color-background-inverted);
            color: var(--color-text-inverted);
        }
    }
}

</style>
