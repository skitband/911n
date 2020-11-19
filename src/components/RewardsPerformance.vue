<template>
    <div class="col">
        <div class="card-deck">
            <div class="card">
                <h5 class="card-header">Reward Performance</h5>
                <div class="card-body">
                    <b-table
                    id="my-table"
                    :items="items"
                    :per-page="perPage"
                    :fields="fields"
                    :current-page="currentPage"
                    ></b-table>
                </div>
                <div class="card-footer">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-end">
                            <b-pagination
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            aria-controls="my-table"
                            ></b-pagination>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RewardsPerformance',
    components: {

    },
    data() {
      return {
        perPage: 3,
        currentPage: 1,
        fields: [
          {
            key: 'id',
            label: '',
          },
          {
            key: 'badge',
            label: 'Badge',
            
          },
          {
            key: 'total_sales',
            label: 'Total Sales (₱)',
            class: 'text-right'
          },
          {
            key: 'growth',
            label: '',
            class: 'text-right'
          },
        ],
        items: [
                { id: 1, badge: 'Reward 1', total_sales: 5000, growth: '20%' },
                { id: 2, badge: 'Reward 2', total_sales: 4000, growth: '10.52%' },
                { id: 3, badge: 'Reward 3', total_sales: 3000, growth: '8.39%' },
                { id: 4, badge: 'Reward 4', total_sales: 2000, growth: '5%' },
                { id: 5, badge: 'Reward 5', total_sales: 1000, growth: '2%' }
            ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
}
</script>

<style>

</style>