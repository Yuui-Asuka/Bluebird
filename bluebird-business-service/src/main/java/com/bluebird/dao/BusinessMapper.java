package com.bluebird.dao;

import com.bluebird.domain.Business;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface BusinessMapper {

    @Select("select * from t_business where business_code = #{businessCode}")
    Business findById(@Param("businessCode") String businessCode);

}
