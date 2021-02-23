package com.bluebird.domain;

import java.io.Serializable;

public class Charge implements Serializable {
    private Long id;
    private Long chargeTime;
    /**
     * 充值类型
     * 0： 微信充值
     * 1： 支付宝
     * 2： 银行
     */
    private Integer chargeType;
    private Integer chargeMoney;
    private Integer actualMoney;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getChargeTime() {
        return chargeTime;
    }

    public void setChargeTime(Long chargeTime) {
        this.chargeTime = chargeTime;
    }

    public Integer getChargeType() {
        return chargeType;
    }

    public void setChargeType(Integer chargeType) {
        this.chargeType = chargeType;
    }

    public Integer getChargeMoney() {
        return chargeMoney;
    }

    public void setChargeMoney(Integer chargeMoney) {
        this.chargeMoney = chargeMoney;
    }

    public Integer getActualMoney() {
        return actualMoney;
    }

    public void setActualMoney(Integer actualMoney) {
        this.actualMoney = actualMoney;
    }
}
