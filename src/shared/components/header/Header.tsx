import React, { useState } from "react";

import Links from "@mui/material/Link";
import { Avatar, Box, Button, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronLeft from "@mui/icons-material/ChevronLeft";

import { useAppThemeContext } from "../../contexts";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Projetos", href: "/projetos" },
  { name: "Laboratórios", href: "/laboratorios" },
  { name: "Serviços", href: "/#" },
  { name: "Login", href: "/login" },
];

function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const auth = useAuth();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const history = useNavigate();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { toggleTheme } = useAppThemeContext();

  async function handleLogout(){
    await auth.logout()
    history('/')
  }

    
  return (
    <AppBar position="sticky" color="default">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box marginRight={theme.spacing(5)}>

            <Avatar sx={{ bgcolor: "#43A565" }}>
              IF
            </Avatar>
          </Box>
          <Hidden lgDown>
            {navigationLinks.map((item) => (
              <Links
                marginRight={theme.spacing(5)}
                fontSize={16}
                color="secondary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Links>
            ))}
            
              
            
            <Button variant="contained" color="primary" onClick={handleLogout}>
              logout
            </Button>
          </Hidden>
          <Hidden lgUp>
            <IconButton>
              <MenuIcon onClick={() => setOpen(true)} />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
            >
              <IconButton>
                <ChevronLeft onClick={() => setOpen(false)} />
              </IconButton>
              <Divider />

              {navigationLinks.map((item) => (
                <Links
                  marginLeft={theme.spacing(1)}
                  padding={theme.spacing(1)}
                  fontSize={12}
                  color="secondary"
                  variant="button"
                  underline="none"
                  href={item.href}
                >
                  {item.name}
                </Links>
              ))}
             
              <Links
                marginLeft={theme.spacing(1)}
                padding={theme.spacing(1)}
                underline="none"
                color="primary"
                onClick={handleLogout}
              >
                Entre em contato
              </Links>
            </SwipeableDrawer>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default header;
