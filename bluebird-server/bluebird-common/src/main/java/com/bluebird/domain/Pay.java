package com.bluebird.domain;

import java.io.Serializable;

public class Pay implements Serializable {

    private Long id;
    /**
     * 用户的Id
     */
    private String openId;

    private String item;
    /**
     * 支付时间
     */
    private Long payTime;
    /**
     * 商户号
     */
    private String orderCode;

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }


    public String getItem() {
        return item;
    }

    public void setItem(String item) {
        this.item = item;
    }


    public Long getPayTime() {
        return payTime;
    }

    public void setPayTime(Long payTime) {
        this.payTime = payTime;
    }

}
