<template>
    <div id="quyu">
      <p class="title">区域监控</p>
      <el-select v-model="value" filterable placeholder="请选择区域">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <ul class="msg">
        <li>区域人数：<span>1</span></li>
        <li>区域报警：<span>2</span></li>
        <div class="clear"></div>
      </ul>
      <table-box :tableData="tableData1"></table-box>
      <table-box :tableData="tableData2"></table-box>
      <table-box :tableData="tableData3"></table-box>

    </div>
</template>


<script>
  import  TableBox from '@/components/table'
    export default{
        components: {
          TableBox
        },
        data(){
            return {
              value:'',
              options: [{
                value: '1',
                label: '井下'
              }, {
                value: '2',
                label: '中央变电所'
              }, {
                value: '3',
                label: '9+10煤仓底'
              }, {
                value: '4',
                label: '9+10等候室'
              }, {
                value: '5',
                label: '9+10井底车场'
              }],
              tableData1:{
                loading:false,
                height:'200px',
                title:'安全环境',
                head:[
                  {name:'监测点',prop:'address',algin:'',width:''},
                  {name:'数值',prop:'name',algin:'',width:'50px'},
                  {name:'状态',prop:'state',algin:'',width:'50px'}
                ],
                rows:[{
                  state: '正常',
                  name: '12',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  state: '正常',
                  name: '11',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  state: '正常',
                  name: '1',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  state: '正常',
                  name: '33',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  state: '正常',
                  name: '23',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  state: '正常',
                  name: '11',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  state: '正常',
                  name: '234',
                  address: '上海市普陀区金沙江路 1518 弄'
                }]
              },
              tableData2:{
                loading:false,
                height:'200px',
                title:'人员轨迹',
                head:[
                  {name:'姓名',prop:'names',algin:'',width:'80px'},
                  {name:'部门',prop:'name',algin:'',width:'50px'},
                  {name:'位置',prop:'state',algin:'',width:'50px'},
                  {name:'轨迹回放',prop:'address',algin:'center',width:''}
                ],
                rows:[{
                  names: '张某某',
                  state: '正常',
                  name: '12',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '11',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '1',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '33',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '23',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '11',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '234',
                  address: '上海市普陀区金沙江路 1518 弄'
                }]
              },
              tableData3:{
                loading:false,
                height:'200px',
                title:'调度电话',
                head:[
                  {name:'地点',prop:'names',algin:'',width:'80px'},
                  {name:'状态',prop:'name',algin:'',width:'50px'},
                  {name:'号码',prop:'state',algin:'',width:'50px'},
                  {name:'操作',prop:'address',align:'center',width:''}
                ],
                rows:[{
                  names: '张某某',
                  state: '正常',
                  name: '12',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '11',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '1',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '33',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '23',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '11',
                  address: '上海市普陀区金沙江路 1518 弄'
                }, {
                  names: '张某某',
                  state: '正常',
                  name: '234',
                  address: '上海市普陀区金沙江路 1518 弄'
                }]
              }
            }
        },
        created(){

        },
        methods: {}
    }

</script>
<style>
  #quyu .msg{
    margin: 10px 0;
  }
#quyu .msg li{
  border: 1px solid #345f92;
  margin-right: -1px;
  border-radius: 4px;
  width: 48%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  float: left;
  text-align: center;
}
</style>
