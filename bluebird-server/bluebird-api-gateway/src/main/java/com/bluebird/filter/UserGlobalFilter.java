package com.bluebird.filter;

import org.apache.commons.lang.StringUtils;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

public class UserGlobalFilter implements GlobalFilter, Ordered {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders().getFirst("token");
        //可以使用JWT进行登录鉴权
        if (StringUtils.isBlank(token)){
            return exchange.getResponse().setComplete();
        }
        //如果有其他的过滤器，将继续执行
        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        return 0;
    }
}
