import {
  Box,
  Button,
  Container,
  FormControl,
  FormGroup,
  ImageList,
  ImageListItem,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../shared/components/header/Header";
import Footer from "../../shared/components/footer/Footer";
import Logos from "../../shared/components/footer/Logos";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import GroupsIcon from "@mui/icons-material/Groups";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "./home.css";

import Links from "@mui/material/Link";

const imgDataProject = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];

const itemDataLaboratories = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

function Home() {
  return (
    <div>
      <Header></Header>
      <section>
        <Box className="header-image main-ajuste">
          <Box className="main-ajuste">
            <Box sx={{ mb: 5 }}>
              <LightbulbIcon sx={{ fontSize: 100, color: "#F1C40F" }} />
            </Box>
            <Box sx={{ bgcolor: "#43A565", m: 5, borderRadius: 2 }}>
              <Typography
                sx={{ m: 2, textAlign: "center", color: "white" }}
                variant="h4"
              >
                Tem uma ideia que gostaria de desenvolver com o IFRO?
              </Typography>
            </Box>
          </Box>
        </Box>

        <section>
          <Box className="main-card">
            <Box className="main-ajuste-card" sx={{ color: "#ffff" }}>
              <Box className="main-ajuste-box">
                <GroupsIcon sx={{ fontSize: 60 }} />
                <Typography
                  sx={{
                    typography: "h6",
                    fontSize: 24,
                    fontWeight: "light",
                    letterSpacing: 6,
                  }}
                >
                  10 Parceiros
                </Typography>
              </Box>

              <Box className="main-ajuste-box">
                <LaptopChromebookIcon sx={{ fontSize: 60 }} />
                <Typography
                  sx={{
                    typography: "h6",
                    fontSize: 24,
                    fontWeight: "light",
                    letterSpacing: 6,
                  }}
                >
                  30 Projetos desenvolvidos
                </Typography>
              </Box>

              <Box className="main-ajuste-box">
                <PlaylistAddCheckIcon sx={{ fontSize: 60 }} />
                <Typography
                  sx={{
                    typography: "h6",
                    fontSize: 24,
                    fontWeight: "light",
                    letterSpacing: 6,
                  }}
                >
                  5 Demandas cadastradas
                </Typography>
              </Box>

              <Box className="main-ajuste-box">
                <ApartmentIcon sx={{ fontSize: 60 }} />
                <Typography
                  sx={{
                    typography: "h6",
                    fontSize: 24,
                    fontWeight: "light",
                    letterSpacing: 6,
                  }}
                >
                  10 Municípios
                </Typography>
              </Box>
            </Box>
          </Box>
        </section>
      </section>

      <section>
        <Container>
          {/* Sessão de projetos */}
          <section>
            <Box sx={{ mt: 10 }}>
              <Typography sx={{ fontSize: 36, letterSpacing: 6 }}>
                Projetos
              </Typography>
              <Typography align="justify" sx={{ fontWeight: "", mb: 2 }}>
                O IFRO conta com 20 laboratórios nas mais diversas áreas:
                informática, solos, lorem iupsum, lorem iupsum, lorem iupsum,
                lorem iupsum, solos, lorem iupsum, lorem iupsum, lorem iupsum,
                lorem iupsum, solos, lorem iupsum, lorem iupsum, lorem iupsum,
                lorem iupsum,informática, solos, lorem iupsum, lorem iupsum,
                lorem iupsum, lorem iupsum, solos, lorem iupsum, lorem iupsum,
                lorem iupsum, lorem iupsum, solos, lorem iupsum, lorem iupsum,
                lorem iupsum, lorem iupsum,.
              </Typography>
              <Links
                sx={{
                  mt: 5,
                  p: 1,
                  pr: 3,
                  pl: 3,
                  backgroundColor: "#43A565",
                  color: "#ffff",
                  borderRadius: 1,
                }}
                variant="button"
                underline="none"
                href={"/projetos"}
              >
                Conhecer Projetos
              </Links>
            </Box>

            <Box
              sx={{
                mt: 10,
                p: 4,
                border: 1,
                borderColor: "#43A565",
                borderRadius: 5,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: 20, textTransform: "uppercase" }}>
                  Oficina Casas Inteligentes
                </Typography>
                <Typography
                  sx={{ fontSize: 16, fontWeight: "light", letterSpacing: 6 }}
                >
                  Campus Vilhena
                </Typography>
              </Box>

              <ImageList
                cols={2}
                rowHeight={"auto"}
                sx={{ width: "100%", height: 450 }}
              >
                {imgDataProject.map((item) => (
                  <ImageListItem
                    key={item.img}
                    sx={{ border: 1, borderColor: "#43A565" }}
                  >
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </section>

          {/* Sessão de laboratórios */}
          <section>
            <Box>
              <Box sx={{ mt: 10 }}>
                <Typography sx={{ fontSize: 36, letterSpacing: 6 }}>
                  Laboratórios
                </Typography>
                <Typography align="justify" sx={{ fontWeight: "", mb: 2 }}>
                  O IFRO conta com 20 laboratórios nas mais diversas áreas:
                  informática, solos, lorem iupsum, lorem iupsum, lorem iupsum,
                  lorem iupsum, solos, lorem iupsum, lorem iupsum, lorem iupsum,
                  lorem iupsum, solos, lorem iupsum, lorem iupsum, lorem iupsum,
                  lorem iupsum,informática, solos, lorem iupsum, lorem iupsum,
                  lorem iupsum, lorem iupsum, solos, lorem iupsum, lorem iupsum,
                  lorem iupsum, lorem iupsum, solos, lorem iupsum, lorem iupsum,
                  lorem iupsum, lorem iupsum,.
                </Typography>
                <Links
                  sx={{
                    mt: 5,
                    p: 1,
                    pr: 3,
                    pl: 3,
                    backgroundColor: "#43A565",
                    color: "#ffff",
                    borderRadius: 1,
                  }}
                  variant="button"
                  underline="none"
                  href={"/laboratorios"}
                >
                  Conhecer Laboratórios
                </Links>
              </Box>

              <Box
                sx={{
                  mt: 10,
                  p: 4,
                  border: 1,
                  borderColor: "#43A565",
                  borderRadius: 5,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 20, textTransform: "uppercase" }}>
                    Laboratório de robótica
                  </Typography>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: "light", letterSpacing: 6 }}
                  >
                    Campus Ji-paraná
                  </Typography>
                </Box>

                <ImageList
                  cols={2}
                  rowHeight={"auto"}
                  sx={{ width: "100%", height: 450 }}
                >
                  {itemDataLaboratories.map((item) => (
                    <ImageListItem
                      key={item.img}
                      sx={{ border: 1, borderColor: "#43A565" }}
                    >
                      <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </Box>
          </section>
        </Container>
      </section>

      <Footer></Footer>
      <Logos></Logos>
    </div>
  );
}

export default Home;
