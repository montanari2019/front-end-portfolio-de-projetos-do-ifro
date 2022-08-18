import {
    Box,
    Container,
    Button,
    Typography,
    CardMedia,
    Card,
    CardActionArea,
    Avatar,
  } from "@mui/material";
  import React from "react";
  import "./projetosDetails.css";
  import fotoMarco from "./fotosProfessor/profMarco.jpg";
  
 
  
  function ProfessorCoordenador() {

  
    return (
      <div>
        
        <Container>
          <section>
            
  
            {/* Dados do professor cordenador */}
            <Box sx={{ mt: 5 }} className="coordenador-area">
              {/* Imagen professro */}
              <Box>
                <Avatar src={fotoMarco} sx={{ width: 150, height: 150 }} />
              </Box>
  
              {/* Dados do cordenador */}
              <Box sx={{ mt: 5 }}>
                <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                  Coordenador: Marco Antonio Augusto de Andrade
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    letterSpacing: 2,
                    fontWeight: "light",
                    fontSize: 16,
                  }}
                >
                  Mestre em Engenharia de Software
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    letterSpacing: 2,
                    fontWeight: "light",
                    fontSize: 16,
                  }}
                >
                  Campus Vilhena
                </Typography>
              </Box>
  
              {/* Botão para entrar me contato */}
              <Box>
                <Button variant="contained" color="primary" sx={{ mt: 5 }}>
                  Entrar em contato
                </Button>
              </Box>
            </Box>
          </section>
  
          
        </Container>

      </div>
    );
  }
  
  export default ProfessorCoordenador;
  