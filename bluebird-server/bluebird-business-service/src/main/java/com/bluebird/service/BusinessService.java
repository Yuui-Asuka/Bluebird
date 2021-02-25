package com.bluebird.service;


import com.bluebird.domain.Business;

import java.util.List;


public interface BusinessService {

    public Business find(String businessCode);

    public List<Business> findList();
    
}
