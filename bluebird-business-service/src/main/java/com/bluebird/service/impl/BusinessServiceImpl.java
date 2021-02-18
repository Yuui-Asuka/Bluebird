package com.bluebird.service.impl;

import com.bluebird.dao.BusinessMapper;
import com.bluebird.service.BusinessService;
import com.bluebird.domain.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BusinessServiceImpl implements BusinessService {

    @Autowired
    BusinessMapper businessMapper;

    public Business findById(String businessCode){
        return businessMapper.findById(businessCode);
    };
}
