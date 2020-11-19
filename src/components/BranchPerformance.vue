<template>
    <div class="col">
        <div class="card-deck">
            <div class="card">
                <h5 class="card-header">Branches Performance</h5>
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
    name: 'BranchPerformance',
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
            key: 'branch_name',
            label: 'Branch',
            
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
                { id: 1, branch_name: 'Makati', total_sales: 5000, growth: '20%' },
                { id: 2, branch_name: 'BGC Taguig', total_sales: 4000, growth: '10.52%' },
                { id: 3, branch_name: 'Mall of Asia Pasay', total_sales: 3000, growth: '8.39%' },
                { id: 4, branch_name: 'Quezon City', total_sales: 2000, growth: '5%' },
                { id: 5, branch_name: 'Greenhills', total_sales: 1000, growth: '2%' }
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