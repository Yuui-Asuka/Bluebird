package com.bluebird.domain;

import java.io.Serializable;
import java.util.Objects;

public class Share implements Serializable {

    private Long id;

    /**
     * 分享的编号
     */
    private Long shareId;

    /**
     * 图片地址
     */
    private String imagePath;
    /**
     * 视频地址
     */
    private String videoPath;
    /**
     * 分享内容
     */
    private String content;
    /**
     *
     */
    private String businessCode;
    /**
     * 用户Id
     */
    private Long openId;
    /**
     * 点赞数
     */
    private Long up;
    private String experience;
    /**
     * 发布时间
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

    public Long getShareId() {
        return shareId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Share share = (Share) o;
        return Objects.equals(id, share.id) && Objects.equals(shareId, share.shareId) && Objects.equals(imagePath, share.imagePath) && Objects.equals(videoPath, share.videoPath) && Objects.equals(content, share.content) && Objects.equals(businessCode, share.businessCode) && Objects.equals(openId, share.openId) && Objects.equals(up, share.up) && Objects.equals(experience, share.experience) && Objects.equals(releaseTime, share.releaseTime) && Objects.equals(placeholder1, share.placeholder1) && Objects.equals(placeholder2, share.placeholder2) && Objects.equals(placeholder3, share.placeholder3);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, shareId, imagePath, videoPath, content, businessCode, openId, up, experience, releaseTime, placeholder1, placeholder2, placeholder3);
    }

    public void setShareId(Long shareId) {
        this.shareId = shareId;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }


    public String getVideoPath() {
        return videoPath;
    }

    public void setVideoPath(String videoPath) {
        this.videoPath = videoPath;
    }


    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setBusinessCode(String businessCode) {
        this.businessCode = businessCode;
    }

    public String getBusinessCode() {
        return businessCode;
    }

    public void setHouseId(String businessCode) {
        this.businessCode = businessCode;
    }


    public Long getOpenId() {
        return openId;
    }

    public void setOpenId(Long openId) {
        this.openId = openId;
    }


    public Long getUp() {
        return up;
    }

    public void setUp(Long up) {
        this.up = up;
    }


    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
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
