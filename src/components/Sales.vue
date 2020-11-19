<template>
    <div class="col mb-3">
        <div class="card h-100" @click="changed" :class="[ $store.getters.selected.isSales ? 'active' : '' ]">
            <img  class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Sales <i class="fas fa-question-circle text-muted"></i></h5>
                <div class="row">
                    <div class="col-1 my-auto">
                        <h4><span class="badge badge-primary bg-sales">20% <i class="fas fa-arrow-up"></i></span></h4>
                    </div>
                    <div class="col text-right">
                        <span class="text-muted">Lifetime Sales</span><br>
                        <span>&#8369; {{ $store.getters.salesDetails.lifetimeSales.toFixed(2) }}</span><br>

                        <span class="text-muted">Revenue Sales</span><br>
                        <span>&#8369; {{ $store.getters.salesDetails.revenueSales.toFixed(2) }}</span><br>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col">
                        <small class="text-muted">Average Order Value</small>
                    </div>
                    <div class="col text-right">
                        <small class="text-muted">&#8369; 1,000.00</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sales',
    data() {
        return {
            title: 'Sales Overview',
            chart: {},
            selected: {},
            salesDetails: {},
        }
    },
    methods: {
        async changed() {
            this.$store.commit('change', this.title)
            this.selected.isSales = true;
            this.selected.isEng = false;
            this.selected.isAcq = false;
            this.selected.isRewards = false;
            this.$store.commit('activeChart', this.selected)
                try {
                // API Call
                // const { salesData } = await fetch('/api/endpoint')
                const salesData = {
                    labels: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6", "Nov 7"],
                    datasets: [{
                        label: "Sales",
                        backgroundColor: "#81a0fe",
                        data: [3000, 10000, 15000, 20000, 12000, 18000, 8000]
                    }, {
                        label: "Revenue",
                        backgroundColor: "#60cebc",
                        data: [5000, 8000, 10000, 15000, 9000, 14000, 6000]
                    }],
                    details: {
                        lifetimeSales: 175000,
                        revenueSales: 170000,
                    }
                };
                    this.chart.data = salesData
                    this.chart.loaded = true
                    this.chart.options = {
                        responsive: true,
                        maintainAspectRatio: false,
                        barValueSpacing: 20,
                        scales: {
                            yAxes: [{
                                display: true,
                                ticks: {
                                    beginAtZero: true,
                                    stepSize: 10000,
                                    max: 50000
                                }
                            }]
                        },
                        legend: {
                            align: 'end'
                        },
                    }
                    this.salesDetails = salesData.details;
                    this.$store.commit('loadChart', this.chart)
                    this.$store.commit('showSalesDetails', this.salesDetails)

                }catch (e) {
                    console.error(e)
                } 
            
        }
    }
}
</script>

<style scoped>
.badge{
    border-radius: 1rem;
    padding: 10px 25px;
}
.card-footer{
    background-color: #ffffff;
}
.bg-sales{
    background-color: #81a0fe;
    border: 0px;
}
.bg-rev{
    background-color: #60cebc;
    border: 0px;
}
.bg-purple{
    background-color: #c180ed;
    border: 0px;
}
.active{
  border: 3px solid #809eff;
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);
}
</style>