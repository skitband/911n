<template>
    <div class="col mb-3">
        <div class="card h-100" @click="changed" :class="[ $store.getters.selected.isEng ? 'active' : '' ]">
            <img  class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Engagement </h5>
                <div class="row">
                    <div class="col-1 my-auto">
                        <h4><span class="badge badge-primary bg-rev">20% <i class="fas fa-arrow-down"></i></span></h4>
                    </div>
                    <div class="col text-right">
                        <span class="text-muted">Lifetime SMS <br>Engagements</span><br>
                        <span> 285 </span><br>

                        <span class="text-muted">Daily Average</span><br>
                        <span>57</span><br>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <small class="text-muted">20% decrease in 30 days</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Engagement',
    data() {
        return {
            title: 'Engagement Overview',
            chart: {},
            selected: {},
        }
    },
    methods: {
        async changed() {
            this.$store.commit('change', this.title)
            this.selected.isSales = false;
            this.selected.isEng = true;
            this.selected.isAcq = false;
            this.selected.isRewards = false;
            this.$store.commit('activeChart', this.selected)
                try {
                // API Call
                // const { salesData } = await fetch('/api/endpoint')
                const salesData = {
                    labels: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6", "Nov 7"],
                    datasets: [{
                        label: "SMS Engagements",
                        backgroundColor: "#81a0fe",
                        data: [800, 1000, 350, 700, 900, 600, 200]
                    }, {
                        label: "Daily Average",
                        backgroundColor: "#60cebc",
                        data: [500, 800, 80, 150, 400, 400, 120]
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
                                    stepSize: 50,
                                    max: 1000
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
.bg-rev{
    background-color: #60cebc;
    border: 0px;
}
.active{
  border: 3px solid #809eff;
  box-shadow: 0 8px 12px 0 rgba(0,0,0,0.2);
}
</style>