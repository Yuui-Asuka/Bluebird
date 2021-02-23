/* eslint-disable no-unused-vars */ /* eslint-disable no-unused-vars */
<template>
  <div>
    <div class="house-border">
      <div class="house-top">我的民宿</div>
      <div style="display: flex; padding: 20px 20px 20px 20px">
        <div style="margin-left: 20px; margin-right: 80px">
          <div>
            <img :src="orderPicture" />
          </div>
          <div style="text-align: center">{{ houseName }}</div>
        </div>
        <div>
          <div style="display: flex">
            <div style="margin-bottom: 15px">评分:</div>
            <div style="margin-right: 200px"><el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate></div>
            <div>余额: ¥ {{ rest }}</div>
          </div>
          <div style="margin-bottom: 15px">简介: {{ introduce }}</div>
          <div style="display: flex; height: 40px; line-height: 30px">
            <div style="margin-right: 20px">风格(最多添加三个):</div>
            <div>
              <el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
                {{ tag }}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 添加风格</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="wait-do-border">
      <div>
        <div class="wait-do">待确认订单</div>
      </div>
      <div style="display: flex; padding-top: 20px; padding-bottom: 20px; flex-flow:row wrap;">
        <div style="width: 250px; height: 250px; border-right: solid 1px rgb(220, 220, 220)">
          <div style="text-align: center">
            <img style="width: 60px; height: 60px; margin-top: 50px; margin-bottom: 20px" :src="orderPicture" />
          </div>
          <div>
            <div style="font-size: 20px; text-align: center; color: grey">
              待确认 <span style="color: orange; font-size: 30px"> {{ waitConfirm }} </span> 个
            </div>
          </div>
        </div>

        <div style="width: 250px; height: 250px; border-right: solid 1px rgb(220, 220, 220)">
          <div style="text-align: center">
            <img style="width: 60px; height: 60px; margin-top: 50px; margin-bottom: 20px" :src="orderPicture" />
          </div>
          <div>
            <div style="font-size: 20px; text-align: center; color: grey">
              待确认入住 <span style="color: orange; font-size: 30px"> {{ waitStay }} </span> 个
            </div>
          </div>
        </div>

        <div style="width: 250px; height: 250px; border-right: solid 1px rgb(220, 220, 220)">
          <div style="text-align: center">
            <img style="width: 60px; height: 60px; margin-top: 50px; margin-bottom: 20px" :src="orderPicture" />
          </div>
          <div>
            <div style="font-size: 20px; text-align: center; color: grey">
              待确认取消 <span style="color: orange; font-size: 30px"> {{ waitCancel }} </span>个
            </div>
          </div>
        </div>

        <div style="width: 250px; height: 250px; border-right: solid 1px rgb(220, 220, 220)">
          <div style="text-align: center">
            <img style="width: 60px; height: 60px; margin-top: 50px; margin-bottom: 20px" :src="orderPicture" />
          </div>
          <div>
            <div style="font-size: 20px; text-align: center; color: grey">
              待确认离店 <span style="color: orange; font-size: 30px">{{ waitLeave }}</span> 个
            </div>
          </div>
        </div>

        <div
          style="font-size:70px; color: grey; font-weight: 400; 
        border-right: solid 1px rgb(220, 220, 220);width: 250px; height: 250px"
        >
          <div style="text-align: center">
            <i style="margin-top: 50px; margin-bottom: 20px" class="el-icon-notebook-1" />
          </div>
          <div>
            <div style="font-size: 20px; text-align: center; color: grey">
              修改房间信息
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      let inputValue = this.inputValue
      if (this.dynamicTags.length < 3) {
        if (inputValue) {
          this.dynamicTags.push(inputValue)
        }
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  },

  data() {
    return {
      orderPicture: require('../../assets/images/user-default.png'),
      value: 4.6,
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: '',
      houseName: '栖息地',
      rest: 800,
      waitConfirm: 3,
      waitStay: 1,
      waitCancel: 1,
      waitLeave: 2
    }
  }
}
</script>

<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.house-border {
  width: 80%;
  height: fit-content;
  border: solid 1px rgb(220, 220, 220);
  margin-left: 15px;
}
.house-top {
  background: rgb(220, 220, 220);
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  color: rgb(50, 50, 50);
  font-weight: 600;
}
.wait-do {
  @extend .house-top;
}
.wait-do-border {
  @extend .house-border;
  margin-top: 40px;
}
.notify-border {
  @extend .house-border;
  margin-top: 50px;
}
.notify {
  @extend .house-top;
}
</style>
