import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/localStorageService";
import Header from "./header/Header";
import { Box, Card, CircularProgress, Typography } from "@mui/material";

// Đây là trang được bảo vệ và yêu cần có token mới đăng nhập vào được vào thì sẽ chuyển đến trang login
export default function Home() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  // // Sau khi login rồi sẽ gọi api đến google
  // const getUserDetails = async (accessToken) => {
  //   const response = await fetch(
  //     `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}` // accessToken đã nhận được từ Authenticate để gửi request đi
  //   );
  //
  //   // Sau khi gửi request trên đi thì sẽ nhận được thông tin data dưới
  //   const data = await response.json();
  //
  //   console.log(data);
  //
  //   setUserDetails(data);
  // };

  // get thong tin user tu he thong cua chung ta
  const getUserDetails = async (accessToken) => {
    const response = await fetch(
        "http://localhost:8080/identity/users/myInfo",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
    );

    const data = await response.json();

    console.log(data.result);

    setUserDetails(data.result);
  };

  useEffect(() => {
    const accessToken = getToken();

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
                  <p>Welcome back to Devteria, {userDetails.username}</p>
                  <h1 className="name">{`${userDetails.firstName} ${userDetails.lastName}`}</h1>
                  <p className="email">{userDetails.dob}</p>
                  <ul>
                    User's roles:
                    {userDetails.roles?.map((item, index) => (
                        <li className="email" key={index}>
                          {item.name}
                        </li>
                    ))}
                  </ul>
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
