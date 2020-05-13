<template>
    <div>
      <cross-histogram :chartData="chartData1"></cross-histogram>
      <cross-histogram :chartData="chartData2"></cross-histogram>
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
              chartData1:{
                elId:'line1',
                height:'350px',
                unit:'个',
                title:'安全警报分析（个）',
                dataX:["05.05","05.07","05.09","05.10"],
                data:[360,3800,100,500]
              },
              chartData2:{
                elId:'line2',
                height:'350px',
                unit:'个',
                title:'设备报警分析（个）',
                dataX:["05.05","05.07","05.09","05.10"],
                data:[1360,200,200,200]
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
