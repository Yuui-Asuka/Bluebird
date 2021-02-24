package com.bluebird.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.HashMap;


@Configuration
@PropertySource(value = "classpath:application.properties")
public class WeChatConfig {

    /**
     * 服务号的appId
     */
    @Value("${wxpay.appid}")
    private String appId;

    /**
     * 服务号的appsecret
     */
    @Value("${wxpay.appsecret}")
    private String appSecret;

    /**
     * 服务号的mch_id
     */
    @Value("${wxpay.mch_id}")
    private String mchId;

    /**
     * 登录服务地址
     */
    @Value("${wxlogin.address}")
    private String address;

    /**
     * 支付地址
     * @return
     */
    @Value("${wxpay.pay}")
    private String payAddress;

    /**
     *  apikey
     * @return
     */
    @Value("${wxpay.key}")
    private String apiKey;

    /**
     * 下单的IP
     */
    @Value("${wxpay.spBillCreateIp}")
    private String spBillCreateIp;

    /**
     * 下单通知地址
     * @return
     */
    @Value("${wxpay.notifyUrl}")
    private String notifyUrl;

    /**
     * 下单方式
     * @return
     */
    @Value("${wxpay.tradeType}")
    private String tradeType;

    public String getTradeType() {
        return tradeType;
    }

    public void setTradeType(String tradeType) {
        this.tradeType = tradeType;
    }

    public String getSpBillCreateIp() {
        return spBillCreateIp;
    }

    public void setSpBillCreateIp(String spBillCreateIp) {
        this.spBillCreateIp = spBillCreateIp;
    }

    public String getNotifyUrl() {
        return notifyUrl;
    }

    public void setNotifyUrl(String notifyUrl) {
        this.notifyUrl = notifyUrl;
    }

    public String getPayAddress() {
        return payAddress;
    }

    public void setPayAddress(String payAddress) {
        this.payAddress = payAddress;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getMchId() {
        return mchId;
    }

    public void setMchId(String mchId) {
        this.mchId = mchId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public void setAppSecret(String appSecret) {
        this.appSecret = appSecret;
    }

    public String getAppId() {
        return appId;
    }

    public String getAppSecret() {
        return appSecret;
    }
}

