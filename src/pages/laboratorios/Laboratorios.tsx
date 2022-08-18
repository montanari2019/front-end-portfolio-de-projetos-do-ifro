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
  Button
} from "@mui/material";
import React from "react";
import Header from "../../shared/components/header/Header";
import Logos from "../../shared/components/footer/Logos";

import "./laboratorio.css"

const labData = [
  {
    name: "Laboratório de fábrica de softaware",
    img: "https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    campus: "Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    id: 1,
  },
  
  {
    name: "Laboratório de fábrica de softaware",
    img: "https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
    
    campus: "Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    id: 2,
  },
  {
    name: "Laboratório de física",
    img: "https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    campus: "Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    id: 5,
  },
  {
    name: "Laboratório de solos",
    img: "https://images.unsplash.com/photo-1587437536819-ddfd3c51c698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80",
   
    campus: "Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    id: 3,
  },
  {
    name: "Laboratório de física",
    img: "https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    campus: "Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    id: 4,
  },
];

function Laboratorios() {
  return (
    <div>
      <Header />
      <Container>
        <section>
          <Typography variant="h4" sx={{ mt: 5, letterSpacing: 15 }}>
            Laboratórios do IFRO
          </Typography>
        </section>

        <header>
          <Box sx={{ mt: 5 }} className="pesquisar-display">
            <TextField
              sx={{ mt: 5, pr: 15 }}
              id="outlined-password-input"
              label="Descrição"
              type="text"
              autoComplete="current-password"
            />

            <TextField
              sx={{ mt: 5, pr: 15 }}
              id="outlined-password-input"
              label="Campus"
              type="text"
              autoComplete="current-password"
            />

            <FormControl sx={{ mt: 5, width: "40%" }}>
              <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"age"}
                label="Categoria"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ mt: 5 }}>
                <Button variant="contained" color="primary">
                  Pesquisar
                </Button>
              </Box>
          </Box>
        </header>

        <section>
          <Box sx={{mt:5}} className="card-display-lab">
              {labData.map((item) => (
                 <Card sx={{ mb: 5, mr: 2, maxWidth: 350 }}>
                 <CardActionArea>
                   <CardMedia
                     component="img"
                     height="140"
                     image={item.img}
                   />
                   <CardContent>
                     <Typography
                       sx={{ letterSpacing: 3, textTransform: "capitalize" }}
                       gutterBottom
                       variant="h5"

                       component="div"
                     >
                       {item.name}
                     </Typography>
                     <Typography gutterBottom variant="h6" sx={{textTransform: "capitalize"}}>
                       {item.campus}
                     </Typography>
                     <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
                       {item.description}
                     </Typography>
                   </CardContent>
                 </CardActionArea>
                 <CardActions>
                   <Links
                     sx={{ mt: 2, mb: 2, pl: 5, pr: 5, pb: 1, pt: 1 }}
                     variant="button"
                     href={`/laboratorioDetalis/${item.id}`}
                     className="button-saiba-mais"
                   >
                     Saiba mais
                   </Links>
                 </CardActions>
               </Card>
              ))}
          </Box>

          <Box sx={{mt: 5}}>
          <Button sx={{mr: 2}} variant="contained" color="primary">1</Button>
            <Button sx={{mr: 2}} variant="outlined" color="primary">2</Button>
            <Button sx={{mr: 2}} variant="outlined" color="primary">3</Button>
            <Button sx={{mr: 2}} variant="outlined" color="primary">4</Button>
          </Box>
        </section>
      </Container>
      <Logos />
    </div>
  );
}

export default Laboratorios;
