package com.bluebird.domain;

import java.io.Serializable;

public class Comments implements Serializable {
    private Long id;
    /**
     * 发送评论的用户
     */
    private Long userId;
    /**
     * 评论关联的分享ID
     */
    private Long shareId;
    /**
     * 评论内容
     */
    private String content;
    /**
     * 点赞数
     */
    private Long up;
    /**
     * 评论发布时间 时间戳
     */
    private java.sql.Timestamp releaseTime;
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


    public Long getShareId() {
        return shareId;
    }

    public void setShareId(Long shareId) {
        this.shareId = shareId;
    }


    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }


    public Long getUp() {
        return up;
    }

    public void setUp(Long up) {
        this.up = up;
    }


    public java.sql.Timestamp getReleaseTime() {
        return releaseTime;
    }

    public void setReleaseTime(java.sql.Timestamp releaseTime) {
        this.releaseTime = releaseTime;
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
