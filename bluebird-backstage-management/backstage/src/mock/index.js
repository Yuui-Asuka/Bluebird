import Mock from 'mockjs'
import homeApi from './home'

// 设置随机延时
Mock.setup({
  timeout: '200-2000'
})

//首页相关 拦截 /home/getData的ajax请求
Mock.mock(/\/home\/getData/, 'get', homeApi.getData)
