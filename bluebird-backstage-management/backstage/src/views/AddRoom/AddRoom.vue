<template>
  <div>
    <div style="margin-top: 50px; margin-left: 50px">
      <div style="font-size: 20px; font-weight: 700">添加房间信息</div>

      <div>
        <div style="color: grey; margin-top: 40px">房型名称:</div>
        <div style="color: grey; margin-top: 15px; font-size: 12px">说明: 房型不必具体到每个房间，而是一种类型房间的总称，比如“双人房、三人房”等等</div>
        <div style="margin-top: 15px; width: 500px">
          <el-input v-model="input1" placeholder="请输入内容"></el-input>
        </div>
      </div>

      <div style="margin-top: 40px">
        <div style="color: grey; margin-top: 40px">可住人数:</div>
        <div style="color: grey; margin-top: 15px; font-size: 12px">说明: 该房间可以居住的总人数，如果不是整间出售而是售卖床位，则应填写1。</div>
        <div style="margin-top: 15px; width: 200px">
          <el-input v-model="input2" placeholder="请输入内容"></el-input>
        </div>
      </div>

      <div style="margin-top: 40px">
        <div style="color: grey; margin-top: 40px">床型:</div>
        <div style="color: grey; margin-top: 15px; font-size: 12px">说明: 该房型内的床型,如“三人床、双人床等等。”</div>
        <div style="margin-top: 15px; width: 500px">
          <el-input v-model="input3" placeholder="请输入内容"></el-input>
        </div>
      </div>

      <div style="margin-top: 40px">
        <div style="color: grey; margin-top: 40px">房间大小:</div>
        <div style="color: grey; margin-top: 15px; font-size: 12px">说明: 该种房型最小房间的面积和最大房间的面积。</div>
        <div style="display: flex; margin-top: 15px">
          <div style="height: 40px; line-height: 40px; margin-right: 20px">最小面积:</div>
          <div style="width: 200px; margin-right: 40px">
            <el-input v-model="input4" placeholder="请输入内容"></el-input>
          </div>
          <div style="height: 40px; line-height: 40px; margin-right: 20px">最大面积:</div>
          <div style="width: 200px">
            <el-input v-model="input5" placeholder="请输入内容"></el-input>
          </div>
        </div>
      </div>

      <div style="margin-top: 40px">
        <div style="display: flex; padding-bottom: 10px; border-bottom: solid 1px rgb(221, 221, 221); margin-top: 20px">
          <div style="width: 5px; background: orange; margin-right: 10px"></div>
          <div style="font-weight: 15px">上传您的房间图片</div>
          <div style="font-size: 14px; color: grey; opacity: 0.8; margin-left: 20px">请上传一张您的房间图片</div>
        </div>
        <div style="margin-top: 20px; margin-left: 30px">
          <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="limit">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
              <span class="el-upload-list__item-actions">
                <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                  <i class="el-icon-download"></i>
                </span>
                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      limit: 1,
      dialogVisible: false,
      disabled: false
    }
  },
  methods: {
    handleRemove(file) {
      console.log(file)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleDownload(file) {
      console.log(file)
    }
  }
}
</script>

<style lang="scss" scoped></style>
