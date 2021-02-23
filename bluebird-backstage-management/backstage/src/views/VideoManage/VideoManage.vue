<template>
  <div>
    <div>
      <el-button type="primary" @click="addRoom">+ 点击开始上传房间</el-button>
    </div>
    <div style="width: 80%; height: 95%; border: solid 2px rgb(220, 220, 220); margin-top: 40px;">
      <div class="manage-text">已上传房型列表</div>
      <div class="table-head">
        <div>房型概况</div>
        <div>上架状态</div>
        <div>上传时间</div>
        <div>预售价格</div>
        <div>折扣价</div>
        <div>操作</div>
      </div>
      <div
        :index="item.index"
        v-for="item in rooms"
        :key="item.roomCode"
        style="padding-bottom: 15px; 
        margin: 15px 15px 15px 15px; 
        border: solid 1px rgb(220, 220, 220);
        padding-right: 15px;
        padding-left: 15px
        "
      >
        <div class="table-content">
          <div>
            <div>
              <img :src="item.picture" />
            </div>
            <div style="text-align: center">{{ item.roomName }}</div>
          </div>
          <div>
            {{ item.state }}
          </div>
          <div>
            {{ item.date }}
          </div>
          <div>
            {{ item.price }}
          </div>
          <div>
            {{ item.discount }}
          </div>
          <div>
            <div><el-button type="primary" size="small" style="margin-bottom: 5px">编辑房型</el-button></div>
            <div><el-button type="primary" size="small" style="margin-bottom: 5px">删除房型</el-button></div>
            <div><el-button type="primary" size="small" style="margin-bottom: 5px">查看房型</el-button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rooms: [{ roomName: '栖息地', picture: require('../../assets/images/user-default.png'), state: '已上架', date: '2020-04-15', price: 155, discount: 128 }]
    }
  },
  methods: {
    addRoom() {
      this.$router.push({ path: '/addroom' })
    }
  }
}
</script>

<style lang="scss" scoped>
.manage-text {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 15px;
  border-bottom: solid 2px rgb(220, 220, 220);
  margin-bottom: 20px;
  margin-right: 20px;
  color: grey;
}
.table-head {
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  height: 50px;
  background: rgb(230, 230, 230);
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  color: grey;
}
.table-trunk {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
}
.table-content {
  color: grey;
  display: flex;
  height: 100px;
  margin-top: 15px;
  justify-content: space-between;
  align-items: center;
}
</style>
