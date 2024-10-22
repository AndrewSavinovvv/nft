import { createRouter, createWebHistory } from 'vue-router'
import MarketView from '@/views/MarketView.vue'
import RankView from '@/views/RankView.vue'
import WalletView from '@/views/WalletView.vue'
import HomeView from '@/views/HomeView.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/market',
        name: 'MarketView',
        component: MarketView,
    },
    {
        path: '/rank',
        name: 'RankView',
        component: RankView,
    },
    {
        path: '/wallet',
        name: 'ConnectWallet',
        component: WalletView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router