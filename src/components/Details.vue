<template>
    <div class="row">
        <div class="">
            <b>Total: </b>
        </div>
        <div class="col-auto">
            <small>Sales:</small><br>
            <button type="button" class="btn btn-primary btn-sm btn-sales" id="sales">Php {{ $store.getters.salesDetails.lifetimeSales.toFixed(2) }} </button>
        </div>
        <div class="col-auto">
            <small>Revenue:</small><br>
            <button type="button" class="btn btn-primary btn-sm btn-rev" id="sales">Php {{ $store.getters.salesDetails.revenueSales.toFixed(2) }}</button>
        </div>
        <div class="col-auto">
            <small>Generated Points:</small><br>
            <button type="button" class="btn btn-primary btn-sm btn-purple" id="sales">1000 Points</button>
        </div>
        <div class="col-auto">
            <small>Used Points:</small><br>
            <button type="button" class="btn btn-primary btn-sm btn-purple" id="sales">1000 Points</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Details',
  components: {},
  data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.btn-sales{
    background-color: #81a0fe;
    border: 0px;
}
.btn-rev{
    background-color: #60cebc;
    border: 0px;
}
.btn-purple{
    background-color: #c180ed;
    border: 0px;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
</style>