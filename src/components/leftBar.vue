<template>
    <div>
      <!--<el-menu-->
        <!--:default-active="$route.path"-->
        <!--class="el-menu-vertical-demo"-->
        <!--@open="handleOpen"-->
        <!--@close="handleClose"-->
        <!--background-color="#0f0d31"-->
        <!--text-color="#fff"-->
        <!--active-text-color="#ffd04b"-->
        <!--router-->
      <!--&gt;-->
        <!--<template v-for="(item,index) in navMenus">-->
          <!--<template v-if="item.children.length !== 0">-->
            <!--<el-submenu :index="String(index)" @click="handleClick(index)">-->
              <!--<template slot="title">-->
                <!--<i :class="item.icon"></i>-->
                <!--<span>{{item.name}}</span>-->
              <!--</template>-->
              <!--<el-menu-item-group>-->
                <!--<template v-for="child in item.children">-->
                  <!--<el-menu-item :index="child.path" >-->
                    <!--<i :class="child.icon"></i>-->
                    <!--<span>{{child.name}}</span>-->
                  <!--</el-menu-item>-->
                <!--</template>-->
              <!--</el-menu-item-group>-->
            <!--</el-submenu>-->
          <!--</template>-->
          <!--<template v-else>-->
            <!--<el-menu-item :index="item.path">-->
              <!--<i :class="item.icon"></i>-->
              <!--<span slot="title">{{item.name}}</span>-->
            <!--</el-menu-item>-->
          <!--</template>-->
        <!--</template>-->
      <!--</el-menu>-->
      <ul class="navMenu" v-for="(item,index) in navMenu">
        <li @click="handleClick(index)" ><i class="iconfont">{{item.icon}}</i>{{item.name}}</li>
        <!--<li @click="handleClick(2)"><i class="iconfont">&#xe657;-->
        <!--</i>区域</li>-->
        <!--<li @click="handleClick(3)"><i class="iconfont">&#xe796;</i>安全</li>-->
        <!--<li @click="handleClick(4)"><i class="iconfont">&#xe636;</i>人员</li>-->
        <!--<li @click="handleClick(4)"><i class="iconfont">&#xe647;</i>矿压</li>-->
        <!--<li @click="handleClick(4)"><i class="iconfont">&#xe649;</i>生产</li>-->
        <!--<li @click="handleClick(4)"><i class="iconfont">&#xe60b;</i>水文</li>-->
        <!--<li @click="handleClick(4)"><i class="iconfont">&#xe509;</i>产量</li>-->
        <!--<li @click="handleClick(4)"><i class="iconfont">&#xe7c8;</i>应急救援</li>-->
        <!--<li @click="handleClick(4)"><i class="iconfont">&#xe616;</i>基础信息</li>-->
        <!--<li @click="handleClick(4)"><i class="iconfont">&#xe635;</i>设置</li>-->
      </ul>
    </div>
</template>

<script>
    export default{
        components: {},
        data(){
            return {
              navMenus:[
                {path:'/zh',icon:'el-icon-menu',name:'综合',children:[]},
                {path:'/area',icon:'el-icon-menu',name:'区域',children:[]},
                {path:'/safe',icon:'el-icon-menu',name:'安全',children:[]},
                {path:'/person',icon:'el-icon-menu',name:'人员',children:[]},
                {path:'/ky',icon:'el-icon-menu',name:'矿压',children:[]},
                {path:'',icon:'el-icon-menu',name:'生产',
                  children:[
                    {path:'/qjgl',icon:'el-icon-bell',name:'全局概览'},
                    {path:'/mainBelt',icon:'el-icon-bell',name:'主皮带'},
                    {path:'/mainLift',icon:'el-icon-bell',name:'主提升'},
                    {path:'/yfj',icon:'el-icon-bell',name:'压风机'},
                    {path:'/centerHouse',icon:'el-icon-bell',name:'中央水泵房'},
                    {path:'/station',icon:'el-icon-bell',name:'10k变电站'},
                  ]
                },
                {path:'/hydrology',icon:'el-icon-menu',name:'水文',children:[]},
                {path:'/yield',icon:'el-icon-menu',name:'产量',children:[]},
                {path:'/rescue',icon:'el-icon-menu',name:'应急救援',children:[]},
                {path:'/basicInfo',icon:'el-icon-menu',name:'基础信息',children:[]},
                {path:'',icon:'el-icon-setting',name:'设置',
                  children:[
                    {path:'',name:'区域关联配置',type:'group'},
                    {path:'/setArea',icon:'el-icon-menu',name:'区域管理'},
                    {path:'',icon:'el-icon-menu',name:"安全联动配置"},
                    {path:'',icon:'el-icon-menu',name:"视频管理"},
                    {path:'',icon:'el-icon-menu',name:"调度电话管理"},
                    {path:'',icon:'el-icon-menu',name:"广播管理"},
                    {path:'',name:"基础配置",type:'group'},
                    {path:'',icon:'el-icon-menu',name:"组织机构管理"},
                    {path:'',icon:'el-icon-menu',name:"用户管理"},
                    {path:'',icon:'el-icon-menu',name:"角色管理"},
                    {path:'',icon:'el-icon-menu',name:"服务配置中心"},
                    {path:'',icon:'el-icon-menu',icon:'',name:"自动化设备管理"},
                    {path:'',name:"GIS配置"},
                    {path:'',icon:'el-icon-menu',name:"GIS图层维护"},

                  ]
                },
              ],
              navMenu:[
                {name:'综合',icon:'\ue64f'},
                {name:'区域',icon:'\ue657'},
                {name:'安全',icon:'\ue796'},
                {name:'人员',icon:'\ue636'},
                {name:'矿压',icon:'\ue647'},
                {name:'生产',icon:'\ue649'},
                {name:'水文',icon:'\ue60b'},
                {name:'产量',icon:'\ue509'},
                {name:'应急救援',icon:'\ue7c8'},
                {name:'基础信息',icon:'\ue616'},
                {name:'设置',icon:'\ue635'},
              ]
            }
        },
        created(){

        },
        methods: {
          handleClick(n){
            this.$emit("handleToggle",n)
          },
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }

</script>
<style scoped>
  .el-menu{
    background: #0e2443!important;
  }
  .navMenu li{
    height: 50px;
    line-height: 50px;
    text-align: justify;
    padding-left: 20%;
    cursor: pointer;

  }
  .navMenu li i{
    font-size: 18px;
    padding-right: 10px;
  }
</style>
