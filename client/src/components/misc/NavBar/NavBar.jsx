import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const navArrayLinks = [
  {
    title: "Inicio",
    path: "/",
    icon: null,
  },
  {
    title: "Lecciones",
    path: "/lesson",
    icon: null,
  },
  {
    title: "Quizzes",
    path: "/quizz",
    icon: null,
  },
];

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: { sm: 0.5, xs: 1 } }}>
          m-U-sic
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            flexGrow: { xs: 1, sm: 0.5 },
          }}
        >
          {navArrayLinks.map((item) => (
            <Button
              component={NavLink}
              color="inherit"
              key={item.title}
              to={item.path}
            >
              {" "}
              {item.title}{" "}
            </Button>
          ))}
        </Box>
        <Box>
          <Button
            variant="contained"
            color="secondary"
            component={NavLink}
            to={"/login"}
          >
            Iniciar sesion
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
