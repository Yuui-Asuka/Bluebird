package com.bluebird.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtUtils {


    private static final String SUBJECT = "stride2w";
    private static final long EXPIRE = 1000 * 60 * 60 * 24 * 7;
    private static final String APPSECRET = "xxx";

    /**
     * 生成token
     * @param tuser
     * @return
     */
//    public static String geneJsonWebToken(TUser tuser){
//        if (tuser.getId()==null || tuser.getUserName()==null || tuser.getHeadImg() == null){
//            return null;
//        }
//        return Jwts.builder().setSubject(SUBJECT)
//                .claim("id", tuser.getId())
//                .claim("name", tuser.getUserName())
//                .claim("img", tuser.getHeadImg())
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE))
//                .signWith(SignatureAlgorithm.HS256, APPSECRET).compact();
//    }

    /**
     * 校验token
     * @param token
     * @return
     */
    public static Claims checkJwt(String token){
        try{
            final Claims claims = Jwts.parser().setSigningKey(APPSECRET).parseClaimsJws(token).getBody();
            return claims;
        }catch (Exception e){
            return null;
        }
    }
}