<template>
  <div class="card">
    <div class="card-header">
        <div class="row">
            <div class="col text-left">
                {{ $store.getters.title }}
            </div>
            <div class="col">
                <form name="salesFilter">
                <ul class="nav nav-pills card-header-pills float-right form-row">
                    <li class="nav-item" style="padding-right: 10px;">
                        <select class="form-control" id="transactions" name="transactions">
                            <option>All Transactions</option>
                        </select>
                    </li>
                    <li class="nav-item">
                        <select class="form-control" id="branches" name="branches">
                            <option>All Branches</option>
                        </select>
                    </li>
                </ul>
                </form>
            </div>
        </div>
    </div>
    <div class="card-body">
        <Details />
        <BarChart v-if="$store.getters.chart.loaded" :chartData="$store.getters.chart.data" :options="$store.getters.chart.options"/>
    </div>
    </div>
</template>

<script>
import BarChart from './BarChart.vue'
import Details from './Details.vue'

export default {
    name: 'Overview',
    components: {
        BarChart, Details
    },
    props: {
        
    },
    data() {
        return {
            loaded: false,
        }
    },
}
</script>

<style scoped>

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
  
}
</style>