import { Box, Container, Typography } from "@mui/material";

import Links from "@mui/material/Link";
import React from "react";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.token) {
    return (
      <div>
        <Container>
          <Box
            sx={{
              mt: 15,
              display: "flex",
              flexDirection: "column",
              justify: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ mt: 5, letterSpacing: 2, fontWeight: "bold", textAlign: "center"}}
            >
              Não autorizado
            </Typography>
            <Typography
              variant="h4"
              sx={{ mt: 5, mb: 2, fontSize: 16, letterSpacing: 6, textAlign: "center"}}
            >
              Você não tem acesso a essa pagina, efetue login.
            </Typography>
            <Links
              sx={{ width: "50%", mt: 2, mb: 2, pl: 5, pr: 5, pb: 1, pt: 1, textAlign: "center", backgroundColor: "#43A565", borderRadius: 5, color: "#ffff", underline: "none" }}
              variant="button"
              href={"/login"}
            >
              Login Page
            </Links>
            <Links
              sx={{ width: "50%", mt: 2, mb: 2, pl: 5, pr: 5, pb: 1, pt: 1, textAlign: "center", backgroundColor: "#ffff", border: "1px solid", borderColor: "#43A565", borderRadius: 5, color: "#43A565", underline: "none",  }}
              variant="button"
              href={"/"}
            >
              Home Page
            </Links>
          </Box>
        </Container>
      </div>
    );
  }

  return children;
};
