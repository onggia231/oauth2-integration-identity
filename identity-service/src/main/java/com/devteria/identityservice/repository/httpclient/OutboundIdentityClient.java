package com.devteria.identityservice.repository.httpclient;

import com.devteria.identityservice.dto.request.ExchangeTokenRequest;
import com.devteria.identityservice.dto.response.ExchangeTokenResponse;
import feign.QueryMap;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;

// Gọi đến google
@FeignClient(name = "outbound-identity", url = "https://oauth2.googleapis.com") // config từ google minh tai ve co thong tin uri la "token_uri"
public interface OutboundIdentityClient {
    @PostMapping(value = "/token", produces = MediaType.APPLICATION_FORM_URLENCODED_VALUE) // produces xem doc HTTP/REST (Step 5: Exchange authorization code for refresh and access tokens) de biet duoc type
    ExchangeTokenResponse exchangeToken(@QueryMap ExchangeTokenRequest request);
}

// @QueryMap: là một annotation được sử dụng trong các client HTTP của thư viện Feign