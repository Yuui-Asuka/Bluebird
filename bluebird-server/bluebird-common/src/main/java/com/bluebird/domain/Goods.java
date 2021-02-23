package com.bluebird.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;

/**
 * 商品
 */
public class Goods implements Serializable {

    private Long id;
    /**
     *  商家唯一标识
     */
    private String businessCode;
    /**
     *  商品描述
     */
    private String goodsDescription;
    /**
     *  商品名称
     */
    private String goodsName;
    /**
     * 商品价格
     */
    private Integer price;
    /**
     * 商品上架/下架 上架为1 下架为0
     */
    private Long available;
    private String placeholder1;
    private String placeholder2;
    private String placeholder3;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBusinessCode() {
        return businessCode;
    }

    public void setBusinessCode(String businessCode) {
        this.businessCode = businessCode;
    }

    public String getGoodsDescription() {
        return goodsDescription;
    }

    public void setGoodsDescription(String goodsDescription) {
        this.goodsDescription = goodsDescription;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Long getAvailable() {
        return available;
    }

    public void setAvailable(Long available) {
        this.available = available;
    }

    public String getPlaceholder1() {
        return placeholder1;
    }

    public void setPlaceholder1(String placeholder1) {
        this.placeholder1 = placeholder1;
    }

    public String getPlaceholder2() {
        return placeholder2;
    }

    public void setPlaceholder2(String placeholder2) {
        this.placeholder2 = placeholder2;
    }

    public String getPlaceholder3() {
        return placeholder3;
    }

    public void setPlaceholder3(String placeholder3) {
        this.placeholder3 = placeholder3;
    }
}
