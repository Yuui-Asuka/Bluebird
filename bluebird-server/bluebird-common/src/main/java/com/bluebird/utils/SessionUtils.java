package com.bluebird.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

public class SessionUtils {


    //private static final String SUBJECT = "localhost";
    private static final long EXPIRE = 1000 * 60 * 60 * 24 * 7;
    private static final String APPSECRET = "9cee4cd00b21431e12c6bdc2f212ec42";
    /**
     * 生成token
     * @param tUser
     * @return
     */
//    public static String geneJsonWebToken(TUser tUser){
//        if (tUser.getOpenId() == null || tUser.getSessionKey() == null){
//            return null;
//        }
//        String token = Jwts.builder()
//                .claim("openid", tUser.getOpenId())
//                .claim("session_key", tUser.getSessionKey())
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE))
//                .signWith(SignatureAlgorithm.HS256, APPSECRET).compact();
//        System.out.println(token);
//        return token;
//    }

    /**
     * 校验token
     * @param token
     * @return
     */
    public static Claims checkJwt(String token){
        try{
            final Claims claims = Jwts.parser().setSigningKey(APPSECRET)
                    .parseClaimsJws(token).getBody();
            return claims;
        }catch (Exception e){
            return null;
        }
    }
}
