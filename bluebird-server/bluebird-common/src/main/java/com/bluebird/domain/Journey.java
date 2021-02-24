package com.bluebird.domain;

import java.io.Serializable;

public class Journey implements Serializable {
    private Long id;
    /**
     * 用户Id
     */
    private Long userId;
    /**
     * 行程开始日期
     */
    private java.sql.Date startDate;
    /**
     * 行程结束日期
     */
    private java.sql.Date finishDate;
    /**
     * 房间ID 冗余字段
     */
    private Long roomId;
    /**
     * 房间Id 冗余字段
     */
    private Long houseId;
    private String placeholder1;
    private String placeholder2;
    private String placeholder3;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }


    public java.sql.Date getStartDate() {
        return startDate;
    }

    public void setStartDate(java.sql.Date startDate) {
        this.startDate = startDate;
    }


    public java.sql.Date getFinishDate() {
        return finishDate;
    }

    public void setFinishDate(java.sql.Date finishDate) {
        this.finishDate = finishDate;
    }


    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }


    public Long getHouseId() {
        return houseId;
    }

    public void setHouseId(Long houseId) {
        this.houseId = houseId;
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
