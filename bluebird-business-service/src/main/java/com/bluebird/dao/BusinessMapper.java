package com.bluebird.dao;

import com.bluebird.domain.Business;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface BusinessMapper {

    //@Select("select * from t_business where business_code = #{businessCode}")
    Business find(@Param("businessCode") String businessCode);

    List<Business> findList();

}
