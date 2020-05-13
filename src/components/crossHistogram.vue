<template>
    <div class="p10" style="position: relative">
      <div :id="chartData.elId" ref="myChart" :style="{width:'100%',height:chartData.height}"></div>
      <i class="el-icon-more open" @click="dialogVisible = true"></i>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <div :id="chartData.elId" ref="myChart" :style="{width:'100%',height:chartData.height}"></div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
      </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
    export default{
        props:{
          chartData:{
            type:Object,
            default:()=>{}
          }
        },
        data(){
            return {
              dialogVisible: false
            }
        },
        watch:{
          chartData(val){
            this.drawLine()
          }
        },
        methods: {
          drawLine(){
            const vm = this;
            let myChart = echarts.init(this.$refs.myChart);
            // 绘制图表
            myChart.setOption({
              color:['#02c9ff',  '#ffba01', '#ff5c62'],
              title: {
                text: this.chartData.title,
                textStyle: {
                  fontSize: 14,
                  color: '#fff',
                },
                y: 'top',
              },
              tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                  type: 'line' // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                left: 'center',
                orient: 'horizontal',
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis: {
                type: 'category',
                data:this.chartData.dataX,
                splitNumber: 10,
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: '#ffffff', //更改坐标轴文字颜色
                    fontSize: 16 //更改坐标轴文字大小
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: '#4ADEFE', // 颜色
                    width: 1 // 粗细
                  }
                }
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  show: true,
                  textStyle: {
                    color: '#ffffff', //更改坐标轴文字颜色
                    fontSize: 16 //更改坐标轴文字大小
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: '#4ADEFE', // 颜色
                    width: 1 // 粗细
                  }
                }
              },
              series: [{
                data: this.chartData.data,
                type: 'line',
                smooth: true,
                label: {
                  normal: {
                    show: true,
                    fontSize: 14,
                    position: 'right',
                    color: '#ffffff',
                    formatter: function(params) {
                      if(params.value > 0) {
                        return params.value
                      } else {
                        return '';
                      }
                    }
                  }
                },
                itemStyle: {    // 图形的形状
                  color: '#0ac9fe',
                  barBorderRadius: [0, 18, 18 ,0]
                }
              }]
            })
          },
          handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
          }
        },
      computed:{
        echarts() {
          return 'echarts' + Math.random()*100000
        }
      },
      mounted(){
        const vm = this
        vm.$nextTick(()=> {
          vm.drawLine()
        })
        this.drawLine()
      },
      created: () => {}
    }

</script>
<style>
  .open{
    position: absolute;
    top:10px;
    right: 10px;
  }
  i{
    cursor: pointer;
  }
</style>
