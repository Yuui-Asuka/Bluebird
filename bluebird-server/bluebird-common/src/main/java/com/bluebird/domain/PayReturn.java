package com.bluebird.domain;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.io.Serializable;

//    详细说明见文档 https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1
@XmlRootElement(name = "xml")
public class PayReturn implements Serializable {

    private static final long serialVersionUID = 2514714605929906573L;
    //返回状态码	SUCCESS/FAIL 此字段是**通信标识**，非交易标识，交易是否成功需要查看result_code来判断
    private String return_code;
    private String return_msg;   //返回信息 当return_code为FAIL时返回信息为错误原因 ，例如 签名失败
    private String appid;        //调用接口提交的公众账号ID
    private String mch_id;       //调用接口提交的商户号
    private String device_info;  //请求支付的终端设备号
    private String nonce_str;    //微信返回的随机字符串
    private String sign;         //微信返回的签名值
    //业务结果 SUCCESS/FAIL
    private String result_code;
    private String err_code;     //错误代码描述
    private String err_code_des; //错误代码
    private String trade_type;   //交易类型
    private String prepay_id;    //预支付交易会话标识
    private String code_url;     //二维码链接

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public String getReturn_code() {
        return return_code;
    }

    public void setReturn_code(String return_code) {
        this.return_code = return_code;
    }

    public String getReturn_msg() {
        return return_msg;
    }

    public void setReturn_msg(String return_msg) {
        this.return_msg = return_msg;
    }

    public String getAppId() {
        return appid;
    }

    public void setAppId(String appid) {
        this.appid = appid;
    }

    public String getMch_id() {
        return mch_id;
    }

    public void setMch_id(String mch_id) {
        this.mch_id = mch_id;
    }

    public String getDevice_info() {
        return device_info;
    }

    public void setDevice_info(String device_info) {
        this.device_info = device_info;
    }

    public String getNonce_str() {
        return nonce_str;
    }

    public void setNonce_str(String nonce_str) {
        this.nonce_str = nonce_str;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public String getResult_code() {
        return result_code;
    }

    public void setResult_code(String result_code) {
        this.result_code = result_code;
    }

    public String getErr_code() {
        return err_code;
    }

    public void setErr_code(String err_code) {
        this.err_code = err_code;
    }

    public String getErr_code_des() {
        return err_code_des;
    }

    public void setErr_code_des(String err_code_des) {
        this.err_code_des = err_code_des;
    }

    public String getTrade_type() {
        return trade_type;
    }

    public void setTrade_type(String trade_type) {
        this.trade_type = trade_type;
    }

    public String getPrepay_id() {
        return prepay_id;
    }

    public void setPrepay_id(String prepay_id) {
        this.prepay_id = prepay_id;
    }

    public String getCode_url() {
        return code_url;
    }

    public void setCode_url(String code_url) {
        this.code_url = code_url;
    }
}