<template>
  <div>
    <div style="font-size: 20px; font-weight: 700; margin-bottom: 40px">基本信息</div>
    <div style="display: flex">
      <div style="color: grey; margin-top: 20px; margin-right: 20px">上传头像:</div>
      <div>
        <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="limit1">
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

    <div class="main-picture" style="display: flex; margin-top: 20px">
      <div class="main-picture-text" style="margin-right: 20px; margin-top: 25px; color: grey">
        民宿主图:
      </div>
      <div>
        <el-upload action="#" list-type="picture-card" :auto-upload="false">
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

    <div style="display: flex; margin-top: 20px">
      <div style="margin-right: 20px; margin-top: auto; margin-bottom: auto; color: grey">
        民宿名称:
      </div>
      <el-input v-model="input" placeholder="请输入您的民宿名称" style="width: 500px"></el-input>
    </div>

    <div style="display: flex; margin-top: 20px">
      <div style="margin-right: 20px; margin-top: auto; margin-bottom: auto; color: grey">
        民宿主题:
      </div>
      <el-input v-model="input" placeholder="请输入您的民宿主题" style="width: 500px"></el-input>
    </div>

    <div style="display: flex; margin-top: 20px">
      <div style="margin-right: 20px; margin-top: auto; margin-bottom: auto; color: grey">
        选择城市:
      </div>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
    </div>

    <div style="display: flex; margin-top: 20px">
      <div style="margin-right: 20px; margin-top: auto; margin-bottom: auto; color: grey">
        具体地址:
      </div>
      <div>
        <el-input v-model="input" placeholder="请输入您的民宿地址" style="width: 500px"></el-input>
        <div style="opacity: 0.7; font-size: 12px; margin-top: 5px; color: grey">
          格式: XX省XX市(县、乡)XX区XX街道XX号, 请务必输入准确地址。
        </div>
      </div>
    </div>

    <!-- <div style="display: flex; margin-top: 20px">
      <div style="margin-right: 20px">
        风格标签:
      </div>
      <el-input v-model="input" placeholder="请输入您的民宿主题" style="width: 500px"></el-input>
    </div> -->

    <div style="display: flex; margin-top: 20px">
      <div style="margin-right: 20px; margin-top: auto; margin-bottom: auto; color: grey">
        风格标签:
      </div>

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
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 新标签</el-button>
    </div>

    <div style="display: flex; margin-top: 20px">
      <div style="margin-right: 20px; margin-top: 25px; width: 75px; color: grey">
        民宿描述:
      </div>
      <el-input type="textarea" :rows="10" placeholder="请输入描述内容" v-model="textarea"> </el-input>
    </div>

    <div style="display: flex; margin-top: 20px">
      <div style="margin-right: 20px; margin-top: auto; margin-bottom: auto; color: grey">
        联系电话:
      </div>
      <el-input v-model="input" placeholder="请输入您的联系电话" style="width: 500px"></el-input>
    </div>

    <div class="facilities" style="margin-top: 80px; font-size: 20px; font-weight: 700">
      <div style="margin-bottom: 40px">选择您所提供的服务</div>

      <div style="display: flex; margin-top: 20px; width: 1200px">
        <div style="margin-right: 20px; width:110px; margin-top: auto; margin-bottom: auto; color:grey; font-size: 15px">
          基础设施:
        </div>
        <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
        <div style="margin: 15px 0"></div>
        <el-checkbox-group v-model="checkedFacilities" @change="handleCheckedFacilitiesChange">
          <el-checkbox v-for="facility in facilities" :label="facility" :key="facility" style="margin-top: 10px; width: 90px">{{ facility }}</el-checkbox>
        </el-checkbox-group>
      </div>

      <div style="display: flex; margin-top: 20px; width: 1200px">
        <div style="margin-right: 20px; width:100px; margin-top: auto; margin-bottom: auto; color:grey; font-size: 15px">
          入住服务:
        </div>
        <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
        <div style="margin: 15px 0"></div>
        <el-checkbox-group v-model="checkedService" @change="handleCheckedServiceChange">
          <el-checkbox v-for="ser in service" :label="ser" :key="ser" style="margin-top: 10px; width: 90px">{{ ser }}</el-checkbox>
        </el-checkbox-group>
      </div>

      <div style="display: flex; margin-top: 20px; width: 1200px">
        <div style="margin-right: 20px;width:100px; margin-top: auto; margin-bottom: auto; color:grey; font-size: 15px">
          洗浴设施:
        </div>
        <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
        <div style="margin: 15px 0"></div>
        <el-checkbox-group v-model="checkedBush" @change="handleCheckedBushChange">
          <el-checkbox v-for="bu in bush" :label="bu" :key="bu" style="margin-top: 10px; width: 90px">{{ bu }}</el-checkbox>
        </el-checkbox-group>
      </div>

      <div style="display: flex; margin-top: 20px; width: 1200px">
        <div style="margin-right: 20px;width:100px; margin-top: auto; margin-bottom: auto; color:grey; font-size: 15px">
          厨房用品:
        </div>
        <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
        <div style="margin: 15px 0"></div>
        <el-checkbox-group v-model="checkedKitchen" @change="handleCheckedKitchenChange">
          <el-checkbox v-for="ki in kitchen" :label="ki" :key="ki" style="margin-top: 10px; width: 90px">{{ ki }}</el-checkbox>
        </el-checkbox-group>
      </div>

      <div style="display: flex; margin-top: 20px; width: 1200px">
        <div style="margin-right: 20px;width:100px; margin-top: auto; margin-bottom: auto; color:grey; font-size: 15px">
          安全设施:
        </div>
        <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
        <div style="margin: 15px 0"></div>
        <el-checkbox-group v-model="checkedSecurity" @change="handleCheckedSecurityChange">
          <el-checkbox v-for="se in security" :label="se" :key="se" style="margin-top: 10px; width: 90px">{{ se }}</el-checkbox>
        </el-checkbox-group>
      </div>

      <div style="display: flex; margin-top: 20px; width: 1200px">
        <div style="margin-right: 20px;width:100px; margin-top: auto; margin-bottom: auto; color:grey; font-size: 15px">
          其他:
        </div>
        <!-- <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox> -->
        <div style="margin: 15px 0"></div>
        <el-checkbox-group v-model="checkedOthers" @change="handleCheckedOtherChange">
          <el-checkbox v-for="other in others" :label="other" :key="other" style="margin-top: 10px; width: 90px">{{ other }}</el-checkbox>
        </el-checkbox-group>
      </div>
    </div>

    <div style="margin-top: 80px">
      <div style="margin-bottom: 40px; font-weight: 700; font-size: 20px">
        预订须知
      </div>
      <div style="display: flex; margin-top: 20px;">
        <div style="margin-top: auto; margin-bottom: auto; margin-right: 20px; color: grey">入住时间:</div>
        <el-time-picker
          v-model="value1"
          :picker-options="{
            selectableRange: '00:00:00 - 23:59:59'
          }"
          placeholder="请选择时间"
          style="margin-right: 40px"
        >
        </el-time-picker>
        <div style="margin-top: auto; margin-bottom: auto; margin-right: 20px; color: grey">退房时间:</div>
        <el-time-picker
          v-model="value2"
          :picker-options="{
            selectableRange: '00:00:00 - 23:59:59'
          }"
          placeholder="请选择时间"
        >
        </el-time-picker>
      </div>
    </div>

    <div>
      <div style="margin-top: 20px; color: grey">取消政策</div>
      <div>
        <el-radio v-model="radio" label="1" style="width: 80px; margin-top: 20px; font-size: 15px">宽松: 入住前一天取消能获得全额退款</el-radio>
      </div>
      <div>
        <el-radio v-model="radio" label="2" style="width: 80px; margin-top: 20px; font-size: 15px">中等: 入住五天前取消能获得全额退款</el-radio>
      </div>
      <div>
        <el-radio v-model="radio" label="3" style="width: 80px; margin-top: 20px; font-size: 15px">严格: </el-radio>
      </div>
      <div style="display: flex; font-size: 15px; margin-top: 20px">
        <el-radio v-model="radio" label="4" style="margin-top: auto; margin-bottom: auto;">自定义:</el-radio>
        <el-input v-model="input" placeholder="请输入" style="width: 500px"></el-input>
      </div>
    </div>

    <div style="display: flex; margin-top: 40px">
      <div style="margin-top: 20px; margin-right: 20px; color: grey">房屋守则:</div>
      <div class="choice">
        <div style="display: flex; margin-top: 15px">
          <div style="margin-right: 20px">适合儿童(2-12岁)</div>
          <div>
            <el-radio-group v-model="radio2">
              <el-radio :label="5">是</el-radio>
              <el-radio :label="6">否</el-radio>
            </el-radio-group>
          </div>
        </div>

        <div style="display: flex; margin-top: 15px">
          <div style="margin-right: 20px">适合婴幼儿(2岁以下)</div>
          <div>
            <el-radio-group v-model="radio3">
              <el-radio :label="7">是</el-radio>
              <el-radio :label="8">否</el-radio>
            </el-radio-group>
          </div>
        </div>

        <div style="display: flex; margin-top: 15px">
          <div style="margin-right: 20px">允许吸烟</div>
          <div>
            <el-radio-group v-model="radio4">
              <el-radio :label="9">是</el-radio>
              <el-radio :label="10">否</el-radio>
            </el-radio-group>
          </div>
        </div>

        <div style="display: flex; margin-top: 15px">
          <div style="margin-right: 20px">允许携带宠物</div>
          <div>
            <el-radio-group v-model="radio5">
              <el-radio :label="11">是</el-radio>
              <el-radio :label="12">否</el-radio>
            </el-radio-group>
          </div>
        </div>

        <div style="display: flex; margin-top: 15px">
          <div style="margin-right: 20px">允许举办派对和活动</div>
          <div>
            <el-radio-group v-model="radio6">
              <el-radio :label="13">是</el-radio>
              <el-radio :label="14">否</el-radio>
            </el-radio-group>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top: 80px">
      <div style="font-size: 20px; font-weight: 700; margin-bottom: 40px">资质信息</div>
      <div style="display: flex; margin-top: 20px">
        <div style="margin-right: 20px; margin-top: 25px; color: grey; width: 150px">
          上传营业执照:
        </div>
        <div>
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
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

      <div style="display: flex; margin-top: 20px">
        <div style="margin-right: 20px; margin-top: 25px; color: grey; width: 150px">
          上传身份证:
        </div>
        <div>
          <el-upload action="#" list-type="picture-card" :auto-upload="false">
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

    <div style="margin-top: 80px">
      <div style="margin-top: 20px; font-size: 20px; font-weight: 700; margin-bottom: 40px">房间图片上传</div>
      <div>
        <div style="display: flex; padding-bottom: 10px; border-bottom: solid 1px rgb(221, 221, 221); margin-top: 20px">
          <div style="width: 5px; background: orange; margin-right: 10px"></div>
          <div style="font-weight: 15px">整体外观</div>
          <div style="font-size: 14px; color: grey; opacity: 0.8; margin-left: 20px">图片格式应为1200*900，支持jpg/png格式，最多上传8张</div>
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

      <div>
        <div style="display: flex; padding-bottom: 10px; border-bottom: solid 1px rgb(221, 221, 221); margin-top: 20px">
          <div style="width: 5px; background: orange; margin-right: 10px"></div>
          <div style="font-weight: 15px">客厅</div>
          <div style="font-size: 14px; color: grey; opacity: 0.8; margin-left: 20px">图片格式应为1200*900，支持jpg/png格式，最多上传8张</div>
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

      <div>
        <div style="display: flex; padding-bottom: 10px; border-bottom: solid 1px rgb(221, 221, 221); margin-top: 20px">
          <div style="width: 5px; background: orange; margin-right: 10px"></div>
          <div style="font-weight: 15px">卧室</div>
          <div style="font-size: 14px; color: grey; opacity: 0.8; margin-left: 20px">图片格式应为1200*900，支持jpg/png格式，最多上传8张</div>
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

      <div>
        <div style="display: flex; padding-bottom: 10px; border-bottom: solid 1px rgb(221, 221, 221); margin-top: 20px">
          <div style="width: 5px; background: orange; margin-right: 10px"></div>
          <div style="font-weight: 15px">卫生间</div>
          <div style="font-size: 14px; color: grey; opacity: 0.8; margin-left: 20px">图片格式应为1200*900，支持jpg/png格式，最多上传8张</div>
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

      <div>
        <div style="display: flex; padding-bottom: 10px; border-bottom: solid 1px rgb(221, 221, 221); margin-top: 20px">
          <div style="width: 5px; background: orange; margin-right: 10px"></div>
          <div style="font-weight: 15px">厨房</div>
          <div style="font-size: 14px; color: grey; opacity: 0.8; margin-left: 20px">图片格式应为1200*900，支持jpg/png格式，最多上传8张</div>
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

    <div style="margin-top: 40px; margin-left: 40px">
      <el-button type="primary">确定上传</el-button>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const facilityOptions = ['洗衣机', '厨房', 'wifi', '电视', '空调', '浴缸', '独卫', '充电宝', '烘干机', '冰箱', '电脑', 'PS4', 'switch', '皮艇', '渔具']
