package com.bluebird.controller;

import brave.http.HttpServerRequest;
import com.bluebird.service.BusinessService;
import com.bluebird.domain.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.discovery.DiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/business-service/api/v1")
//加了这个注解之后，配置才可以立刻生效
@RefreshScope
public class BusinessInfoController {


    @Autowired
    private BusinessService businessService;

    @Autowired
    private DiscoveryClient discoveryClient;


    @GetMapping("find_by_id")
    Business find(@RequestParam(value="business_code") String businessCode){
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

}
