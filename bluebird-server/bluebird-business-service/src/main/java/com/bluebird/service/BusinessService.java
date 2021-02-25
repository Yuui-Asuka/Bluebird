package com.bluebird.service;


import com.bluebird.domain.Business;
import com.bluebird.service.fallback.BusinessServiceFallback;
import org.springframework.cloud.openfeign.FeignClient;

import java.util.List;

//@FeignClient(value = "bluebird-business-service", fallback = BusinessServiceFallback.class)
public interface BusinessService {

    public Business find(String businessCode);

    public List<Business> findList();
    
}
