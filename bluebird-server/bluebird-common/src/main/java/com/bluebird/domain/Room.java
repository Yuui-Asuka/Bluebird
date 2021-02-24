package com.bluebird.domain;


import java.io.Serializable;
import java.math.BigDecimal;

public class Room implements Serializable {

    private Long id;
    /**
     * 房间代号
     */
    private String roomCode;
    /**
     * 商家代码
     */
    private String businessCode;
    /**
     * 房间名称
     */
    private String roomName;
    /**
     * 床型
     */
    private String bedType;
    /**
     * 面积下限
     */
    private Long areaLow;
    /**
     * 面积上限
     */
    private Long areaHigh;
    /**
     * 人数
     */
    private Long stayPeople;

    /**
     * 价格
     */
    private BigDecimal price;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getRoomCode() {
        return roomCode;
    }

    public void setRoomCode(String roomCode) {
        this.roomCode = roomCode;
    }


    public String getBusinessCode() {
        return businessCode;
    }

    public void setBusinessCode(String businessCode) {
        this.businessCode = businessCode;
    }


    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }


    public String getBedType() {
        return bedType;
    }

    public void setBedType(String bedType) {
        this.bedType = bedType;
    }


    public Long getAreaLow() {
        return areaLow;
    }

    public void setAreaLow(Long areaLow) {
        this.areaLow = areaLow;
    }


    public Long getAreaHigh() {
        return areaHigh;
    }

    public void setAreaHigh(Long areaHigh) {
        this.areaHigh = areaHigh;
    }


    public Long getStayPeople() {
        return stayPeople;
    }

    public void setStayPeople(Long stayPeople) {
        this.stayPeople = stayPeople;
    }


    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

}

