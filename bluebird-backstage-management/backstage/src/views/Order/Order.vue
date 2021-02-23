<template>
  <div style="width: 80%; height: 95%; border: solid 2px rgb(200, 200, 200); margin-left: 20px">
    <div class="manage-text">订单管理</div>
    <div class="explain-text" style="color: grey; font-size: 10px; margin-top: 10px; margin-left: 20px">
      注: 当用户发起订单后，未经商家确认的订单会在用户取消时自动取消，经过商家确认的订单需要商家手动将其取消
    </div>
    <div style="margin-left: 20px; margin-right: 20px; margin-top: 15px">
      <el-tabs type="border-card">
        <el-tab-pane label="全部">
          <div
            :index="item.index"
            v-for="item in orders"
            :key="item.date"
            style="padding-bottom: 15px; margin: 15px 15px 15px 15px; border: solid 1px rgb(220, 220, 220)"
          >
            <div class="top" style="padding-bottom: 10px">
              <div>{{ item.date }} {{ item.time }}</div>
              <div>订单号{{ item.orderCode }}</div>
              <div>{{ item.orderState }}</div>
            </div>
            <div style="display: flex; color: grey; justify-content: space-around; margin-right: 30px">
              <div style="margin-right: 20px; border-right: solid 2px green; padding-right: 150px">
                <img :src="item.orderPicture" />
              </div>
              <div style="border-right: solid 2px orange; padding-right: 150px">
                <div style="margin-bottom: 5px">房型: {{ item.roomName }}</div>
                <div style="margin-bottom: 5px">原价: {{ item.originPrice }}</div>
                <div style="margin-bottom: 5px">结算价格: {{ item.ultimitePrice }}</div>
                <div style="margin-bottom: 5px">入住人: {{ item.name }}</div>
                <div style="margin-bottom: 5px">入住人电话: {{ item.phone }}</div>
              </div>
              <div>
                <div style="margin-bottom: 5px">入住天数: {{ item.night }}</div>
                <div style="margin-bottom: 5px">入住人数: {{ item.peopleNum }}</div>
                <div style="margin-bottom: 5px">附加产品: {{ item.addtional }}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="未确认">
          <div
            :index="item.index"
            v-for="item in orders"
            :key="item.date"
            style="padding-bottom: 15px; margin: 15px 15px 15px 15px; border: solid 1px rgb(220, 220, 220)"
          >
            <div class="top" style="padding-bottom: 10px">
              <div>{{ item.date }} {{ item.time }}</div>
              <div>订单号{{ item.orderCode }}</div>
              <div>{{ item.orderState }}</div>
            </div>
            <div style="display: flex; color: grey; justify-content: space-around; margin-right: 30px">
              <div style="margin-right: 20px; border-right: solid 2px green; padding-right: 150px">
                <img :src="item.orderPicture" />
              </div>
              <div style="border-right: solid 2px orange; padding-right: 150px">
                <div style="margin-bottom: 5px">房型: {{ item.roomName }}</div>
                <div style="margin-bottom: 5px">原价: {{ item.originPrice }}</div>
                <div style="margin-bottom: 5px">结算价格: {{ item.ultimitePrice }}</div>
                <div style="margin-bottom: 5px">入住人: {{ item.name }}</div>
                <div style="margin-bottom: 5px">入住人电话: {{ item.phone }}</div>
              </div>
              <div>
                <div style="margin-bottom: 5px">入住天数: {{ item.night }}</div>
                <div style="margin-bottom: 5px">入住人数: {{ item.peopleNum }}</div>
                <div style="margin-bottom: 5px">附加产品: {{ item.addtional }}</div>
                <div>
                  <el-button type="primary">确认接单</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已接单">
          <div
            :index="item.index"
            v-for="item in orders"
            :key="item.date"
            style="padding-bottom: 15px; margin: 15px 15px 15px 15px; border: solid 1px rgb(220, 220, 220)"
          >
            <div class="top" style="padding-bottom: 10px">
              <div>{{ item.date }} {{ item.time }}</div>
              <div>订单号{{ item.orderCode }}</div>
              <div>{{ item.orderState }}</div>
            </div>
            <div style="display: flex; color: grey; justify-content: space-around; margin-right: 30px">
              <div style="margin-right: 20px; border-right: solid 2px green; padding-right: 150px">
                <img :src="item.orderPicture" />
              </div>
              <div style="border-right: solid 2px orange; padding-right: 150px">
                <div style="margin-bottom: 5px">房型: {{ item.roomName }}</div>
                <div style="margin-bottom: 5px">原价: {{ item.originPrice }}</div>
                <div style="margin-bottom: 5px">结算价格: {{ item.ultimitePrice }}</div>
                <div style="margin-bottom: 5px">入住人: {{ item.name }}</div>
                <div style="margin-bottom: 5px">入住人电话: {{ item.phone }}</div>
              </div>
              <div>
                <div style="margin-bottom: 5px">入住天数: {{ item.night }}</div>
                <div style="margin-bottom: 5px">入住人数: {{ item.peopleNum }}</div>
                <div style="margin-bottom: 5px">附加产品: {{ item.addtional }}</div>
                <div>
                  <el-button type="primary">确认入住</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="待取消">
          <div
            :index="item.index"
            v-for="item in orders"
            :key="item.date"
            style="padding-bottom: 15px; margin: 15px 15px 15px 15px; border: solid 1px rgb(220, 220, 220)"
          >
            <div class="top" style="padding-bottom: 10px">
              <div>{{ item.date }} {{ item.time }}</div>
              <div>订单号{{ item.orderCode }}</div>
              <div>{{ item.orderState }}</div>
            </div>
            <div style="display: flex; color: grey; justify-content: space-around; margin-right: 30px">
              <div style="margin-right: 20px; border-right: solid 2px green; padding-right: 150px">
                <img :src="item.orderPicture" />
              </div>
              <div style="border-right: solid 2px orange; padding-right: 150px">
                <div style="margin-bottom: 5px">房型: {{ item.roomName }}</div>
                <div style="margin-bottom: 5px">原价: {{ item.originPrice }}</div>
                <div style="margin-bottom: 5px">结算价格: {{ item.ultimitePrice }}</div>
                <div style="margin-bottom: 5px">入住人: {{ item.name }}</div>
                <div style="margin-bottom: 5px">入住人电话: {{ item.phone }}</div>
              </div>
              <div>
                <div style="margin-bottom: 5px">入住天数: {{ item.night }}</div>
                <div style="margin-bottom: 5px">入住人数: {{ item.peopleNum }}</div>
                <div style="margin-bottom: 5px">附加产品: {{ item.addtional }}</div>
                <div>
                  <el-button type="primary">确认取消</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已取消">
          <div
            :index="item.index"
            v-for="item in orders"
            :key="item.date"
            style="padding-bottom: 15px; margin: 15px 15px 15px 15px; border: solid 1px rgb(220, 220, 220)"
          >
            <div class="top" style="padding-bottom: 10px">
              <div>{{ item.date }} {{ item.time }}</div>
              <div>订单号{{ item.orderCode }}</div>
              <div>{{ item.orderState }}</div>
            </div>
            <div style="display: flex; color: grey; justify-content: space-around; margin-right: 30px">
              <div style="margin-right: 20px; border-right: solid 2px green; padding-right: 150px">
                <img :src="item.orderPicture" />
              </div>
              <div style="border-right: solid 2px orange; padding-right: 150px">
                <div style="margin-bottom: 5px">房型: {{ item.roomName }}</div>
                <div style="margin-bottom: 5px">原价: {{ item.originPrice }}</div>
                <div style="margin-bottom: 5px">结算价格: {{ item.ultimitePrice }}</div>
                <div style="margin-bottom: 5px">入住人: {{ item.name }}</div>
                <div style="margin-bottom: 5px">入住人电话: {{ item.phone }}</div>
              </div>
              <div>
                <div style="margin-bottom: 5px">入住天数: {{ item.night }}</div>
                <div style="margin-bottom: 5px">入住人数: {{ item.peopleNum }}</div>
                <div style="margin-bottom: 5px">附加产品: {{ item.addtional }}</div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已入住">
          <div
            :index="item.index"
            v-for="item in orders"
            :key="item.date"
            style="padding-bottom: 15px; margin: 15px 15px 15px 15px; border: solid 1px rgb(220, 220, 220)"
          >
            <div class="top" style="padding-bottom: 10px">
              <div>{{ item.date }} {{ item.time }}</div>
              <div>订单号{{ item.orderCode }}</div>
              <div>{{ item.orderState }}</div>
            </div>
            <div style="display: flex; color: grey; justify-content: space-around; margin-right: 30px">
              <div style="margin-right: 20px; border-right: solid 2px green; padding-right: 150px">
                <img :src="item.orderPicture" />
              </div>
              <div style="border-right: solid 2px orange; padding-right: 150px">
                <div style="margin-bottom: 5px">房型: {{ item.roomName }}</div>
                <div style="margin-bottom: 5px">原价: {{ item.originPrice }}</div>
                <div style="margin-bottom: 5px">结算价格: {{ item.ultimitePrice }}</div>
                <div style="margin-bottom: 5px">入住人: {{ item.name }}</div>
                <div style="margin-bottom: 5px">入住人电话: {{ item.phone }}</div>
              </div>
              <div>
                <div style="margin-bottom: 5px">入住天数: {{ item.night }}</div>
                <div style="margin-bottom: 5px">入住人数: {{ item.peopleNum }}</div>
                <div style="margin-bottom: 5px">附加产品: {{ item.addtional }}</div>
                <div>
                  <el-button type="primary">确认离店</el-button>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已离店"
          ><div
            :index="item.index"
            v-for="item in orders"
            :key="item.date"
            style="padding-bottom: 15px; margin: 15px 15px 15px 15px; border: solid 1px rgb(220, 220, 220)"
          >
            <div class="top" style="padding-bottom: 10px">
              <div>{{ item.date }} {{ item.time }}</div>
              <div>订单号{{ item.orderCode }}</div>
              <div>{{ item.orderState }}</div>
            </div>
            <div style="display: flex; color: grey; justify-content: space-around; margin-right: 30px">
              <div style="margin-right: 20px; border-right: solid 2px green; padding-right: 150px">
                <img :src="item.orderPicture" />
              </div>
              <div style="border-right: solid 2px orange; padding-right: 150px">
                <div style="margin-bottom: 5px">房型: {{ item.roomName }}</div>
                <div style="margin-bottom: 5px">原价: {{ item.originPrice }}</div>
                <div style="margin-bottom: 5px">结算价格: {{ item.ultimitePrice }}</div>
                <div style="margin-bottom: 5px">入住人: {{ item.name }}</div>
                <div style="margin-bottom: 5px">入住人电话: {{ item.phone }}</div>
              </div>
              <div>
                <div style="margin-bottom: 5px">入住天数: {{ item.night }}</div>
                <div style="margin-bottom: 5px">入住人数: {{ item.peopleNum }}</div>
                <div style="margin-bottom: 5px">附加产品: {{ item.addtional }}</div>
              </div>
            </div>
          </div></el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          date: '2020-07-15',
          time: '08: 15: 19',
          orderCode: '156464687464',
          orderState: '已完成',
          orderPicture: require('../../assets/images/user-default.png'),
          roomName: '大床房',
          originPrice: '198',
          ultimatePrice: '190',
          name: '李某某',
          phone: '12514785698',
          night: '3',
          peopleNum: '4',
          addtional: '早餐'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.manage-text {
  margin-top: 20px;
  margin-left: 20px;
  color: black;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: solid 2px rgb(220, 220, 220);
  margin-right: 20px;
}
.top {
  display: flex;
  justify-content: space-between;
  background: rgb(225, 225, 225);
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
}
</style>
