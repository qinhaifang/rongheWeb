<template>
    <div class="zh">
      <ul class="card" v-for="item in card">
        <li>
          <span>{{item.num}}</span>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
</template>


<script>

    export default{
        components: {

        },
        data(){
            return {
              card:[
                {num:1 +'个',title:'安全报警数'},
                {num:2 + '人',title:'井下人员'},
                {num:3 + '个',title:'设备报警数'},
                {num:4 + '吨',title:'当日产量'},
                {num:'值班领导：丁永兵',title:'带班领导：丁永兵'}
              ],
            }
        },
        created(){

        },
        methods: {}
    }

</script>
<style scoped>
  .zh .card li{
    border:1px solid #345f92;
    border-radius: 4px;
    width: 17%;
    padding: 15px 10px;
    float: left;
    text-align: center;
    margin-right: 10px;
  }
  .zh .card li span{
    display: block;
    padding: 4px 0;
  }
  .leftBox{
    width: 30%;
    display: flex;
    float: left;
    border:1px solid #345f92;
  }
  .rightBox{
    width: 30%;
    display: flex;
    float: right;
    border: 1px solid #345f92;
  }
</style>
