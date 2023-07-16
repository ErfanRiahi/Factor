import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

export const SignUpLogin = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: "20px",
        padding: "30px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "5px",
        width: "fit-content",
        margin: "0 auto",
        position: "relative",
        top: "calc(50vh - 98px)",
      }}
    >
      <NavLink to="/signUp">
        <Button
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            fontFamily: "B Nazanin",
            fontWeight: "bold",
            height: "50px",
            width: "300px",
          }}
        >
          ثبت نام
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            fontFamily: "B Nazanin",
            fontWeight: "bold",
            height: "50px",
            width: "300px",
          }}
        >
          ورود
        </Button>
      </NavLink>
    </Box>
  );
};
