package com.bluebird.domain;

public class Indoor {
    /**
     * 自增ID
     */
    private Long id;
    /**
     * 商家代码
     */
    private String businessCode;
    /**
     * 卧室介绍
     */
    private String livingRoomIntroduce;
    /**
     * 浴室介绍
     */
    private String bushRoomIntroduce;
    /**
     * 厨房介绍
     */
    private String kitchen;
    /**
     * 卧室介绍
     */
    private String bedroom;


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


    public String getLivingRoomIntroduce() {
        return livingRoomIntroduce;
    }

    public void setLivingRoomIntroduce(String livingRoomIntroduce) {
        this.livingRoomIntroduce = livingRoomIntroduce;
    }


    public String getBushRoomIntroduce() {
        return bushRoomIntroduce;
    }

    public void setBushRoomIntroduce(String bushRoomIntroduce) {
        this.bushRoomIntroduce = bushRoomIntroduce;
    }


    public String getKitchen() {
        return kitchen;
    }

    public void setKitchen(String kitchen) {
        this.kitchen = kitchen;
    }


    public String getBedroom() {
        return bedroom;
    }

    public void setBedroom(String bedroom) {
        this.bedroom = bedroom;
    }
}
