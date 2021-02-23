export default {
  state: {
    isCollapse: false,
    menu: [],
    currentMenu: null,
    tabList: []
  },
  mutations: {
    selectMenu(state, value) {
      if (value.name !== 'home') {
        state.currentMenu = value
        let result = state.tabList.findIndex(item => item.name === value.name)
        result === -1 ? state.tabList.push(value) : ''
      } else {
        state.currentMenu = null
      }
    },
    closeTab(state, value) {
      let result = state.tabList.findIndex(item => item.name === value.name)
      state.tabList.splice(result, 1)
    },
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {}
}
