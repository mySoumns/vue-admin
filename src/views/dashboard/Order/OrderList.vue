<template>
  <div class="oreder-list">
    <OrderList :list="listData" />
  </div>
</template>
<script>
import OrderList from "@/components/Order/OrderList";
import { getOrderList } from '@/api/order'
export default {
  name: "dashOrderList",
  components: {
    OrderList
  },
  data() {
    return {
      listData: []
    };
  },
  created() {
    this.getListData();
  },
  methods: {
    getListData() {
        getOrderList({
            page:1,
            pageSize:8
        }).then(res=>{
            if(res.status == 200){
                this.listData = res.data.list;
            }
        })
    }
  }
};
</script>

<style lang="sass" scoped>

</style>