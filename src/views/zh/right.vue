<template>
  <div>
    <cross-histogram :chartData="chartData3"></cross-histogram>
    <cross-histogram :chartData="chartData4"></cross-histogram>
  </div>
</template>


<script>
  import CrossHistogram from '@/components/crossHistogram'
  export default{
    components: {
      CrossHistogram
    },
    data(){
      return {
        chartData3:{
          elId:'lin3',
          height:'350px',
          unit:'个',
          title:'井下人员分析',
          dataX:["05.05","05.07","05.09","05.10"],
          data:[360,100,1200,200]
        },
        chartData4:{
          elId:'line4',
          height:'350px',
          unit:'个',
          title:'产量统计分析',
          dataX:["05.05","05.07","05.09","05.10"],
          data:[360,300,200,1200]
        },
      }
    },
    created(){

    },
    methods: {}
  }

</script>
<style scoped>

</style>
