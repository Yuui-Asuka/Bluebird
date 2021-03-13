package com.bluebird;
import org.mybatis.spring.annotation.MapperScan;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.support.ClassPathXmlApplicationContext;


@SpringBootApplication
@MapperScan("com.bluebird.dao")
//开启nacos服务发现
@EnableDiscoveryClient
//开启Feign支持
@EnableFeignClients
public class BusinessApplication {

    public static void main(String[] args) throws RunnerException {

        SpringApplication.run(BusinessApplication.class, args);
    }

}
