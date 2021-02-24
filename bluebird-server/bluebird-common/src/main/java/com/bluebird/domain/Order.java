package com.bluebird.domain;


import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

public class Order implements Serializable {

    private Long id;
    /**
     * 用户唯一标识
     */
    private String openId;
    /**
     * 订单状态 0表示订单待支付 1表示已支付 2表示已确认 3表示已取消 4表示已入住 5表示已离开 99表示订单待取消 100表示删除
     */
    private Integer state;
    /**
     * 订单提交时间 如果提交时直接支付 则时间和支付时间一致
     */
    private Long submitTime;
    /**
     * 商家确认接单时间
     */
    private Long sureTime;
    /**
     * 总费用
     */
    private Integer totalFee;
    /**
     * 顾客昵称
     */
    private String nickName;
    /**
     * 商家的工商号 唯一标识
     */
    private String businessCode;
    /**
     * 用户入店时间
     */
    private Long stayTime;
    /**
     * 用户离店时间
     */
    private Long leaveTime;
    /**
     * 订单内容
     */
    private String orderContent;
    /**
     * 用户取消订单时间
     */
    private Long cancelTime;
    /**
     * 客户信息
     */
    private String guestInfo;
    /**
     * 订单编号
     */
    private String orderCode;
    /**
     * 订单开始日期
     */
    private java.sql.Date startDate;
    /**
     * 订单结束日期
     */
    private java.sql.Date endDate;
    /**
     * 顾客留言
     */
    private String message;
    /**
     * 预留字段
     */
    private String placeholder1;
    private String placeholder2;
    private String placeholder3;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
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

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public Long getSubmitTime() {
        return submitTime;
    }

    public void setSubmitTime(Long submitTime) {
        this.submitTime = submitTime;
    }

    public Long getSureTime() {
        return sureTime;
    }

    public void setSureTime(Long sureTime) {
        this.sureTime = sureTime;
    }


    public Integer getTotalFee() {
        return totalFee;
    }

    public void setTotalFee(Integer totalFee) {
        this.totalFee = totalFee;
    }


    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }


    public String getBusinessCode() {
        return businessCode;
    }

    public void setBusinessCode(String businessCode) {
        this.businessCode = businessCode;
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


    public Long getStayTime() {
        return stayTime;
    }

    public void setStayTime(Long stayTime) {
        this.stayTime = stayTime;
    }


    public Long getLeaveTime() {
        return leaveTime;
    }

    public void setLeaveTime(Long leaveTime) {
        this.leaveTime = leaveTime;
    }


    public String getOrderContent() {
        return orderContent;
    }

    public void setOrderContent(String orderContent) {
        this.orderContent = orderContent;
    }


    public Long getCancelTime() {
        return cancelTime;
    }

    public void setCancelTime(Long cancelTime) {
        this.cancelTime = cancelTime;
    }

    public String getGuestInfo() {
        return guestInfo;
    }

    public void setGuestInfo(String guestInfo) {
        this.guestInfo = guestInfo;
    }

    public String getOrderCode() {
        return orderCode;
    }

    public void setOrderCode(String orderCode) {
        this.orderCode = orderCode;
    }

}
