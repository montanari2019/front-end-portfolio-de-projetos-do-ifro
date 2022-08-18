import Links from "@mui/material/Link";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
import React from "react";
import Header from "../../shared/components/header/Header";
import Footer from "../../shared/components/footer/Footer";
import Logos from "../../shared/components/footer/Logos";

import fotoMarco from "../../shared/themes/fotosProfessor/profMarco.jpg";

import "./laboratorioDetails.css";

const serviceLab = [
  {
    service: "Desenvolvimento de software para Web",
  },
  {
    service: "Projetos de Aprendizagem de Máquina",
  },
  {
    service: "Desenvolvimento de aplicativos para Android e iOS",
  },
];

const equipamentosLab = [
  "Desenvolvimento de software para Web",
  "Projetos de Aprendizagem de Máquina",
  "Desenvolvimento de aplicativos para Android e iOS",
  "Desenvolvimento de software para Web",
  "Projetos de Aprendizagem de Máquina",
  "Desenvolvimento de aplicativos para Android e iOS",
  "Desenvolvimento de software para Web",
  "Projetos de Aprendizagem de Máquina",
  "Desenvolvimento de aplicativos para Android e iOS",
  "Desenvolvimento de software para Web",
  "Projetos de Aprendizagem de Máquina",
  "Desenvolvimento de aplicativos para Android e iOS",
  "Desenvolvimento de software para Web",
  "Projetos de Aprendizagem de Máquina",
  "Desenvolvimento de aplicativos para Android e iOS",
  "Desenvolvimento de software para Web",
  "Projetos de Aprendizagem de Máquina",
  "Desenvolvimento de aplicativos para Android e iOS",
  "Desenvolvimento de software para Web",
  "Projetos de Aprendizagem de Máquina",
  "Desenvolvimento de aplicativos para Android e iOS",
  "Desenvolvimento de software para Web",
  "Projetos de Aprendizagem de Máquina",
  "Desenvolvimento de aplicativos para Android e iOS",
];

const imgLabDetails = [
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    src: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

function LaboratorioDetails() {
  return (
    <div>
      <Header />
      <Container>
        <section>
          <Box sx={{ mt: 10 }}>
            <Typography variant="h3" sx={{ mb: 5 }} className="title-text-lab">
              FSLab - Laboratório de Fábricas de Software
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2 }}
              className="body-text-lab"
            >
              O FSLab (Laboratório de Fábricas de Software) lorem ipsum Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis
              arcu ut nulla lobortis, ac porttitor elit commodo. Morbi auctor
              ultrices libero, a auctor risus tristique ornare. In tincidunt
              purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris
              enim, dictum quis nisl et, elementum eleifend urna. Vestibulum
              mollis, neque vel mollis imperdiet, augue ante posuere metus, non
              posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.
              Integer quis elit at velit vulputate vestibulum quis sed libero.
              ",
            </Typography>
          </Box>
          <Box sx={{ mt: 5 }} className="coordenador-area-lab">
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

        <section>
          <Box sx={{ mt: 10 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Serviços oferecidos pelo laboratório:
            </Typography>
            <Box className="list-display">
              {serviceLab.map((item) => (
                <Typography variant="overline" sx={{ mt: 1 }}>
                  <li>{item.service}</li>
                </Typography>
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 10 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Equipamentos do laboratório:
            </Typography>
            <Box className="list-display">
              {equipamentosLab.map((item) => (
                <Typography variant="overline" sx={{ mt: 3, mr: 2 }}>
                  <li>{item}</li>
                </Typography>
              ))}
            </Box>
          </Box>
        </section>
        <Box sx={{ mt: 15 }} className="card-img-display-lab">
            {imgLabDetails.map((item) => (
              <Card sx={{ width: 365, m: 1 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    image={item.src}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
            ))}
          </Box>
        <section>

        </section>
      </Container>

      <Footer />
      <Logos />
    </div>
  );
}

export default LaboratorioDetails;
