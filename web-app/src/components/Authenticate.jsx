import {useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {setToken} from "../services/localStorageService";
import {Box, CircularProgress, Typography} from "@mui/material";

export default function Authenticate() {
    const navigate = useNavigate();
    const [isLoggedin, setIsLoggedin] = useState(false);

    useEffect(() => {

        // Đây là url mà Googled đã redirect về đây
        console.log(window.location.href);
        // http://localhost:3000/authenticate?code=4/0AcvDMrCNIVYiAnTgTsx-h3ElaafeVDlRbH22N5-elRbElYqZu_6pbKOdb23F5jEI5G-Q9A&scope=email%20profile%20openid%20https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email&authuser=0&prompt=consent
        // Truy cap: https://developers.google.com/identity/protocols/oauth2/web-server -> for Server-side Web Apps ( doc mo ta url)
        // Xem muc Step 5: Exchange authorization code for refresh and access tokens (Tu url de lay refresh va access tokens) -> HTTP/REST de xem phuong thuc
        console.log("Authenticating.........");
        console.log(window.location.href);
        // Nó trả về endpoint đã cấu hình, access_token, token_type, expires_in, ...
        // http://localhost:3000/authenticate#access_token=ya29.a0AcM612wJtsubgs9DzZc52rz_WQKMZ49g9Dai-YVsL6MRF9LvucsQsvOrDA8RgSt2mQhQ19VVETFSPpQBtzQBXxdIds_hgVQpBc2pY0bgUu2gY4E5zneOOkMSY73xYEuOf6x6JW3qcjHgf1w25uoDdfu6yQD20oVVRAaCgYKAYASARESFQHGX2MigU7UdIBZ0nE8ovPFriMWlw0169&token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile%20openid&authuser=0&prompt=consent

        // get authorization code
        const authCodeRegex = /code=([^&]+)/;
        const isMatch = window.location.href.match(authCodeRegex);

        if (isMatch) {
            // get duoc code ra
            const authCode = isMatch[1];

            console.log("Token: " + authCode);

            // goi api truyen code (Luu y: authCode chi goi api 1 lan la het han, sau khi goi o ham fetch kia thi goi lai o postman se khong duoc)
            fetch(
                `http://localhost:8080/identity/auth/outbound/authentication?code=${authCode}`,
                {
                    method: "POST",
                }
            )
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);

                    setToken(data.result?.token);
                    setIsLoggedin(true);
                });

        }
    }, []);

    useEffect(() => {
        if (isLoggedin) {
            navigate("/");
        }
    }, [isLoggedin, navigate]);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <CircularProgress></CircularProgress>
                <Typography>Authenticating...</Typography>
            </Box>
        </>
    );
}
