package com.bluebird.domain;

import java.io.Serializable;

/**
 * 商家发布活动的POJO类
 */
public class Activity implements Serializable {
    private Long id;
    /**
     * 商家唯一标识
     */
    private Long businessCode;
    /**
     * 活动开始日期，用时间戳表示
     */
    private Long startDate;
    /**
     * 活动结束日期，用时间戳表示
     */
    private Long finishDate;
    /**
     * 商家提交活动的日期
     */
    private Long signUpTime;
    /**
     * 活动需要的人数
     */
    private Long quota;
    /**
     * 活动的点赞数
     */
    private Long up;
    /**
     * 活动介绍
     */
    private String activityIntroduce;
    /**
     * 活动价格
     */
    private Integer activityPrice;
    /**
     * 活动注意事项
     */
    private String beCareIntroduce;
    private String placeholder1;
    private String placeholder2;
    private String placeholder3;

    public Long getBusinessCode() {
        return businessCode;
    }

    public void setBusinessCode(Long businessCode) {
        this.businessCode = businessCode;
    }

    public Long getStartDate() {
        return startDate;
    }

    public void setStartDate(Long startDate) {
        this.startDate = startDate;
    }

    public Long getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(Long finishDate) {
        this.finishDate = finishDate;
    }

    public Long getSignUpTime() {
        return signUpTime;
    }

    public void setSignUpTime(Long signUpTime) {
        this.signUpTime = signUpTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public Long getQuota() {
        return quota;
    }

    public void setQuota(Long quota) {
        this.quota = quota;
    }


    public Long getUp() {
        return up;
    }

    public void setUp(Long up) {
        this.up = up;
    }


    public String getActivityIntroduce() {
        return activityIntroduce;
    }

    public void setActivityIntroduce(String activityIntroduce) {
        this.activityIntroduce = activityIntroduce;
    }


    public Integer getActivityPrice() {
        return activityPrice;
    }

    public void setActivityPrice(Integer activityPrice) {
        this.activityPrice = activityPrice;
    }


    public String getBeCareIntroduce() {
        return beCareIntroduce;
    }

    public void setBeCareIntroduce(String beCareIntroduce) {
        this.beCareIntroduce = beCareIntroduce;
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
