/* eslint-disable vue/valid-v-bind */
<template>
  <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu index="index" v-for="(item, index) in hasChildren" :key="index">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :index="subItem.path" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)"
          >{{ subItem.label }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    clickMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  },

  computed: {
    noChildren() {
      return this.asideMenu.filter(item => !item.children)
    },
    hasChildren() {
      return this.asideMenu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },

  data() {
    return {
      asideMenu: [
        {
          path: '/',
          label: '首页',
          name: 'home',
          icon: 's-home'
        },
        {
          path: '/video',
          label: '房间管理',
          name: 'video',
          icon: 'video-play'
        },
        {
          path: '/user',
          name: 'user',
          label: '房态维护',
          icon: 'user'
        },
        {
          path: '/order',
          name: 'order',
          label: '订单管理',
          icon: 's-order'
        },
        {
          path: '/account',
          name: 'account',
          label: '账户管理',
          icon: 'tickets'
        },
        {
          label: '其他',
          name: 'other',
          icon: 'user',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '入住统计',
              icon: 'setting'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '其他服务',
              icon: 'setting'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
  border: none;
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
