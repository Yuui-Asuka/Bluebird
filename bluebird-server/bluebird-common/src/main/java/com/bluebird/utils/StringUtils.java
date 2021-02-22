package com.bluebird.utils;

import com.bluebird.config.WeChatConfig;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.*;

public class StringUtils {

    private static final String apiKey = "q1w2e3r4t5y6u7i8q1w2e3r4t5y6u7i8";

    @Autowired
    private WeChatConfig weChatConfig;

    /**
     * 生成随机字符串
     * @param length
     * @return
     */
    public static String getRandomString(int length){
        String str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random=new Random();
        StringBuilder sb=new StringBuilder();
        for(int i=0;i<length;i++){
            int number=random.nextInt(62);
            sb.append(str.charAt(number));
        }
        return sb.toString();
    }

    /**
     * 拼接字符串参数
     */
    public String concatParams(HashMap<String, Object> paramMap) {
        WeChatConfig weChatConfig = new WeChatConfig();
        StringBuffer sbuff = new StringBuffer();
        List<String> paramsList = new ArrayList<>(paramMap.keySet());
        Collections.sort(paramsList);
        for (int i = 0; i < paramsList.size(); i++) {
            String key = paramsList.get(i);
            Object val = paramMap.get(key);
            if (val != null) {
                sbuff.append(key);
                sbuff.append("=");
                sbuff.append(val);
                sbuff.append("&");
            }
        }
        sbuff.append("key=".concat(apiKey));
        return sbuff.toString();
    }
}
