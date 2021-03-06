package com.bluebird;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.*;
import org.springframework.stereotype.Service;

import java.io.Serializable;
import java.util.*;
import java.util.concurrent.TimeUnit;

@Service
public class RedisService {
    @Autowired
    RedisTemplate redisTemplate;

    private static double size = Math.pow(2, 32);

    /**
     * 存入bit
     * @param key
     * @param offset
     * @param isShow
     * @return
     */
    public boolean setBit(String key, long offset, boolean isShow){
        Collection<String> a = new ArrayList<>();
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.setBit(key, offset, isShow);
            result = true;
        } catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 获得bit
     * @param key
     * @param offset
     * @return
     */
    public boolean getBit(String key, long offset){
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            result = operations.getBit(key, offset);
        } catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 存入String类型
     * @param key
     * @param value
     * @return
     */
    public boolean set(final String key, Object value){
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.set(key, value);
            result = true;
        } catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 存入String类型的值并设置过期时间
     * @param key
     * @param value
     * @param expireTime
     * @return
     */
    public boolean set(final String key, Object value, Long expireTime) {
        boolean result = false;
        try {
            ValueOperations<Serializable, Object> operations = redisTemplate.opsForValue();
            operations.set(key, value);
            redisTemplate.expire(key, expireTime, TimeUnit.SECONDS);
            result = true;
        } catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 删除键值对
     * @param keys
     */
    public void remove(final String...keys){
        for (String key: keys){
            remove(key);
        }
    }

    public void remove(final String key){
        if (exists(key)){
            redisTemplate.delete(key);
        }
    }

    public boolean exists(final String key){
        return redisTemplate.hasKey(key);
    }

    /**
     * 获取键值对
     * @param key
     * @return
     */
    public Object get(final String key){
        Object result = null;
        ValueOperations<Serializable, Object>operations = redisTemplate.opsForValue();
        result = operations.get(key);
        return result;
    }

    /**
     * 存入哈希表
     * @param key
     * @param hashKey
     * @param value
     */
    public void hmset(String key, Object hashKey, Object value){
        HashOperations hash = redisTemplate.opsForHash();
        hash.put(key, hashKey, value);
    }

    /**
     * 获取哈希表
     * @param key
     * @param hashKey
     * @return
     */
    public Object hmget(String key, Object hashKey){
        HashOperations hash = redisTemplate.opsForHash();
        return hash.get(key, hashKey);
    }

    /**
     * 列表添加元素
     * @param key
     * @param value
     */
    public void lPush(String key, Object value){
        ListOperations<String, Object> list = redisTemplate.opsForList();
        list.rightPush(key, value);
    }

    /**
     * 获取列表片段
     * @param k
     * @param l
     * @param l1
     * @return
     */
    public List<Object> lRange(String k, long l, long l1){
        ListOperations<String, Object> list = redisTemplate.opsForList();
        return list.range(k, l, l1);
    }

    /**
     * 获取set中所有的成员
     * @param key
     * @param value
     * @return
     */
    public Set<Object> setMembers(String key, Object value){
        SetOperations<String, Object> set = redisTemplate.opsForSet();
        return set.members(key);
    }

    /**
     * 在集合中放入值
     * @param key
     * @param value
     */
    public void add(String key, Object value){
        SetOperations<String, Object> set = redisTemplate.opsForSet();
        set.add(key, value);
    }

    /**
     * 根据分数进行排名
     * @param key
     * @param score
     * @param score1
     * @return
     */
    public Set<Object> rangeByScore(String key, double score, double score1){
        ZSetOperations<String, Object> zset = redisTemplate.opsForZSet();
        return zset.rangeByScore(key, score, score1);
    }



}
