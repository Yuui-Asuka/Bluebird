package com.bluebird.service.fallback;

import com.bluebird.domain.Business;
import com.bluebird.service.BusinessService;

import java.util.List;

/**
 * 兜底返回数据
 */
public class BusinessServiceFallback implements BusinessService {

    @Override
    public Business find(String businessCode) {
        Business business = new Business();
        business.setBusinessName("飞天阁");
        business.setBusinessCode("feitiange");
        return business;
    }

    @Override
    public List<Business> findList() {
        return null;
    }
}
