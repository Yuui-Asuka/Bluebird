package com.bluebird.domain;

import java.io.Serializable;

public class KeepShare implements Serializable {
    private Long id;
    private Long openId;
    private Long shareId;
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

    public void setOpenId(Long userId) {
        this.openId = userId;
    }


    public Long getShareId() {
        return shareId;
    }

    public void setShareId(Long shareId) {
        this.shareId = shareId;
    }


    public String getPlaceholder() {
        return placeholder;
    }

    public void setPlaceholder(String placeholder) {
        this.placeholder = placeholder;
    }

}
