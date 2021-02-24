package com.bluebird.domain;

import java.io.Serializable;
import java.util.concurrent.ConcurrentHashMap;

public class KeepHouse implements Serializable {
    private Long id;
    /**
     * 用户Id
     */
    private String openId;
    /**
     * 商户代码
     */
    private String businessCode;

    private String placeholder;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getOpenId() {
        return openId;
    }

    public void setOpenid(String openId) {
        this.openId = openId;
    }


    public String getBusinessCode() {
        return businessCode;
    }

    public void setBusinessCode(String businessCode) {
        this.businessCode = businessCode;
    }


    public String getPlaceholder() {
        return placeholder;
    }

    public void setPlaceholder(String placeholder) {
        this.placeholder = placeholder;
    }
}
