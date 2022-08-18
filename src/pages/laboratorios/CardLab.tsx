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

function CardLab() {
  return (
    <div>
      <Box>
        <Card sx={{ mb: 5, mr: 2, maxWidth: 350 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                sx={{ letterSpacing: 3 }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Titulo
              </Typography>
              <Typography gutterBottom variant="h6">
                Campus Vilhena
              </Typography>
              <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor
                sit amet, Lorem ipsum dolor sit amet
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Links
              sx={{ mt: 2, mb: 2, pl: 5, pr: 5, pb: 1, pt: 1 }}
              variant="button"
              href={`/laboratorioDetalis/${1}`}
              className="button-saiba-mais"
            >
              Saiba mais
            </Links>
          </CardActions>
        </Card>
      </Box>

      <h1>CardLab</h1>
    </div>
  );
}

export default CardLab;
