import Links from "@mui/material/Link";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Header from "../../shared/components/header/Header";
import Logos from "../../shared/components/footer/Logos";
import "./homeAdmin.css";

function HomeAdmin() {
  return (
    <div>
      <Header />
      <section>
        <Container>
          <Box>
            <Typography variant="h4" sx={{ mt: 5,  letterSpacing: 15, textAlign: 'center' }}>Home admin</Typography>
          </Box>
        </Container>
      </section>
      <Logos />
    </div>
  );
}

export default HomeAdmin;
