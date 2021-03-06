package com.bluebird.config;

import org.apache.ibatis.type.Alias;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

//@Alias("path")
//@Configuration
//@PropertySource(value = "classpath:application.properties")
//public class PathConfig {
//
//    /**
//     * 民宿主页图
//     */
//    @Value("${path.businessMainImage}")
//    private String mainImage;
//
//    @Value("${path.businessMainImageAbs}")
//    private String mainImageAbs;
//
//    /**
//     * 民宿外景展示
//     */
//    @Value("${path.businessScenicImage}")
//    private String scenicImage;
//
//    @Value("${path.businessScenicImageAbs}")
//    private String scenicImageAbs;
//
//    /**
//     * 房间的图片存储路径
//     */
//    @Value("${path.roomImage}")
//    private String roomImage;
//
//    @Value("${path.roomImageAbs}")
//    private String roomImageAbs;
//
//    /**
//     * 用户头像的存储路径
//     */
//    @Value("${path.headPortraitImage}")
//    private String headPortraitImage;
//
//    @Value("${path.headPortraitImageAbs}")
//    private String headPortraitImageAbs;
//
//    /**
//     * 商家头像存储路径
//     */
//    @Value("${path.businessHeadImg}")
//    private String businessImage;
//
//    @Value("${path.businessHeadImgAbs}")
//    private String businessImageAbs;
//
//    /**
//     * 临时图片
//     * @return
//     */
//    @Value("${path.tempImageAbs}")
//    private String tempImageAbs;
//
//    @Value("${path.tempImage}")
//    private String tempImage;
//
//    public String getTempImageAbs() {
//        return tempImageAbs;
//    }
//
//    public void setTempImageAbs(String tempImageAbs) {
//        this.tempImageAbs = tempImageAbs;
//    }
//
//    public String getTempImage() {
//        return tempImage;
//    }
//
//    public void setTempImage(String tempImage) {
//        this.tempImage = tempImage;
//    }
//
//    public String getMainImageAbs() {
//        return mainImageAbs;
//    }
//
//    public void setMainImageAbs(String mainImageAbs) {
//        this.mainImageAbs = mainImageAbs;
//    }
//
//    public String getScenicImageAbs() {
//        return scenicImageAbs;
//    }
//
//    public void setScenicImageAbs(String scenicImageAbs) {
//        this.scenicImageAbs = scenicImageAbs;
//    }
//
//    public String getRoomImageAbs() {
//        return roomImageAbs;
//    }
//
//    public void setRoomImageAbs(String roomImageAbs) {
//        this.roomImageAbs = roomImageAbs;
//    }
//
//    public String getHeadPortraitImageAbs() {
//        return headPortraitImageAbs;
//    }
//
//    public void setHeadPortraitImageAbs(String headPortraitImageAbs) {
//        this.headPortraitImageAbs = headPortraitImageAbs;
//    }
//
//    public String getBusinessImageAbs() {
//        return businessImageAbs;
//    }
//
//    public void setBusinessImageAbs(String businessImageAbs) {
//        this.businessImageAbs = businessImageAbs;
//    }
//
//    public String getMainImage() {
//        return mainImage;
//    }
//
//    public void setMainImage(String mainImage) {
//        this.mainImage = mainImage;
//    }
//
//    public String getScenicImage() {
//        return scenicImage;
//    }
//
//    public void setScenicImage(String scenicImage) {
//        this.scenicImage = scenicImage;
//    }
//
//    public void setBusinessImage(String businessImage) {
//        this.businessImage = businessImage;
//    }
//
//    public String getBusinessImage() {
//        return businessImage;
//    }
//
//    public String getRoomImage() {
//        return roomImage;
//    }
//
//    public String getHeadPortraitImage() {
//        return headPortraitImage;
//    }
//
//    public void setRoomImage(String roomImage) {
//        this.roomImage = roomImage;
//    }
//
//    public void setHeadPortraitImage(String headPortraitImage) {
//        this.headPortraitImage = headPortraitImage;
//    }
//}
