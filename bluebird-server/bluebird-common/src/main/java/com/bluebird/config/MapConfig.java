package com.bluebird.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource(value = "classpath:application.properties")
public class MapConfig {

    /**
     * 地图接口密钥
     */
    @Value("${txmap.key}")
    private String mapKey;

    /**
     * 地图接口的url
     */
    @Value("${txmap.url}")
    private String mapUrl;

    /**
     * 附近地址接口url
     * @return
     */
    @Value("${txmap.url2}")
    private String mapUrl2;

    public String getMapUrl2() {
        return mapUrl2;
    }

    public void setMapUrl2(String mapUrl2) {
        this.mapUrl2 = mapUrl2;
    }

    public String getMapKey() {
        return mapKey;
    }

    public void setMapKey(String mapKey) {
        this.mapKey = mapKey;
    }

    public String getMapUrl() {
        return mapUrl;
    }

    public void setMapUrl(String mapUrl) {
        this.mapUrl = mapUrl;
    }
}
