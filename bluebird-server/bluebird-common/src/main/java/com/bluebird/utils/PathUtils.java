package com.bluebird.utils;

import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;

import java.io.File;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PathUtils {

    public static List<String> files(String businessCode, String path){
        File file = new File(pathJoin(path, businessCode));
        String[] fileList = file.list();
        if (fileList != null) {
            return Arrays.asList(fileList);
        }
        return new ArrayList<>();
    }

    public static List<String> filesRoom(String businessCode, String path){
        File file = new File(path);
        String[] fileList = file.list();
        if (fileList != null) {
            return Arrays.asList(fileList);
        }
        return new ArrayList<>();
    }

    public static String pathJoin(String... args){
        String sb = "";
        for (String arg: args){
            sb += arg;
            sb += "/";
        }
        sb = sb.substring(0, sb.length() - 1);
        return sb;
    }

    public static List<String> dirChange(String businessCode, String oldDir, String newDir) {
        List<String> paths = new ArrayList<>();
        for (String file : PathUtils.files(businessCode, oldDir)) {
            String imgUrl = PathUtils.pathJoin(newDir, businessCode, file);
            paths.add(imgUrl);
        }
        return paths;
    }

    public static List<String> dirChange2(String businessCode, String oldDir, String newDir) {
        List<String> paths = new ArrayList<>();
        for (String file : PathUtils.filesRoom(businessCode, oldDir)) {
            String imgUrl = PathUtils.pathJoin(newDir, file);
            paths.add(imgUrl);
        }
        return paths;
    }
}
