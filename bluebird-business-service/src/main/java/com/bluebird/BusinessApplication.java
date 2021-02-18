package com.bluebird;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;


@SpringBootApplication
@MapperScan("com.bluebird.dao")
//开启nacos服务发现
@EnableDiscoveryClient
//开启Feign支持
@EnableFeignClients
public class BusinessApplication {

    public static void main(String[] args){
        SpringApplication.run(BusinessApplication.class, args);
    }

}
