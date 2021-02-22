package com.bluebird.domain;

import java.io.Serializable;

/**
 * 商户的POJO类
 */
public class Business implements Serializable{

        /**
         * 自增长Id
         */
        private Long id;
        /**
         * 商家唯一标识码
         */
        private String businessCode;
        /**
         * 商家昵称
         */
        private String businessName;
        /**
         * 商家密码
         */
        private String password;
        /**
         * 商家电话
         */
        private String phone;
        /**
         * 商家所在城市
         */
        private String city;
        /**
         * 商家入驻时间
         */
        private Long entryTime;
        /**
         * 商家评分
         */
        private Double score;
        /**
         * 民宿介绍
         */
        private String introduce;
        /**
         * 民宿的最低价格，全部用分来表示
         */
        private int bottomPrice;
        /**
         * 商家入驻/退出
         */
        private Long available;
        /**
         * 商家入驻的民宿名称
         */
        private String houseName;
        /**
         * 民宿地址
         */
        private String address;
        /**
         * 商家的民宿介绍
         */
        private String houseIntroduce;
        /**
         * 民宿的设施内容
         */
        private String houseFacilities;
        /**
         * 民宿所在的景点
         */
        private String scenicSpotsName;
        /**
         * 空余房间数量
         */
        private Integer unoccupied;
        /**
         * 民宿风格
         */
        private String style;
        /**
         * 民宿标签
         */
        private String tags;
        /**
         * 商家头像路径
         */
        private String headImgPath;
        /**
         * 商家主图路径
         */
        private String mainPath;


        private String placeholder1;
        private String placeholder2;
        private String placeholder3;


        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getHeadImgPath() {
            return headImgPath;
        }

        public void setHeadImgPath(String headImgPath) {
            this.headImgPath = headImgPath;
        }

        public String getMainPath() {
            return mainPath;
        }

        public void setMainPath(String mainPath) {
            this.mainPath = mainPath;
        }

        public String getBusinessCode() {
            return businessCode;
        }

        public void setBusinessCode(String businessCode) {
            this.businessCode = businessCode;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public int getBottomPrice() {
            return bottomPrice;
        }

        public void setBottomPrice(int bottomPrice) {
            this.bottomPrice = bottomPrice;
        }

        public String getStyle() {
            return style;
        }

        public void setStyle(String style) {
            this.style = style;
        }

        public String getTags() {
            return tags;
        }

        public void setTags(String tags) {
            this.tags = tags;
        }

        public Integer getUnoccupied() {
            return unoccupied;
        }

        public void setUnoccupied(Integer unoccupied) {
            this.unoccupied = unoccupied;
        }

        public String getHouseName() {
            return houseName;
        }

        public void setHouseName(String houseName) {
            this.houseName = houseName;
        }

        public String getHouseIntroduce() {
            return houseIntroduce;
        }

        public void setHouseIntroduce(String houseIntroduce) {
            this.houseIntroduce = houseIntroduce;
        }

        public String getHouseFacilities() {
            return houseFacilities;
        }

        public void setHouseFacilities(String houseFacilities) {
            this.houseFacilities = houseFacilities;
        }

        public String getScenicSpotsName() {
            return scenicSpotsName;
        }

        public void setScenicSpotsName(String scenicSpotsName) {
            this.scenicSpotsName = scenicSpotsName;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }


        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }


        public String getBusinessName() {
            return businessName;
        }

        public void setBusinessName(String businessName) {
            this.businessName = businessName;
        }


        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }


        public Long getEntryTime() {
            return entryTime;
        }

        public void setEntryTime(Long entryTime) {
            this.entryTime = entryTime;
        }


        public Double getScore() {
            return score;
        }

        public void setScore(Double score) {
            this.score = score;
        }


        public String getIntroduce() {
            return introduce;
        }

        public void setIntroduce(String introduce) {
            this.introduce = introduce;
        }


        public Long getAvailable() {
            return available;
        }

        public void setAvailable(Long available) {
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


        public String getPlaceholder3() {
            return placeholder3;
        }

        public void setPlaceholder3(String placeholder3) {
            this.placeholder3 = placeholder3;
        }

    }

