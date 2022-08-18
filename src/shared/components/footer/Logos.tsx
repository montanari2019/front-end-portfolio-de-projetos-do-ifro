import { Box, Container, Typography } from "@mui/material";
import React from "react";

import IFLogo from "./Logotipo-IFRO-vilhena-vertical.png";
import FSLab from "./FSLAB-LOGO.png";

import "./footer.css";

function Laboratorios() {
  return (
    <div>
       <section>
          <Container>
        <Box className="footer-diplay" sx={{ mt: 5 }}>
          <img className="img-FSL" src={FSLab} />

          <Box className="text-footer-endereco">
            <Box>
              <Typography sx={{ fontWeight: "light", fontSize: 16 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                  IFRO - Instituto Federal de Rondônia
                </Typography>
                Av. Lauro Sodré, 6500 - Censipam - Aeroporto, Porto Velho - RO,
                76803-260 Fone/Fax: (69) 2182-9600
              </Typography>
            </Box>

            <img className="img-IF" src={IFLogo} />

          </Box>
        </Box>
        </Container>
      </section>
    </div>
  );
}

export default Laboratorios;
