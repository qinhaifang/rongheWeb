<template>
    <div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#0f0d31"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <template v-for="(item,index) in navMenu">
          <template v-if="item.children.length !== 0">
            <el-submenu :index="String(index)" @click="handleClick(index)">
              <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <template v-for="child in item.children">
                  <el-menu-item :index="child.path" >
                    <i :class="child.icon"></i>
                    <span>{{child.name}}</span>
                  </el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item :index="item.path">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
      <!--<ul>-->
        <!--<li @click="handleClick(1)">首页</li>-->
        <!--<li @click="handleClick(2)">列表页</li>-->
        <!--<li @click="handleClick(3)">详情页</li>-->
      <!--</ul>-->
    </div>
</template>

<script>
    export default{
        components: {},
        data(){
            return {
              navMenu:[
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
              ]
            }
        },
        created(){

        },
        methods: {
          handleClick(n){
            console.log('leftBar',n)
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
</style>
