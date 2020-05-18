<template>
    <div id="main">
      <home-header></home-header>
      <left-bar class="leftBar" @handleToggle="togglePage"></left-bar>
      <div class="content">
        <div class="bg" :style="{height:height}" @click="img()"></div>
        <!--<iframe :src="src" :height="height" frameborder="0"></iframe>-->
        <!--<router-view style="position: absolute;top: 0;width: 100%"></router-view>-->
        <div class="leftBox">
          <component :is="currentLeft"/>
        </div>
        <div class="rightBox">
          <component :is="currentRight"/>
        </div>
        <div class="bottomBox">
          <component :is="currentBottom"/>
        </div>
        <div class="clear"></div>
      </div>

    </div>
</template>


<script>
import HomeHeader from '@/components/header'
import LeftBar from '@/components/leftBar'
import CrossHistogram from '@/components/crossHistogram'
import ZhLeft from '@/views/zh/left'
import right from '@/views/zh/right'
import bottom from '@/views/zh/bottom'
import QyLeft from '@/views/area/left'

    export default{
        components: {
          HomeHeader,
          LeftBar,
          CrossHistogram,
          ZhLeft,
          right,
          bottom,
          QyLeft
        },
        data(){
            return {
              src:"../static.gisPage/PC_index.html",
              height:window.innerHeight-80+'px',
              currentLeft:'ZhLeft',
              currentRight:'right',
              currentBottom:'bottom'
            }
        },
        created(){

        },
        methods: {
          img(){
            alert(1)
          },
          togglePage(n){
            console.log('index',n)
            switch(n) {
              case 0:
                this.currentLeft = "ZhLeft";
                this.currentRight = "right";
                this.currentBottom = "bottom";
                break;
              case 1:
                this.currentLeft = "QyLeft";
                this.currentRight = "ZhLeft";
                this.currentBottom = "bottom";
                break;
              case 2:
                this.currentLeft = "right";
                break;
            }
          }
        }
    }

</script>
<style scoped>
  #main{
    width: 100%;
  }
  .leftBar{
    width: 10%;
    float: left;
    flex: 1;
    background: #0e2443;
  }
  .content{
    width: 88%;
    padding: 10px;
    float: right;
    position: relative;
  }
  iframe{
    width: 100%;
  }
  .bg{
    background: url("../assets/image/12.png");
    background-size: 100% 100%;
  }
  .leftBox{
    width: 21%;
    position: absolute;
    left: 0;
    top: 0;
    border:1px solid #345f92;
    background: #0e2443;
    padding: 10px;
    height: 100%;
    overflow: hidden;
  }
  .rightBox{
    width: 21%;
    position: absolute;
    right: 15px;
    top:0;
    border: 1px solid #345f92;
    background: #0e2443;
  }
  .bottomBox{
    width: 54%;
    position: absolute;
    bottom: 0;
    left: 23%;
    border: 1px solid #345f92;
    background: #0e2443;
  }
</style>
