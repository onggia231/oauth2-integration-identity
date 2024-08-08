# Identity service
This microservice is responsible for:
* Onboarding users
* Roles and permissions
* Authentication

## Tech stack
* Build tool: maven >= 3.9.5
* Java: 21
* Framework: Spring boot 3.2.x
* DBMS: MySQL

## Prerequisites
* Java SDK 21
* A MySQL server

## Start application
`mvn spring-boot:run`

## Build application
`mvn clean package`


## Các bước cài để lấy client id
1. Truy cập: https://console.cloud.google.com/welcome?_ga=2.131647823.1729457257.1722487233-718716992.1722487127&project=booming-premise-337208 (Nơi tạo project làm việc với Google)
2. Tạo 1 project có tên Devteria và vào mục APIs & Services
3. Chọn Credentials ( Đây là nơi làm việc với OAuth 2.0)
4. Chọn CREATE CREDENTIALS và chọn tiếp OAuth client ID ( Tạo client Id)
5. Chọn Configure consent screen -> Tích
   External -> Creat
6. Điền mục App name, User support email, Developer contact information -> SAVE AND CONTINUE liên tục
7. OAuth consent screen -> PUBLISH APP
8. Quay lại mục Credentials ( có thể tạo được 1 Credentials mới )
9. Credentials -> CREATE CREDENTIALS -> OAuth client ID
   -> Application type (chọn Web application), Name (Devteria web-app)
   -> Authorized JavaScript origins (http://localhost:3000) # Điền url ban đầu và có thể thêm nhiều url ở mục này
   -> Authorized redirect URIs (http://localhost:3000/authenticate) # Nó sẽ redirect khi login được, cũng có thể khai nhiều url mục này
10. Chọn Create để tạo, n sẽ sinh ra Dialog OAuth client created có thông tin Client ID, Client secret ( 2 thông tin này quan trọng không để public)

## Xem thong tin json
1. Chon Project Devteria da tao -> Credentials -> OAuth 2.0 Client IDs (Chon name project) -> Click icon cham than !
{
"web":{
"client_id":"...................apps.googleusercontent.com", // Xác định application là ai
"project_id":"devteria-431204",
"auth_uri":"https://accounts.google.com/o/oauth2/auth", // địa chỉ chuẩn để lấy thông tin
"token_uri":"https://oauth2.googleapis.com/token",
"auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs", // verify token
"client_secret":"...................", // không được lộ
"redirect_uris":["http://localhost:3000/authenticate"],
"javascript_origins":["http://localhost:3000"]
}
}

## Luu y
1. Khi test api: http://localhost:8080/identity/auth/outbound/authentication?code=.....
   -> Muon call api nay tu postman thi comment doan fetch goi api nay tu frontend (Authenticate.jsx) di vi code chi call duoc 1 lan thoi
2. Moi lan login gmail tu frontend no se lay thong tin va tao 1 tai khoan user moi (Voi username la gmail: .......com)
3. De tao password de co the dang nhap bang user password thi call api createPassword (http://localhost:8080/identity/users/create-password)
   -> Auth Type cua api tren: Lay tu Authorization (myInfo - Network) khi minh login gmail