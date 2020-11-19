import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        title: '',
        chart: {
            data: [],
            loaded: false,
            options: [],
        },
        selected: {
            isEng: false,
            isSales: false,
            isAcq: false,
            isRewards: false,
        },
        salesDetails: {
            lifetimeSales: 0,
            revenueSales: 0,
        }
    },
    mutations: {
        change(state, title) {
            state.title = title
        },
        loadChart(state, chart) {
            state.chart = chart
        },
        activeChart(state, selected) {
            state.selected = selected
        },
        showSalesDetails(state, salesDetails){
            state.salesDetails = salesDetails
        }
    },
    getters: {
        title: state => state.title,
        chart: state => state.chart,
        selected: state => state.selected,
        salesDetails: state => state.salesDetails,
    }
})