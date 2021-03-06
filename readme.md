# Bluebird

"Bluebird" means a messenger of hope and happiness. The project is a travel platform with spring boot and Vue as the main technology stack and front and back end separation.

# 该项目后端采用如下技术栈：
* 包管理工具：Maven
* web框架：SpringBoot2.X + Spring + SpringMVC
* 服务注册与发现：Nacos
* 服务限流降级：Sentinal
* 分布式配置中心：Nacos
* 服务网关：SpringCloud Gateway
* 服务间调用：Feign Ribbon
* 链路追踪：Sleuth + Zipkin
* 持久化数据和缓存：MySql8.0 + Redis
* 消息队列：RocketMQ
* 权限控制和安全：Shiro
* tcp连接：Netty
* 搜索引擎：ElasticSearch
* 容器化部署：Docker

# 前端采用如下技术栈
* 前端部分采用vue/elementUI,包括小程序端

* 通信方面采用restful+rpc调用，常规接口采用http协议进行交互，对于连接调用频繁的部分采用tcp协议。
