<template>
  <div class="tags">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
      @click="changeMenu(tag)"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState({
      tags: state => state.tab.tabList
    })
  },

  methods: {
    ...mapMutations({
      close: 'closeTab'
    }),
    handleClose(tag) {
      this.close(tag)
    },
    changeMenu(item) {
      this.$router.push({ name: item.name })
      this.$store.commit('selectMenu', item)
    }
  },
  data() {
    return {
      //   tags: [
      //     { name: '标签一', type: '' },
      //     { name: '标签二', type: 'success' },
      //     { name: '标签三', type: 'info' },
      //     { name: '标签四', type: 'warning' },
      //     { name: '标签五', type: 'danger' }
      //   ]
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 20px;
  .el-tag {
    margin-left: 15px;
    cursor: pointer;
  }
}
</style>
