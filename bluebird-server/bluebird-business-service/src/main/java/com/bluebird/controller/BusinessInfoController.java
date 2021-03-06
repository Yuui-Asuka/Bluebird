package com.bluebird.controller;

import brave.http.HttpServerRequest;
import com.bluebird.RedisService;
import com.bluebird.service.BusinessService;
import com.bluebird.domain.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.xml.XmlBeanDefinitionReader;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.HandlerMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


@RestController
@RequestMapping("/business-service/api/v1")
//加了这个注解之后，配置才可以立刻生效
@RefreshScope
public class BusinessInfoController {


    @Autowired
    private BusinessService businessService;

    @Autowired
    private DiscoveryClient discoveryClient;

    @Resource
    private RedisTemplate redisTemplate;

    @Resource
    private RedisService redisService;


    @GetMapping("find_by_id")
    Business find(HttpServletRequestWrapper request,
                  HttpServletResponseWrapper response,
                  @RequestParam(value="business_code") String businessCode){
        Pattern pattern = Pattern.compile(".*?aa");
        String a = "bank";
        int b = Integer.valueOf("5");
        return businessService.find(businessCode);
    }

    @GetMapping("find_list")
    List<Business> findList(){
        return businessService.findList();
    }

    @RequestMapping("test")
    public Map<String, Object> test(HttpServletRequest request){
        Map<String, Object> map = new HashMap<>();
        map.put("port", request.getServerPort() + "");
        return map;
    }

    @RequestMapping("/redis")
    public String setAndGet(String name, String value){
        redisTemplate.opsForValue().set(name, value);
        return (String)redisTemplate.opsForValue().get(name);
    }

}
