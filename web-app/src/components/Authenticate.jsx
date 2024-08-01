import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { setToken } from "../services/localStorageService";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function Authenticate() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {

    console.log("Authenticating.........");
    console.log(window.location.href);
    // Nó trả về endpoint đã cấu hình, access_token, token_type, expires_in, ...
    // http://localhost:3000/authenticate#access_token=ya29.a0AcM612wJtsubgs9DzZc52rz_WQKMZ49g9Dai-YVsL6MRF9LvucsQsvOrDA8RgSt2mQhQ19VVETFSPpQBtzQBXxdIds_hgVQpBc2pY0bgUu2gY4E5zneOOkMSY73xYEuOf6x6JW3qcjHgf1w25uoDdfu6yQD20oVVRAaCgYKAYASARESFQHGX2MigU7UdIBZ0nE8ovPFriMWlw0169&token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/userinfo.profile%20openid&authuser=0&prompt=consent

    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];

      console.log("Token: ", accessToken);

      setToken(accessToken);
      setIsLoggedin(true);
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
          flexDirection : "column",
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
