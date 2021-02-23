<template>
  <div class="border">
    <div class="account-text">我的账户</div>
    <div class="money">
      <div style="width: 700px">
        <div style="color: grey; font-size: 20px">账户余额</div>
        <div style="color: grey; margin-top: 25px; font-size: 20px">¥ {{ money }}</div>
        <div class="catch-button" style="margin-top: 25px">
          <el-button type="primary">提现</el-button>
        </div>
      </div>
      <div style="padding-left: 20px; border-left: solid 2px blue; margin-right: 200px">
        <div style="color: grey; font-size: 20px; margin-bottom: 30px">已结算订单</div>
        <div style="color: grey;font-size: 20px; margin-bottom: 30px">¥ {{ settled }}</div>
        <div>详情></div>
      </div>
      <div style="padding-left: 20px; border-left: solid 2px orange">
        <div style="color: grey; font-size: 20px; margin-bottom: 30px">未结算订单</div>
        <div style="color: grey; font-size: 20px; margin-bottom: 30px">¥ {{ notSettle }}</div>
        <div>详情></div>
      </div>
    </div>
    <div class="detail-text">收支明细</div>
    <div>
      <el-table
        :data="tableData"
        height="250"
        border
        style="width: 97%;height: 400px; margin-top: 20px; margin-left: 20px; margin-right: 20px; border: solid 1px rgb(220, 220, 220)"
      >
        <el-table-column prop="date" label="时间" width="180"> </el-table-column>
        <el-table-column prop="type" label="类型" width="180"> </el-table-column>
        <el-table-column prop="detail" label="明细"> </el-table-column>
        <el-table-column prop="money" label="金额"> </el-table-column>
        <el-table-column prop="rest" label="余额"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      money: 800,
      settled: 500,
      notSettle: 300,
      tableData: [
        {
          date: '2016-05-20',
          type: '房费收入',
          detail: '大床房',
          money: '+¥180',
          rest: '¥1280'
        },
        {
          date: '2016-05-18',
          type: '提现',
          detail: '自动提现',
          money: '-¥290',
          rest: '¥1280'
        },
        {
          date: '2016-05-16',
          type: '房费收入',
          detail: '大床房',
          money: '+¥180',
          rest: '¥1280'
        },
        {
          date: '2016-05-10',
          type: '房费收入',
          detail: '双人床',
          money: '+¥180',
          rest: '¥1280'
        },
        {
          date: '2016-05-05',
          type: '房费收入',
          detail: '大床房',
          money: '+¥180',
          rest: '¥1280'
        },
        {
          date: '2016-05-02',
          type: '房费收入',
          detail: '大床房',
          money: '+¥180',
          rest: '¥1280'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.account-text {
  margin-top: 20px;
  margin-left: 20px;
  color: black;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: solid 2px rgb(220, 220, 220);
  margin-right: 20px;
}
.money {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
  border: solid 1px rgb(200, 200, 200);
  height: 180px;
  display: flex;
  padding: 20px 20px 20px 20px;
}
.border {
  width: 80%;
  height: fit-content;
  border: solid 1px rgb(200, 200, 200);
  margin-left: 20px;
  padding-bottom: 20px;
}
.detail-text {
  @extend .account-text;
}
</style>
