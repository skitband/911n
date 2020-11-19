<template>
    <div class="col mb-3">
        <div class="card h-100" @click="changed" :class="[ $store.getters.selected.isRewards ? 'active' : '' ]">
            <img  class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Rewards </h5>
                <div class="row">
                    <div class="col-1 my-auto">
                        <h4><span class="badge badge-primary bg-purple">20% <i class="fas fa-arrow-down"></i></span></h4>
                    </div>
                    <div class="col text-right">
                        <span class="text-muted">Rewards Redeemed</span><br>
                        <span> 175,000 </span><br>

                        <span class="text-muted">Issued Rewards</span><br>
                        <span> 175000 </span><br>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <small class="text-muted">20% increase in 30 days</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Rewards',
    data() {
        return {
            title: 'Acquisition Overview',
            chart: {},
            selected: {},
        }
    },
    methods: {
        async changed() {
            this.$store.commit('change', this.title)
            this.selected.isSales = false;
            this.selected.isEng = false;
            this.selected.isAcq = false;
            this.selected.isRewards = true;
            this.$store.commit('activeChart', this.selected)
                try {
                // API Call
                // const { salesData } = await fetch('/api/endpoint')
                const salesData = {
                    labels: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6", "Nov 7"],
                    datasets: [{
                        label: "Redeemed Rewards",
                        backgroundColor: "#81a0fe",
                        data: [45, 30, 25, 20, 34, 16, 22]
                    }, {
                        label: "Issued Rewards",
                        backgroundColor: "#60cebc",
                        data: [17, 14, 15, 16, 10, 13, 18]
                    }]
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
                                    stepSize: 10,
                                    max: 100
                                }
                            }]
                        },
                        legend: {
                            align: 'end'
                        },
            
                    }
                    this.$store.commit('loadChart', this.chart)
                    
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
.bg-purple{
    background-color: #c180ed;
}
.active{
  border: 3px solid #809eff;
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);
}
</style>