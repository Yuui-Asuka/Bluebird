package com.stride2w.utils;


import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import javax.swing.text.html.parser.Entity;
import java.io.Closeable;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.http.HttpClient;
import java.net.http.HttpResponse;
import java.util.HashMap;
import java.util.Map;

public class HttpsUtils {

    private static final Gson gson = new Gson();

    public static Map<String, Object> doGet(String url) throws IOException {
        Map<String, Object> map = new HashMap<>();
        CloseableHttpClient httpClient = HttpClients.createDefault();
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(5000)
                .setConnectionRequestTimeout(5000)
                .setSocketTimeout(5000)
                .setRedirectsEnabled(true)
                .build();
        HttpGet httpGet = new HttpGet(url);
        httpGet.setConfig(requestConfig);
        try {
            CloseableHttpResponse httpResponse = httpClient.execute(httpGet);
            if (httpResponse.getStatusLine().getStatusCode() == 200) {
                String jsonResult = EntityUtils.toString(httpResponse.getEntity());
                map = gson.fromJson(jsonResult, map.getClass());
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } finally {
            try {
                httpClient.close();
            }catch (Exception e){
                e.printStackTrace();
            }
        }
        return map;
    }

    public static String doPost(String url, String data, int timeout) throws IOException {
        CloseableHttpClient httpClient = HttpClients.createDefault();

        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(timeout)
                .setConnectionRequestTimeout(timeout)
                .setSocketTimeout(timeout)
                .setRedirectsEnabled(true)
                .build();

        HttpPost httpPost = new HttpPost(url);
        httpPost.setConfig(requestConfig);
        httpPost.addHeader("Content-Type", "text/html; charset=UTF-8");

        if (data != null && data instanceof String){
            StringEntity stringEntity = new StringEntity(data, "UTF-8");
            httpPost.setEntity(stringEntity);
        }
        try {
            CloseableHttpResponse httpResponse = httpClient.execute(httpPost);
            HttpEntity httpEntity = httpResponse.getEntity();
            if (httpResponse.getStatusLine().getStatusCode() == 200){
                return EntityUtils.toString(httpResponse.getEntity());
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } try {
            httpClient.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

}
