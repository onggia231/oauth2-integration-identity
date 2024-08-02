package com.devteria.identityservice.dto.response;

import com.fasterxml.jackson.databind.PropertyNamingStrategies;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class)
public class ExchangeTokenResponse { // response lay theo format doc
    String accessToken;
    Long expiresIn;
    String refreshToken;
    String scope;
    String tokenType;
}

// Sử dụng @JsonNaming(PropertyNamingStrategies.SnakeCaseStrategy.class) -> de chuyen tu camelCase -> snake_case
// Trong java convention cua no la camelCase nhưng format tham so cua Google la snake_case
// -> Nên phải dung JsonNaming để chuyển tu camelCase -> snake_case để convert giao tiếp với Google