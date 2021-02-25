package com.bluebird.config;

import com.alibaba.csp.sentinel.slots.block.BlockException;
import com.alibaba.csp.sentinel.adapter.spring.webmvc.callback.BlockExceptionHandler;
import com.alibaba.csp.sentinel.slots.block.authority.AuthorityException;
import com.alibaba.csp.sentinel.slots.block.degrade.DegradeException;
import com.alibaba.csp.sentinel.slots.block.flow.FlowException;
import com.alibaba.csp.sentinel.slots.block.flow.param.ParamFlowException;
import com.alibaba.csp.sentinel.slots.system.SystemBlockException;
import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Component
public class MyBlockExceptionHandler implements BlockExceptionHandler {
    @Override
    public void handle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, BlockException e) throws Exception {
        Map<String, Object> info = new HashMap<>();
        if (e instanceof FlowException){
            info.put("code", -1);
            info.put("msg", "限流异常");
        } else if (e instanceof DegradeException){
            info.put("code", -1);
            info.put("msg", "降级异常");
        } else if (e instanceof ParamFlowException){
            info.put("code", -1);
            info.put("msg", "热点参数异常");
        } else if (e instanceof SystemBlockException){
            info.put("code", -1);
            info.put("msg", "系统异常");
        } else if (e instanceof AuthorityException){
            info.put("code", -1);
            info.put("msg", "授权异常");
        }
        httpServletResponse.setStatus(200);
        httpServletResponse.setHeader("content-type", "application/json;charset=UTF-8");
        httpServletResponse.getWriter().write(JSON.toJSONString(info));

    }
}
