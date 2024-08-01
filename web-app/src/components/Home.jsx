import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/localStorageService";
import Header from "./header/Header";
import { Box, Card, CircularProgress, Typography } from "@mui/material";

// Đây là trang được bảo vệ và yêu cần có token mới đăng nhập vào được vào thì sẽ chuyển đến trang login
export default function Home() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  // Sau khi login rồi sẽ gọi api đến google
  const getUserDetails = async (accessToken) => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}` // accessToken đã nhận được từ Authenticate để gửi request đi
    );

    // Sau khi gửi request trên đi thì sẽ nhận được thông tin data dưới
    const data = await response.json();

    console.log(data);
    
    setUserDetails(data);
  };

  useEffect(() => {
    const accessToken = getToken();

    // chưa đăng nhập nó nhảy đến login
    if (!accessToken) {
      navigate("/login");
    }

    getUserDetails(accessToken);
  }, [navigate]);

  return (
    <>
      <Header></Header>
      {userDetails ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
          bgcolor={"#f0f2f5"}
        >
          <Card
            sx={{
              minWidth: 400,
              maxWidth: 500,
              boxShadow: 4,
              borderRadius: 4,
              padding: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%", // Ensure content takes full width
              }}
            >
              <img
                src={userDetails.picture}
                alt={`${userDetails.given_name}'s profile`}
                className="profile-pic"
              />
              <p>Welcome back to Devteria,</p>
              <h1 className="name">{userDetails.name}</h1>
              <p className="email">{userDetails.email}</p>{" "}
            </Box>
          </Card>
        </Box>
      ) : (
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
          <Typography>Loading ...</Typography>
        </Box>
      )}
    </>
  );
}
