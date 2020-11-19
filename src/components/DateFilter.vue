<template>
    <div>
        <form name="datefilter">
            <div class="form-row">
                <div class="days">
                    <select class="form-control" id="days">
                        <option>Last 7 Days</option>
                        <option>Last 14 Days</option>
                    </select>
                </div>
                <div class="col daterange">
                    <date-range-picker
                        ref="picker"
                        opens = "right"
                        @update="apply"
                        :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY HH:mm:ss' }"
                        v-model="dateRange"
                        singleDatePicker = "range"
                    >
                    <template v-slot:input="picker" style="min-width: 350px;">
                        {{ picker.startDate | date }} - {{ picker.endDate | date }}
                    </template>
</date-range-picker>
                </div>
            </div>
        </form>
    </div>
    
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

import moment from 'moment'


export default {
    name: 'DateFilter',
    components: {
        DateRangePicker
    },
    data() {
        return {
            dateRange: {
                startDate: moment(),
                endDate: moment()
            },
        }
    },
    methods: {
        apply(){
            console.log(this.dateRange)
        },
        
    },
    filters: {
        date(val) {
            return val ? moment(val).format("D MMM YYYY") : "";
        }
    }
}
</script>

<style scoped>

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
  [class*="daterange"] {
    margin-left: 0px;
  }
  
}
</style>