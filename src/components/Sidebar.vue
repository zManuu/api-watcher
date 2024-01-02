<template>
    <div class="border-r-[1px] border-gray-800 flex flex-col justify-between py-6 px-1">
        <div class="h-max flex flex-col space-y-3 items-center">
            <img
                src="/img/icon.png"
                class="size-16 p-2 mb-6"
            />
            <button
                v-for="(option, index) in optionsUpper"
                :key="index"
                class="hover:bg-gray-600 hover:bg-opacity-20 p-4 rounded-full duration-500 group"
            >
                <img
                    class="size-6 group-hover:size-7 duration-500"
                    :src="option.icon"
                />
            </button>
        </div>
        <div class="h-max flex flex-col space-y-3 items-center">
            <button
                v-for="(option, index) in optionsLower"
                :key="index"
                class="hover:bg-gray-600 hover:bg-opacity-20 p-4 rounded-full duration-500 group"
            >
                <img
                    class="size-6 group-hover:size-7 duration-500"
                    :src="option.icon"
                />
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

interface ISidebarOption {
    name: string
    route: string
    icon: string
}

export default defineComponent({
    data() {
        return {
            optionsUpper: [
                {
                    name: 'Home',
                    route: '/',
                    icon: '/img/icon/house.png'
                },
                {
                    name: 'Request',
                    route: '/request',
                    icon: '/img/icon/play.png'
                },
                {
                    name: 'Add watchable',
                    route: '/add',
                    icon: '/img/icon/add.png'
                },
            ] as ISidebarOption[],
            optionsLower: [
                {
                    name: 'Settings',
                    route: '/settings',
                    icon: '/img/icon/settings.png'
                },
                {
                    name: 'About',
                    route: '/about',
                    icon: '/img/icon/about.png'
                },
            ] as ISidebarOption[]
        }
    }
})
</script>