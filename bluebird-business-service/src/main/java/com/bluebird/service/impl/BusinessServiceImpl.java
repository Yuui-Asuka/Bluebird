package com.bluebird.service.impl;

import com.bluebird.dao.BusinessMapper;
import com.bluebird.service.BusinessService;
import com.bluebird.domain.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
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
