package com.bluebird.domain;

import java.io.Serializable;

public class User implements Serializable {

    private String id;
    /**
     * 用户Id
     */
    private String openId;
    /**
     * 用户的密钥
     */
    private String sessionKey;
    /**
     * 用户名
     */
    private String userName;
    /**
     * 用户密码
     */
    private String password;
    /**
     * 用户头像
     */
    private String headImg;
    /**
     * 用户账户余额
     */
    private Integer restMoney;
    /**
     * 用户电话
     */
    private String phone;
    /**
     * 用户签名
     */
    private String sign;
    /**
     * 用户城市
     */
    private String city;
    /**
     * 性别 男为0，女为1
     */
    private short sex;
    /**
     * 用户注册时间
     */
    private Long createTime;
    /**
     * 用户加入/退出
     */
    private short available;
    private String placeholder1;
    private String placeholder2;



    public Integer getRestMoney() {
        return restMoney;
    }

    public void setRestMoney(Integer restMoney) {
        this.restMoney = restMoney;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public User() {
    }

    public String getSessionKey() {
        return sessionKey;
    }

    public void setSessionKey(String sessionKey) {
        this.sessionKey = sessionKey;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }


    public String getHeadImg() {
        return headImg;
    }

    public void setHeadImg(String headImg) {
        this.headImg = headImg;
    }


    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }


    public short getSex() {
        return sex;
    }

    public void setSex(short sex) {
        this.sex = sex;
    }


    public Long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Long createTime) {

        this.createTime = createTime;
    }


    public short getAvailable() {
        return available;
    }

    public void setAvailable(short available) {
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

}
