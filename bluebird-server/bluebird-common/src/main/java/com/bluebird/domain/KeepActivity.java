package com.bluebird.domain;

import java.io.Serializable;

public class KeepActivity implements Serializable {

    private Long id;
    /**
     * 用户Id
     */
    private Long openId;
    /**
     * 活动Id
     */
    private Long activityId;
    private String placeholder;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Long getOpenId() {
        return openId;
    }

    public void setOpenId(Long openId) {
        this.openId = openId;
    }


    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long activityId) {
        this.activityId = activityId;
    }


    public String getPlaceholder() {
        return placeholder;
    }

    public void setPlaceholder(String placeholder) {
        this.placeholder = placeholder;
    }
}
