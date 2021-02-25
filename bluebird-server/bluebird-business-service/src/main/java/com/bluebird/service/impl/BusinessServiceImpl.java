package com.bluebird.service.impl;

import com.bluebird.dao.BusinessMapper;
import com.bluebird.service.BusinessService;
import com.bluebird.domain.Business;
import com.bluebird.service.fallback.BusinessServiceFallback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@FeignClient(value = "bluebird-business-service", fallback = BusinessServiceFallback.class)
public class BusinessServiceImpl implements BusinessService {

    @Autowired
    BusinessMapper businessMapper;

    public Business find(String businessCode){
        return businessMapper.find(businessCode);
    };

    public List<Business> findList(){
        return businessMapper.findList();
    };
}
