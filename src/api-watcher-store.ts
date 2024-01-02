import { defineStore } from 'pinia'
import apiWatcher from '@/api-watcher'

export default defineStore('api-watcher', {
    state() {
        return {
            apiWatcher: apiWatcher
        }
    }
})