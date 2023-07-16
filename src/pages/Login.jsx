import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  styled,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const CustomTextField = styled(TextField)(() => ({
    "& label": {
      left: "unset",
      right: "1.75rem",
      transformOrigin: "right",
    },
    "& legend": {
      textAlign: "right",
    },
  }));

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
        top: "calc(50vh - 135px)",
      }}
    >
      <CustomTextField label="ایمیل" />
      <FormControl
        sx={{
          "& label": {
            left: "unset",
            right: "1.75rem",
            transformOrigin: "right",
          },
          "& legend": {
            textAlign: "right",
          },
        }}
      >
        <InputLabel>رمز ورود</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="رمز ورود"
        />
      </FormControl>
      <Box
        sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
      >
        <Button
          variant="contained"
          sx={{
            fontFamily: "B Nazanin",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          {" "}
          ورود
        </Button>
        <NavLink to="/">
          <Button
            variant="contained"
            sx={{
              fontFamily: "B Nazanin",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            {" "}
            بازگشت
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};
