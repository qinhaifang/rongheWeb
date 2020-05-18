<template>
    <div>
      <p class="title">
        {{tableData.title}}
        <i class="el-icon-more fr"></i>
      </p>
      <el-table
        :data="tableData.rows"
        :height="tableData.height"
        :v-loading="tableData.loading"
        element-loading-text="拼命加载中..." element-loading-spinner="el-icon-loading"
        style="width: 100%">
        <template v-for="(item,index) in tableData.head">
          <el-table-column
            :prop="item.prop"
            :label="item.name"
            :width="item.width"
            :align="item.align"
            :key="index"
            show-overflow-tooltip/>
        </template>
      </el-table>

    </div>
</template>
<script type="text/ecmascript-6">
    export default{
        props:{
          tableData:{
            type:Object,
            default:()=>{}
          }
        },
        data(){
            return {

            }
        },
        created(){

        },
        methods: {}
    }

</script>
<style>
.el-table{
  margin: 10px 0;
}
 .el-table th{
   padding: 4px 0;
    background: #286aa3;
  }
.el-table td{
  padding: 4px 0;
}
.el-table tr{
  background: #0c1330;
}
.el-table td, .el-table th.is-leaf{
  border-bottom: 1px solid #254163;
}
</style>
