import { Box, Container, Typography } from "@mui/material";
import React from "react";



import "./footer.css";

function Laboratorios() {
  return (
    <div>
      <section className="footer-initial">
        <Container sx={{ mt: 20 }}>
          <Box className="flex-form">
            <Box className="text-footer-ajust">
              <Typography
                sx={{
                  pt: 5,
                  fontWeight: "bold",
                  fontSize: 28,
                  color: "#fff",
                }}
              >
                Tem uma ideia que gostaria de desenvolver com o IFRO?
              </Typography>
            </Box>
            <Box>
              <form className="form-group">
                <Box sx={{ mt: 2 }}>
                  <label className="label-home" htmlFor="">
                    Nome:
                  </label>
                  <Box>
                    <input className="input-home" placeholder="Nome" />
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <label className="label-home" htmlFor="">
                    Email:
                  </label>
                  <Box>
                    <input
                      className="input-home"
                      placeholder="Email: ikaro.montanari@gmail.com"
                    />
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <label className="label-home" htmlFor="">
                    Telefone:
                  </label>
                  <Box>
                    <input
                      className="input-home"
                      placeholder="(69)99356-9547"
                    />
                  </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                  <label className="label-home" htmlFor="">
                    Mensagem:
                  </label>
                  <Box>
                    <input
                      className="input-home-mensage"
                      placeholder="Sua mensagem:"
                    />
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
          <Box sx={{ m: 10, color: "#43A565" }}>IKARO</Box>
        </Container>
      </section>

     
    </div>
  );
}

export default Laboratorios;
