package com.bluebird.jmh;

import com.bluebird.BusinessApplication;
import com.bluebird.service.BusinessService;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Level;
import org.openjdk.jmh.annotations.Setup;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;

import javax.inject.Scope;

//public class JMHSpringBootTest {
//    private ConfigurableApplicationContext configurableApplicationContext;
//    private BusinessService businessService;
//
//    public static void main(String[] args) throws RuntimeException{
//        Options options = new OptionsBuilder().include(JMHSpringBootTest.class.getName() + ".*")
//                .warmupIterations(2).measurementIterations(2).forks(1).build();
//    }
//
//    @Setup(Level.Trial)
//    public void init(){
//        String args = "";
//        configurableApplicationContext = SpringApplication.run(BusinessApplication.class, args);
//        businessService = configurableApplicationContext.getBean(BusinessService.class);
//
//    }
//
//
//    @Benchmark
//    public void test(){
//        System.out.println(businessService.find());
//    }
//}
