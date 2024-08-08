package com.devteria.identityservice.repository.httpclient;

import com.devteria.identityservice.dto.response.OutboundUserResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

// Goi api de get thong tin user
@FeignClient(name = "outbound-user-client", url = "https://www.googleapis.com")
// config từ google minh tai ve co thong tin uri la "token_uri"
public interface OutboundUserClient {
    @GetMapping(value = "/oauth2/v1/userinfo")
    OutboundUserResponse getUserInfo(@RequestParam("alt") String alt,
                                     @RequestParam("access_token") String accessToken);
}
