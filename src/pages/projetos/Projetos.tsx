import { ContactMailOutlined } from "@mui/icons-material";
import Links from "@mui/material/Link";
import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  CardActionArea,
  
} from "@mui/material";
import React from "react";
import Header from "../../shared/components/header/Header";
import Logos from "../../shared/components/footer/Logos";
import "./projetos.css";

const cardProject = [
  {
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    title: "Ensino de robótica",
    campus: "2020 - Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    status: "Concluido",
    id: 1
  },

  {
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    title: "Ensino de robótica",
    campus: "2020 - Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    status: "Concluido",
    id: 2
  },

  {
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    title: "Ensino de robótica",
    campus: "2020 - Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    status: "Concluido",
    id: 3
  },

  {
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    title: "Ensino de robótica",
    campus: "2020 - Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    status: "Concluido",
    id: 4
  },

  {
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    title: "Ensino de robótica",
    campus: "2020 - Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    status: "Concluido",
    id: 15
  },

  {
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80",
    title: "Ensino de robótica",
    campus: "2020 - Campus Vilhena",
    description:
      "risus tristique ornare. In tincidunt purus sit amet nisi porta, et rutrum augue suscipit. Nulla mauris enim, dictum quis nisl et, elementum eleifend urna. Vestibulum mollis, neque vel mollis imperdiet, augue ante posuere metus, non posuere sem diam eu odio. Fusce iaculis vel nisl eget gravida.",
    status: "Concluido",
    id: 16
  },
];

function Projetos() {
  return (
    <div>
      <Header />
      <section>
        <Container>
          <Typography variant="h4" sx={{ mt: 5,  letterSpacing: 15 }}>
            Projetos
          </Typography>
          <header>
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

            <TextField
              sx={{ mt: 5, pr: 15 }}
              id="outlined-password-input"
              label="Ano"
              type="text"
              autoComplete="current-password"
            />

            <FormControl fullWidth sx={{ mt: 5 }}>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"age"}
                label="Status"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ mt: 2 }} className="check-box-flex">
              <Box>
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label="Ensino"
                />
              </Box>

              <FormControlLabel
                control={<Checkbox defaultChecked={false} />}
                label="Inovação tecnológica"
              />

              <FormControlLabel
                control={<Checkbox defaultChecked={false} />}
                label="Extenção"
              />

              <FormControlLabel
                control={<Checkbox defaultChecked={false} />}
                label="Pesquisa"
              />

              <Box sx={{  }}>
                <Button variant="contained" color="primary">
                  Pesquisar
                </Button>
              </Box>
            </Box>
          </header>

          <section>
            <Box className="card-display" sx={{ mt: 5 }}>
              {cardProject.map((item) => (
                <Card sx={{ mb: 5, mr: 2, maxWidth: 350 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.img}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography
                        sx={{ letterSpacing: 3 }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {item.title}
                      </Typography>
                      <Typography gutterBottom variant="h6">
                        {item.campus}
                      </Typography>
                      <Typography
                        sx={{ mt: 1 }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {item.description}
                      </Typography>
                      <Typography sx={{ mt: 2 }} variant="body2">
                        Status: {item.status}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Links
                      sx={{ mt: 2, mb: 2, pl: 5, pr: 5, pb:1, pt: 1, }}
                      variant="button"
                      href={`/projetosDetalis/${item.id}`}
                      className="button-saiba-mais"
                    >
                      Saiba mais
                    </Links>
                  </CardActions>
                </Card>
              ))}
            </Box>
          </section>

          <Box>
            <Button sx={{mr: 2}} variant="contained" color="primary">1</Button>
            <Button sx={{mr: 2}} variant="outlined" color="primary">2</Button>
            <Button sx={{mr: 2}} variant="outlined" color="primary">3</Button>
            <Button sx={{mr: 2}} variant="outlined" color="primary">4</Button>
            
          </Box>
        </Container>
      </section>
      <Logos />
    </div>
  );
}

export default Projetos;
