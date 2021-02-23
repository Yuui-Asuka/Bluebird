<template>
  <header>
    <div class="l-content">
      <el-button type="primary" icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
      <div style="width: 200px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="current.path" v-if="current">{{ current.label }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="message" style="font-size: 45px; margin-left: 75%; width: 60px">
      <el-badge :value="gridData.length" :max="10" class="item">
        <el-popover placement="right" width="400" trigger="hover">
          <el-table :data="gridData">
            <el-table-column width="150" property="date" label="时间"></el-table-column>
            <el-table-column width="100" property="type" label="通知类型"></el-table-column>
            <el-table-column width="300" property="content" label="通知内容"></el-table-column>
          </el-table>
          <!-- <el-button slot="reference">click 激活</el-button> -->
          <i slot="reference" class="el-icon-bell"></i>
        </el-popover>
      </el-badge>
    </div>
    <div class="r-content" style="width: 60px">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link"><img :src="userImg" class="user" /> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      current: state => state.tab.currentMenu
    })
  },

  data() {
    return {
      userImg: require('../assets/images/user-default.png'),
      activeName: 'first',
      gridData: [
        {
          date: '2020-05-18 20:25:45',
          type: '系统通知',
          content: '您于2020-05-03 17:15:28提现800元。'
        },
        {
          date: '2020-05-16 08:25:45',
          type: '订单通知',
          content: '大床房订单'
        },
        {
          date: '2020-05-16 17:25:45',
          type: '王小虎',
          content: '双人床订单'
        },
        {
          date: '2020-05-15 17:25:45',
          type: '系统通知',
          content: '您的房型大床房审核通过。'
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    collapseMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}

.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}

.r-content {
  .user {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
}

.el-dropdown-link {
  color: white;
}
</style>

<style lang="scss">
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
  color: white;
}
.el-breadcrumb__inner {
  color: rgb(214, 214, 214);
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
