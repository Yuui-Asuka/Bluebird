<template>
  <div>
    <div v-for="item in houses" :key="item.houseCode" :index="item.index" style="margin-top: 40px">
      <div style="margin-bottom: 20px; font-size: 20px; color: grey; font-weight: 700">房间类型: {{ item.houseName }}</div>
      <el-calendar>
        <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
        <template slot="dateCell" slot-scope="{ date, data }">
          <div style="height: 100%" :class="data.isSelected ? 'is-selected' : ''" @click="item.dialogFormVisible = true">
            {{
              data.day
                .split('-')
                .slice(1)
                .join('-')
            }}
            <div>剩余房间数量: {{ item.form.num }}</div>
            <div>今日价格: {{ item.form.price }}</div>
          </div>
        </template>
      </el-calendar>
      <el-dialog title="设置当日房态信息" :visible.sync="item.dialogFormVisible">
        <el-form :model="item.form">
          <el-form-item label="剩余房间" :label-width="formLabelWidth">
            <el-input-number v-model="item.form.num" :min="1" :max="20" label="描述文字"></el-input-number>
          </el-form-item>
          <el-form-item label="当日价格" :label-width="formLabelWidth">
            <el-input-number v-model="item.form.price" :min="1" :max="10000" label="描述文字"></el-input-number>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="item.dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="item.dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        price: 1,
        num: 1
      },
      houses: [
        { houseCode: 'qixidi大床房', houseName: '大床房', form: { num: 1, price: 1 }, dialogFormVisible: false },
        { houseCode: 'qixidi大床房', houseName: '大床房', form: { num: 1, price: 1 }, dialogFormVisible: false },
        { houseCode: 'qixidi大床房', houseName: '大床房', form: { num: 1, price: 1 }, dialogFormVisible: false },
        { houseCode: 'qixidi大床房', houseName: '大床房', form: { num: 1, price: 1 }, dialogFormVisible: false }
      ],
      formLabelWidth: '120px'
    }
  },

  methods: {
    click(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.is-selected {
  color: #1989fa;
}
</style>
