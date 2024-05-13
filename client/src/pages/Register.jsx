import React from "react";
import NavBar from "../components/misc/NavBar/NavBar";
import RegisterForm from "../components/login-register/RegisterForm";
import { Box } from "@mui/material";


export const Register = () => {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "48px",
        }}
      >
        <RegisterForm />
      </Box>
    </Box>
  );
};