// eslint-disable-next-line no-unused-vars
const serviceOptions = ['酒水', '三餐', '接送', '洗衣']
// eslint-disable-next-line no-unused-vars
const bushOptions = ['牙刷', '牙膏', '梳子', '沐浴露', '洗发露', '热水器', '浴缸']
// eslint-disable-next-line no-unused-vars
const kitchenOptions = ['微波炉', '电磁炉', '蒸锅', '平底锅', '烤箱', '榨汁机', '搅拌机', '油烟机']
// eslint-disable-next-line no-unused-vars
const securityOptions = ['烟雾探测器', '报警器', '救生圈', '急救箱']
// eslint-disable-next-line no-unused-vars
const othersOptions = ['接送服务', '代购']

export default {
  data() {
    return {
      limit1: 1,
      limit: 8,
      radio: '1',
      radio2: 5,
      radio3: 7,
      radio4: 9,
      radio5: 11,
      radio6: 13,

      value1: new Date(),
      value2: new Date(),

      checkAll: false,
      checkedFacilities: [],
      checkedService: [],
      checkedBush: [],
      checkedKitchen: [],
      checkedSecurity: [],
      checkedOthers: [],

      facilities: facilityOptions,
      service: serviceOptions,
      bush: bushOptions,
      kitchen: kitchenOptions,
      security: securityOptions,
      others: othersOptions,

      isIndeterminate: true,

      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      input: '',
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      textarea: '',
      options: [
        {
          value: '选项1',
          label: '杭州'
        },
        {
          value: '选项2',
          label: '大理'
        },
        {
          value: '选项3',
          label: '北京'
        },
        {
          value: '选项4',
          label: '上海'
        },
        {
          value: '选项5',
          label: '拉萨'
        }
      ],
      value: ''
    }
  },

  // facilities: facilityOptions,
  //     service: serviceOptions,
  //     bush: bushOptions,
  //     kitchen: kitchenOptions,
  //     security: securityOptions,
  //     others: othersOptions,
  methods: {
    // handleCheckAllChange(val) {
    //   this.checkedCities = val ? facilityOptions : []
    //   this.isIndeterminate = false
    // },
    handleCheckedFacilitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.facilities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.facilities.length
    },

    handleCheckedServiceChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.service.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.service.length
    },

    handleCheckedBushChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.bush.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.bush.length
    },

    handleCheckedKitchenChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.kitchen.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.kitchen.length
    },

    handleCheckedSecurityChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.security.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.security.length
    },

    handleCheckedOtherChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.others.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.others.length
    },

    handleRemove(file) {
      console.log(file)
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },

    handleDownload(file) {
      console.log(file)
    },

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
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },

    mounted() {
      this.$http.get('/home/getData').then(res => {
        console.log(res.data)
      })
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

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
